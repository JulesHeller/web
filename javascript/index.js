var burger = document.querySelector(".burgerAbsolu");
var film = document.querySelector(".filmCache");
var menu = document.querySelector(".menu");

burger.addEventListener("click", showMenu);
film.addEventListener("click", showMenu);

function showMenu(){
    menu.classList.toggle("menuVisible");
    film.classList.toggle("filmMenu");

    burger.children[0].classList.toggle("b1croix");
    burger.children[1].classList.toggle("b2croix");
    burger.children[2].classList.toggle("b3croix"); 
}