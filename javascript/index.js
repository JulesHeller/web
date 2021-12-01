/* Afficher Montre */

document.querySelector(".nomPrenom").addEventListener("click", montrerMontre);

function montrerMontre() {
    document.querySelector(".montre").classList.toggle("montreVisible")
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