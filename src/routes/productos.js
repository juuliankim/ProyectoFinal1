const express = require('express')
const router = express.Router()
const productos = require('../api/productos')

function accesoAdmin (req, res, next) {
    if(productos.administrador == true) {
        next()
    } else {
        res.status(401).send({error: -1, descripcion: `ruta ${req.originalUrl} metodo ${req.method} no autorizada`})
    }
}

router.get('/productos/listar', (req, res) => {
    res.json(productos.listar())
})

router.get('/productos/listar/:id', (req, res) => {
    res.send(productos.listarPorId(parseInt(req.params.id)))
})

router.post('/productos/agregar', accesoAdmin, (req, res)=>{
    res.send(productos.agregar(req.body))
})

router.put('/productos/actualizar/:id', accesoAdmin, (req,res)=>{
    let actualizar = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            fecha: req.body.fecha,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            imagen: req.body.imagen
    }
    res.send(productos.actualizar(req.params.id, actualizar))
})

router.delete('/productos/borrar/:id', accesoAdmin, (req,res)=>{
    res.send(productos.borrar(req.params.id))
})

module.exports = router