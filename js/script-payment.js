$("input[name='expiry-data']").mask("00 / 00");

function fun() {
  swal(
    "Pembayaran Anda Sukses",
    "Sekarang kamu dapat menggunakan paket pembelajaran ini!",
    "success"
  );
  setTimeout(function () {
    window.location.href = "learning.html";
  }, 3000);
}
