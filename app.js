const express = require('express')
const app = express()

//servir contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo desde su respectuva ruta')
  })

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  })


app.listen(3000)