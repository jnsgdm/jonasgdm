// const stars = document.querySelector("#stars")
// window.addEventListener('scroll',()=>{
//     let value = window.screenY;
//     stars.style.top = value * 1 + "px";
// });

var checkNav = false
function handleNavMobile(value) {
    const navbar = document.querySelector('#nav-head');
    checkNav = !checkNav;
    if(checkNav){
        navbar.setAttribute('class','hide');
    }else {
        navbar.setAttribute('class','show');
    }
}