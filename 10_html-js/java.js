let etiqueta = document.getElementById('etiqueta')
let texto = document.getElementById('texto')
let input = document.getElementById('input')
let boton = document.getElementById('boton')
let mostrar = document.getElementById('mostrar')
// console.log(input)




// -------------- funcion around
const cambiar = () =>{
    etiqueta.innerHTML = 'es un nuevo saludo'
    texto.innerHTML = 'nuevo texto'
}

boton.addEventListener('click' , cambiar)





const mostrarinput = () =>{
   let texto =  input.value 
    mostrar.innerHTML = texto
}

boton.addEventListener('click' , mostrarinput)