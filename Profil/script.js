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


feather.replace();
  const editButton = document.getElementById("button-edit");
  const submitButton = document.getElementById("button-submit");
  const notifikasi = document.getElementById("notifikasi");
  const dataUser = {
    namaLengkap: document.getElementById("nama-lengkap"),
    pekerjaan: document.getElementById("pekerjaan"),
    asalSekolah: document.getElementById("asal-sekolah"),
    gmail: document.getElementById("gmail"),
    noHp: document.getElementById("no-hp"),
    pass: document.getElementById("pass"),
  };

  const linkMockApi = "https://652d0acbf9afa8ef4b26af21.mockapi.io/dataprofil";
  const idUser = 1;
  const apiEndpoint = `${linkMockApi}/${idUser}`;

  editButton.addEventListener("click", editProfil);
  submitButton.addEventListener("click", submitProfil);

  function ambilData() {
    fetch(apiEndpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          notifikasi.textContent = "Gagal";
          setTimeout(() => {
            notifikasi.style.display = "none";
          }, 1000);
            console.error("Gagal:", response);
          }
        })
      .then((data) => {
        if (data) {
          dataUser.namaLengkap.value = data.namaLengkap;
          dataUser.pekerjaan.value = data.pekerjaan;
          dataUser.asalSekolah.value = data.asalSekolah;
          dataUser.gmail.value = data.gmail;
          dataUser.noHp.value = data.noHp;
          dataUser.pass.value = data.pass;
        }
      });
  }

  function editProfil() {
    ambilData();

    for (const field in dataUser) {
      dataUser[field].removeAttribute("disabled");
    }

    editButton.style.display = "none";
    submitButton.style.display = "block";
  }

  function submitProfil() {
    const profilData = {
      namaLengkap: dataUser.namaLengkap.value,
      pekerjaan: dataUser.pekerjaan.value,
      asalSekolah: dataUser.asalSekolah.value,
      gmail: dataUser.gmail.value,
      noHp: dataUser.noHp.value,
      pass: dataUser.pass.value,
    };

    const ubahData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profilData),
    };

    notifikasi.style.display = "block";
    notifikasi.textContent = "Sedang diproses..";

    fetch(apiEndpoint, ubahData)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          notifikasi.textContent = "Gagal.";
          setTimeout(() => {
            notifikasi.style.display = "none";
          }, 1000);
            console.error("Gagal:", response);
        }
    })
      .then((data) => {
        if (data) {
          notifikasi.textContent = "Data berhasil diubah.";
          setTimeout(() => {
            notifikasi.style.display = "none";
          }, 1000);
          console.log("Berhasil:", data);

          for (const field in dataUser) {
            dataUser[field].setAttribute("disabled", "disabled");
          }

          submitButton.style.display = "none";
          editButton.style.display = "block";
        }
      });
  }
    ambilData();

