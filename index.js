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
    // set
    agregarJuego(juegoAgregado) {
        this.carrito.push(juegoAgregado);
    }
    // delete
    quitarJuego(id) {
        this.carrito = this.carrito.filter(juego => juego.id !== id);
    }
    // get
    listarJuegos() {
        return this.carrito.map(juego => `<li><a class="dropdown-item" href="#">${juego.nombre}: $${juego.precio}</a></li>`);
    }
    // métodos para guardar en local storage
    guardarLocal() {
        localStorage.setItem('ID', JSON.stringify(this.carrito));
    }
    cargarLocal() {
        let guardar = localStorage.getItem('ID');
        if (guardar) {
            this.carrito = JSON.parse(guardar);
        }
    }
}
// Se crea un nuevo carro para guardar los elementos en la clase carrito
let nuevoCarro = new Carrito();
nuevoCarro.cargarLocal()
// Se cargan los juegos con un new en las clases
let juego1 = new Juego(1, "Dark Souls 3", 8599);
let juego2 = new Juego(2, "Gta 5", 5698);
let juego3 = new Juego(3, "Resident Evil 4", 5500);
let juego4 = new Juego(4, "God Of War", 4199);
let juego5 = new Juego(5, "Dead Space", 13998);
let juego6 = new Juego(6, "Rust", 4271);
let juego7 = new Juego(7, "Red Dead Redemption", 19773);
let juego8 = new Juego(8, "Spider Man", 8748);

const juegos = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8];

function botonComprar(id) {
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.agregarJuego(juegos[i]);
            nuevoCarro.guardarLocal();
        }
    }
}
function botonQuitar(id) {
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.quitarJuego(id);
            nuevoCarro.guardarLocal()
        }
    }
}

const listarEnCarrito = document.getElementById("listarEnCarrito");

listarEnCarrito.onclick = () => document.getElementById("lista").innerHTML = nuevoCarro.listarJuegos();

const listarEnCarrito = document.getElementById("listarEnCarrito");
listarEnCarrito.onclick = () => document.getElementById("lista").innerHTML = nuevoCarro.listarJuegos();

// Tomo el elemento root
const elementoRoot = document.getElementById('root');
// función para modificar el DOM en la pages carrito para ver las tarjetas seleccionadas
function crearTarjetaCarrito(juego) {
    // div padre
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    // div hijo1
    const hijo1Tarjeta = document.createElement('div');
    tarjeta.classList.add('imagenTarjeta');
    tarjeta.appendChild(hijo1Tarjeta);
        // div hijo del hijo1
    const hijohijo1 = document.createElement('img');
    hijohijo1.classList.add('imgTarjeta');
    // hijo1Tarjeta.appendChild('hijohijo1');
    // div hijo2
    const hijo2Tarjeta = document.createElement('div');
    hijo1Tarjeta.appendChild('hijo2Tarjeta');
        //div hijo del hijo2
    const hijohijo2 = document.createElement('div');
    hijo2Tarjeta.appendChild('div');
            // hijos del hijo del hijo2
    const hijohijohijo2 = document.createElement('h5');
    hijohijo2.appendChild('hijohijohijo2');
    const textoh5 = document.createTextNode('Dark Souls');
    hijohijohijo2.appendChild(textoh5);
    const hijo2hijohijo3 = document.createElement('p');
    hijohijo2.appendChild('hijohijohijo3')
    const textop = document.createTextNode('Precio: $1234');
    // div hijo3
    const hijo3Tarjeta = document.createElement('div');
    hijo1Tarjeta.appendChild('hijo3Tarjeta');
        // hijo del hijo3
    const hijohijo3 = document.createElement('button');
    hijo3Tarjeta.appendChild('hijohijo3');
    hijohijo3.classList.add('btn', 'btn-danger');
}
