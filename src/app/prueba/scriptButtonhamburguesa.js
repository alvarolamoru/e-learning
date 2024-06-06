document.querySelector(".bars__menu").addEventListener("click",animateBars);

var line1__bars=document.querySelector(".line1__bars__menu"); 
var line2__bars=document.querySelector(".line2__bars__menu"); 
var line3__bars=document.querySelector(".line3__bars__menu"); 

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars__menu");
    line2__bars.classList.toggle("activeline2__bars__menu");
    line3__bars.classList.toggle("activeline3__bars__menu");
    
}
