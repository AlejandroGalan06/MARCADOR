let local = document.getElementById('marcadorLocal');
let visitante = document.getElementById('marcadorVisitante');
//PUNTOS
let yukoL = document.getElementById('local+1');
let yukoV = document.getElementById('visitante+1');
let wazariL = document.getElementById('local+2');
let wazariV = document.getElementById('visitante+2');
let ipponL = document.getElementById('local+3');
let ipponV = document.getElementById('visitante+3');
//CHUIS
let chui1L = document.getElementById('chuiLocal1');
let chui2L = document.getElementById('chuiLocal2');
let chui3L = document.getElementById('chuiLocal3');
let chui4L = document.getElementById('chuiLocal4');
let chui5L = document.getElementById('chuiLocal5');

let chui1V = document.getElementById('chuiVisitante1');
let chui2V = document.getElementById('chuiVisitante2');
let chui3V = document.getElementById('chuiVisitante3');
let chui4V = document.getElementById('chuiVisitante4');
let chui5V = document.getElementById('chuiVisitante5');

//TEXTO
let textoLocal = document.getElementById('localTexto');
let textoVisitante = document.getElementById('visitanteTexto');


//CONTADORES
let contadorLocal = 0;
let contadorvisitante = 0;
//SUMAR PUNTOS
function masUno(equipo){
    if(equipo === 'local'){
        contadorLocal += 1
        textoLocal.innerHTML =  'AKA<br><br><br>' + contadorLocal;
    }else if (equipo === 'visitante'){
        contadorvisitante += 1
        textoVisitante.innerHTML = 'AO<br><br><br>' + contadorvisitante;
    }
}
function masDos(equipo){
    if(equipo === 'local'){
        contadorLocal += 2
        textoLocal.innerHTML =  'AKA<br><br><br>' + contadorLocal;
    }else if (equipo === 'visitante'){
        contadorvisitante += 2
        textoVisitante.innerHTML = 'AO<br><br><br>' + contadorvisitante;
    }
}
function masTres(equipo){
    if(equipo === 'local'){
        contadorLocal += 3
        textoLocal.innerHTML =  'AKA<br><br><br>' + contadorLocal;
    }else if (equipo === 'visitante'){
        contadorvisitante += 3
        textoVisitante.innerHTML = 'AO<br><br><br>' + contadorvisitante;
    }
}
//AMONESTAR
 let ChuisL = 0;
 let ChuisV = 0;
function amonestar(equipo){
        if (equipo === 'local'){
            ChuisL++;
            console.log(ChuisL);
            if(ChuisL === 1){
                chui1L.style.backgroundColor = 'yellow';
                chui1L.style.color = 'yellow';
            }else if(ChuisL === 2){
                chui2L.style.backgroundColor = 'yellow';
                chui2L.style.color = 'yellow';

            }else if(ChuisL === 3){
                chui3L.style.backgroundColor = 'yellow';
                chui3L.style.color = 'yellow';

            }else if(ChuisL === 4){
                chui4L.style.backgroundColor = 'yellow';
                chui4L.style.color = 'yellow';

            }else if(ChuisL === 5){
                chui5L.style.backgroundColor = 'yellow';
                chui5L.style.color = 'yellow';

            }
        }
        if (equipo === 'visitante'){
            ChuisV++;
            console.log(ChuisV);
            if(ChuisV === 1){
                chui1V.style.backgroundColor = 'yellow';
                chui1V.style.color = 'yellow';
            }else if(ChuisV === 2){
                chui2V.style.backgroundColor = 'yellow';
                chui2V.style.color = 'yellow';

            }else if(ChuisV === 3){
                chui3V.style.backgroundColor = 'yellow';
                chui3V.style.color = 'yellow';

            }else if(ChuisV === 4){
                chui4V.style.backgroundColor = 'yellow';
                chui4V.style.color = 'yellow';

            }else if(ChuisV === 5){
                chui5V.style.backgroundColor = 'yellow';
                chui5V.style.color = 'yellow';

            }
        }
    }