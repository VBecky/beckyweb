let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// Close mobile menu after choosing a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

ScrollReveal({
  distance: '60px',
  duration: 1600,
  delay: 150,
  reset: false
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact form', {
  origin: 'bottom',
  interval: 120
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1200,
  loop: true
});

emailjs.init("L3Ps1-ihRB72OQToc");

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_gl5ibkm",
    "template_4qq1m6t",
    this
  ).then(() => {
    alert("Message sent successfully!");
    contactForm.reset();
  }, (error) => {
    alert("Failed to send message");
    console.log(error);
  });
});
