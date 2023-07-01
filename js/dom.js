//console.log(document)

/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((element) => console.log(element));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
document.documentElement.lang = "en";
document.documentElement.setAttribute("lang", "es-MX");
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://google.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));*/


// Data-attributess

/*const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Hola nuevo modelo");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi Facebook";
console.log($linkDOM.dataset.description);*/

/*const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
//console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.border = "2px"

const $html = document.documentElement,  $body = document.documentElement;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$body.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);*/


/*const $card = document.querySelector(".card");
console.log($card);

console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"))
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia");

$card.classList.remove("rotate-135");*/

/*const $whatisDOM = document.getElementById("que-es");

let text = `
<p>modelo de Objetos del Documento (<b><em> DOM -  Document Object Model</b></em>) es un API para documentos HTML y XML</p>
<p>Provee una represenacion estructural del codumento, permitiendo modifical su contenido y presentacion visual mediante codigo JS</p>
`;

//$whatisDOM.innerText = text;
//$whatisDOM.textContent = text;
//$whatisDOM.innerHTML = text;
$whatisDOM.outerHTML = text; */


/*const $cards = document.querySelector(".cards");

console.log($cards);

console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */

/*const $figure = document.createElement("figure"),
$img= document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptiontext = document.createTextNode("Animales"),
$cards = document.querySelector(".cards");

const $figure2 = document.createElement("figure");

$figure.classList.add("card");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Hoola");
$figcaption.appendChild($figcaptiontext);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="Hoola">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año");

document.body.appendChild($ul);

estaciones.forEach(elemento => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $ul.appendChild($li);
});

 const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
 $ul2 = document.createElement("ul");

 document.write("<h3>Continentes del Mundo</h3>");
 document.body.appendChild($ul2);
 $ul2.innerHTML = "";

continentes.forEach(elemento => $ul2.innerHTML += `<li>${elemento}</li>`);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $fragment.appendChild($li);
});

document.write('<h3>Meses del Año</h3>');
$ul3.appendChild($fragment);

document.body.appendChild($ul3) */


/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */


/*const $cards = document.querySelector(".cards");
$template = document.getElementById("template-card").content,
$fragmento = document.createDocumentFragment();
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    }
]

cardContent.forEach( element => {
    $template.querySelector("img").setAttribute("src", element.img);
    $template.querySelector("img").setAttribute("alt", element.title);
    $template.querySelector("figcaption").textContent = element.title;

    let $clone = document.importNode($template, true);
    $fragmento.appendChild($clone);
});

$cards.appendChild($fragmento); */


/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */


/*onst $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt="Any"><figcaption></figcaption>`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Lorena");
//$cards.insertAdjacentHTML("afterbegin", $newCard);

//$cards.append($newCard);
$cards.after($newCard);*/

/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */

/*function holaMundo(){
    alert('Hola Mundo');
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"), 
$eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e) =>{
    alert("Manejador de eventosmultiples");
$eventoMultiple.addEventListener("click", holaMundo)
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(event);

});*/


/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */

/*function saludar(nombre = "Desconocida"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Lorena");
});

$eventoRemover = document.getElementById("remover-evento");

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick)*/

/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */


/*** BURBUJA Y CAPTURA  */

/*const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`HOOOLA te saluda ${this.className}, e click lo origino ${e.target.className}`);
}

$divsEventos.forEach((div) => {
    //Fase de Burbuja 
    //div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);

    // FASE DE CAPTURA
    //div.addEventListener("click", flujoEventos, true);
    div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true
    });


});*/


/******************************************************* */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */


/** stopPropagation PreventDefault */

/*const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");
console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hooola te saluda ${this}, el click que lo origino ${e.target.className}`);
    e.stopPropagation();
}

document.addEventListener("click", (e) => {
    console.log(`Click en`, e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hooooola Soy JEsus");
        e.preventDefault();
    }
});*/


/******************************************************* */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */


/*** Propiedades y Eventos ***/

/** BOM  Browser Object Model  */


/*window.addEventListener("resize", (e) =>{
    console.log("Evento Rezize");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(window.scrollY);
    console.log(window.scrollX);
    console.log(e);
});

window.addEventListener("scroll", (e)=>{
    console.log("Evento Scroll");
    console.log(window.scrollY);
    console.log(window.scrollX);
    console.log(e);
});*/

/*window.addEventListener("load", (e) => {

    console.log("Evento ON LOAD -----");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", (e) =>{

    console.log("Evento ON DOM CONTENT LOAD-----");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})*/

/*** METODOS */

/*const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;


$btnAbrir.addEventListener("click", (e) =>{
   ventana = window.open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", (e) => {
    ventana.close();
})
//$btnCerrar.addEventListener("click", (e) => {});
$btnImprimir.addEventListener("click",  (e) => {
    window.print();
}); */


//** OBJETOS HISTORIAL NAVEGADOR */

/*console.log("/***************** Objeto URL (locations) ***");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname); */



/**** OBJETO NAVIgATOR */

/*console.log(" ------------------- Objeto Navegador (navegador) --------------------  ");

console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storages);
console.log(navigator.usb);
console.log(navigator.userAgent); */