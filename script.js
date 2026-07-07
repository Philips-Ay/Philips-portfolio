/*==========================================
    PORTFOLIO SCRIPT
    Part 3.1
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
        MOBILE MENU
    ==========================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");

            });

        });

    }


    /*==========================
        STICKY NAVBAR
    ==========================*/

    const header = document.querySelector("header");

    function stickyNavbar() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    stickyNavbar();

    window.addEventListener("scroll", stickyNavbar);



    /*==========================
        SMOOTH SCROLL
    ==========================*/

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") return;

            const target = document.querySelector(targetID);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });



    /*==========================
        ACTIVE NAVIGATION LINK
    ==========================*/

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function highlightNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    highlightNav();

    window.addEventListener("scroll", highlightNav);



    /*==========================
        CLOSE MENU IF CLICK OUTSIDE
    ==========================*/

    document.addEventListener("click", (e) => {

        if (!menuToggle || !navLinks) return;

        if (

            !menuToggle.contains(e.target) &&
            !navLinks.contains(e.target)

        ) {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        }

    });



    /*==========================
        NAVBAR SHADOW
    ==========================*/

    function navbarShadow() {

        if (!header) return;

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 15px 40px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    navbarShadow();

    window.addEventListener("scroll", navbarShadow);

});
/*==========================================
    PART 3.2
    Animations, Typing Effect,
    Skill Bars & Counters
==========================================*/


/*==============================
    SCROLL REVEAL ANIMATION
==============================*/

const revealElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .scale-in"
);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/*==============================
    STAGGER CARD ANIMATION
==============================*/

const cards = document.querySelectorAll(

".service-card, .portfolio-card, .testimonial-card"

);

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});


/*==============================
    SKILL BAR ANIMATION
==============================*/

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

const width = entry.target.dataset.width;

entry.target.style.width = width;

}

});

},

{
threshold: 0.4
}

);

skillBars.forEach(bar => {

bar.style.width = "0";

skillObserver.observe(bar);

});


/*==============================
    COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.dataset.target);

const increment = target / 120;

let value = 0;

const updateCounter = () => {

value += increment;

if (value >= target) {

counter.innerText = target;

} else {

counter.innerText = Math.floor(value);

requestAnimationFrame(updateCounter);

}

};

updateCounter();

counterObserver.unobserve(counter);

});

},

{
threshold: 0.5
}

);

counters.forEach(counter => {

counterObserver.observe(counter);

});


/*==============================
    FLOATING ELEMENTS
==============================*/

document.querySelectorAll(".float").forEach(

(element, index) => {

element.style.animationDelay = `${index * 0.5}s`;

}

);


/*==============================
    HERO FADE-IN
==============================*/

window.addEventListener("load", () => {

const hero = document.querySelector(".hero-content");

if (hero) {

hero.classList.add("show");

}

});


/*==============================
    TYPING EFFECT
==============================*/

const typing = document.querySelector(".typing");

if (typing) {

const words = [

"Copywriter",

"Email Marketer",

"Growth Partner",

"Sales Strategist"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

const current = words[wordIndex];

typing.textContent = current.substring(0, charIndex);

if (!deleting) {

charIndex++;

if (charIndex > current.length) {

deleting = true;

setTimeout(typeEffect, 1400);

return;

}

} else {

charIndex--;

if (charIndex === 0) {

deleting = false;

wordIndex++;

if (wordIndex >= words.length) {

wordIndex = 0;

}

}

}

setTimeout(typeEffect, deleting ? 55 : 110);

}

typeEffect();

}


/*==============================
    PARALLAX HERO
==============================*/

const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {

if (!heroSection) return;

heroSection.style.backgroundPositionY =
window.pageYOffset * 0.35 + "px";

});


/*==============================
    BUTTON HOVER GLOW
==============================*/

document.querySelectorAll(".btn").forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =

"translateY(-4px) scale(1.02)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =

"translateY(0) scale(1)";

});

});
/*==========================================
    PART 3.3
    Loader, Back-to-Top, Contact Form,
    Scroll Progress & Final Utilities
==========================================*/


/*==============================
    LOADING SCREEN
==============================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hidden");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 800);

});


/*==============================
    BACK TO TOP BUTTON
==============================*/

const backToTop = document.getElementById("backToTop");

function toggleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", toggleBackToTop);

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==============================
    SCROLL PROGRESS BAR
==============================*/

const progressBar = document.querySelector(".scroll-progress");

function updateProgressBar() {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

}

window.addEventListener(

    "scroll",

    updateProgressBar

);


/*==============================
    CONTACT FORM VALIDATION
==============================*/

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =

            contactForm.querySelector(

                'input[name="name"]'

            );

        const email =

            contactForm.querySelector(

                'input[name="email"]'

            );

        const message =

            contactForm.querySelector(

                "textarea"

            );

        if (

            !name.value.trim() ||

            !email.value.trim() ||

            !message.value.trim()

        ) {

            alert(

                "Please fill in all fields."

            );

            return;

        }

        const emailRegex =

            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (

            !emailRegex.test(email.value)

        ) {

            alert(

                "Please enter a valid email."

            );

            return;

        }

        alert(

            "Message sent successfully!"

        );

        contactForm.reset();

    });

}


/*==============================
    IMAGE HOVER EFFECT
==============================*/

document

.querySelectorAll(".portfolio-card img")

.forEach((img) => {

    img.addEventListener(

        "mouseenter",

        () => {

            img.style.transform =

                "scale(1.08)";

        }

    );

    img.addEventListener(

        "mouseleave",

        () => {

            img.style.transform =

                "scale(1)";

        }

    );

});


/*==============================
    LAZY LOAD IMAGES
==============================*/

const lazyImages =

document.querySelectorAll(

'img[data-src]'

);

const lazyObserver =

new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (

entry.isIntersecting

) {

const img =

entry.target;

img.src =

img.dataset.src;

img.removeAttribute(

"data-src"

);

lazyObserver.unobserve(

img

);

}

});

}

);

lazyImages.forEach((img) => {

lazyObserver.observe(img);

});


/*==============================
    DISABLE RIGHT CLICK
    (OPTIONAL)
==============================*/

// Uncomment if desired

/*
document.addEventListener(

"contextmenu",

(e)=>{

e.preventDefault();

}

);
*/


/*==============================
    CURRENT YEAR
==============================*/

const year =

document.querySelector("#year");

if (year) {

year.textContent =

new Date().getFullYear();

}


/*==============================
    KEYBOARD ACCESSIBILITY
==============================*/

document

.querySelectorAll("button,a")

.forEach((element) => {

element.addEventListener(

"keyup",

(e)=>{

if(

e.key==="Enter"

){

element.click();

}

}

);

});


/*==============================
    CONSOLE MESSAGE
==============================*/

console.log(

"%cPortfolio loaded successfully.",

"color:#16a34a;font-size:16px;font-weight:bold;"

);

console.log(

"%cDesigned by Philips Kolawole",

"color:#d4af37;font-size:13px;"

);


/*==========================================
        END OF SCRIPT.JS
==========================================*/
