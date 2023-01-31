
alert('Bienvenido. Primero ingrese el nombre del juego que desea comprar');

alert(`Lista de juegos disponibles:
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


while (ingresar != 'salir') {
    if (ingresar == juego1.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego1.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else if (ingresar == juego2.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego2.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else if (ingresar == juego3.nombre) {
        let agregar = prompt(`el precio del juego es de $${juego3.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
        } else {
            alert('juego no agregado');
        }
    } else {
        alert(`${ingresar} no está disponible`);
    }
    ingresar = prompt('Ingresar nombre del juego');
}

