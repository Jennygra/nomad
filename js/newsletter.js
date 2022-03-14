const newsletterSubmitBtn = document.querySelector(".newsletterSubmitBtn"); 
const newsletterForm = document.querySelector("#newsletter-form"); 
const newsletter = document.querySelector("#newsletter"); 
const newsletterError = document.querySelector("#newsletterError"); 


function validateNewsletter() {
    event.preventDefault(); 
    
    let isNewsletterValidated = true; 

    if(validateEmail(newsletter.value) === true) {
        newsletterError.style.display = "none"; 
    } else {
        newsletterError.style.display = "block"; 
        isNewsletterValidated = false; 
    }

    return isNewsletterValidated; 
}

const successNewsletterContainer = document.querySelector(".successMessage");  

function newsletterFunction() {
    if(!validateNewsletter()) {
        return false; 
    } else {
        successNewsletterContainer.innerHTML = `
        <p> Thanks for following my journey! </p>
        `; 
    }
}

newsletterSubmitBtn.addEventListener("click", newsletterFunction); 

