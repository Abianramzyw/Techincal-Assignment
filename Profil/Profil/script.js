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


const editButton = document.getElementById("button-edit");
const notifikasi = document.getElementById("notifikasi");
let namaLengkap = document.getElementById("nama-lengkap");
let pekerjaan = document.getElementById("pekerjaan");
let asalSekolah = document.getElementById("asal-sekolah");
let gmail = document.getElementById("gmail");
let noHp = document.getElementById("no-hp");
let pass = document.getElementById("pass");


editButton.addEventListener("click", function () {
  notifikasi.style.display = "block";
  notifikasi.textContent = "Data berhasil diubah!";
  editButton.style.transform = "scale(0.9)"; 
  setTimeout(function () {
    notifikasi.style.display = "none";
    editButton.style.transform = "scale(1)"; 
  }, 1000);
});





