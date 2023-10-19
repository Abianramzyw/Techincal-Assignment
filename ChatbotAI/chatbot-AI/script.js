const kembali = document.getElementById("icon-back");

kembali.addEventListener("click", function() {
    kembali.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        kembali.style.transform = "scale(1)";
    }, 300); 
});


const kirim = document.getElementById("icon-send");

kirim.addEventListener("click", function() {
    kirim.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        kirim.style.transform = "scale(1)";
    }, 300); 
});