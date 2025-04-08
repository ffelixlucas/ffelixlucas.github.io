// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Abrir Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.style.overflow = 'hidden';
    });
}

// Fechar Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    });
}

// Fechar ao clicar em links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    });
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu.classList.contains('show-menu') && 
        !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    }
});

// ===== SCROLL ATIVO =====
function scrollActive() {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');

        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== SCROLL UP =====
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
}
window.addEventListener('scroll', scrollUp);

// ===== SCROLL REVEAL =====
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal('.home__content, .home__image, .home__social, .home__scroll', { interval: 100 });
sr.reveal('.about__image, .about__content', { origin: 'left' });
sr.reveal('.skills__content', { interval: 100 });
sr.reveal('.project__card', { interval: 100 });
sr.reveal('.contact__info, .contact__form', { interval: 100 });
sr.reveal('.footer__container, .footer__bottom', { origin: 'bottom' });

// ===== TYPED.JS =====
const typed = new Typed('.typed-text', {
    strings: ['Desenvolvedor Full Stack', 'Solucionador de Problemas', 'Apaixonado por Tecnologia'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    showCursor: false
});

const homeScroll = document.querySelector('.home__scroll');
homeScroll.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: 'warning',
            title: 'Atenção!',
            text: 'Por favor, preencha todos os campos.',
            confirmButtonColor: '#2e86de'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Entrarei em contato em breve.',
        confirmButtonColor: '#2e86de'
    }).then(() => {
        contactForm.reset();
    });
});