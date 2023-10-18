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

function editProfile() {
  document.getElementById("nama-lengkap").removeAttribute("disabled");
  document.getElementById("pekerjaan").removeAttribute("disabled");
  document.getElementById("asal-sekolah").removeAttribute("disabled");
  document.getElementById("gmail").removeAttribute("disabled");
  document.getElementById("no-hp").removeAttribute("disabled");
  document.getElementById("pass").removeAttribute("disabled");

  document.getElementById("button-edit").style.display = "none";
  document.getElementById("button-submit").style.display = "block";
}

function submitProfile() {
  const id = 1; 
  const namaLengkap = document.getElementById("nama-lengkap").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  const asalSekolah = document.getElementById("asal-sekolah").value;
  const gmail = document.getElementById("gmail").value;
  const noHp = document.getElementById("no-hp").value;
  const pass = document.getElementById("pass").value;

  const profilData = {
    namaLengkap,
    pekerjaan,
    asalSekolah,
    gmail,
    noHp,
    pass,
  };

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

        document.getElementById("nama-lengkap").setAttribute("disabled", "disabled");
        document.getElementById("pekerjaan").setAttribute("disabled", "disabled");
        document.getElementById("asal-sekolah").setAttribute("disabled", "disabled");
        document.getElementById("gmail").setAttribute("disabled", "disabled");
        document.getElementById("no-hp").setAttribute("disabled", "disabled");
        document.getElementById("pass").setAttribute("disabled", "disabled");

        document.getElementById("button-submit").style.display = "none";
        document.getElementById("button-edit").style.display = "block";
      }
    });
}

