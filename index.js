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
    // Métodos
    agregarJuego(juegoAgregado) {
        this.carrito.push(juegoAgregado);
    }
    quitarJuego(id) {
        this.carrito = this.carrito.filter(juego => juego.id !== id);
    }
    getCarrito() {
        return this.carrito;
    }
    listarJuegos() {
        return this.carrito.map(juego => `<li><a class="dropdown-item" href="#">${juego.nombre}: $${juego.precio}</a></li>`);
    }
    // Métodos para guardar en local storage
    guardarLocal() {
        localStorage.setItem('ID', JSON.stringify(this.carrito));
    }
    cargarLocal() {
        let guardar = localStorage.getItem('ID');
        if (guardar) {
            this.carrito = JSON.parse(guardar);
        }
    }
    mostrarTotal() {
        let total = 0;
        for (let i = 0; i < this.carrito.length; i++) {
            const juego = this.carrito[i]
            total += parseInt(juego.precio);
        }
        return `
        <hr class="dropdown-divider">
        <div class= text-center>El total es $${total}</div>`;
    }
}
// Se crea un nuevo carro para guardar los elementos en la clase carrito
let nuevoCarro = new Carrito();
nuevoCarro.cargarLocal()


// Se arma una función asíncrona para traer los juegos desde el archivo json
let juegos;
async function traerJuegos() {
    const response = await fetch("./juegos.json")

    const result = await response.json();

    juegos = result.juegos.map(juego => new Juego(juego.id, juego.nombre, juego.precio));
    console.log(juegos);
}

traerJuegos();

function botonComprar(id) {
    // El primer condicional es para ver si ya existe, si da verdadero es porque encontró un juego que ya esta en el carrito.
    if (nuevoCarro.getCarrito().find(juego => juego.id == id)) {
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
    console.log(juegos);
    for (let i = 0; i < juegos.length; i++) {
        if (id == juegos[i].id) {
            nuevoCarro.quitarJuego(id);
            nuevoCarro.guardarLocal()
        }
    }
}

const listarEnCarrito = document.getElementById("listarEnCarrito");

listarEnCarrito.onclick = () => document.getElementById("lista").innerHTML = nuevoCarro.listarJuegos() + nuevoCarro.mostrarTotal();
// Se crea una funcion para poder agregar el jpg de las imagenes
function formatearNombre(nombreJuego) {
    return nombreJuego.toLowerCase().split(" ").join("-");
}
// Tomo el elemento root
const elementoRoot = document.getElementById('root');
// Función para modificar el DOM en la pages carrito para ver las tarjetas seleccionadas
function crearTarjetaCarrito(id, nombre, precio) {
    // Div padre
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    // Div hijo1
    const hijo1 = document.createElement('div');
    hijo1.classList.add('imagenTarjeta');
    tarjeta.appendChild(hijo1);
    // Div hijo del hijo1
    const hijoimagen = document.createElement('img');
    hijoimagen.classList.add('imgTarjeta');
    hijoimagen.src = `/img/${formatearNombre(nombre)}.jpg`;
    hijo1.appendChild(hijoimagen);
    // Tarjeta.appendChild(hijoimagen);
    // Div hijo2
    const hijo2 = document.createElement('div');
    tarjeta.appendChild(hijo2);
    //Div hijo del hijo2
    const tituloParrafo = document.createElement('div');
    hijo2.appendChild(tituloParrafo);
    // Textos
    const titulo = document.createElement('h5');
    tituloParrafo.appendChild(titulo);
    const textoh5 = document.createTextNode(nombre);
    titulo.appendChild(textoh5);
    const parrafop = document.createElement('p');
    tituloParrafo.appendChild(parrafop)
    const textop = document.createTextNode(`$${precio}`);
    parrafop.appendChild(textop);
    // Div hijo3
    const hijo3 = document.createElement('div');
    tarjeta.appendChild(hijo3);
    // Hijo del hijo3
    const quitarDelCarrito = document.createElement('button');
    quitarDelCarrito.onclick = () => {
        botonQuitar(id)
        // Se recarga la página cada vez que quitamos un juego
        window.location.reload();
    };
    hijo3.appendChild(quitarDelCarrito);
    quitarDelCarrito.classList.add('btn', 'btn-danger');
    const textoBotonQuitar = document.createTextNode('Quitar del carrito');
    quitarDelCarrito.appendChild(textoBotonQuitar);

    elementoRoot.appendChild(tarjeta);
}
// Crear una tarjeta por cada juego de mi carrito
nuevoCarro.getCarrito().forEach(juego => crearTarjetaCarrito(juego.id, juego.nombre, juego.precio));