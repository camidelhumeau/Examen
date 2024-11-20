/***
Autor: Ana Camila Nambo Delhumeau
Fecha: 20/11/2024
Lenguaje: JavaScript
***/
document.addEventListener("keydown", function(event){
    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){  //relaciona la tecla con el mensaje que se va a mostrar
        elemento.className = "Cuerpo00";} 

    if (event.key ==="2"){
        elemento.className = "Cuerpo01";}

    if(event.key ==="3"){
        elemento.className = "Cuerpo02";}

    if(event.key ==="4"){
        elemento.className = "Cuerpo03";}

    if(event.key ==="5"){
        elemento.className = "Cuerpo04";}


});
document.addEventListener("keydown", function(event){console.log(event)}); //sirve para escuchar a la consola en la tecla presionada
// Examen Diseño web
// Diseño de la comunicación gráfica
// Profesor: Rogelio Montelongo Sosa