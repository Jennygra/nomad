const blogPostContainer = document.querySelector(".posts-container");
const newUrl = "https://jennygramdal.com/nomad/wp-json/wp/v2/posts?per_page=20"; 
let currentPosts = 9; 

const featurePostsContainer = document.querySelector(".feature-posts-container"); 
const searchContainer = document.querySelector(".search-container"); 
const loader = document.querySelector(".loader"); 

const loaderContainer = document.querySelector(".loader-container"); 
const postsSeeMoreCta = document.querySelector(".posts-see_more-cta btn"); 
const postsSeeMoreCtaContainer = document.querySelector(".posts-see_more-cta button"); 

blogPostContainer.style.display = "none"; 
searchContainer.style.display = "none"; 
postsSeeMoreCtaContainer.style.display = "none"; 

setTimeout(function() {
    loader.style.display = "none"; 
    loaderContainer.style.margin = "0px"; 
    blogPostContainer.style.display = ""; 
    searchContainer.style.display = ""; 
    postsSeeMoreCtaContainer.style.display = ""; 
}, 1500);

async function posts() {
    try {
        const response = await fetch(newUrl); 
        const getResults = await response.json();

        for(let i = 0; i < getResults.length; i++) {
            const postId = getResults[i].id;
            const postTitle = getResults[i].title.rendered;
            const postFeatureImg = getResults[i].jetpack_featured_media_url;
            const postFeatureText = getResults[i].excerpt.rendered;

            blogPostContainer.innerHTML += `
            <div class="posts-subcontainer">
            <a href="post.html?id=${postId}">
            <img class="slides" src="${postFeatureImg}" alt="">
            <div class="posts-text">
            <h4>${postTitle}</h4>
            <p>${postFeatureText}</p>
            </div>
            </a>
            </div>
            `;

            if(i === currentPosts) {
                break
            }
        }

    } catch(error){
        blogPostContainer.innerHTML += `
        <p class="blogs-error"> No post avaible at the moment, please try again later! </p>
        `; 
    }
}

posts();


async function loadMore() { 
    currentPosts += 1; 

    try {
        const response = await fetch(newUrl); 
        const getResults = await response.json();

        for(let i = currentPosts; i < getResults.length; i++) {
            const postId = getResults[i].id;
            const postTitle = getResults[i].title.rendered;
            const postFeatureImg = getResults[i].jetpack_featured_media_url;
            const postFeatureText = getResults[i].excerpt.rendered;

            blogPostContainer.innerHTML += `
            <div class="posts-subcontainer">
            <a href="post.html?id=${postId}">
            <img class="slides" src="${postFeatureImg}" alt="">
            <div class="posts-text">
            <h4>${postTitle}</h4>
            <p>${postFeatureText}</p>
            </div>
            </a>
            </div>
            `;
            
            postsSeeMoreCtaContainer.style.display = "none";
        }

    } catch(error) {
        blogPostContainer.innerHTML += `
        <p class="blogs-error"> No post avaible at the moment, please try again later! </p>
        `; 
    }
}



