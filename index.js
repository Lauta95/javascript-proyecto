let total = 0;

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

let usuario = prompt(`Hola, ingrese su nombre por favor`);

const nombres = juegos.map(juego => juego.nombre)

alert(`¡Bienvenido ${usuario}! Este es nuestro listado de juegos:${nombres}`);

let totalCompra = 0;

let ingresar = prompt(`¿Que juego desea agregar al carrito?`);


while (ingresar != 'salir') {
    const buscar = juegos.find(juego => juego.nombre == ingresar);
    let agregar = prompt(`El precio del juego ${buscar.nombre} es de $${buscar.precio}, ¿desea agregar al carrito? Ingrese si o no:`);
    if (agregar == 'si') {
        totalCompra += buscar.precio;
        alert(`Juego agregado. Total: $${totalCompra}`);
    } else if (agregar == 'no') {
        alert('juego no agregado');
    }
    ingresar = prompt(`¿Que juego desea agregar al carrito?`);
}
 