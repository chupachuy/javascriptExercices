/** XMLHTTPREQUEST */

(() =>{
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById("xhr");

    const $fragment = document.createDocumentFragment();

    //console.log(xhr);

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("exito");
            //console.log(xhr.responseText);

            let json = JSON.parse(xhr.responseText);
            //console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

            })

            $xhr.appendChild($fragment);
        }else{
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un Error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`

        }

        //console.log("este mensaje se mostrara de cualquier form")
        //console.log(xhr);
        
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();

})();

/**** FETCH */

(() => {
    
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();
    

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        //console.log(res);
        return res.ok? res.json(): Promise.reject(res);

    })
    .then(json => {
        //console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })

        $fetch.appendChild($fragment)
        
    })
    .catch(err =>{
        //console.log("Estamos en el Catch"+ err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
        
    })
    //.finally(() => console.log("Este codigo se ejecutará independiente mente de el reltado de la promesa") );


})();

(() =>{

    const $fetchasync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let resp = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await resp.json();

            //console.log(resp, json);

            //if(!(resp.ok)) throw new Error("Ocurrio un nuevo error al solicitar los datos");

            if(!(resp.ok)) throw {
                status: resp.status,
                statusText: resp.statusText
            }

            json.forEach(el =>{
                const $li =document.createElement("li");
                $li.innerHTML= `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            })

            $fetchasync.appendChild($fragment)

        } catch(err){
           // console.log("estoy en el catch y pasamos elerror", err);
           let mensaje = err.statusText || "Ocurrio un error";
           $fetchasync.innerHTML = `Error ${err.status}: ${mensaje}`;

        } finally {
            console.log("Esto se ejecuta independiente de el TRY o CATCH");
        }
            
    }

    getData();

})();

(() =>{

    const $fetchAxios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
        const json = res.data;

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })

        $fetchAxios.appendChild($fragment);

    })
    .catch(err =>{
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrio un Error";
        $fetchAxios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() =>{
        //console.log("este metodo se ejecutara independientemente del resultado de Axios");
    });

})();

(()=>{
    const $axiosAsync = document.getElementById("axios-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await res.data;
            console.log(res, json);

            json.forEach(el => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })

            $axiosAsync.appendChild($fragment)

        } catch(err) {
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`;
        } finally {
           console.log("Esto se ejecutara independientemente de el resultado")
        }
    }

    getData();


})();