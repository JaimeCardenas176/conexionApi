
//cosas que nos van hacer falta
//una lista pa rellenarla con los articulos de ropa
let listaRopa = [];

//el elemento del DOM HTML donde queremos meter esos articulos
const elementoContendorDOM = document.getElementsByClassName('fila');

function crearArticuloEnDOM(articulo){

    //el padree de todo la card donde vamos a pintar el articulo
    const divArticuloEntero = document.createElement("div", {class: "cardArticulo"})
    
    const foto = crearImagenArticuloDOM(articulo)
    const cabecera = crearCabeceraArticuloDOM(articulo)
    const parrafo = crearDescripcionArticuloDOM(articulo)
    const pie = crearPieArticuloDOM(articulo)

    //le metemos todo dentro al padre
    divArticuloEntero.appendChild(foto)
    divArticuloEntero.appendChild(cabecera)
    divArticuloEntero.appendChild(parrafo)
    divArticuloEntero.appendChild(pie)

    // y lo devolvemos y ya tenemos montado 1 articulo
    return divArticuloEntero

}


function crearImagenArticuloDOM(articulo) {
    //montamos elemento y devolvemos 
    return document.createElement("img", {src: articulo.image, class: "cardArticulo-img"})
}

function crearCabeceraArticuloDOM(articulo){

    //creamos los elementos del dom (siempre es igual)
    const divPadre = document.createElement("div", {class: "cardArticulo-cabecera"})
    const span1 = document.createElement("h2").innerHTML = articulo.title
    const span2 = document.createElement("span").innerHTML = articulo.price
    
    //esta linea añade los elementos span dentro del div padre
    divPadre.append(span1,span2)

    //y devolveemos eel Elemento HTML ya montado
    return divPadre

}7

function crearDescripcionArticuloDOM(articulo){
    //montamos eelemento y devolvemos
    const p = document.createElement("p")
    p.innerHTML=articulo.description
    return p
}

function crearPieArticuloDOM(articulo){

    //creamos los elementos del dom (siempre es igual)
    const divPadre = document.createElement("div", {class: "cardArticulo-pie"})
    const span1 = document.createElement("span").innerHTML = articulo.rating.rate
    const span2 = document.createElement("span").innerHTML = articulo.rating.count
    
    //esta linea añade los elementos span dentro del div padre
    divPadre.append(span1,span2)

    //y devolveemos eel Elemento HTML ya montado
    return divPadre

}

/*
   {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
 */


fetch('https://fakestoreapi.com/products')//pedimos los productos
        .then( respuesta =>  respuesta.json())//los parseamos a json
        .then( loQueLlegue => {
            //y aqui dentro sabemos ya 100% que 'loQueLLegue' es una lista de ropa
            listaRopa=loQueLlegue;

            //por si la quieres ver pero muchos texto
            console.log(otraListaRopa)

            //la lista es una lista, asi que hacemos un for que pa eso estan las listas
            for (let i = 0; i < listaRopa.length; i++) {
                
                //cogemos y por cada articulo creamos el Articulo DOM
                const divArticulo = crearArticuloEnDOM(listaRopa[i])
                //y ahora que ya hemos creado la card de articulo (un div que lo tieene todo dentro)
                //lo metemos dondee queriamos
                
                    //IMPORTANTE, ANTES DE DESCOMENTAR LA SIGUIENTE LINEA BORRA EL CONTENIDO DE DIV CON LA class="fila"
                //elementoContendorDOM.appendChild(divArticulo)
            }
        })

