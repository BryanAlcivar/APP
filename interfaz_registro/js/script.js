function validar(){

const nombre= document.getElementById("Nombres");
const cedula= document.getElementById("Cedula");
const numero= document.getElementById("Numero");
const email= document.getElementById("Correo");
const contra= document.getElementById("Contraseña");
const dia= document.getElementById("Dias");
const form= document.getElementById("form-codigo");
const listinputs= document.querySelectorAll(".input-group")


    if(nombre.value.length < 7){
        let entrada = document.querySelector(".Nombres");
        entrada.lastElementChild.innerHTML="Nombre no Valido";
        return false;
    }
    if(cedula.value.length < 10){
        let entrada = document.querySelector(".Cedula");
        entrada.lastElementChild.innerHTML="Minimo 10 digitos";
        return false;
    }
    if(numero.value.length < 10 || isNaN(numero.value)){
        let entrada = document.querySelector(".Numero");
        entrada.lastElementChild.innerHTML="EL numero telefonico debe contener 10 digitos";
        return false;
    }
    if(email.value.length < 7){
        let entrada = document.querySelector(".Correo");
        entrada.lastElementChild.innerHTML="Correo no valdido";
        return false;
    }
    if(contra.value.length < 7){
        let entrada = document.querySelector(".Contraseña");
        entrada.lastElementChild.innerHTML="Contraseña no valida";
        return false;
    }
    if(dia.value.length < 1 || isNaN(dia.value)){
        let entrada = document.querySelector(".Dias");
        entrada.lastElementChild.innerHTML="Numero de dias no valido";
        return false;
    }
}
