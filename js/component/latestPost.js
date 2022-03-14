const latestPostUrl = "https://jennygramdal.com/nomad/wp-json/wp/v2/posts?orderby=date"; 
const latestPostContainer = document.querySelector(".latestPosts-subcontainer");
const lPcontainer = document.querySelector(".latestPosts-container"); 

async function latestPost() {
    try{
        const response = await fetch(latestPostUrl); 
        const results = await response.json(); 

        for(i = 0; i < results.length; i++) {
            const getId = results[i].id;
            const getTitlte = results[i].title.rendered; 

            latestPostContainer.innerHTML += `
            <p><a href="post.html?id=${getId}">${getTitlte}</a></p>
            `;

            if(i === 4) {
                break;
            }
        }

    } catch(error) {
        lPcontainer.innerHTML = "";
    }
}

latestPost(); 

    