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



function sertifikasi1() {
    fetch("https://652d0acbf9afa8ef4b26af21.mockapi.io/event/1")
      .then((response) => response.json())
      .then((data) => {
        const desSertifikasi1 = data.desSertifikasi1; 
        const tempatDes = document.getElementById("desSertifikasi1");
        tempatDes.innerHTML = desSertifikasi1;
      })
  }
  sertifikasi1();
  
  

