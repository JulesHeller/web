// document.querySelector(".slider").addEventListener("input", updateValue);

// function updateValue() {
//     var slidVar = document.querySelector(".slider").value; 
//     if (slidVar == 1)
//     {
//         slidVar = 0;
//     }

//     var opacite = slidVar / 100

//     document.querySelector("#j1").style.opacity = opacite;

//     document.querySelector(".nombre").innerHTML = slidVar;
// }

document.querySelector(".montre").addEventListener("click", imgOpacity);

function imgOpacity() {
    document.querySelector(".jules").classList.toggle("julesFlat");
    
    document.querySelector(".montre2").classList.toggle("montreAlt");
}

/* MENU */

document.querySelector(".burgerAbsolu").addEventListener("click", showMenu);
document.querySelector(".film").addEventListener("click", showMenu);

function showMenu() {
    document.querySelector("body").classList.toggle("menuOuvert");
}