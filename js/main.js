
/*Carniceria
ingreso con mail y contraseña VER COMO HACERLO
carrrito de Compras FALTA HACER QUE CUENTE Y MUESTRE TODAS LAS COSAS Q FUISTE COMPRANDO
productos AGREGAR MAS PRODUCTOS
boton para comprar
*/






/*      CREACION DE TARJETAS CON UNA FUNCION      */
const contenedorTarjetas = document.getElementById("productos-contenedor")
function crearTarjetasProductos (productos){
    productos.forEach(productos => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        
        nuevoProducto.innerHTML = `
        <img src="./Img/CarnePrueba.png">
        <h3>${productos.nombre}</h3>
        <p>${productos.categoria}</p>
        <p>${productos.precio}</p>
        <button> Comprar</button>
        `
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(productos) )
    });
}
crearTarjetasProductos(productos)

