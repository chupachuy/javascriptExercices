import hamburguerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import { shortCuts, moveBall } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton-scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDevideinfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeoLocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import Draw from "./dom/sorteo.js";
import slider from "./dom/carrucel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"),

    alarm("assets/alarm-clock.mp3", "#iniciar-alarma", "#detener-alarma");
    countDown("countdown", "Dec 24,2023 03:23:19", "Feliz Cumpleaños Jesus");

    scrollTopButton(".scroll-top-button");

    responsiveMedia("youtube","(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=ybcxIpb-R_0">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/ybcxIpb-R_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)", `<a href="https://www.google.com/maps/d/embed?mid=1eBbVFuozrQtg5TqhHP0sji9lgR8&hl=en_US&ehbc=2E312F">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/d/embed?mid=1eBbVFuozrQtg5TqhHP0sji9lgR8&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>`);

    responsiveTester("responsive-tester");

    userDevideinfo("user-device");

    webCam("webcam");
    
    getGeoLocation("geolocation");

    searchFilters(".card-filter", ".card");

    Draw("#winner-btn", ".player");

    slider();

    scrollSpy();
    smartVideo();
    contactFormValidations();

})

d.addEventListener("keydown", e =>{
    shortCuts(e);
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();
speechReader();