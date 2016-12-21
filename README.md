# JavaScript
Una nueva misión del Capitán JavaScript

Versión v1 del juego "Lunar Landing"

El juego incluye:

HTML, CSS y JS de las versiones escritorio y mobile
Todas las IMG correspondientes
La correcta estructura de carpetas
Código validado, indentado y miminizado
Imágenes optimizadas

Estructura:
Consta de dos páginas: main (principal) e index.
Main es la página de introducción y contiene el menú que da acceso directo a las opciones de "Instrucciones" (Rules)
y "Acerca de" (About).
Index es la página del juego a la que se accede también desde el menú de main.html
Una vez en ella es posible reiniciar el juego con una opción mínima de "Again" o volver al menú con la opción "Back"

Objetivo: 
Alunizar correctamente con una velocidad no superior a 2 m/s y antes de agotar el fuel disponible.
Los controles del panel izquierdo indican en todo momento la velocidad de la nave, su altura, fuel disponible, tiempo transcurrido
desde el lanzamiento y la altura máxima conseguida durante la maniobra.
Además, al final del trayecto se ofrece una puntuación para valorar la maniobra. Esta puntuación es 0 si el cohete explota.
El cohete explota sólo si la velocidad de impacto supera los 2 m/s, circunstancia que puede suceder bien por un deficiente control
de la nave (velocidad de alunizaje excesiva) o bien porque ésta se precipita contra el suelo si se queda sin combustible.

Controles:
El capitán JS nos da la bienvenida, para activar el juego hay que vestirle de color
Desde el menú, la opción "Play" inicia el juego inmediatamente.
Desde la pantalla del juego, la opción "Again" es la única que reinicia el juego
Durante el juego, en el modo normal, cualquier tecla sirve para encender los motores, lo cual consume fuel.
Se recomienda utilizar la barra de espaciado o las teclas KeyUp o KeyDn, aunque todas hacen lo mismo.
Para mantener los motores encendidos es preciso manetner pulsadas las teclas, si se suelta la tecla el motor se apaga.

Existe un modo de funcionamiento "vago" (en realidad es un modo de entrenamiento) que consiste en utilizar el ratón
en vez de las teclas. En este caso no hace falta mantener pulsado el ratón. Funciona como un toggle y una pulsación
enciende (y deja encendidos) los motores, la siguiente pulsación los apaga. Este modo de control es más sencillo y las
maniobras son más fáciles (en una futura ampliación está previsto eliminar este modo).
Hay que notar que en este modo es posible enviar el cohete al infinito (cosa que en modo normal no es posible porque
al agotarse el fuel el cohete empieza a caer) puesto que partiendo de una trayectoria de subida, aunque el fuel
se agote y los motores se apaguen (que en efecto se apagan) el cohete seguiría subiendo hasta que no se haga
clic de nuevo con el ratón. Esto no es un problema ni un bug, es intencionado por diseño puesto que se trata de aprender
cómo operar con el juego y concienciar al jugador de que una maniobra mal efectuada puede tener consecuencias fatales.
Si bien es posible enviar el cohete hasta el infinito no es posible hacerlo volver sino estrellándolo contra el suelo.

Está previsto (y en parte codificado) eliminar este modo en el futuro y que el mouse opere exactamente igual que las teclas
(ver "Ampliaciones futuras", más abajo).

Detalles de funcionamiento:
Si nos quedamos sin fuel, el motor se apaga y empezamos a caer desde la posición en que nos encontremos
Los contadores (velocidad, altura, fuel, tiempo) se detienen al tocar la luna. Esto arroja una puntuación en cuanto se
valida el mensaje de felicitación
El indicador de máxima altura registra el valor del punto más alto alcanzado durante al trayectoria

Para más detalles sobre las normas de funcionamiento del juego referirse a la sección "Rules" del propio menú.

Retos:
1) alunizar con éxito en el menor tiempo posible
2) alunizar con éxito usando la menor cantidad de combustible
2) alunizar con éxito habiendo alcanzado la mayor altura posible durante la maniobra
2) alunizar con éxito con la menor velocidad de impacto posible (siempre < 2m/s)
2) alunizar con éxito consiguiendo la mayor puntuación posible

Se adjuntan en la documentación pantallazos de algunos de los récords conseguidos en cada modalidad.
Se anima a que se intenten superar dichos récords, si se puede. Todos los records conseguidos han sido
utilizando las teclas, el ratón se considera sólo modo entrenamiento

Ampliaciones futuras:
Eliminar el modo de entrenamiento o permitir que se seleccione si se desea modo entrenamiento/normal
(nota: el código para parte de esto está desarrollado y comentado (commented out) y en esencia consiste
en cambiar el evento onclick por eventos onmousedown y onmouseup.
Control independiente de los motores derecho e izquierdo con flecha dcha e izquierda respectivamente. Esto permitirá girar y 
movimiento horizontal
Dos modos de potencia de motor: normal y turbo. Turbo implica velocidad pero también mayor consumo
Parámetros ajustables de fuel, velocidad crítica, punto de partida y punto de llegada
Parámetro ajustable de unidad de tiempo

