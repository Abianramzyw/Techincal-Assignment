const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

      const editButton = document.getElementById("button-edit");
const notifikasi = document.getElementById("notifikasi");

editButton.addEventListener("click", function () {
  const namaLengkap = document.getElementById("nama-lengkap").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  const asalSekolah = document.getElementById("asal-sekolah").value;
  const gmail = document.getElementById("gmail").value;
  const noHp = document.getElementById("no-hp").value;
  const pass = document.getElementById("pass").value;

  notifikasi.style.display = "block";
  notifikasi.textContent = "Sedang mengirim data...";

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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profilData),
  };

  fetch(apiEndpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        notifikasi.textContent = "gagal";
        setTimeout(function () {
          notifikasi.style.display = "none";
        }, 1000);
        console.log(data);
      }
    })
    .then((data) => {
      if (data) {
        notifikasi.textContent = "Berhasil diubah";
        setTimeout(function () {
          notifikasi.style.display = "none";
        }, 1000);
        console.log(data);
      }
    });
});

