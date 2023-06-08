import { obtenerProductos,eliminarProducto} from "./index.js";


 (function (){
    const listado = document.querySelector('#listado-Productos');
    listado.addEventListener('click',confirmarEliminar);

    document.addEventListener('DOMContentLoaded',mostrarProductos);

    async function mostrarProductos(){
        const productos = await obtenerProductos();
        productos.forEach(producto=>{
            const {nombre,precio,categoria,id} =  producto;
            const fila = document.createElement('tr');

            fila.innerHTML +=`
            <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
              <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>
            </td>
            
            <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
              <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${precio}</p>
            </td>
            
            <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
              <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${categoria}</p>
            </td>
            
            <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
              <a href="/editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5" >Editar</a>
              <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
          </td>

            `;
            listado.appendChild(fila);
        })
    }

    async function confirmarEliminar(e){
      
      if(e.target.classList.contains('eliminar')){
        const productoId= parseInt(e.target.dataset.producto);
        console.log(productoId);

        const confirmar = confirm('Quieres eliminar este producto?')

        if(confirmar){
          await eliminarProducto(productoId)
          window.location.href = 'index.html'
        }

      }

    }

})(); 