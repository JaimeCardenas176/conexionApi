//tipos de datos en JS

//numeros
let miNumeroFav = 7

miNumeroFav = 10

//finals pa que me entiendas
const PI = 3.14

//PI = 10 // Si intento reasignar una constante me va a dar un error de ejecucioin (JS no se compila asi que tenemos que eejecutar pàra saber si la cagamos)

// booleanos
let esSoleado = true

let esNublado = !esSoleado

// strings

let frase = "Hola"





//LISTAS

let listas = [1,1,2, "heloo", true] //un puto List perro se escribe como un array

//forEach es programacion funcional (declarativa) (le dices lo que hace)

function funcionAuxiliar(elemento){ // esta funcion tiene nombree
    console.log(elemento)
}

listas.forEach( elemento => funcionAuxiliar(elemento) ); //el parametro que le pasamos al for es directamente una funcion 

listas.forEach( elemento => console.log(elemento) ) //es lo mismo, pero ahora la funcion que le pasamos es ánonima(es decir, no tiene un nombre)

//for clasico es programacion imperativa (le dices como lo hace)
for (let i = 0; i < listas.length; i++) {
    const element = listas[i];
    console.log(element);
    
}

//los objetos
//formato json por que json significa JavaScriptObjectNotation JSON
let persona = {
    nombre: "jaime",
    edad: 30,
    dni: 9234898234
}

console.log(persona.nombre);

