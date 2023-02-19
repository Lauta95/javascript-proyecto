// Array de objetos
const juegos = [
    { id: 1, nombre: 'dark souls', precio: 1500 },
    { id: 2, nombre: 'gta', precio: 2500 },
    { id: 3, nombre: 'resident evil', precio: 5500 },
    { id: 4, nombre: 'counter strike', precio: 100 },
    { id: 5, nombre: 'age of empires', precio: 500 },
    { id: 6, nombre: 'hitman', precio: 1450 },
    { id: 7, nombre: 'outlast', precio: 1000 },
    { id: 8, nombre: 'god of war', precio: 2575 }
];
// Ingresar nombre de usuario
let usuario = prompt(`Hola, ingrese su nombre por favor`);
// Método para mostrar los juegos
const nombres = juegos.map(juego => juego.nombre);

alert(`¡Bienvenido ${usuario}! Este es nuestro listado de juegos:

${nombres.join('\n')}`);

let totalCompra = 0;

// Utilización de clases para mostrar los juegos agregados en un carrito
class Carrito {
    constructor() {
        this.carrito = [];
    }

    agregarJuego(nombre, precio) {
        this.carrito.push({ nombre, precio })
    }

    listarJuegos() {
        return this.carrito.map(juego => '- ' + juego.nombre + ': ' + juego.precio).join('\n')
    }
}

let carro = new Carrito();

carro.listarJuegos();

let ingresar = prompt(`¿Que juego desea agregar al carrito? Para terminar su compra ingrese terminar`);
// Ciclo para agregar juegos al carrito
while (ingresar != 'terminar') {
    // Buscador de objetos en la lista según lo que introduzca el usuario
    const buscar = juegos.find(juego => juego.nombre == ingresar);
    let agregar = prompt(`${usuario}, el precio del juego ${buscar.nombre} es de $${buscar.precio}, ¿desea agregar al carrito? Ingrese si o no:`);
    if (agregar == 'si') {
        totalCompra += buscar.precio;
        alert(`Juego agregado. Total: $${totalCompra}`);
        carro.agregarJuego(buscar.nombre, buscar.precio);
    } else if (agregar == 'no') {
        alert('juego no agregado');
    }
    ingresar = prompt(`¿Que juego desea agregar al carrito?`);
}
alert(`Productos adquiridos:
${carro.listarJuegos()} 

Total de la compra: ${totalCompra}`);





