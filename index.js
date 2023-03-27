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

    getCarrito() {
      return this.carrito;
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
    mostrarTotal(){
        let total = 0;
        for (let i = 0; i < this.carrito.length; i++) {
            const juego = this.carrito[i] // -> Juego;
            total += juego.precio;
        }
        return `
        El total es $${total}`;
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
    // ver si ya existe con un condicional if si da verdadero es porque encontró un juego que ya esta en el carrito
    if(nuevoCarro.getCarrito().find(juego => juego.id == id)) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'No puedes comprar el mismo juego',
            showConfirmButton: false,
            timer: 1500
          })
      return
    }
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.agregarJuego(juegos[i]);
            nuevoCarro.guardarLocal();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Juego agregado',
                showConfirmButton: false,
                timer: 600
              })
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

listarEnCarrito.onclick = () => document.getElementById("lista").innerHTML = nuevoCarro.listarJuegos() + nuevoCarro.mostrarTotal();

