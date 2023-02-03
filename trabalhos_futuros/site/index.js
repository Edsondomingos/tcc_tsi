const express = require('express')
const fs = require('fs')
const pdf = require('html-pdf')
const ejs = require('ejs')

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')


app.get('/perfil', async (req, res) => {
   res.render('perfil')
})

app.get('/curriculo', async (req, res) => {
    // res.render('perfil')
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/login', (req,res) => {
    // Criar autenticacao do firebase
    res.redirect('/')
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})