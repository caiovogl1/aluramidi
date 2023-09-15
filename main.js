// Pom ----------------------------------------
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    let som = "#som_" + listaDeTeclas[i].classList[1];

    listaDeTeclas[i].onclick = function(){
        tocaSom(som);    
    }
}
