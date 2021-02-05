burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.right-nav');
navList = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})