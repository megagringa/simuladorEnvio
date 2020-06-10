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

    //Campos de formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}






//Funciones
function inicioApp(){
    //deshabilita el envio
    btnenviar.disabled = true;

}

// valida que el campo tenga algo escrito
function validarCampo(){

    //se valida la longitud del texto y que no este vacio
    validarLogitud(this);

    //Validar unicamente el email
    if(this.type === 'email'){
        validar(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value  !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnenviar.disabled = false;
        }
        
    }
}

function validarCampo(campo){
        if(campo.value.length > 0){
            campo.style.borderBottomColor = green;
            campo.classList.remove('error');
        }else{
            campo.style.borderBottomColor = red;
            campo.classList.add('error');
        }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1 ){
        campo.style.borderBottomColor = green;
            campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = red;
            campo.classList.add('error');
    }

}