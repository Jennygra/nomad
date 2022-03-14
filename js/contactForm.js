const contactForm = document.querySelector(".contactForm"); 

const name = document.querySelector("#name"); 
const nameError = document.querySelector("#nameError"); 

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError"); 

const subject = document.querySelector("#subject"); 
const subjectError = document.querySelector("#subjectError"); 

const message = document.querySelector("#message"); 
const messageError = document.querySelector("#messageError"); 

function validateForm() {
    event.preventDefault(); 

    let isValidated = true; 

    if(formChecker(name.value,4) === true) {
        nameError.style.display = "none"; 
    } else {
        nameError.style.display = "block";
        isValidated = false; 
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none"; 
    } else {
        emailError.style.display = "block"; 
        isValidated = false; 
    }

    if(formChecker(subject.value,14) === true) {
        subjectError.style.display = "none"; 
    } else {
        subjectError.style.display = "block"; 
        isValidated = false; 
    }

    if(formChecker(message.value,24) === true) {
        messageError.style.display = "none"; 
    } else {
        messageError.style.display = "block"; 
        isValidated = false; 
    }

    return isValidated; 
}

const subContainer = document.querySelector(".form-subcontainer");

function btnFunctionForm() {
    if(!validateForm()) {
        return false; 
    } else {
        subContainer.innerHTML += `
        <div class="successful-msg"> 
        <p>Your form has been submitted, I will come back to you within two days!</p> 
        </div>
        `; 
        
        return; 
    }
}