
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJLMNOPQRSTUVXZ!@#$%¨&*"
let novaSenha = "";

sizepassword.innerHTML = sliderElement.value;
sliderElement.oninput = function () {
    sizepassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = ""

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerpassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;

}

function copypassword(){
    alert("senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);

    

    
    
}

