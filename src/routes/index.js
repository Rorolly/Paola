const express = require('express');
const router = express.Router();
//routers
router.get('/', (req, res) => {
    //  res.sendFile(path.join(__dirname, 'views/index.html')) // envio el archivo y la ruta del htlm
    res.render('index.html', { TitlePag : 'Inicio',Title:"Hola Paola" }) //renderizo el archivo ejs
      
  })

router.get('/Prueba1', (req, res) => {
    //  res.sendFile(path.join(__dirname, 'views/index.html')) // envio el archivo y la ruta del htlm
    res.render('Prueba_1.html', { Title : 'Inicio', TitlePag:"Primera Prueba"}) //renderizo el archivo ejs
      
})

router.get('/Prueba2', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'views/index.html')) // envio el archivo y la ruta del htlm
  res.render('Prueba_2.html', { Title : 'Inicio', TitlePag:"Segunda Prueba"}) //renderizo el archivo ejs
    
})

router.get('/Prueba3', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'views/index.html')) // envio el archivo y la ruta del htlm
  res.render('Prueba_3.html', { Title : 'Inicio', TitlePag:"Tercera Prueba"}) //renderizo el archivo ejs
    
})

router.get('/Prueba4', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'views/index.html')) // envio el archivo y la ruta del htlm
  res.render('Prueba_4.html', { Title : 'Inicio', TitlePag:"Cuarta Prueba"}) //renderizo el archivo ejs
    
})

  module.exports = router;