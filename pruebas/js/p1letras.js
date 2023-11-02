let correo = "jorgebarvaz@gmail.com"

//split 

let nombre = correo.split("@")[0]//antes de @
let dominio = correo.split("@")[1]//despues de @
console.log(nombre);
console.log(dominio);


//substing
nombre = correo.substring(0,correo.indexOf("@"))//corte empieza en 0 y despues dame la posicion del @
dominio = correo.substring(correo.indexOf("@")+1)//
console.log(nombre);
console.log(dominio);

//letra por letra 
correo.split("").forEach((element)=>{
    console.log(element);
})