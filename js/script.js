let button = document.getElementById("menu-button");
let element = document.querySelector(".site-navigation")
button.addEventListener("click",function(){
    element.classList.toggle("show");
    if(element.classList.contains("show")){
        button.innerHTML = "close"
        // button.style.color = "white"
    }else{
        button.innerHTML = "menu"
        // button.style.color = "#ff1964"
    }
})