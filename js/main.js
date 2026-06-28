

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
    } else {
        navbar.classList.remove("scroll")
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

//filtrage des freelances
const filterBouttons = document.querySelectorAll(".filter-btn");
const freelances = document.querySelectorAll(".freelances");

filterBouttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        freelances.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
});

//Validation du formulaire 
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e){
        e.preventDefault();
        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const message = document.getElementById("message");
        let valide = true;
        function erreur(champ, texte) {
            champ.nextElementSibling.textContent = texte;
            valide = false ;
        }
        function succes(champ) {
            champ.nextElementSibling.textContent = "";
        }
        //nom
        if (nom.value.trim() === ""){
            erreur(nom, "Le nom est obligatoire");
        }   else {
            succces(nom)
        }
        //prenom
        if (prenom.value.trim() === ""){
            erreur(nom, "Le prenom est obligatoire");
        }   else {
            succces(nom)
        }
        //email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.text(email.values)) {
            erreur(email, "Email invalide");
        }   else {
            succes(email);
        }
        //sujet
        if (sujet.values === "") {
            erreur(sujet, "Choisissez un sujet");
        }   else {
            succes(sujet);
        }
        //message
        if (message.value.trim().length < 20) {
            erreur(message, "Le message contenir au moins 20 caractéres");
        }   else {
            succes(message);
        }
        if (valide) {
            alert("Message envoyé avec succés !");
            form.reset();
        }
    });
}

