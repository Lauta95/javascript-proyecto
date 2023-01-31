
alert('Bienvenido. Primero ingrese el nombre del juego que desea comprar');
alert(`Lista de juegos disponibles:
-resident evil
-battlefield
-gta`);

let ingresar = prompt('Ingresar nombre del juego');

let juego1 = {
    nombre: 'resident evil',
    precio: '$3500'
}

let juego2 = {
    nombre: 'battlefield',
    precio: '$2000'
}

let juego3 = {
    nombre: 'gta',
    precio: '$2500'
}


for (let i = 0; i < 15; i++) {
    if (ingresar == juego1.nombre) {
        let agregar = prompt(`el precio del juego es de ${juego1.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
            ingresar = prompt('Ingresar nombre del juego');
        } else {
            alert('juego no agregado');
            ingresar = prompt('Ingresar nombre del juego');
        }
    } else if (ingresar == juego2.nombre) {
        let agregar = prompt(`el precio del juego es de ${juego2.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
            ingresar = prompt('Ingresar nombre del juego');
        } else {
            alert('juego no agregado');
            ingresar = prompt('Ingresar nombre del juego');
        }
    } else if (ingresar == juego3.nombre) {
        let agregar = prompt(`el precio del juego es de ${juego3.precio}, ¿desea agregar al carrito?`);
        if (agregar == 'agregar' || agregar == 'si') {
            alert('agregado');
            ingresar = prompt('Ingresar nombre del juego');
        } else {
            alert('juego no agregado');
            ingresar = prompt('Ingresar nombre del juego');
        }
    } else {
        alert(`${ingresar} no está disponible`);
        ingresar = prompt('Ingresar nombre del juego');
    }
}

