INICI
_____
La nau comença en un punt de l'espai, amb motor parat i dipòsit ple.

Això vol dir que:
Altura (t=0) = Altura_inicial
Fuel (t=0) = Dipòsit_ple
Velocitat (t=0) = 0
Motor (t=0) = off
a = g

Si no fem res, la nau va caient per pes, sense consumir fuel però accelerant cada cop més.
A mida que cau:

Velocitat -> augmenta (valor positiu, es considera que la velocitat positiva ens acosta al punt d'aterratge)
Fuel -> no varia
Altura -> decreix perillosament (perquè com menys altura queda més a prop som de colisionar si anem massa ràpids)

Un aterratge exitós requereix tocar la superfície lunar amb una velocitat inferior a la velocitat_crítica.
Si s'aterra massa ràpid la nau es destrueix
A més, si portem molt fuel remanent, xocar podria provocar explosionar.
L'òptim és aterrar a poc a poc i quasi sense combustible sobrant.
A més, tot això hi ha que fer-ho amb el fuel existent, un cop s'acaba, s'ha acabat

Per tant, la maniobra consisteix en anar jugant amb el motor (engegant-lo) per d'aquesta manera evitar una
caiguda lliure.

Quan es prem una tecla el motor s'engega i quan s'allibera s'apaga.
L'efecte de motor ON és:

a = -g (passem a contrarrestar la gravetat)
Velocitat -> disminueix (valors negatius ens allunyen del punt d'aterratge)
Fuel -> disminueix perquè es consumeix
Altura -> creix (ens allunyem de la lluna)

A nivell de display, motor ON té una imatge i motor OFF en té una altra sense cua de foc.

ESCENARIS
_________
sense activar motors i en caiguda lliure, la nau tarda 8.61 seg en colisionar contra la lluna
Ho fa amb dipòsit ple i a una velocitat de 13.96 m/s (quasi 14 m/s !!)
Evidentment, explota.

Per evitar-ho s'ha de usar el motor, però el fuel és limitat a 100 litres
A més, un aterratge amb èxit requereix una velocitat d'arribada no superior als 2 m/s.

Aquestes dues restriccions permeten vàries solucions des de la més ràpida a la més pausada
Una solució ràpida triga al voltant de 12-14 segons i acaba amb un sobrant de fuel d'uns 40 litres.
Challenge 1: Prova a fer-ho en menys temps o a que et sobri més fuel
(el record el tinc en 12.05 segons)
Una solució més pausada pot arribar a trigar uns 22-24 segons i arribar després de consumir tot el fuel
Challenge 2: Prova a no esgotar tot el combustible en aquest temps o en un temps lleugerament superior 
(el record el tinc en 64 litres sobrants)

Invertir menys temps en la maniobra requereix caure més ràpidament i això té dos problemes:
arribem amb una velocitat massa alta i la potència dels motors pot no esser prou per contrarrestar 
la gravetat lunar davant d'una caiguda tan ràpida
Invertir més temps en la maniobra requereix caure més lentament que vol dir consumir més fuel per contrarrestar la gravetat
En aquest cas les possibilitats d'èxit disminueixen molt perquè aviat ens quedem sense combustible

És possible establir que si superem una alçada màxima en el nostre viatge no podrem aterrar amb èxit. 
Mira de no anar molt amunt
Challenge 3: Quina alçada màxima ets capaç d'assolir i aterrar la nau suaument? El rècord està en 102,4 metres
Challenge 4: Quina és la maniobra més suau que ets capaç de fer? El rècord està en aterratge a 0.08 m/s (8 cm/s !!)





