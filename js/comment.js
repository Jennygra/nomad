const commentWrapper = document.querySelector(".comments"); 
const commentTitle = document.querySelector("#comment-title"); 
const titleError = document.querySelector(".title-error"); 
const commentText = document.querySelector("#comment-box"); 
const commentBtn = document.querySelector("#postBtn"); 
const commentError = document.querySelector(".comment-error"); 

function validateComment() {
    event.preventDefault(); 

    let isValidated = true; 

    if(formChecker(commentTitle.value,4) === true) {
        titleError.style.display = "none"; 
    } else {
        titleError.style.display = "block"; 
        isValidated = false; 
    }

    if(formChecker(commentText.value,15) === true) {
        commentError.style.display = "none"; 
    } else {
        commentError.style.display = "block"; 
        isValidated = false; 
    }

    return isValidated; 
}

function letComment() {
    if(!validateComment()) {
        return false; 
    } else {
        commentWrapper.innerHTML += `
        <div class="comment-wrapper"> 
        <h5>${commentTitle.value}</h5>
        <p>${commentText.value}
        </div> 
        `; 
    }
}


commentBtn.addEventListener("click", letComment);