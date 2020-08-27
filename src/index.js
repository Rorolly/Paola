const express = require('express');
const app = express();
const path = require('path')


//Configuraciones
app.set('port',process.env.PORT || 3000) //envio la variable port a app para utilizarla globalmente
app.set('views', path.join(__dirname, 'views')) // cambio la ruta para que encuentre la carpeta views
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs') // traigo la dependencia ejs pero sin requerirla
// middlewares

//routers
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname)))

//Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log("Server on port",app.get('port'))
});

