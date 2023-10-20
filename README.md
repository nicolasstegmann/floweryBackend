<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![Winiksoft][www-shield]][www-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nicolasstegmann/floweryBackend">
    <img src="src/public/img/sources/floweryLogo.png" alt="4107 Flowery" width="130" height="80">
  </a>

<h3 align="center">4107 Flowery e-commerce site</h3>

  <p align="center">
    4107 Flowery es una empresa fundada en 2011 radicada en la ciudad de Yerba Buena (C.P. 4107 &#128540;), provincia de Tucumán que se dedica al cultivo, importación y comercialización de flores de corte, bulbos y semillas bajo el asesoramiento de <a href='https://florar.com.ar/'>Florar</a> en el área productiva.
    <br />
    En el año 2022 inició el tan esperado proceso de transformación digital con el apoyo de <a href='https://www.winiksoft.com/'>Winiksoft</a> creando su propio sitio de e-commerce.
    <br />
    <br />
    <a href="https://github.com/nicolasstegmann/floweryBackend"><strong>Mira el repositorio del backend de su e-commerce»</strong></a>
    <br />
    <br />
    <a href="https://github.com/nicolasstegmann/floweryBackend/issues">Reporta un Bug</a>
    ·
    <a href="https://github.com/nicolasstegmann/floweryBackend/issues">Solicita una mejora</a>
  </p>
</div>

<details>
  <summary>Resumen del proyecto</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#desarrollado-con">Desarrollado con</a></li>
        <li><a href="#dependencias">Dependencias</a></li>        
      </ul>
    </li>
    <li>
      <a href="#comenzando">Comenzando</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#contribuir">Contribuir</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Acerca del proyecto

### Documentación API (Swagger)

Para acceder a la documentación de la API utilizando Swagger, visita el siguiente enlace:

[Swagger API Documentation](https://flowerybackend-production.up.railway.app/apidocs/)

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

### Desarrollado con

* [![Node.js][Node.js]][Node.js-url]
* [![Express.js][Express.js]][Express.js-url]
* [![MongoDB][MongoDB]][MongoDB-url]

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

### Dependencias

| **Dependencia**           | **Descripción**                                                      | **Versión** | **Licencia**    |
| ------------------------   | -------------------------------------------------------------------- | ----------- | --------------- |
| [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)          | Biblioteca para generar datos falsos                                   | ^8.0.2       | MIT             |
| [bcrypt](https://www.npmjs.com/package/bcrypt)                           | Librería para hashing de contraseñas                                   | ^5.1.0       | MIT             |
| [commander](https://www.npmjs.com/package/commander)                     | Solución completa para la interfaz de línea de comandos               | ^11.0.0      | MIT             |
| [connect-flash](https://www.npmjs.com/package/connect-flash)             | Mensajes flash para Express                                           | ^0.1.1       | MIT             |
| [connect-mongo](https://www.npmjs.com/package/connect-mongo)             | Almacenamiento de sesiones de MongoDB para Express                    | ^5.0.0       | MIT             |
| [cookie-parser](https://www.npmjs.com/package/cookie-parser)             | Middleware para manejar cookies en Express                             | ^1.4.6       | MIT             |
| [cors](https://www.npmjs.com/package/cors)                               | Middleware para habilitar CORS en Express                              | ^2.8.5       | MIT             |
| [cross-env](https://www.npmjs.com/package/cross-env)                     | Configuración de entorno multiplataforma                               | ^7.0.3       | MIT             |
| [dotenv](https://www.npmjs.com/package/dotenv)                           | Carga variables de entorno desde un archivo                           | ^16.3.1      | BSD-2-Clause    |
| [express](https://www.npmjs.com/package/express)                         | Marco de aplicación web para Node.js                                  | ^4.18.2      | MIT             |
| [express-compression](https://www.npmjs.com/package/express-compression) | Middleware de compresión para Express                                  | ^1.0.2       | MIT             |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars)   | Sistema de plantillas para Express                                     | ^7.0.7       | MIT             |
| [express-routemap](https://www.npmjs.com/package/express-routemap)       | Mapa de rutas para Express                                            | ^1.6.0       | MIT             |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)               | Implementación de JSON Web Tokens para Node.js                        | ^9.0.1       | MIT             |
| [mongoose](https://www.npmjs.com/package/mongoose)                       | Biblioteca para modelar objetos MongoDB para Node.js                  | ^7.4.2       | MIT             |
| [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2)| Paginación para Mongoose                                              | ^1.7.1       | MIT             |
| [multer](https://www.npmjs.com/package/multer)                           | Middleware para manejar datos de formulario en Express                | ^1.4.5-lts.1  | MIT             |
| [nodemailer](https://www.npmjs.com/package/nodemailer)                   | Módulo para enviar correos electrónicos desde Node.js                 | ^6.9.5       | MIT             |
| [passport](https://www.npmjs.com/package/passport)                       | Middleware de autenticación para Node.js                               | ^0.6.0       | MIT             |
| [passport-github2](https://www.npmjs.com/package/passport-github2)       | Estrategia GitHub para Passport.js                                     | ^0.1.12      | MIT             |
| [passport-jwt](https://www.npmjs.com/package/passport-jwt)               | Estrategia JWT para Passport.js                                        | ^4.0.1       | MIT             |
| [passport-local](https://www.npmjs.com/package/passport-local)           | Estrategia de autenticación local para Passport.js                     | ^1.0.0       | MIT             |
| [shortid](https://www.npmjs.com/package/shortid)                         | Generador de identificadores cortos y únicos                          | ^2.2.16      | MIT             |
| [socket.io](https://www.npmjs.com/package/socket.io)                     | Biblioteca para aplicaciones en tiempo real basada en eventos          | ^4.6.2       | MIT             |
| [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)             | Herramienta para generar documentación Swagger a partir de comentarios | ^6.2.8       | MIT             |
| [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)   | Middleware para servir la interfaz de usuario de Swagger en Express     | ^5.0.0       | Apache-2.0      |
| [winston](https://www.npmjs.com/package/winston)                         | Registrador flexible para Node.js                                      | ^3.10.0      | MIT             |

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

## Comenzando

Si quieres una copia local del proyecto, sigue los siguientes pasos:

### Prerequisitos

Debes contar con NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

Y recomentdamos Nodemon
* Nodemon
  ```sh
  npm install -g nodemon
  ```

### Instalación

1. Solicita las credenciales de MongoDB, Github login y mailer con nuestro [Centro de soporte](mailto:support@winiksoft.com).
2. Clona el repositorio
   ```sh
   git clone https://github.com/nicolasstegmann/floweryBackend.git
   ```
3. Instala los paquetes de las dependencias de NPM
   ```sh
   npm install
   ```
4. Agrega a la carpeta raíz del proyecto el archivo `.env` enviado por nuestro centro de soporte. Un ejemplo de dicho archivo sin información sensible es `.env.example`
   ```env
    PORT = PORT
    APP_URL = APP_URL
    ADMIN_USER = ADMIN_USER
    ADMIN_PASSWORD = ADMIN_PASSWORD
    DB_USER = DB_USER
    DB_PASSWORD = DB_PASSWORD
    DB_HOST = DB_HOST
    DB_NAME = DB_NAME
    SESSION_SECRET = SESSION_SECRET
    APP_ID = APP_ID
    CLIENT_ID = CLIENT_ID
    CLIENT_SECRET = CLIENT_SECRET
    AUTH_SECRET = AUTH_SECRET
    AUTH_COOKIE = AUTH_COOKIE
    PERSISTANCE_TYPE = PERSISTANCE_TYPE
    EMAIL_SERVICE = EMAIL_SERVICE
    EMAIL_PORT = EMAIL_PORT
    EMAIL_USER = EMAIL_USER
    EMAIL_PASS = EMAIL_PASS
    INACTIVITY_DAYS = INACTIVITY_DAYS
   ```
5. Puedes iniciar localmente tu proyecto en cualquiera de los 3 ambientes utilizando los siguientes comandos:

- **Desarrollo (dev):**
    ```sh
    npm run start:dev
    ```

- **Ambiente de Pruebas (qa):**
    ```sh
    npm run start:qa
    ```

- **Producción (prod):**
    ```sh
    npm run start:prod
    ```

Además, puedes ejecutar pruebas en el ambiente de desarrollo con el siguiente comando:

- **Pruebas en Desarrollo (dev):**
    ```sh
    npm run test:dev
    ```

Asegúrate de tener todas las dependencias instaladas y los correspondientes archivos .env configurados antes de ejecutar estos comandos.
- .env (dev)
- .env.qa (qa)
- .env.prod (prod)

Estos scripts utilizan el entorno `NODE_ENV` para configurar el ambiente de ejecución, y nodemon para reiniciar automáticamente la aplicación en caso de cambios.

¡Ahora deberías estar listo para iniciar y probar tu proyecto localmente! ¿Hay algo más que pueda ayudarte a completar?




<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

<!-- CONTRIBUTING -->
## Contribuir

Si deseas contribuir con el proyecto, **¡bienvenido seas!**.

Si te pedimos que realices un fork del repositorio y que crees un pull request.
No te olvides de darnos una estrella. **¡Gracias nuevamente!**

1. Haz un fork del proyecto
2. Crea la rama de tu mejora (`git checkout -b mejora/tuMejora`)
3. Realiza un commit de tus cambios (`git commit -m 'Agregar algunas mejoras'`)
4. Realiza un push a la rama creada (`git push origin mejora/tuMejora`)
5. Abre un Pull Request

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>


<!-- CONTACT -->
## Contacto

Winiksoft Contact - winiksoft@winiksoft.com

Link del proyecto: [floweryBackend](https://github.com/nicolasstegmann/floweryBackend)

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/nicolasstegmann/flowery4107.svg?style=for-the-badge
[stars-url]: https://github.com/nicolasstegmann/flowery4107/stargazers
[forks-shield]: https://img.shields.io/github/forks/nicolasstegmann/flowery4107.svg?style=for-the-badge
[forks-url]: https://github.com/nicolasstegmann/flowery4107/network/members
[issues-shield]: https://img.shields.io/github/issues/nicolasstegmann/flowery4107.svg?style=for-the-badge
[issues-url]: https://github.com/nicolasstegmann/flowery4107/issues
[www-shield]: https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white
[www-url]: https://www.winiksoft.com/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nicolas-stegmann/

[product-screenshot]: src/img/4107FloweryDemo.gif

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
