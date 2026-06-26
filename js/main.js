const { sections } = require("./sections");

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


const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const updateCounter = () => {
                const increment = Math.ceil(target / 100);
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    counter.textContent = count;
                    requestAnimationFrame(updateCounter);
                }
            };
            updateCounter();
            observer.unobserve(counter);
        }
    });
});
counters.forEach(counter =>  observer.observe(counter));

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add (show);
        }
    });
});
sections.forEach(section => fadeObserver.observe(section));

