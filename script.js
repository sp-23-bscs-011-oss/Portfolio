/*=========================================
            PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(()=>{

            preloader.style.display = "none";

        },500);

    }

});

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

        menuBtn.innerHTML = navbar.classList.contains("active")

        ? '<i class="fas fa-times"></i>'

        : '<i class="fas fa-bars"></i>';

    });

}

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML='<i class="fas fa-bars"></i>';

        }

    });

});

/*=========================================
        STICKY HEADER
=========================================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow="0 8px 30px rgba(0,0,0,.25)";

        header.style.background="rgba(15,23,42,.95)";

    }

    else{

        header.style.boxShadow="none";

        header.style.background="rgba(15,23,42,.9)";

    }

});

/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
        DARK MODE
=========================================*/

const themeBtn=document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const icon=themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.replace("fa-moon","fa-sun");

    }

    else{

        icon.classList.replace("fa-sun","fa-moon");

    }

});

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll",()=>{

    const progress=document.getElementById("progress-bar");

    const totalHeight=document.body.scrollHeight-window.innerHeight;

    const progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".counter-box h2");

let started=false;

window.addEventListener("scroll",()=>{

    const counterSection=document.querySelector(".counter");

    if(!counterSection) return;

    const sectionTop=counterSection.offsetTop-300;

    if(window.scrollY>sectionTop && !started){

        counters.forEach(counter=>{

            const target=parseInt(counter.innerText);

            let count=0;

            const speed=40;

            const update=()=>{

                if(count<target){

                    count++;

                    counter.innerText=count+"+";

                    setTimeout(update,speed);

                }

                else{

                    counter.innerText=target+"+";

                }

            };

            update();

        });

        started=true;

    }

});

/*=========================================
        TYPED JS
=========================================*/

if(typeof Typed!=="undefined"){

new Typed(".hero-content h2",{

    strings:[

        "MERN Stack Developer",

        "Frontend Developer",

        "Backend Developer",

        "React Developer",

        "Node.js Developer"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1500,

    loop:true

});

}

/*=========================================
        SCROLL REVEAL
=========================================*/

if(typeof ScrollReveal!=="undefined"){

const sr=ScrollReveal({

    distance:"60px",

    duration:1500,

    delay:150,

    reset:false

});

sr.reveal(".hero-content",{origin:"left"});

sr.reveal(".hero-image",{origin:"right"});

sr.reveal(".about-image",{origin:"left"});

sr.reveal(".about-content",{origin:"right"});

sr.reveal(".skill-box",{interval:100});

sr.reveal(".service-card",{interval:150});

sr.reveal(".timeline-item",{interval:200});

sr.reveal(".project-card",{interval:150});

sr.reveal(".testimonial-card",{interval:150});

sr.reveal(".certificate-card",{interval:150});

sr.reveal(".contact-info",{origin:"left"});

sr.reveal(".contact-form",{origin:"right"});

}

/*=========================================
        CONTACT FORM
=========================================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

}

/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

document.querySelectorAll(".project-card img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(1.1)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(1)";

    });

});

/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("mousemove",(e)=>{

    const heroImg=document.querySelector(".hero-image img");

    if(!heroImg) return;

    let x=(window.innerWidth/2-e.pageX)/50;

    let y=(window.innerHeight/2-e.pageY)/50;

    heroImg.style.transform=`translate(${x}px,${y}px)`;

});

/*=========================================
        CURRENT YEAR
=========================================*/

const year=document.querySelector("#year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

/*=========================================
        END OF SCRIPT
=========================================*/