/*function actualizarParrafo(){
    document.getElementById('parrafo').innerText = 'Hola, desde JavaScript'
}

function actualizarHtml(){
    document.getElementById('html').innerHTML = '<button>Hola, Mundo</button>'
}


function actualizarCuadroAVerde(){
    document.getElementById('cuadro').classList.remove('cuadro');
    document.getElementById('cuadro').classList.add('cuadro-verde');
}
function actualizarCuadroARojo(){
    document.getElementById('cuadro').classList.add('cuadro');
    document.getElementById('cuadro').classList.remove('cuadro-verde');
}

function actualizarARed(){
    document.getElementById('cuadro').classList.remove('cuadro-green');
    document.getElementById('cuadro').classList.add('cuadro-red');
    document.getElementById('rojo').classList.add('display-none');
    document.getElementById('verde').classList.remove('display-none');
    
}
function actualizarAVerde(){
    document.getElementById('cuadro').classList.remove('cuadro-red');
    document.getElementById('cuadro').classList.add('cuadro-green');
    document.getElementById('verde').classList.add('display-none');
    document.getElementById('rojo').classList.remove('display-none');
    
}*/


/**Imagen  */
function cambiarimg1(){
    document.getElementById('img1').classList.add('display-none');
    document.getElementById('img2').classList.remove('display-none');
}

function cambiarimg2(){
    document.getElementById('img2').classList.add('display-none');
    document.getElementById('img1').classList.remove('display-none');
}