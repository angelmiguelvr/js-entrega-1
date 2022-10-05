let cantidad=prompt("Ingresa cantidad");
let interes= cantidad * porcentaje;
let porcentaje;

function porcentaje (porcenteje){
    if(typeof cantidad==Number && cantidad==0){
        console.log ("Escribe mas de 0");
    }
    if(typeof cantidad==Number && cantidad<=100){
        console.log (cantidad * .05);
    }
    if(typeof cantidad==Number && cantidad<=1000){
        console.log (cantidad * .3);
    }
    if(typeof cantidad==Number && cantidad<=10000){
        console.log (cantidad * 3);
    }
    /*else (typeof cantidad==Number && cantidad>=10000){
        console.log ("Los siento lo maximo son 1000");
    }*/
}


console.log("la cantidad prestada es", cantidad);
console.log("Los intereses son", interes);
