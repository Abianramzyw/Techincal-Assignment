const url = new URLSearchParams(window.location.search);
const idUrl = url.get("id");

console.log(url);
console.log(idUrl);

const containerEvent = document.getElementById("container-event");

console.log(containerEvent);

fetch("https://652d0acbf9afa8ef4b26af21.mockapi.io/event/" + idUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    containerEvent.innerHTML = `
  <img src="foto/sertifikasi${data.id}.png" alt="sertifikasi${data.id}" id="sertifikasi${data.id}"/>
        <p>${data.desSertifikasi} 
        </p>
        <a href="https://www.loket.com/event/kelas-malam-digital-marketing-pelatihan-sertifikasi-profesi-durd">
          <button type="button" id="informasi-event-button">Selengkapnya</button></a>
  `;
  });

// const kembali = document.getElementById("icon-back");
// const selengkapnya = document.getElementById("informasi-event-button");

// kembali.addEventListener("click", function() {
//     kembali.style.transform = "scale(0.9)";
//     setTimeout(() => {
//         kembali.style.transform = "scale(1)";
//     }, 300);
// });

// selengkapnya.addEventListener("click", function() {
//     selengkapnya.style.transform = "scale(0.9)";
//     setTimeout(() => {
//         selengkapnya.style.transform = "scale(1)";
//     }, 300);
// });
