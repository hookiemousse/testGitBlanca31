// if(condicion){
//     bloque de codigo en caso de que se cumpla la condicion 
// }else{
//     bloque de codigo en caso de que no se cumpla la condicion 
// }




// if(condicion){
//         console.log(':D')
// }else{
//         console.log(':(')
// }


// {/* <> ===  identico */}

// let nacimiento = prompt('ingresa tu año de nacimiento')

// if(nacimiento >= 18){
//     console.log('entra a bar')
// }else{
//     console.log('llamar a sus papas :@')
// } 







// -------------- triple condicion




// let edad = prompt('ingresa numero')
// if(edad < 16){
//         console.log('no puedes sacar licencia')
// }else if(edad >=16 || edad === 17){
//     console.log('puedes sacar tu permiso')
// }else{
//     console.log('puedes conducir')
// }       





// ----------- numero par e impar 

// let numero = prompt('ingresa numero')
// if(numero % 2 === 0){
//         console.log(numero + ' numero par ')
// }else{
//         console.log(numero + ' numero impar ')
// }








// --------------- piedra papel o tijera 

let player1 = prompt('elige: puedra, papel o tijera')
let player2 = prompt('elige: puedra, papel o tijera')

if(player1 === player2){
            console.log('es empate')
}else if(player1 === 'piedra' && player2 === 'tijera')
{
            console.log('gana player 1')

}else if(player1 === 'piedra' && player2 === 'papel')
{
    console.log('pierde player 2')

}else if(player1 === 'papel' && player2 === 'tijera')
{
    console.log('pierde player 2')

}else if(player1 === 'papel' && player2 === 'piedra')
{
    console.log('gana player 1')

}else if(player1 === 'tijera' && player2 === 'papel')
{
    console.log('gana player 1')

}else if(player1 === 'tijera' && player2 === 'piedra')
{
    console.log('gana player 2')
}


