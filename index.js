
const carrito = [];

class Juego {
    constructor(nombreJuego, precioJuego) {
        this.juego = nombreJuego;
        this.precio = precioJuego
    }
}

agregarCarrito = new Juego("dark souls", 8599);
agregarCarrito2 = new Juego("gta", 5698);
agregarCarrito3 = new Juego("resident evil", 5500);
agregarCarrito4 = new Juego("god of war", 4199);

const alCarrito = carrito.push(agregarCarrito);
const alCarrito2 = carrito.push(agregarCarrito2);
const alCarrito3 = carrito.push(agregarCarrito3);
const alCarrito4 = carrito.push(agregarCarrito4);

//  

const listar = document.getElementById("listarEnCarrito");

carrito.forEach(juego => {
    listar.innerHTML += `<li><a class="dropdown-item" href="#">${JSON.stringify(juego)}</a></li>`;
})




// Método para mostrar los juegos
// const nombres = juegos.map(juego => juego.nombre);

// let totalCompra = 0;

// Utilización de clases para mostrar los juegos agregados en un carrito
// class Carrito {
//     constructor() {
//         this.carrito = [];
//     }

//     agregarJuego(nombre, precio) {
//         this.carrito.push({ nombre, precio })
//     }

//     listarJuegos() {
//         return this.carrito.map(juego => '- ' + juego.nombre + ': ' + juego.precio).join('\n')
//     }
// }

// let carro = new Carrito();

// carro.listarJuegos();

// let ingresar = prompt(`¿Que juego desea agregar al carrito? Para terminar su compra ingrese terminar`);
// // Ciclo para agregar juegos al carrito
// while (ingresar != 'terminar') {
//     // Buscador de objetos en la lista según lo que introduzca el usuario
//     const buscar = juegos.find(juego => juego.nombre == ingresar);
//     let agregar = prompt(`${usuario}, el precio del juego ${buscar.nombre} es de $${buscar.precio}, ¿desea agregar al carrito? Ingrese si o no:`);
//     if (agregar == 'si') {
//         totalCompra += buscar.precio;
//         alert(`Juego agregado. Total: $${totalCompra}`);
//         carro.agregarJuego(buscar.nombre, buscar.precio);
//     } else if (agregar == 'no') {
//         alert('juego no agregado');
//     }
//     ingresar = prompt(`¿Que juego desea agregar al carrito?`);
// }
// alert(`Productos adquiridos:
// ${carro.listarJuegos()}

// Total de la compra: ${totalCompra}`);





