let button = document.getElementById("menu-button");
let element = document.querySelector(".site-navigation ul")
button.addEventListener("click",function(){
    element.classList.toggle("show");
    if(element.classList.contains("show")){
        button.innerHTML = "close"
    }else{
        button.innerHTML = "menu"
    }
})