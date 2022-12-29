
let nume = document.querySelector(".spa") ;
let links = document.querySelector(".haed__link"); 
let butoons = document.querySelector(".form__icon");
let conte = document.querySelector(".form__container");
let Logo = document.querySelector(".logoo");
let spans = document.querySelector(".form__icon");

nume.addEventListener("click", function () {
    links.classList.toggle("actev");
});

Logo.addEventListener("click", function () {
    conte.className = "form__container is_actev";
    spans.onclick = function () {
        conte.className = "form__container ";
    };
});
