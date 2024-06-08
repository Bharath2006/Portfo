function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add an event listener to each menu item to remove the 'responsive' class
const menuItems = document.querySelectorAll('.nav-menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
  });
});

// Scroll active and other functions...


// Add event listener to each menu item to close the menu when clicked
const menuItems = document.querySelectorAll('.nav-menu a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Close the menu
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.remove("responsive");
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow(), themeToggle() };

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "60px";
    navHeader.style.lineHeight = "60px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "80px";
    navHeader.style.lineHeight = "80px";


  }
}
function themeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    themeToggle.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    themeToggle.style.height = "60px";
    themeToggle.style.lineHeight = "60px";
  } else {
    themeToggle.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    themeToggle.style.height = "60px";
    themeToggle.style.lineHeight = "60px";

  }
}
/* resume download */
function openPdf() {
            window.open('assets/Resume/BharathResume.pdf', '_blank');
        }


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["FullStack-developer", "DataBase-developer", "Freelancer", "DevOps-developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})
var typingEffect = new Typed(".nametext", {
  strings: ["Bharath S"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3500
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

function toggleMode() {
  const body = document.body;
  const footer = document.querySelector('top-footer');

  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Check for user preference on page load
document.addEventListener('DOMContentLoaded', function () {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const body = document.body;
  const footer = document.querySelector('top-footer');

  if (isDarkMode) {
    body.classList.add('dark-mode');
    footer.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');

  }
});
// JavaScript
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  const footer = document.querySelector('top-footer');

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    footer.classList.remove('dark-theme');
    themeIcon.classList.remove('uil-moon');
    themeIcon.classList.add('uil-sun');
  } else {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('uil-sun');
    themeIcon.classList.add('uil-moon');
    footer.classList.add('dark-theme');

  }
}


window.addEventListener('scroll', scrollActive)
