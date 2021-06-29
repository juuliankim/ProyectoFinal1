const express = require('express')
const router = express.Router()
const carrito = require('../api/carrito')

router.get('/carrito/listar', (req, res) => {
    res.json(carrito.listar())
})

router.get('/carrito/listar/:id', (req, res) => {
    res.send(carrito.listarPorId(parseInt(req.params.id)))
})

router.post('/carrito/agregar/:id', (req, res) => { 
    res.send(carrito.agregar(req.body))
})

router.post('/carrito/borrar/:id', (req, res) => {
    res.send(carrito.borrar(req.params.id))
})

module.exports = router