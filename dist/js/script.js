//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }

}


// Humburger
const humburger = document.querySelector('#humburger');
const navmenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function() {
    humburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
})
