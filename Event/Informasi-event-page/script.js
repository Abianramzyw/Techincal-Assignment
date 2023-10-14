const kembali = document.getElementById("icon-back");
const selengkapnya = document.getElementById("informasi-event-button");

kembali.addEventListener("click", function() {
    kembali.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        kembali.style.transform = "scale(1)";
    }, 300); 
});


selengkapnya.addEventListener("click", function() {
    selengkapnya.style.transform = "scale(0.9)"; 
    setTimeout(() => {
        selengkapnya.style.transform = "scale(1)";
    }, 300); 
});


