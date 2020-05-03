# Sitio Web Court

## Onboarding

Para iniciar aportando a este proyecto, es necesario:

-   Actualizar/Instalar las dependencias (`npm install`)
-   Tener instalada la extensión de prettier (por default npm install lo hará pero hay que verificar que se esté usando en cada archivo)
-   Revisar que las dependencias esten actualizadas cada que se hace un pull desde master y en caso de que no, actualizarlas y verificar que no haya vulnerabilidades, en caso de que haya, actualizarlas.
-   Crear una rama para trabajo local y que posteriormente será una PR.
-   El uso del server de producción es opcional, si decides correr la aplicacion Laravel localmente solo cambia la variable `inProduction` a `false` dentro del archivo `src/environment/environment.js`. Solo acuerdate de no agregar ese cambio en tus commits.

## Scripts para desarrollo

Scripts utilizados para desarrollo:

### `npm start`

Corre la aplicación en modo desarrollo.<br />
Abre la app en [http://localhost:3000](http://localhost:3000) para verla en tu explorador.

Hotreloading está activado por default en create-react-app así que podrás hacer cambios mientras desarrollas y verlos en vivo.<br />

### `npm test`

Corre los tests del proyecto utilizando este script, te permitirá asegurar que tu código tiene calidad y siempre va a comportarse de forma determinada<br />
Puedes encontrar mas documentación en [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Utiliza este comando para construir el producto final que será distribuido por una CDN de alta disponibilidad como netlify. <br/>

Para mayor información visita [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Este comando solo debe ser utilizado para mejoras posteriores a la entrega final, solo para desarrolladores expertos.

## Learn More (Información sobre React y su documentación)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
