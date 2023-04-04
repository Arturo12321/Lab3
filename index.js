const express = require('express')
const port = 3500
const app = express()

app.get('/products',(req,res) => {

    res.send('lista de productos')
})

app.post('/products',( req, res) => {
    res.send('creando productos')
})

app.put('/products',(req,res) => {
    res.send('actualizando productos')
})

app.delete('/products', (req,res) => {
    res.send('eliminando productos')
})

app.patch('/products', (req,res) => {
    res.send('actualizando una parte del producto')
})


app.get('/',(req, res) => {
    res.send('Hello Word!')
})


app.get('/myfile', (req,res) => {
    res.sendFile('./img/nube.png', {
        root: dirname
    })
})

app.get('/user', (req, res) => {
    res.json(
        {
            nombre: "Arturo",
            apellido:"Manrique",
            edad:42,
            points: [1, 2, 3],
            adreess: {
                ciudad: "Lima - Peru",
                distrito: "Ate",
                calle: "Santander"
            }
        }
    )
})

app.get('/isAlive', (req,res) => {
    res.sendStatus(204)
})

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    res.send('Nuevo usuario creado')
    console.log(req.body)
})

app.get('/hello/:username', (req, res) => {

    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {

    const {x, y} =req.params
    res.send(`Result: ${ parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo', (req, res) => {
    if(req.params.username.toUpperCase() === "ARTURO") {
        return res.sendFile('./img/nube.png', {
            root: dirname
        })
    }
    res.send('El usuario o tiene acceso----!!!!!!')
})

app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años...!!!!!`)
})

app.listen(port)
console.log(`Server on port ${port}` )