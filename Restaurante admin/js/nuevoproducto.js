import { nuevoCliente} from "./index.js";
import { mostrarAlerta} from "./alerta.js";

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarProducto);

    async function validarProducto(e){
        console.log("entro")
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const precio = document.querySelector('#precio').value;
        const categoria = document.querySelector('#categoria').value;


        const producto = {
            nombre,
            precio,
            categoria
        }

        if(validacion(producto)){
            mostrarAlerta('Todos los campos deben ser obligatorios');
            return
        }
        
        await nuevoCliente(producto);
        window.location.href = 'index.html'




    }

    function validacion(obj){
        return !Object.values(obj).every(i => i !== '');
    }



})();