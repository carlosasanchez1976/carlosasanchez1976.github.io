const ExpProfMostrar = document.getElementById("ExpMas");
const ExpProfOcultar = document.getElementById("ExpMenos");

// Debería cargarse la experiencia en un elemenot JSON
let strExperiencia = "Acá se muestra toda mi carrera profesional";

ExpProfOcultar.style.visibility = "hidden";
document.getElementById("Experiencia").style.visibility = "hidden";

ExpProfMostrar.addEventListener("click" ,()=>{

    
    document.getElementById("Experiencia").style.visibility = "visible";
    ExpProfMostrar.style.visibility = "hidden";
    ExpProfOcultar.style.visibility = "visible";

    // Aca deberiamos recorrer los elementos en el JSON, y forEach() de esos
    //  elementos, cargariamos un elemento dentro del texto (
    //  deberíamos crear un <div> por cada elemento Json
    
    document.getElementById("ExpDetalle").innerText = strExperiencia;



});



ExpProfOcultar.addEventListener("click" ,()=>{

    ExpProfOcultar.style.visibility = "hidden";
    document.getElementById("Experiencia").style.visibility = "visible";
    ExpProfMostrar.style.visibility = "visible";
    document.getElementById("ExpDetalle").innerText = "";
});