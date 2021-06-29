const persistencia = require('../persistencia/persistenciaProducto')

class Productos {

    constructor() {
        this.productos = []
        this.id = 1
        this.administrador = true
    }

    listar() {
        return this.productos
    }

    listarPorId(id) {
        let i = this.productos.find(e => e.id === id)
        if(i == undefined) {
            i = {Mensaje: "Producto no encontrado"}
        }
        return i
    }

    agregar(producto) {
        this.productos.push({id: this.id++, fecha: new Date().toISOString(), ...producto})
        persistencia.guardar(this.productos)
        return this.productos
    }

    actualizar(id, producto) {
        const indice = this.productos.findIndex(e => e.id == id)
        this.productos[indice] = producto
        return this.productos[indice]
    }

    borrar(id) {
        const producto = this.productos.find(e => e.id == id)
        this.productos = this.productos.filter(a => a.id != id)
        return producto
    }
}

module.exports = new Productos()