// Pom ----------------------------------------
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    let som = "#som_" + listaDeTeclas[i].classList[1];

    listaDeTeclas[i].onclick = function() {
        tocaSom(som);    
    }

    listaDeTeclas[i].onkeydown = function(evento) {
        if(evento.code === "Space" || evento.code === "Enter"){
            listaDeTeclas[i].classList.add("ativa");
        }
    }

    listaDeTeclas[i].onkeyup = function(evento) {
        if(evento.code === "Space" || evento.code === "Enter"){
            listaDeTeclas[i].classList.remove("ativa");
        }
    }
}
