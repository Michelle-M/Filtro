// Tenemos un listado de productos

var productos = [
  {nombre: "Air Jordan 1", tipo: "air jordan 1", color: "blanco", img: "img/1-roja.jpg"},
  {nombre: "Air Jordan 1", tipo: "air jordan 1", color: "negro", img: "img/1-rojaynegra.jpg"},
  {nombre: "Air Jordan 2", tipo: "air jordan 2", color: "rojo", img: "img/2-blanca.jpg"},
  {nombre: "Air Jordan 2", tipo: "air jordan 2", color: "negro", img: "img/2-blancaynegra.jpg"},
  {nombre: "Air Jordan 3", tipo: "air jordan 3", color: "blanco", img: "img/3-blanca.jpg"},
  {nombre: "Air Jordan 3", tipo: "air jordan 3", color: "negro", img: "img/3-negra.jpg"},
  {nombre: "Air Jordan 4", tipo: "air jordan 4", color: "blanco", img: "img/4-blanco.jpg"},
  {nombre: "Air Jordan 4", tipo: "air jordan 4", color: "negro", img: "img/4-negra.jpg"},
  {nombre: "Air Jordan 4", tipo: "air jordan 4", color: "rojo", img: "img/4-rojo.jpg"}
]
  
// Seleccionamos el listado apenas empezamos, porque
// queremos tener esta variable disponible en todo nuestro codigo

var listado = document.getElementById("lista-de-productos")
  
// Para mostrarlos, recorremos el listado con un for 

for (let i = 0; i < productos.length; i++) {
  // Creamos un div, le añadimos el nombre y la imagen 
  var div = document.createElement("div")
  div.classList.add("producto");
  
  var titulo = document.createElement("p")
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
    
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  var botonVer = document.createElement('button');
  botonVer.classList.add('boton-negro');
  botonVer.textContent = 'VER';
  
  div.appendChild(titulo)
  div.appendChild(imagen)
  div.appendChild(botonVer)
  
  // Agregamos el div al listado 
  listado.appendChild(div)
}
  
var botonDeFiltro = document.querySelector("button")
  
botonDeFiltro.onclick = function() {
  // primero, recorremos con un while todos los "hijos" del listado y los borramos
  /*while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }*/
  
  // despues les toca a uds el resto :)
  var busqueda = document.querySelector('input');
  
  for ( var i = 0; i < productos.length; i++ ) {
    if ( busqueda.value !== productos[i].tipo ) {
      console.log('Recorre a los distintos modelos');
      listado.removeChild(listado.firstChild); //si no busco aj 4, solo deja a dos modelos 4 pero si busco aj4 muestra a los 3 modelos
    }
  }
}
  
// Tarea: 
// Si el usuario escribe "zapato", mostrar los zapatos //lo cambio por modelo
// Si el usuario escribe "bota", mostrar las botas
// Si el usuario escribe "negro", mostrar el zapato y la bota negros
// Si el usuario escribe "azul", mostrar el zapato y la bota azules
  
// Para puntos extra:
// Dejar la pagina mas linda con CSS 