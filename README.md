Colors en català
===============================
En l'exemple es desenvolupa un simple servei REST de colors en llengua catalana que a partir de la petició d'un color en català et diu el seu valor RGB

    $ curl localhost:3000/color/Vermell
    {"id":71,"nom":"Vermell","rgb":"#FF0000"}

Es poden veure tots els colors que hi ha a la base de dades amb (els he tret de la wikipèdia):

     $ curl localhost:3000/colors

Programari
-----------------
No és gaire espectacular perquè simplement és un programa per fer proves amb Node.js. i Express 

Fins ara no hi havia fet res i suposo que això es nota perquè intento fer les coses com en Java (objectes independents, externalització de la configuració) però no sembla que sigui el camí :-)

Executar
-----------------
S'ha d'importar el fitxer de dades a una base de dades MySQL i tenir node.js instal·lat

Es descarreguen les dependències: 

    $ npm install

Després només cal executar-lo amb: 

    $ npm start

o bé

    $ node bin/www

El servidor apareix a [http://localhost:3000](http://localhost:3000)
