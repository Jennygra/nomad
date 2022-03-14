const baseUrl = "https://jennygramdal.com/nomad/wp-json/wp/v2/posts"; 
const featureCollectionContainer = document.querySelector(".feature-collection-container");

async function getPosts() {
    try {
        const response = await fetch(baseUrl); 
        const getResults = await response.json();

        for(let i = 0; i < getResults.length; i++) {
            const postId = getResults[i].id;
            const postTitle = getResults[i].title.rendered;
            const postFeatureImg = getResults[i].jetpack_featured_media_url;

            featureCollectionContainer.innerHTML += `
            <div class="post-container post-${i}">
            <a href="post.html?id=${postId}">
            <img class="slides" src="${postFeatureImg}" alt="">
            <h4>${postTitle}</h4>
            </a>
            </div>
            `;
        }

    } catch(error) {
        featureCollectionContainer.innerHTML = ""; 
    }
}

getPosts();


const nextBtn = document.querySelector("#carousel-next"); 
const prevBtn = document.querySelector("#carousel-prev"); 
let action; 

nextBtn.addEventListener("click", function(){
    featureCollectionContainer.scrollLeft += 850; 
}); 

prevBtn.addEventListener("click", function(){
    featureCollectionContainer.scrollLeft -= 850; 
}); 

