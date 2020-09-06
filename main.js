// playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada.
// Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// let respuesta1 = prompt("Ingresa el nombre de tu cancion favorita");
// let respuesta2 = prompt("Ingresa el nombre de tu cancion favorita");
// let respuesta3 = prompt("Ingresa el nombre de tu cancion favorita");
// let respuesta4 = prompt("Ingresa el nombre de tu cancion favorita");
// let respuesta5 = prompt("Ingresa el nombre de tu cancion favorita");

// let tema1 = document.querySelector("#tema1");
// tema1.textContent = respuesta1;

// let tema2 = document.querySelector("#tema2");
// tema2.textContent = respuesta2;

// let tema3 = document.querySelector("#tema3");
// tema3.textContent = respuesta3;

// let tema4 = document.querySelector("#tema4");
// tema4.textContent = respuesta4;
// let tema5 = document.querySelector("#tema5");
// tema5.textContent = respuesta5;

// Crear un documento html con una adivinanza (o una pregunta)
// y 3 botones con posibles respuestas. Si se clickea la respuesta correcta,
// se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!)
//  debajo de la adivinanza,

//  y el botón seleccionado debe ponerse con un color de fondo verde.

//  Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique
// (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");

boton1.onclick = () => {
  const botonRojo1 = document.querySelector("#boton1");
  botonRojo1.classList.add("rojo");
  const botonRojo2 = document.querySelector("#boton2");
  botonRojo2.classList.add("rojo");
  const botonVerde = document.querySelector("#boton3");
  botonVerde.classList.add("verde");
  alert("respuesta incorrecta");
};

boton2.onclick = () => {
  const botonRojo2 = document.querySelector("#boton2");
  botonRojo2.classList.add("rojo");
  const botonRojo1 = document.querySelector("#boton1");
  botonRojo1.classList.add("rojo");
  const botonVerde = document.querySelector("#boton3");
  botonVerde.classList.add("verde");
  alert("respuesta incorrecta");
};

boton3.onclick = () => {
  const botonVerde = document.querySelector("#boton3");
  botonVerde.classList.add("verde");
  alert("Correcto!");
};

// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los
//  siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente,
//  y actualizar el número mostrado.

const botonMenosUno = document.querySelector("#menosUno");
const botonMasUno = document.querySelector("#masUno");
const botonMenosCinco = document.querySelector("#menosCinco");
const botonMasCinco = document.querySelector("#masCinco");
const botonMenosDiez = document.querySelector("#menosDiez");
const botonMasDiez = document.querySelector("#masDiez");
const numeroParaSumar = document.querySelector("#numero");
let numeroString = numeroParaSumar.textContent;
let numeroString2 = Number(numeroString);
const divColor = document.querySelector("#divColorido");

botonMenosUno.onclick = () => {
  divColor.className = "";
  divColor.classList.add("menosUno");
  const resta = (numeroString2 -= 1);
  numeroParaSumar.textContent = resta;
};

botonMasUno.onclick = () => {
  divColor.className = "";
  divColor.classList.add("masUno");
  const resta = (numeroString2 += 1);
  numeroParaSumar.textContent = resta;
};

botonMenosCinco.onclick = () => {
  divColor.className = "";
  divColor.classList.add("menosCinco");
  const resta = (numeroString2 -= 5);
  numeroParaSumar.textContent = resta;
};
botonMasCinco.onclick = () => {
  divColor.className = "";
  divColor.classList.add("masCinco");
  const resta = (numeroString2 += 5);
  numeroParaSumar.textContent = resta;
};
botonMenosDiez.onclick = () => {
  divColor.className = "";
  divColor.classList.add("menosDiez");
  const resta = (numeroString2 -= 10);
  numeroParaSumar.textContent = resta;
};
botonMasDiez.onclick = () => {
  divColor.className = "";
  divColor.classList.add("masDiez");
  const resta = (numeroString2 += 10);
  numeroParaSumar.textContent = resta;
};

// Crear un documento html que tenga 6 botones con un color de fondo distinto,
// y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su
// color de fondo al mismo color de fondo que el del botón clickeado.

// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos,
// se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");
const li5 = document.querySelector("#li5");
const li6 = document.querySelector("#li6");
const li7 = document.querySelector("#li7");
const li8 = document.querySelector("#li8");
const li9 = document.querySelector("#li9");
const li10 = document.querySelector("#li10");

li1.onclick = () => {
  li1.classList.remove("liNegrita");
  li1.classList.add("gris");
};
li2.onclick = () => {
  li2.classList.remove("liNegrita");
  li2.classList.add("gris");
};
li3.onclick = () => {
  li3.classList.remove("liNegrita");
  li3.classList.add("gris");
};

li4.onclick = () => {
  li4.classList.remove("liNegrita");
  li4.classList.add("gris");
};

li5.onclick = () => {
  li5.classList.remove("liNegrita");
  li5.classList.add("gris");
};

li6.onclick = () => {
  li6.classList.remove("liNegrita");
  li6.classList.add("gris");
};

li7.onclick = () => {
  li7.classList.remove("liNegrita");
  li7.classList.add("gris");
};

li8.onclick = () => {
  li8.classList.remove("liNegrita");
  li8.classList.add("gris");
};

li9.onclick = () => {
  li9.classList.remove("liNegrita");
  li9.classList.add("gris");
};

li10.onclick = () => {
  li10.classList.remove("liNegrita");
  li10.classList.add("gris");
};

// Crear un documento html con

// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y
// el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%

const barra = document.querySelector("#progreso");
const botonMenos = document.querySelector("#menos");
const botonMas = document.querySelector("#mas");
const porcentaje = document.querySelector("#porcentaje");
let nroPorCiento = porcentaje.textContent;
let nroPorCiento2 = Number(nroPorCiento);

const superMegaFuncion = () => {
  if (nroPorCiento2 == 10) {
    barra.className = "";
    barra.classList.add("diez");
  }
  if (nroPorCiento2 == 20) {
    barra.className = "";
    barra.classList.add("veinte");
  }
  if (nroPorCiento2 == 30) {
    barra.className = "";
    barra.classList.add("treinta");
  }
  if (nroPorCiento2 == 40) {
    barra.className = "";
    barra.classList.add("cuarenta");
  }
  if (nroPorCiento2 == 50) {
    barra.className = "";
    barra.classList.add("cincuenta");
  }
  if (nroPorCiento2 == 60) {
    barra.className = "";
    barra.classList.add("sesenta");
  }
  if (nroPorCiento2 == 70) {
    barra.className = "";
    barra.classList.add("setenta");
  }
  if (nroPorCiento2 == 80) {
    barra.className = "";
    barra.classList.add("ochenta");
  }
  if (nroPorCiento2 == 90) {
    barra.className = "";
    barra.classList.add("noventa");
  }
  if (nroPorCiento2 == 100) {
    barra.className = "";
    barra.classList.add("cien");
  } else {
    barra.classList.add("clase");
  }
};

botonMas.onclick = () => {
  const sumar = (nroPorCiento2 += 10);
  porcentaje.textContent = sumar;
  superMegaFuncion();
  console.log(nroPorCiento2);
};
botonMenos.onclick = () => {
  const restar = (nroPorCiento2 -= 10);
  porcentaje.textContent = restar;
  superMegaFuncion();
  console.log(nroPorCiento2);
};

// modo-oscuro
// Crear un documento html con un título, un párrafo y un bótón con un ícono.
//  Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono.
//  Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

const botonOscuro = document.querySelector("#oscuro");
const botonClaro = document.querySelector("#claro");
const body = document.querySelector("body");

botonOscuro.onclick = () => {
  body.classList.add("oscuro-encendido");
  botonOscuro.classList.add("ocultar");
  botonClaro.classList.remove("ocultar");
};

botonClaro.onclick = () => {
  body.classList.remove("oscuro-encendido");
  botonOscuro.classList.remove("ocultar");
  botonClaro.classList.add("ocultar");
};

// scroll
// Crear un documento html con un body de 2000px de alto.
//  Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange

// funciona pero es horrible con esos colores
// window.onscroll = () => {
//   if (
//     document.body.scrollTop <= 500 ||
//     document.documentElement.scrollTop <= 50
//   ) {
//     document.getElementById("cuerpito").className = "scroll-0-500";
//   }
//   if (
//     document.body.scrollTop >= 501 ||
//     document.documentElement.scrollTop >= 501
//   ) {
//     document.getElementById("cuerpito").className = "scroll-501-1000";
//   }
//   if (
//     document.body.scrollTop >= 1001 ||
//     document.documentElement.scrollTop >= 1001
//   ) {
//     document.getElementById("cuerpito").className = "scroll-1001-1500";
//   }
//   if (
//     document.body.scrollTop >= 1501 ||
//     document.documentElement.scrollTop >= 1501
//   ) {
//     document.getElementById("cuerpito").className = "scroll-1501-2000";
//   }
// };

// imagenes
// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto).
//  Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

const flower1 = document.querySelector("#flower1");
const flower2 = document.querySelector("#flower2");
const flower3 = document.querySelector("#flower3");
const flower4 = document.querySelector("#flower4");
const flower5 = document.querySelector("#flower5");

flower1.onclick = () => {
  flower5.src = "img/flower1.jpg";
};

flower2.onclick = () => {
  flower5.src = "img/flower2.jpg";
};
flower3.onclick = () => {
  flower5.src = "img/flower3.jpg";
};
flower4.onclick = () => {
  flower5.src = "img/flower4.jpg";
};

flower1.onmouseenter = () => {
  flower5.src = "img/flower1.jpg";
};

flower2.onmouseenter = () => {
  flower5.src = "img/flower2.jpg";
};
flower3.onmouseenter = () => {
  flower5.src = "img/flower3.jpg";
};
flower4.onmouseenter = () => {
  flower5.src = "img/flower4.jpg";
};

// peliculas
// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros
// (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género,
// y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen
//  que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

const imagenesComedy = document.getElementsByClassName("comedy");
const imagenesRomance = document.querySelectorAll(".romance");
const imagenesSciFi = document.querySelectorAll(".sci-fi");
const botonComedy = document.querySelector("#comedy");
const botonRomance = document.querySelector("#romance");
const botonSciFi = document.querySelector("#scifi");
const botonTodas = document.querySelector("#todas");
const imagenesTodas = document.querySelectorAll(".todita");

const verificarRomance = () => {
  if (botonRomance.onclick) {
    for (let rVerificado of imagenesRomance)
      rVerificado.classList.remove("ocultar");
  }
};
const verificarComedy = () => {
  if (botonComedy.onclick) {
    for (let cVerificado of imagenesComedy)
      cVerificado.classList.remove("ocultar");
  }
};
const verificarScifi = () => {
  if (botonComedy.onclick) {
    for (let sVerificado of imagenesSciFi)
      sVerificado.classList.remove("ocultar");
  }
};
botonRomance.onclick = () => {
  for (let imagen of imagenesComedy) {
    imagen.classList.add("ocultar");
  }
  for (let imagen of imagenesSciFi) {
    imagen.classList.add("ocultar");
  }
  verificarRomance();
};

botonComedy.onclick = () => {
  for (let imagen of imagenesRomance) {
    imagen.classList.add("ocultar");
  }
  for (let imagen of imagenesSciFi) {
    imagen.classList.add("ocultar");
  }
  verificarComedy();
};

botonSciFi.onclick = () => {
  for (let imagen of imagenesSciFi) {
    imagen.classList.add("ocultar");
  }
  for (let imagen of imagenesComedy) {
    imagen.classList.add("ocultar");
  }
  verificarScifi();
};
botonTodas.onclick = () => {
  for (let toditas of imagenesTodas) {
    toditas.classList.remove("ocultar");
  }
};
// // pin
// // En un documento html crear botones con números del 0 al 9, un botón para reiniciar,
//  un botón para borrar, y un elemento de texto.
// // Cuando se presionan los botones de números, se tienen que ir agregando los números en
//  el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
// // El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y
//  se clickea un nuevo número, no debe pasar nada.
// // El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// // El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado
//  es 2544 y se presiona la tecla borrar, debe quedar en 254

const cero = document.querySelector("#cero");
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");
const borra = document.querySelector("#borra");
const reiniciar = document.querySelector("#reiniciar");
let pNros = document.querySelector("#totalNros");

cero.onclick = () => {
  let listo = "0" + pNros.textContent;
  pNros.textContent = listo;
};

uno.onclick = () => {
  let listo = "1" + pNros.textContent;
  pNros.textContent = listo;
};

dos.onclick = () => {
  let listo = "2" + pNros.textContent;
  pNros.textContent = listo;
};
tres.onclick = () => {
  let listo = "3" + pNros.textContent;
  pNros.textContent = listo;
};
cuatro.onclick = () => {
  let listo = "4" + pNros.textContent;
  pNros.textContent = listo;
};
cinco.onclick = () => {
  let listo = "5" + pNros.textContent;
  pNros.textContent = listo;
};
seis.onclick = () => {
  let listo = "6" + pNros.textContent;
  pNros.textContent = listo;
};
siete.onclick = () => {
  let listo = "7" + pNros.textContent;
  pNros.textContent = listo;
};
ocho.onclick = () => {
  let listo = "8" + pNros.textContent;
  pNros.textContent = listo;
};
nueve.onclick = () => {
  let listo = "9" + pNros.textContent;
  pNros.textContent = listo;
};

reiniciar.onclick = () => {
  let listo = "";
  pNros.textContent = listo;
};

borra.onclick = () => {
  const str = pNros.textContent;
  const newStr = str.substring(0, str.length - 1);
  pNros.textContent = newStr;
};

// favoritos
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes,
// agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes,
// se debe agregar la misma imagen en el contenedor de favoritos.
// Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.
