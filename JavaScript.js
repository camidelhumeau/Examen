/***
Autor: Ana Camila Nambo Delhumeau
Fecha: 20/11/2024
Lenguaje: JavaScript
***/
document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){
        elemento.className = "Cuerpo00";}

    if (event.key ==="2"){
        elemento.className = "Cuerpo01";}

    if(event.key ==="3"){
        elemento.className = "Cuerpo02";} //sirven para escuchar el mensaje del teclado y cambiar los colores del fondo y/o letras

    if(event.key ==="4"){
        elemento.className = "Cuerpo03";}

    if(event.key ==="5"){
        elemento.className = "Cuerpo04";}


});

document.addEventListener("keydown", function(event){console.log(event)});
const texto = document.getElementById("Texto");

document.addEventListener("keydown",function(event){            
       const texto = document.getElementById("Texto");
       
       if(event.key==="ArrowUp"){   
              texto.textContent="Flecha arriba";}   //indica la acción de presionar la tecla para que aparezca el mensaje hacia arriba o hacia abajo (arriba)

       else if(event.key==="ArrowDown"){   
              texto.textContent="Flecha abajo";}    //indica la acción de presionar la tecla para que aparezca el mensaje hacia arriba o hacia abajo (abajo)

});
// Examen Diseño web
// Diseño de la comunicación gráfica
// Profesor: Rogelio Montelongo Sosa
