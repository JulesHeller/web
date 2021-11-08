var a = document.querySelector("#a");
var z = document.querySelector("#z");
var dessin = document.querySelector(".jules");

a.classList.toggle("lettreAnim");

document.querySelector(".lettreAnim").addEventListener("click", lettreAnim);

function lettreAnim(){
    a.classList.toggle("lettreAnim");
    z.classList.toggle("lettreAnim");
}

a.addEventListener("click", anim1);

function anim1(){
    dessin.classList.remove("julesAnim2");
    dessin.offsetTop;
    dessin.classList.add("julesAnim");
}

z.addEventListener("click", anim2);

function anim2(){
    dessin.classList.remove("julesAnim");
    dessin.offsetTop;
    dessin.classList.add("julesAnim2");
}

/* MENU */

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