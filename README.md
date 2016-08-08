Colors en català
===============================
En l'exemple es desenvolupa un simple servei REST que a partir de la petició d'un color en català et diu el seu valor RGB

    $ curl localhost:3000/color/Vermell
    {"id":71,"nom":"Vermell","rgb":"#FF0000"}

Es poden veure tots els colors que hi ha a la base de dades amb (els he tret de la wikipèdia):

     $ curl localhost:3000/colors

Programari
-----------------
No és gaire espectacular perquè simplement és un programa per fer proves amb Node.js. i Express 

Fins ara no hi havia fet res i suposo que això es nota perquè intento fer les coses com en Java i seguint la teoria d'orientació a objectes (separació dels serveis, externalització de la configuració) però no sembla que aquest sigui el camí que agrada a Node.js o bé és que desconec com fer-ho :-)

Executar
-----------------

### Requeriments
S'ha d'importar el fitxer de dades a una base de dades MySQL. La configuració per connectar a la base de dades està en el fitxer config/default.json i és bastant explicativa:

    {
      "Colors": {
        "database": {
          "connectionLimit": 10,
          "host": "localhost",      
          "user": "colors",
          "password": "colors",
          "database": "colors"      
        }
      }
    }

I s'ha de tenir node.js instal·lat. La forma més senzilla és amb [nvm](https://github.com/creationix/nvm) i després executar:

    $ nvm install node

### Execució:

Es descarreguen les dependències amb el gestor de paquets de node: 

    $ npm install

Després només cal executar-lo amb: 

    $ npm start

o bé amb:

    $ node ./app/bin/www

El servidor apareix a [http://localhost:3000](http://localhost:3000)
