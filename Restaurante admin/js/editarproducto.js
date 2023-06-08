 import { obtenerProducto, editarProducto } from './index.js';
import { mostrarAlerta } from './alerta.js';

(function(){
    const nombreInput = document.querySelector('#nombre')
    const precioInput = document.querySelector('#precio')
    const categoriaInput = document.querySelector('#categoria')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async ()=>{

        const parametroURL = new URLSearchParams(window.location.search)
        console.log(parametroURL)
        const idProducto = parseInt(parametroURL.get('id'))
        const producto = await obtenerProducto(idProducto)
        console.log(idProducto)
            mostrarProducto(producto)
    
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit',validarProducto)
    
    
        })

    function mostrarProducto(producto){
        const {nombre, precio, categoria, id} = producto

        nombreInput.value = nombre
        precioInput.value = precio
        categoriaInput.value = categoria
        idInput.value = id
    }

    async function validarProducto(e){
        e.preventDefault();
        
        const producto = {
            nombre:nombreInput.value,
            precio:precioInput.value,
            categoria:categoriaInput.value,
            id:parseInt(idInput.value)
        }
       

        if(validacion(producto)){
            mostrarAlerta('Todos los campos deben ser obligatiorios');
            return
        }
        console.log(producto)
        await editarProducto(producto);
        window.location.href = 'index.html'
    }

    function validacion(obj){
        return !Object.values(obj).every(i => i !== '')
    }

})()

