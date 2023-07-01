/** Temporizador **/

/*setTimeout(()=>{

    console.log("Se ejecuta una sola vez");

}, 5000);

setInterval(() => {
    console.log("INterval cada 5 segundos");
}, 4000);*/


/*let temporizador =  setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);

setInterval(() =>{
    console.log(new Date().toLocaleTimeString());
}, 1000);*/


/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */


/*
Procesamiento Single hread y  Multi Thread
Operaciones de CPU y Operaciones de I / O
operaciones Concurrentes y Paralelas
OPeraciones Bloqueantes y no Bloqueantes
Operaciones Sincoronas y Asincronas


JavaScript usa un modelo asincrono no bloqueante con un loop de eventos implementado den un solo hilo para la realizacionde entradas y salidas
*/

/** Codigo Sincrono Bloqueate **/

/*(() =>{
    console.log("Codigo Sincrono");
    console.log("Inicio");

    function dos(){
        console.log("dos");
    }

    function uno(){
        console.log("uno");
        dos();
        console.log("Tres");
    }
    uno();
    console.log("FIN");
})();*/


/** Condigo Asincorno Bloqueante **/

/*(() => {

    console.log("Codigo Asincrono");
    console.log("inicio");

    function dos(){
        setTimeout(function () {
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(function (){
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");

})();*/

/*** CALL BACKS ***/

/*function cuadradoCallback(value, callback){

    setTimeout( () => {
        callback(value, value*value);
    }, 0 | Math.random() * 1000);

}

cuadradoCallback(0,(value, result) => {
    console.log("inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
});*/

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** PROMESAS */

/*function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject("Error el valor ingresado no es un numero");
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                value: value,
                result: value * value
            });
        }, 0 | Math.random()*5000);
    });

}

cuadradoPromise(0)
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
})
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
})
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(true);
})
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
})
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
})
.then((obj) =>{
    //console.log(obj);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin del promise");
})
.catch( err => console.error(err));*/

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** ASYN y WAIT **/

/*function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject("Error el valor ingresado no es un numero");
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                value: value,
                result: value * value
            });
        }, 0 | Math.random()*5000);
    });

}*/

/*async function funcionAsincronDeclarada(){
    try{
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise("4");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log("Fin de Asinc Function");
    } catch(err){
        console.error(err => console.error(err));
    }
}*/

/*const funcionAsincronExpresada = async () => {
    try{
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log("Fin de Asinc Function");
    } catch(err){
        console.error(err => console.error(err));
    }
}

// funcionAsincronDeclarada();

funcionAsincronExpresada();*/

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

//*** SETS */
/*const set = new Set([1,2,3,3,4,true, false,false, {}, {}, "hola", "HOLA"]);
console.log("Recorriendo los elementos de el set");
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);

console.log("Recorriendo los elementos de el set2");
console.log(set2);
console.log(set2.size);

for( item of set){
    console.log(item);
}

set2.forEach(item => console.log(item));

let arr = Array.from(set);
console.log("Convierte el set en Array");
console.log(arr);
console.log(arr[2]);*/

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/**  MAPS */

//const mapa = new Map();

/*mapa.set("Nombre", "Jesus");
mapa.set("Apellido", "Lopez");
mapa.set("Edad", 45);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("Correo"));
console.log(mapa.has("Nombre"));
console.log(mapa.get("Nombre"));
mapa.set("Nombre", "Lorena Pacheco");
console.log(mapa.get("Nombre"));
mapa.delete("Apellido");
console.log(mapa);
console.log("Iteracion for of");
for(let [key, value] of mapa){
    console.log(`"LLAVE: " ${key}: "VALOR: " ${value}`);
}*/

/* const mapa2 = new Map([
    ["Nombre", "Lorena"],
    ["Edad", 7],
    ["Animal", "Gato"]
]);


console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2); */

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** ITERABLES & ITERATORS */

/*const iterable = "Hola Mundo";
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}*/

/**** GENERATORS *///}

/*function* iterable(){
    yield "HOLA";
    console.log("Hola Consola");
    yield "Hola 2"
    console.log("Seguimos con mas instrucciones de nuestro codigo hoy"),
    yield "Hola3";
    yield "Hola4";
}

let iterador = iterable();

for(let item of iterador){
    console.log(item);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() =>{
       return console.log({valor, resultado: valor * valor});
    }, Math.random() * 10000);

    
}

function* generador(){
   yield console.log(cuadrado(1));
   yield console.log(cuadrado(2));
   yield console.log(cuadrado(3));
   yield console.log(cuadrado(4));
   yield console.log(cuadrado(5));
}
let gen = generador();

for(let item of gen){
    console.log(item);
}*/


/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** PROXIES */

/*const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no exisite en el objeto persona`);
        }

        if((prop === "nombre" || prop === "apellido" ) && (!(/^[a-z-A-Z]+$/.test(valor)))){
            return console.warn(`La propiedad "${prop}" esta mal formada`);
        }


        obj[prop] = valor;
    }
}

const jon = new Proxy(persona, manejador);

jon.nombre = "Lorena";
jon.apellido = "Pacheco",
jon.edad = 21,
jon.twitter = "jesuslv@htmail.com"

console.log(jon);
console.log(persona); */

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/*** PROPIEDADES DINAMICAS DE LOS OBJETOS */

/*const objetoUsuarios ={
    [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor Aleatorio"
}

console.log(objetoUsuarios);

const usuario = ["Jon", "Irma", "Miguel", "Cala", "kenai"];
usuario.forEach((usuario, index) => objetoUsuarios[`ìd:${index}`] = usuario);
console.log(objetoUsuarios); */

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** THIS!!!!! */

/* console.log(this);
console.log(window);
console.log(this === window);

this.nombre  = "Contexto Global";

console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }

}

obj.imprimir();

const obg2 = {
    nombre: "Contextp Objeto 2",
    imprimir
}

obg2.imprimir();


const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }

}

obj3.imprimir();

function Persona(nombre){
    this.nombre = nombre;
    // return console.log(this.nombre);
    // return function(){
    //    console.log(this.nombre, 22);
    //}

   return () => console.log(this.nombre);
}

let jon = new Persona("Jon");

jon(); */

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */


/**  CALL, APPLY, BIND */

/*console.log(this);

this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el  ${this.lugar}`);
}

saludar("Hoola", "China"); 

const obj = {
    lugar: "Contexto Objeto"
}

//saludar.call(obj, "Hola", "Lorena");
//saludar.call(null, "Hola", "Lorena");
//saludar.call(this, "Hola", "Lorena");
//saludar.apply(obj, ["Hola", "Raquel"]);
//saludar.apply(null, ["Hola", "Raquel"]);
//saludar.apply(this, ["Hola", "Raquel"]);

const persona = {
    nombre: "Jon",
    saludar (){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(this)
}

console.log(otraPersona); */

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

/** JSON   ***** */

