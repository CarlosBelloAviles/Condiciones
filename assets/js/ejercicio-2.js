/*Ejercicio Dos*/

const btn = document.querySelector("#btn")
const inputUno = document.querySelector("#input-1")
const inputDos = document.querySelector("#input-2")
const inputTres = document.querySelector("#input-3")
const parrafo = document.querySelector("#parrafo")


btn.addEventListener("click" , () => {
    const valueUno = inputUno.value 
    const valueDos = inputDos.value 
    const valueTres = inputTres.value 
    const suma = Number(valueUno) + Number(valueDos) + Number(valueTres)
   
   if(suma <= 10){
    parrafo.innerHTML = "Llevas "  +suma  + " stickers"

   } else{
    parrafo.innerHTML = "Llevas demasiados stickers"
   }
})
