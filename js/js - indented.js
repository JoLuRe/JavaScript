// VARIABLES GENERALES
var prec = 2;         // precision decimal
var fuel_max = 100;   // capacidad maxima del tanque de combustible
var fuel = fuel_max;  // nivel inicial del tanque lleno de combustible
var landed = false;   // indicador de aterrizaje
var crashed = false;  // indicador de colisión
var score = 0;        // puntuacion

// VARIABLES TEMPORALES
var t = 0;            // inicio de tiempo
var dt = 0.016683;    // diferencial de tiempo
var timer = null;     // temporizador del movimiento de la nave
var timerFuel = null; // temporizador del indicador de consumo combustible

// VARIABLES ESPACIALES
var h = 70.215652745797229;        // altura de la posicion inicial respecto a superficie lunar
h = h.toFixed(prec);  // dato de altura corregido a precision decimal
var y = 10;           // top inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var z = 0;                  // altura mostrada en pantalla
var zmax = h - y;               // altura maxima conseguida
zmax = zmax.toFixed(prec);  // dato de altura maxima corregido a precision decimal

// VARIABLES de MOVIMIENTO
var v = 0;            // velocidad inicial
var g = 1.622;        // gravedad lunar
var a = g;            // aceleracion en sentido de la gravedad
var vc = 2;           // velocidad critica de alunizaje

//al cargar por completo la página...
window.onload = function () {
//definición de eventos
//mostrar menú móvil
document.getElementById("showm").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "block";
        stop();
    }
//ocultar menú móvil
document.getElementById("hidem").onclick = function () {
document.getElementsByClassName("c")[0].style.display = "none";
start ();
}
//encender/apagar el motor al hacer click en la pantalla -- modo entrenamiento
document.onclick = function () {
if (a==g){
motorOn ();
} else {
motorOff ();
}
}
//encender/apagar al apretar/soltar una tecla
document.onkeydown = motorOn;
document.onkeyup = motorOff;
    /*
    //encender/apagar al mantener presionado/soltar el ratón -- modo normal igual al modo tecla
    document.onmousedown = motorOn;
    document.onmouseup = motorOff;
    */
    // control de teclas Up, Dn, Rght, Left
    /*    document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
        }
        };	
        document.onkeydown = checkKey;
        */

    //Empezar a mover nave
start () ;
}

//Definición de funciones
/*
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == 38) {
        // up arrow
        motorOn;
        break;
    }
    else if (e.keyCode == 40) {
        // down arrow
        motorOff;
        break;
    }
    else if (e.keyCode == 37) {
       // left arrow
       break;
    }
    else if (e.keyCode == 39) {
       // right arrow
       break;
    }

}
*/
function start () {
	timer = setInterval(function(){ moverNave(); }, dt*1000);
}

function stop () {
// reset the timer for craft move --> no more moves!!
clearInterval(timer);
// reset the timer for fuel update --> no more fuel updates!!
clearInterval(timerFuel);
// stop the time loader --> no more spinning!!
//document.getElementById("loader").style.border="10px solid #000";
document.getElementById("loader").style.animation="spin 1s linear 0";
//document.getElementById("loader").style.-webkit-animation="spin 1s linear 0";
// if moon-landing was successful, congratulate
if (v <= vc) {
score = (100/t)+(10*fuel)+(zmax-60);
document.getElementById("puntuacion").innerHTML = score.toFixed(0);  
document.getElementById("spaceship").src = "img/rocket-off.png";
landed = true;
window.alert("Congratulations!! You just guided your crew gently onto the Moon!!");
}
else 
{
// else, eject crew and explode the rocket
/*   window.alert("As a pilot you are a total failure. Rocket about to explode. Activating auto ejection")
document.getElementById("spaceship").src = "img/rocket-exploded.png";  */
crashed = true; 
document.getElementById("spaceship").src = "img/explosion.png";
document.body.style.backgroundImage = 'url("img/eject_crew.gif")';
/*    document.body.style.backgroundSize =     
document.body.style.backgroundRepeatX; */
}
}

function moverNave(){
	t += dt;
	document.getElementById("tiempo").innerHTML = t.toFixed(prec);
    v += a*dt;
	document.getElementById("velocidad").innerHTML = v.toFixed(prec);
    document.getElementById("velocidadmeter").value = v;
	y += v*dt;
//    z -=y;
    z = h - y;
	document.getElementById("altura").innerHTML = z.toFixed(prec);
	document.getElementById("alturameter").value = z;
    if (z > zmax) {
        zmax = z;
	   document.getElementById("maxaltura").innerHTML=zmax.toFixed(prec);
        }
	//mover hasta que top sea un 70% de la pantalla
    //	if (z > 0){ 
	if (y < 70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
	}
}
function motorOn () {
	if (fuel > 0) {
        if (landed == false) {
            if (crashed == false) {
        a = -g;
	   document.getElementById("spaceship").src = "img/rocket-on.png";
       if (timerFuel==null)
	   timerFuel = setInterval(function(){ actualizarFuel(); }, 100);	
                                    }
                            }
                    }
        }
function motorOff () {
	if (landed == false) {
            if (crashed == false) {a = g;
	document.getElementById("spaceship").src = "img/rocket-off.png";
    clearInterval(timerFuel);
	timerFuel = null;
                                }
              }
  }
function actualizarFuel () {
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if (fuel > 0) fuel-=1;
	document.getElementById("fuel").innerHTML = fuel.toFixed(prec);	
    document.getElementById("fuelmeter").value = fuel;	
    if (fuel <= 0) {document.getElementById("spaceship").src = "img/rocket-off.png";}
}
