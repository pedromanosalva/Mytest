'use strict'

console.log('Aqui\'mensaje oculto');
// comentario de una linea.

/* Comentario multilinea. */

// console.log('no se vera en el browser')
/* Los comentarios CSS son como JavaScript de varias líneas.*/
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;