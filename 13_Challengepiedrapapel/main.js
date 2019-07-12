let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')


let player1
let player2


const piedra = () => {
    player1 = ('piedra')
    console.log(player1)
}

const papel = () => {
    player1 = ('papel')
    console.log(player1)
}

const tijera = () => {
    player1 = ('tijera')
    console.log(player1)
}

boton1.addEventListener('click', piedra)
boton2.addEventListener('click', papel)
boton3.addEventListener('click', tijera)


/////// player 2 

let boton4 = document.getElementById('boton4')
let boton5 = document.getElementById('boton5')
let boton6 = document.getElementById('boton6')


const piedra2 = () => {
    player2 = ('piedra2')
    console.log(player2)
}

const papel2 = () => {
    player2 = ('papel2')
    console.log(player2)
}

const tijera2 = () => {
    player2 = ('tijera2')
    console.log(player2)
}

boton4.addEventListener('click', piedra2)
boton5.addEventListener('click', papel2)
boton6.addEventListener('click', tijera2)


const juego = () =>{
    console.log(player1)
    console.log(player2)

if(player1 === player2){
    console.log('es empate')
}else if(player1 === 'piedra' && player2 === 'tijera2')
{
    console.log('gana player 1')

}else if(player1 === 'piedra' && player2 === 'papel2')
{
console.log('pierde player 2')

}else if(player1 === 'papel' && player2 === 'tijera2')
{
console.log('pierde player 2')

}else if(player1 === 'papel' && player2 === 'piedra2')
{
console.log('gana player 1')

}else if(player1 === 'tijera' && player2 === 'papel2')
{
console.log('gana player 1')

}else if(player1 === 'tijera' && player2 === 'piedra2')
{
console.log('gana player 2')
}


let resultado = document.getElementById('resultado')

if(resultado === 'gana player 1'){
 resultado.innerHTML = 'Gana Player 1'
}else{
    resultado.innerHTML= 'Gana Player 2'
}

resultado.innerHTML = ganaplayer1

}



resultado.addEventListener('click', juego)



