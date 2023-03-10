// const stars = document.querySelector("#stars")
// window.addEventListener('scroll',()=>{
//     let value = window.screenY;
//     stars.style.top = value * 1 + "px";
// });

var checkNav = false
function handleNavMobile(value) {
    const navLinks = document.querySelector('#nav-links');
    checkNav = !checkNav;
    if(checkNav){
        navLinks.style.left = '0';
    }else {
        navLinks.style.left = '-100%';
    }
}

function handleHideNav(){
    const navLinks = document.querySelector('#nav-links');
    navLinks.style.left = '-100%';
    console.log("teste cu");
}