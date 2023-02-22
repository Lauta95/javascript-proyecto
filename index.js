// Se crea una clase para generar los juegos
class Juego {
    constructor(id, nombreJuego, precioJuego) {
        this.nombre = nombreJuego;
        this.precio = precioJuego;
        this.id = id;
    }
}
// Se crea una clase para guardar los juegos generados en el carrito
class Carrito {
    constructor() {
        this.carrito = [];
    }
// Se crean los 3 métodos para agregar quitar y listar.
    agregarJuego(juegoAgregado) {
        this.carrito.push(juegoAgregado)
    }

    quitarJuego(id) {
        this.carrito = this.carrito.filter(juego => juego.id !== id);
    }
    
    listarJuegos() {
        return this.carrito.map(juego => '- ' + juego.nombre + ': ' + juego.precio).join("\n");
    }
}
// Se crea un nuevo carro para guardar los elementos en la clase carrito
let nuevoCarro = new Carrito();

// Se cargan los juegos con un new en las clases
let juego1 = new Juego(1, "dark souls", 8599);
let juego2 = new Juego(2, "gta", 5698);
let juego3 = new Juego(3, "resident evil", 5500);
let juego4 = new Juego(4, "god of war", 4199);

const juegos = [juego1, juego2, juego3, juego4];

function botonComprar(id) {
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.agregarJuego(juegos[i]);
        }
    }
}

function botonQuitar(id) {
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.quitarJuego(id);
        }
    }
}

const listarEnCarrito = document.getElementById("listarEnCarrito");

listarEnCarrito.onclick = () => document.getElementById("lista").innerHTML = nuevoCarro.listarJuegos();

