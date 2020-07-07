//Email form animation

const email = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const messageInput = document.getElementById("msg");
const messageLabel = document.getElementById("message");
const order = document.querySelector(".order");

email.addEventListener("click", () => {

    emailLabel.style="top: 28%";
    email.placeholder="Enter e-mail...";
    
});

messageInput.addEventListener("click", () => {

    messageLabel.style="top: 52%";
    messageInput.placeholder=" Type message...";
    
});



//Adding items to the cart.

var numOfItems = document.getElementById("numOfItems");
var numOfItemsMobile = document.getElementById("numOfItemsMobile");

var addingItems = [document.querySelector(".addItem1"),
				document.querySelector(".addItem2"),
				document.querySelector(".addItem3")
                ];
var addingAnchorItems = [document.querySelector(".addItem1Anchor"),
				document.querySelector(".addItem2Anchor"),
				document.querySelector(".addItem3Anchor")
				];
var currentItems = 1;
var currentItemsMobile = 1;

addingItems[0].addEventListener("click", function(){

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile =numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});

addingItems[1].addEventListener("click", function(){

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile = numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});

addingItems[2].addEventListener("click", function(){

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile =numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});

//Ading items to card using anchor tags
addingAnchorItems[0].addEventListener("click", function(e){

    e.preventDefault();

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile =numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});

addingAnchorItems[1].addEventListener("click", function(e){

    e.preventDefault();

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile =numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});

addingAnchorItems[2].addEventListener("click", function(e){

    e.preventDefault();

    var cartItems = numOfItems.innerHTML = currentItems++;
    localStorage.numItems = cartItems;

    var cartItemsMobile =numOfItemsMobile.innerHTML = currentItemsMobile++;
    localStorage.numItemsMobile = cartItemsMobile;
});



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




//Animation on scroll

const maskSale = [document.querySelector(".mask1"), document.querySelector(".mask2"), document.querySelector(".mask3")];

window.addEventListener("scroll", () => {

    var scrollable = this.scrollY;

    if(scrollable >= 200){
        maskSale[0].style="animation: maskAnimation 1.5s linear 1";
        maskSale[1].style="animation: maskAnimation 1.5s linear 1";
        maskSale[2].style="animation: maskAnimation 1.5s linear 1";
    }
    if(scrollable <200){
        maskSale[0].style="animation: none";
        maskSale[1].style="animation: none";
        maskSale[2].style="animation: none";
    }

});





/*
//Smooth scroll effect

const body = document.body,
    scrollWrap = document.getElementsByClassName("container1")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function SmoothScroll(){

    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    body.style.transform = scroll;
    
    callScroll = requestAnimationFrame(SmoothScroll);
}

SmoothScroll();
*/
