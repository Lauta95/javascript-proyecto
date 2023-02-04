
let nombreUsuario = prompt('Ingrese su nombre');

alert(`Bienvenido ${nombreUsuario}. Primero ingrese el nombre del juego que desea comprar`);

alert(`${nombreUsuario}, esta es nuestra lista de juegos disponibles:
-resident evil
-battlefield
-gta`);

let ingresar = prompt('Ingresar nombre del juego');

function Juego(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const juego1 = new Juego('resident evil', 3500);
const juego2 = new Juego('battlefield', 2000);
const juego3 = new Juego('gta', 2500);

let totalCompra = 0;

while (ingresar != 'salir') {
    if (ingresar == juego1.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego1.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            totalCompra += juego1.precio;
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else if (ingresar == juego2.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego2.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            totalCompra += juego2.precio;
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else if (ingresar == juego3.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego3.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            totalCompra += juego3.precio;
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else {
        alert(`${ingresar} no está disponible`);
    }
    alert(`Precio total $${totalCompra}`);
    ingresar = prompt('Ingresar nombre del juego');
}
