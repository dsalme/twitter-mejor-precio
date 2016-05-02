# twitter-mejor-precio

Instrucciones para correr el proyecto:

Primero, tienen que instalar NodeJS, descargar el instalador de:
https://nodejs.org/en/

Cuando instalan Node, se les instala gestor de paquetes JS que se llama npm.
Si no tuvieron problemas instalando Node, pueden seguir.

En la terminal escriben:
npm install -g bower

Esto instala globalmente otro gestor de paquetes (bower) para poder usar el comando "bower"
desde cualquier carpeta.

Una vez que instalaron Node, clonen el repositorio. Para clonar el repo, tienen que tener git instalado.
Por las dudas, esta es la direccion para descargar git en windows: https://git-scm.com/download/win

Clonen el repo en cualquier carpeta... desde la terminal, se paran en donde lo vayan a clonar y escriben:
git clone https://github.com/dsalme/twitter-mejor-precio.git

Una vez que termina de clonar, ya pueden instalar las dependencias del proyecto.

Se paran en la carpeta raiz del proyecto, y desde la terminal, escriben:
npm install
Cuando termina eso:
bower install

Si se instalaron todas las dependencias, entran a la carpeta server:
cd server

Y escriben:
node app.js

Eso les deberia iniciar el servidor, en el puerto 3000, y va a logear algunas cosas en la terminal,
no le den importancia por ahora.

Van al navegador y acceden a:
localhost:3000

Y deberian ver la aplicacion, deberia completarse la url y quedar asi:
http://localhost:3000/#/precioJusto
