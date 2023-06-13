import 'bootstrap';

// Global variables
let nav = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');

// Scroll event to change nav background color and nav active class
window.addEventListener('scroll', () => {
    addNavBackground();
    changeNavActiveClass();
});

// Adding background color to navbar
const addNavBackground = () => {
    if (window.pageYOffset > nav.offsetHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Changing active class in navbar when user scroll
const changeNavActiveClass = () => {
    const header = document.querySelector('header');
    const headerTop = header.offsetHeight;
    if (window.pageYOffset > headerTop) {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - nav.offsetHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
            document.querySelector('.nav-item a[href*="' + current + '"]').classList.add('active');
        })
    }
}

// Adding click events for nav links for better scroll to the relevant sections
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(navLink.getAttribute('href'));
        const scrollToPosition = target.offsetTop - nav.offsetHeight;
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});