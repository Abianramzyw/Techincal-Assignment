
const containerSertifikasi = document.getElementById('container-sertifikasi')

fetch('https://652d0acbf9afa8ef4b26af21.mockapi.io/event')
.then((response) => {
  return response.json()
})
.then((data) => {

  data.forEach(sertifikasi => {
    containerSertifikasi.innerHTML += `<a href="../Informasi-event-page/?id=${sertifikasi.id}"><img src="${sertifikasi.img}" alt="sertifikasi${sertifikasi.id}" id=${sertifikasi.id}/></a>`
  })
  
})






