//Opening and closing the navigation for mobile phones

const openButton = document.getElementById("buttonClose");
const closeButton = document.querySelector(".closeButton");
const mobileNavigation = document.querySelector(".hamburgerNav");

openButton.addEventListener("click", () => {

        mobileNavigation.style="display:flex";
    
});

closeButton.addEventListener("click", () => {

        mobileNavigation.style="display:none";
});




