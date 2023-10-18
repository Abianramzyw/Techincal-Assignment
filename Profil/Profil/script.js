const kembali = document.getElementById("icon-back");

kembali.addEventListener("click", function() {
    kembali.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        kembali.style.transform = "scale(1)";
    }, 300); 
});

const logout = document.getElementById("button-logout");

logout.addEventListener("click", function () {
  logout.style.transform = "scale(0.9)"; 
  setTimeout(function () {
    logout.style.transform = "scale(1)";
  }, 1000);

});


// const editButton = document.getElementById("button-edit");
// const notifikasi = document.getElementById("notifikasi");

// editButton.addEventListener("click", function () {
//   const namaLengkap = document.getElementById("nama-lengkap").value;
//   const pekerjaan = document.getElementById("pekerjaan").value;
//   const asalSekolah = document.getElementById("asal-sekolah").value;
//   const gmail = document.getElementById("gmail").value;
//   const noHp = document.getElementById("no-hp").value;
//   const pass = document.getElementById("pass").value;

//   notifikasi.style.display = "block";
//   notifikasi.textContent = "Sedang mengirim data...";

//   const profilData = {
//     namaLengkap,
//     pekerjaan,
//     asalSekolah,
//     gmail,
//     noHp,
//     pass,
//   };

//   const apiEndpoint = "https://652d0acbf9afa8ef4b26af21.mockapi.io/dataprofil";
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(profilData),
//   };

//   fetch(apiEndpoint, requestOptions)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         notifikasi.textContent = "gagal";
//         setTimeout(function () {
//           notifikasi.style.display = "none";
//         }, 1000);
//         console.log(data);
//       }
//     })
//     .then((data) => {
//       if (data) {
//         notifikasi.textContent = "Berhasil diubah";
//         setTimeout(function () {
//           notifikasi.style.display = "none";
//         }, 1000);
//         console.log(data);
//       }
//     });
// });


// Fungsi untuk mengaktifkan mode pengeditan
// function editProfile() {
//   document.getElementById("nama-lengkap").removeAttribute("disabled");
//   document.getElementById("pekerjaan").removeAttribute("disabled");
//   document.getElementById("asal-sekolah").removeAttribute("disabled");
//   document.getElementById("gmail").removeAttribute("disabled");
//   document.getElementById("no-hp").removeAttribute("disabled");
//   document.getElementById("pass").removeAttribute("disabled");

//   document.getElementById("button-edit").style.display = "none";
//   document.getElementById("button-submit").style.display = "block";
// }

// // Fungsi untuk mengirim data dan menonaktifkan mode pengeditan
// function submitProfile() {
//   const id = 1; // Ganti dengan ID profil yang sesuai
//   const namaLengkap = document.getElementById("nama-lengkap").value;
//   const pekerjaan = document.getElementById("pekerjaan").value;
//   const asalSekolah = document.getElementById("asal-sekolah").value;
//   const gmail = document.getElementById("gmail").value;
//   const noHp = document.getElementById("no-hp").value;
//   const pass = document.getElementById("pass").value;

//   // Buat objek profilData
//   const profilData = {
//     namaLengkap,
//     pekerjaan,
//     asalSekolah,
//     gmail,
//     noHp,
//     pass,
//   };

//   // Kirim data ke server dengan metode PUT
//   const apiEndpoint = "https://652d0acbf9afa8ef4b26af21.mockapi.io/dataprofil";// Ganti dengan URL endpoint yang sesuai
//   const requestOptions = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(profilData),
//   };

//   document.getElementById("notifikasi").style.display = "block";
//   document.getElementById("notifikasi").textContent = "Sedang mengirim data...";

//   fetch(apiEndpoint, requestOptions)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         document.getElementById("notifikasi").textContent = "Gagal mengirim data.";
//         setTimeout(function () {
//           document.getElementById("notifikasi").style.display = "none";
//         }, 1000);
//         console.error("Gagal:", response);
//       }
//     })
//     .then((data) => {
//       if (data) {
//         document.getElementById("notifikasi").textContent = "Data berhasil diubah.";
//         setTimeout(function () {
//           document.getElementById("notifikasi").style.display = "none";
//         }, 1000);
//         console.log("Berhasil:", data);

//         // Menonaktifkan mode pengeditan
//         document.getElementById("nama-lengkap").setAttribute("disabled", "disabled");
//         document.getElementById("pekerjaan").setAttribute("disabled", "disabled");
//         document.getElementById("asal-sekolah").setAttribute("disabled", "disabled");
//         document.getElementById("gmail").setAttribute("disabled", "disabled");
//         document.getElementById("no-hp").setAttribute("disabled", "disabled");
//         document.getElementById("pass").setAttribute("disabled", "disabled");

//         document.getElementById("button-submit").style.display = "none";
//         document.getElementById("button-edit").style.display = "block";
//       }
//     });
// }

// // Event listener untuk tombol "Edit"
// document.getElementById("button-edit").addEventListener("click", editProfile);

// // Event listener untuk tombol "Submit"
// document.getElementById("button-submit").addEventListener("click", submitProfile);


function editProfile() {
  const inputFields = document.getElementsByClassName("edit-field");
  for (let field of inputFields) {
    field.removeAttribute("disabled");
  }

  document.getElementById("button-edit").style.display = "none";
  document.getElementById("button-submit").style.display = "block";
}

function submitProfile() {
  const inputFields = document.getElementsByClassName("edit-field");
  const id = 1; 

  const profilData = {};
  for (let field of inputFields) {
    const fieldName = field.id;
    const fieldValue = field.value;
    profilData[fieldName] = fieldValue;
  }


  const apiEndpoint = "https://652d0acbf9afa8ef4b26af21.mockapi.io/dataprofil";
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profilData),
  };

  document.getElementById("notifikasi").style.display = "block";
  document.getElementById("notifikasi").textContent = "Sedang mengirim data...";

  fetch(apiEndpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        document.getElementById("notifikasi").textContent = "Gagal mengirim data.";
        setTimeout(function () {
          document.getElementById("notifikasi").style.display = "none";
        }, 1000);
        console.error("Gagal:", response);
      }
    })
    .then((data) => {
      if (data) {
        document.getElementById("notifikasi").textContent = "Data berhasil diubah.";
        setTimeout(function () {
          document.getElementById("notifikasi").style.display = "none";
        }, 1000);
        console.log("Berhasil:", data);

        for (let field of inputFields) {
          field.setAttribute("disabled", "disabled");
        }

        document.getElementById("button-submit").style.display = "none";
        document.getElementById("button-edit").style.display = "block";
      }
    });
}

document.getElementById("button-edit").addEventListener("click", editProfile);

document.getElementById("button-submit").addEventListener("click", submitProfile);
