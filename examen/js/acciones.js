

function gatillo(id) {

    let princ = document.getElementsByClassName("detalle principal");
    princ[0].classList.replace("principal", "oculta");
    let mov = document.getElementsByClassName("hexagono movido");
    mov[0].classList.remove("movido");
    switch (id) {
        case "info":
            document.getElementById("hexaInfo").classList.add("movido");
            document.getElementById("divInfo").classList.replace("oculta", "principal");
            break;
        case "habilidad":
            document.getElementById("hexaHabil").classList.add("movido");
            document.getElementById("divHabil").classList.replace("oculta", "principal");
            break;
        case "hobbie":
            document.getElementById("hexaHobbie").classList.add("movido");
            document.getElementById("divHobbie").classList.replace("oculta", "principal");
            break;    
        case "trabajo":
            document.getElementById("hexaTrabajo").classList.add("movido");
            document.getElementById("divTrabajo").classList.replace("oculta", "principal");
            break;    
        case "redes":
            document.getElementById("hexaRedes").classList.add("movido");
            document.getElementById("divRedes").classList.replace("oculta", "principal");
            break;    
        case "contacto":
            document.getElementById("hexaContacto").classList.add("movido");
            document.getElementById("divContacto").classList.replace("oculta", "principal");
            break;
        // default:
        //   break;
    }
}


var info = document.getElementById("info");
var habilidad = document.getElementById("habilidad");
var hobbie = document.getElementById("hobbie");
var trabajo = document.getElementById("trabajo");
var redes = document.getElementById("redes");
var contacto = document.getElementById("contacto");

info.addEventListener('click', function () {
    gatillo(info.id);
})

habilidad.addEventListener('click', function () {
    gatillo(habilidad.id);
})

hobbie.addEventListener('click', function () {
    gatillo(hobbie.id);
})

trabajo.addEventListener('click', function () {
    gatillo(trabajo.id);
})

redes.addEventListener('click', function () {
    gatillo(redes.id);
})

contacto.addEventListener('click', function () {
    gatillo(contacto.id);
})
