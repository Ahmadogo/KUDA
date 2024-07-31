const hamburger = document.querySelector (".hamburger");
const cancel = document.querySelector (".cancel");
const nav = document.querySelector (".navList ul");
const navList = document.querySelector (".navList ul li");
const join = document.querySelector (".joinBtn");
const signIn = document.querySelector (".signIn");
const turnRight = document.querySelector(".fa-caret-down");
const company = document.querySelector (".company");
const help = document.querySelector (".help");
const companyLists = document.querySelector(".company ul");
const helpLists = document.querySelector(".help ul");
// const backgroundOverlay1 = document.querySelector(".overlay1");
// const backgroundOverlay2 = document.querySelector(".overlay2");

// if (window.matchMedia("(max-width:767px)").matches){
//     turnRight.classList.add("fa-caret-right");
// } else {
//     turnRight.classList.remove("fa-caret-down");
// }
company.addEventListener('mouseenter', function(){
    companyLists.style.display = "block";
    // backgroundOverlay1.style.display = "block";
});

company.addEventListener('mouseleave', function(){
    companyLists.style.display = "none";
    // backgroundOverlay1.style.display = "none";
});

help.addEventListener('mouseenter', function(){
    helpLists.style.display = "block";
    // backgroundOverlay2.style.display = "block";
});

help.addEventListener('mouseleave', function(){
    helpLists.style.display = "none";
    // backgroundOverlay2.style.display = "none";
});

// companyLists.addEventListener('mouseleave', function(){
//     companyLists.style.display = "none";
//     backgroundOverlay1.style.display = "none";
// });

// navList.addEventListener('mouseleave', function(){
//     helpLists.style.display = "none";
//     backgroundOverlay2.style.display = "none";
// });




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
