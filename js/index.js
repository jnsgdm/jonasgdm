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

let a = document.querySelectorAll('.nav-link');
a.forEach(e => {
    e.addEventListener('click', function() {
        a.forEach(n => {
            n.classList.remove('active');
            this.classList.add('active');
        });
    });
});

const aboutLink = document.querySelector('#about-link');
aboutLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
});
const projecttLink = document.querySelector('#project-link');
projecttLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
});
const skillLink = document.querySelector('#skill-link');
skillLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
});
const contactLink = document.querySelector('#contact-link');
contactLink.addEventListener('click',() => {
    navLinks.style.left = '-100%';
});

// function lavaFunc(){
//     window.lavaVar += 90;
//     document.getElementsByClassName("lavaLamp")[0].style.filter = "hue-rotate("+window.lavaVar+"deg)";
//     document.getElementsByClassName("lavaLamp")[0].style.animationName = "none";
//     setTimeout(function(){
//       document.getElementsByClassName("lavaLamp")[0].style.animationName = "";
//       document.getElementsByClassName("lavaLamp")[0].style.animationPlayState = "running";
//     }, 50);
//   }
//   window.lavaVar = 0;