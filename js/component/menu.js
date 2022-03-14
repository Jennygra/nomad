const hamburgerContainer = document.querySelector(".hamburger-label"); 
const hamburgerLabel = document.querySelector(".fa-bars"); 
const closeLabel = document.querySelector(".fa-x"); 

closeLabel.style.display = "none"; 
let menuOpen = false; 

hamburgerContainer.addEventListener("click", function() {
    if(!menuOpen) {
        hamburgerContainer.classList.add("open"); 
        hamburgerLabel.style.display = "none"; 
        closeLabel.style.display = "block"; 
        menuOpen = true; 

    } else {
        hamburgerContainer.classList.remove("open"); 
        hamburgerLabel.style.display = "block"; 
        closeLabel.style.display = "none"; 
        menuOpen = false; 
    }
}); 