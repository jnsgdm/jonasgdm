// import '../js/swiper-bundle.min.js'

var checkNav = false
const navLinks = document.querySelector('#nav-links');
function handleNavMobile(value) {
    checkNav = !checkNav;
    if(checkNav){
        navLinks.style.left = '0';
    }else {
        navLinks.style.left = '-100%';
    }
};

const aboutLink = document.querySelector('#about-link');
aboutLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
    console.log("teste cu");
});
const projecttLink = document.querySelector('#project-link');
projecttLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
    console.log("teste cu");
});
const skillLink = document.querySelector('#skill-link');
skillLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
    console.log("teste cu");
});
const contactLink = document.querySelector('#contact-link');
contactLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
    console.log("teste cu");
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});