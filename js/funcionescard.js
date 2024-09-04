

/*    FUNCION DE AGREGAR AL CARRITO */
function agregarAlCarrito(){
    const memoria = JSON.parse(localStorage.getItem ("Carnes") || []);
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = GetNuevoProductoParaMemoria (productos);
        
        localStorage.setItem("Carnes",JSON.stringify([nuevoProducto]));
        }else{
            const indiceProducto = memoria.findIndex (carnes => productos.id)
            const nuevaMemoria = memoria;
            if(indiceProducto === -1){
                
                nuevaMemoria.push(GetNuevoProductoParaMemoria(productos))
            }else{
             nuevaMemoria[indiceProducto].cantidad ++;
            }
            localStorage.setItem("Carnes",JSON.stringify(nuevaMemoria));
        }
}




function GetNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}