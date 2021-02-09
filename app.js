const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/buscaCep')
const municipios = require('./src/functions/municipios')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')

app.set('views', './src/views')


app.get('/', (req, res) => {
  
    res.render('index')
})


app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

app.post('/municipio', async (req, res) => {
  const { uf } = req.body
  const resultado = await municipios(uf)

  res.render('resultMunicipio', {dado: resultado})
})

app.listen(1987)