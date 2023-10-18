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
  const formElements = {
    namaLengkap: document.getElementById("nama-lengkap"),
    pekerjaan: document.getElementById("pekerjaan"),
    asalSekolah: document.getElementById("asal-sekolah"),
    gmail: document.getElementById("gmail"),
    noHp: document.getElementById("no-hp"),
    pass: document.getElementById("pass"),
  };

  const apiBaseUrl = "https://652d0acbf9afa8ef4b26af21.mockapi.io/dataprofil";
  const dataId = 1;
  const apiEndpoint = `${apiBaseUrl}/${dataId}`;

  editButton.addEventListener("click", editProfile);
  submitButton.addEventListener("click", submitProfile);

  function fetchDataAndPopulateForm() {
    fetch(apiEndpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          notifikasi.textContent = "Gagal mengambil data.";
          setTimeout(() => {
            notifikasi.style.display = "none";
          }, 1000);
            console.error("Gagal:", response);
          }
        })
      .then((data) => {
        if (data) {
          formElements.namaLengkap.value = data.namaLengkap;
          formElements.pekerjaan.value = data.pekerjaan;
          formElements.asalSekolah.value = data.asalSekolah;
          formElements.gmail.value = data.gmail;
          formElements.noHp.value = data.noHp;
          formElements.pass.value = data.pass;
        }
      });
  }

  function editProfile() {
    fetchDataAndPopulateForm();

    for (const field in formElements) {
      formElements[field].removeAttribute("disabled");
    }

    editButton.style.display = "none";
    submitButton.style.display = "block";
  }

  function submitProfile() {
    const profilData = {
      namaLengkap: formElements.namaLengkap.value,
      pekerjaan: formElements.pekerjaan.value,
      asalSekolah: formElements.asalSekolah.value,
      gmail: formElements.gmail.value,
      noHp: formElements.noHp.value,
      pass: formElements.pass.value,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profilData),
    };

    notifikasi.style.display = "block";
    notifikasi.textContent = "Sedang mengirim data...";

    fetch(apiEndpoint, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          notifikasi.textContent = "Gagal mengirim data.";
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

          for (const field in formElements) {
            formElements[field].setAttribute("disabled", "disabled");
          }

          submitButton.style.display = "none";
          editButton.style.display = "block";
        }
      });
  }
    fetchDataAndPopulateForm();

