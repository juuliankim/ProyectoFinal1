const persistencia = require('../persistencia/persistenciaCarrito')

class Carrito {

    constructor() {
        this.carrito = []
        this.id = 1;
    }

    listar(){        
        return this.carrito
    }

    listarPorId(id){
        let i = this.carrito.find(e => e.id === id)
        if(i == undefined) {
            i = {Mensaje: "Carrito no encontrado"}
        }
        return i
    }

    agregar(producto){
        this.carrito.push({id: this.id++, timestamp:new Date().toISOString(), productos: {...producto}})
        persistencia.guardar(this.carrito)
        return this.carrito    
    }

    borrar(id){
        const carrito = this.carrito.find(e => e.id == id)
        this.carrito = this.carrito.filter(a => a.id != id)
        return carrito;
    }
}

module.exports = new Carrito()