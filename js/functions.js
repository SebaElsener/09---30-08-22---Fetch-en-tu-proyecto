
// Importando módulos variables y DOM
import {variablesExport} from './variables.js'
import {domExport} from './DOM.js'

// Function para guardar carrito y total precio carrito en storage
function guardarCarritoStorage () {
    sessionStorage.setItem('carrito', JSON.stringify(variablesExport.carrito));
    sessionStorage.setItem('totalPreviewCarrito', JSON.stringify(variablesExport.totalPreviewCarrito));
}

// Function mostrar msj carrito vacío
function msjCarritoVacio() {
    domExport.accionesCarrito.style.display = 'none'
    domExport.prodCarrito.innerHTML = `<br><br><strong>CARRITO VACIO, POR FAVOR DIRIJASE A LA PAGINA DE VENTA PARA AGREGAR PRODUCTOS</strong>`
    domExport.prodCarrito.style.textAlign = 'center'
}

// Objeto para exportar funciones
export const functionExport = {
    guardarCarritoStorage,
    msjCarritoVacio
}