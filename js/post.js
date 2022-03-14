const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const postIdUrl = "https://jennygramdal.com/nomad/wp-json/wp/v2/posts/" + id; 

const postContainer = document.querySelector(".post-detail-container"); 
const postSubContainer = document.querySelector(".post-detail-subcontainer"); 
const loader = document.querySelector(".loader"); 
const loaderContainer = document.querySelector(".loader-container"); 

postContainer.style.display = "none"; 

setTimeout(function() {
    loader.style.display = "none"; 
    loaderContainer.style.margin = "0px"; 
    postContainer.style.display = ""; 
}, 1500);

async function postId() {
    try{
        const response = await fetch(postIdUrl); 
        const results = await response.json(); 

        newHTML(results); 

    } catch(error) {
        postSubContainer.innerHTML += `
        <div class="post-error-msg">
        <h1>Oh, noooo! </h1>
        <h2>Something went wrong, please go back and try again or contact the page owner</h2>
        </div> 
        `; 
    }
}


postId(); 

function newHTML(results) {
    const postTitle = results.title.rendered; 
    const postDate = results.date; 
    const postContent = results.content.rendered; 

    postSubContainer.innerHTML += `
    <h1>${postTitle}</h1>
    <p>${postDate}</p>
    <p>${postContent}</p>
    <div id="mymodal" class="modal">
    <div class="close">x</div>
    <img class="modal-content" id="img01">
    <div id="caption"></div>
    </div>
    `; 

    const postImg = document.querySelector(".post-detail-subcontainer img"); 
    postImg.classList.add("myImg")

    const modal = document.querySelector("#mymodal"); 
    const img = document.querySelector(".myImg"); 
    const modalImg = document.querySelector("#img01"); 
    const captionText = document.querySelector("#caption");

    img.onclick = function() {
        modal.style.display = "block"; 
        modalImg.src = this.src; 
        captionText.innerHTML = this.alt;
    }

    modal.onclick = function(event) {
        let isClick = modalImg.contains(event.target); 
        
        if(!isClick) {
            modal.style.display = "none"; 
        }
    }
}

