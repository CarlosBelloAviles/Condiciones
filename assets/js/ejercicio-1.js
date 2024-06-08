/*Ejercicio Uno*/

const imagenJavascript = document.querySelector("#imagen")
let border = false

imagenJavascript.addEventListener("click", () => {
    if (border == false){
        imagenJavascript.style.border = "solid red 2px"
        border = true
    } else {
        imagenJavascript.style.border = "none"
        border = false
    }
}) 


