/* Afficher Montre */

document.querySelector("#j1").addEventListener("click", montrerMontre);
document.querySelector("#j4").addEventListener("click", montrerMontre);

function montrerMontre() {
    document.querySelector("body").classList.toggle("clockBody")
}

/* Fonction Montre */

document.querySelector(".montre").addEventListener("click", imgOpacity);

function imgOpacity() {
    document.querySelector(".jules").classList.toggle("julesFlat");

    document.querySelector(".montre2").classList.toggle("montreAlt");
}

/* Menu */

document.querySelector(".burgerAbsolu").addEventListener("click", showMenu);
document.querySelector(".film").addEventListener("click", showMenu);

function showMenu() {
    document.querySelector("body").classList.toggle("menuOuvert");
}

document.querySelector("#pf").addEventListener("click", function () {
    document.querySelector(".portfolio").classList.toggle("pfOuvert")
})