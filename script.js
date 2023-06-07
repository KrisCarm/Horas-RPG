function carregar() { 
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
var horaM = data.getMinutes()< 10 ? '0' : '' + data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${horaM} minutos`
 
if (hora > 1 && hora < 5) {
    img.src = 'portal.png';
    window.document.body.background = 'caveiraw.jpg';
} else if (hora >= 6 && hora < 12) {
    img.src = 'manha.png';
    window.document.body.background = 'manhaw.jpeg';
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png';
    window.document.body.background = 'tardew.jpg';
} else {
    img.src = 'noite.png';
    window.document.body.background = 'noitew.jpg';
}
}
setInterval(function() {
    location.reload();
}, 60000)
