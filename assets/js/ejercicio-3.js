const boton = document.querySelector("#boton")
const mensajeFinal = document.querySelector("#mensajefinal")

boton.addEventListener("click" , () => {
   const selectUno = document.querySelector("#select-1").value
   const selectDos = document.querySelector("#select-2").value
   const selectTres = document.querySelector("#select-3").value

    total = selectUno + selectDos + selectTres
    
    if(total == "911"){
        mensajeFinal.innerHTML = "Password 1 correcto"
    } else if (total == "714") {
        mensajeFinal.innerHTML = "Password 2 correcto"
    } else {
        mensajeFinal.innerHTML = "Password Incorrecto"
    }


} )