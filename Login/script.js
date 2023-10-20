const loginButton = document.getElementById("button-login");
const daftarButton = document.getElementById("button-daftar");
const roomLogin = document.querySelector(".room-login");
const roomDaftar = document.querySelector(".room-daftar");
const nextDaftarButton = document.getElementById("next-daftar");
const nextLoginButton = document.getElementById("next-login");
const menuButtons = document.querySelectorAll(".menu-signin-signup");

const notifikasi = document.getElementById("notifikasi");

loginButton.addEventListener("click", function () {
  roomLogin.style.display = "block";
  roomDaftar.style.display = "none";
  loginButton.classList.add("active");
  daftarButton.classList.remove("active");
});

daftarButton.addEventListener("click", function () {
  roomLogin.style.display = "none";
  roomDaftar.style.display = "block";
  loginButton.classList.remove("active");
  daftarButton.classList.add("active");
  nextDaftarButton.style.display = "block";
});

loginButton.addEventListener("click", function () {
  loginButton.style.backgroundColor = "#89939E";
  daftarButton.style.backgroundColor = "#07689F";
});

daftarButton.addEventListener("click", function () {
  loginButton.style.backgroundColor = "#07689F";
  daftarButton.style.backgroundColor = "#89939E";
});

nextDaftarButton.addEventListener("click", function () {
  nextDaftarButton.style.transform = "scale(0.9)";
  setTimeout(function () {
    nextDaftarButton.style.transform = "scale(1)";
  }, 1000);
});

nextLoginButton.addEventListener("click", function () {
  nextLoginButton.style.transform = "scale(0.9)";
  setTimeout(function () {
    nextLoginButton.style.transform = "scale(1)";
  }, 1000);
});

nextDaftarButton.addEventListener("click", function () {
  const namaLengkap = document.getElementById("nama-lengkap").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  const asalSekolah = document.getElementById("asal-sekolah").value;
  const gmail = document.getElementById("gmail-daftar").value;
  const noHp = document.getElementById("no-hp").value;
  const pass = document.getElementById("pass-daftar").value;
  const ulangipass = document.getElementById("ulangipass").value;

  notifikasi.style.display = "block";
  notifikasi.textContent = "...";

  const profilData = {
    namaLengkap,
    pekerjaan,
    asalSekolah,
    gmail,
    noHp,
    pass,
    ulangipass,
  };

  const apiEndpoint = "https://652d0acbf9afa8ef4b26af21.mockapi.io/user";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profilData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Gagal");
      }
    })
    .then((data) => {
      notifikasi.textContent = "Berhasil Terdaftar";
      setTimeout(function () {
        notifikasi.style.display = "none";
      }, 1000);
      console.log(data);
    })
    .catch((error) => {
      notifikasi.textContent = "Gagal";
      setTimeout(function () {
        notifikasi.style.display = "none";
      }, 1000);
    });
});

function loginAkun() {
  const gmail = document.getElementById("gmail").value;
  const pass = document.getElementById("pass").value;

  const apiEndpoint = "https://652d0acbf9afa8ef4b26af21.mockapi.io/user";
  fetch(apiEndpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Gagal");
      }
    })
    .then((data) => {
      const user = data.find(
        (user) => user.gmail === gmail && user.pass === pass
      );
      if (user) {
        notifikasi.style.display = "block";
        notifikasi.textContent = "Berhasil Login";
      } else {
        notifikasi.style.display = "block";
        notifikasi.textContent = "Gagal Login";
      }
      setTimeout(function () {
        notifikasi.style.display = "none";
      }, 1000);
      setTimeout(function () {
        window.location.href = "learning.html";
      }, 3000);
    })
    .catch((error) => {
      notifikasi.style.display = "block";
      notifikasi.textContent = "Gagal Login";
      setTimeout(function () {
        notifikasi.style.display = "none";
      }, 1000);
    });
}
