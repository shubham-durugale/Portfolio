// ===========================
// Typing Animation
// ===========================

const roles = [
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "FastAPI Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleText = document.querySelector(".hero-left h2");

function typingEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        roleText.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;

            setTimeout(typingEffect, 1200);
            return;
        }

    } else {

        roleText.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }

    }

    setTimeout(typingEffect, deleting ? 45 : 90);

}

typingEffect();
/* ======================
Counter Animation
====================== */

const counters=document.querySelectorAll(".counter");

const observerCounter=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const inc=target/100;

const update=()=>{

current+=inc;

if(current<target){

counter.innerText=Math.ceil(current)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

observerCounter.unobserve(counter);

}

});

});

counters.forEach(counter=>observerCounter.observe(counter));

// ===========================
// Sticky Navbar Shadow
// ===========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 40) {

        nav.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";
        nav.style.background = "rgba(15,23,42,.92)";

    } else {

        nav.style.boxShadow = "none";
        nav.style.background = "rgba(255,255,255,.06)";

    }

});


// ===========================
// Scroll Progress Bar
// ===========================

const progress = document.createElement("div");

progress.className = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});


// ===========================
// Back To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)
        topBtn.classList.add("show");

    else
        topBtn.classList.remove("show");

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-item");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden-item");

    observer.observe(sec);

});
