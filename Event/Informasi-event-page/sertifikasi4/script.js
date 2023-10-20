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



function sertifikasi4() {
    fetch("https://652d0acbf9afa8ef4b26af21.mockapi.io/event/4")
      .then((response) => response.json())
      .then((data) => {
        const desSertifikasi4 = data.desSertifikasi4; 
        const tempatDes = document.getElementById("desSertifikasi4");
        tempatDes.innerHTML = desSertifikasi4;
      })
  }
  sertifikasi4();
  
  

