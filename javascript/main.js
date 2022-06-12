const menuBar = document.getElementById("menuBar");
const nav = document.querySelector(".nav").classList;
menuBar.addEventListener("click", () => {
    if(nav.contains("active")){
        nav.remove("active");
    }
    else{
        nav.add("active")
;    }
})