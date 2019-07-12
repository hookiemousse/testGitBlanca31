let mostrarnombre = document.getElementById('mostrarnombre')
let mostrartelefono = document.getElementById('mostrartelefono')
let mostrarpizza = document.getElementById('mostrarpizza')
let inputnombre = document.getElementById('inputnombre')
let inputtelefono = document.getElementById('inputtelefono')
let inputpizza = document.getElementById('inputpizza')
let boton = document.getElementById('boton')


const accion = () =>{
    let textonombre =  inputnombre.value 
    let textotelefono =  inputtelefono.value 
    let textopizza =  inputpizza.value 
    let minuscula = textopizza.toLowerCase()
   


     if(minuscula === 'si'){
         mostrarpizza.innerHTML = ':)'
        }else{
            mostrarpizza.innerHTML = ':('
        }

        mostrarnombre.innerHTML = textonombre
        mostrartelefono.innerHTML = textotelefono
       //  mostrarpizza.innerHTML = textopizza
 }
 
 boton.addEventListener('click' , accion)




