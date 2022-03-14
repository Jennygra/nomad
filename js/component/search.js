const searchUrl = "https://jennygramdal.com/nomad/wp-json/wp/v2/posts?search="; 
const inputValue = document.querySelector("#search-input"); 
const searchError = document.querySelector(".search-error");
const searchBtn = document.querySelector(".search-btn"); 
const postContainer = document.querySelector(".posts-container"); 

async function searchPost() {
    try{
        const response = await fetch(searchUrl + inputValue.value); 
        const result = await response.json(); 

        if(!inputValue.value) {
            searchError.style.display = "block"; 
            
        } else {
            searchError.style.display = "none";

            for(let i = 0; i < result.length; i++) {
                const postId = result[i].id;
                const postTitle = result[i].title.rendered;
                const postFeatureImg = result[i].jetpack_featured_media_url;
                const postFeatureText = result[i].excerpt.rendered;
    
                postContainer.innerHTML = `
                <div class="posts-subcontainer">
                <a href="post.html?id=${postId}">
                <img class="slides" src="${postFeatureImg}" alt="">
                <div class="posts-text">
                <h2>${postTitle}</h2>
                <p>${postFeatureText}</p>
                </div>
                </a>
                </div>
                `;
            }
        }

        if(result.length === 0) {
           searchError.style.display = "block";
           searchError.innerHTML = "No result, please try another word";
        }

    } catch(error) {
        searchError.innerHTML = "No result, please try another word";
    }
}


searchBtn.addEventListener("click", function() {
    searchPost();

    postsSeeMoreCtaContainer.innerHTML = ""; 
}); 
