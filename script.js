const hamburger = document.querySelector (".hamburger");
const cancel = document.querySelector (".cancel");
const nav = document.querySelector (".navList ul");
const join = document.querySelector (".joinBtn");
const signIn = document.querySelector (".signIn");
const company = document.querySelector (".company");
const help = document.querySelector (".help");
const turnRight = document.querySelector(".fa-caret-down");

// if (window.matchMedia("(max-width:767px)").matches){
//     turnRight.classList.add("fa-caret-right");
// } else {
//     turnRight.classList.remove("fa-caret-down");
// }


hamburger. addEventListener('click', function (){
    nav.style.display = "block";
    cancel.style.display = "block";
    join.style.display = "block";
    signIn.style.display = "block";
    hamburger.style.display = "none";
});

cancel . addEventListener('click', function(){
    nav.style.display = "none";
    join.style.display = "none";
    signIn.style.display = "none";
    cancel.style.display = "none";
    hamburger.style.display = "block";
});
