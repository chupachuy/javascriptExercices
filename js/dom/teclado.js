const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    let limitsBall = $ball.getBoundingClientRect();
    let limitsStage = $stage.getBoundingClientRect();
    /*console.log(e.keyCode);

    console.log(limitsBall);
    console.log(limitsStage);*/

    //const move = (direction) =>{}

    switch(e.keyCode){
        case 37:
            
            /*** Izquierda */
            //move("left");
            if(limitsBall.left > limitsStage.left + 10){
                e.preventDefault();
                x--;
            } 
        break;
        case 38:
            /* arriba **/
           // move("up");
           if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
           }
        break;
        case 39:
           
            /*** DERECHA  */
            //move("right");
            if(limitsBall.right < limitsStage.right - 32){
                e.preventDefault();
                x++;
            } 
        break;
        case 40:
            
            /** ABAJO */
            //move("down");
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            } 
        break;
        default:
        break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`; 
}

export function shortCuts(e){
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Control. ${e.ctrlKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(e);
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con Teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con Teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado una aviso con Teclado");
    }*/
}