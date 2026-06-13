const toggleBtn = document.getElementById("theme-toggle");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
toggleBtn.addEventListener ("click" , () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});
window.addEventListener("scroll", () =>{
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50){
        navbar.classList.remove("scrolled");
    }
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

