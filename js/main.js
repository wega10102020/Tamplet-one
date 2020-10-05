// Header
window.onscroll = function(){
    if(pageYOffset > 400){
        let header = document.querySelector(".header");
        header.classList.add("header-fixed");
        bg.style.filter = "blur(10px)";
    }else{
        let header = document.querySelector(".header");
        header.classList.remove("header-fixed");
        bg.style.filter = "blur(0)";
    }
}

// ------------------------ //

// Hamburger Icon And Some Styles On Logo And Bckground

let hamIcon = document.querySelector(".hum-menue");
let bg = document.getElementById("bg");
let logo = document.getElementById("logo");
hamIcon.addEventListener("click",function(){
    hamIcon.classList.toggle("ex-menue");
    if(hamIcon.classList.contains("ex-menue")){
        hamIcon.setAttribute("class","fa fa-times ex-menue");
        bg.style.filter = "blur(10px)";
        logo.style.transform = "rotate(360deg)";
        logo.style.filter = "blur(10px)";
    }else{
        hamIcon.setAttribute("class","fa fa-bars hum-menue");
        bg.style.filter = "blur(0)";
        logo.style.transform = "rotate(0deg)";
        logo.style.filter = "blur(0)";
    }
});

// --------------------------------------------- //

// Some Styles On Bckground
















