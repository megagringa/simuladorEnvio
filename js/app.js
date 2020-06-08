//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnenviar = document.getElementById('enviar');









//Event Listener

eventListeners();

function eventListeners(){
    //inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}






//Funciones
function inicioApp(){
    //deshabilita el envio
    btnenviar.disabled = true;

}
