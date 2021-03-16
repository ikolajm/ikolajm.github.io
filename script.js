// Init AOS
AOS.init();

// On load, animate the pieces of the home screen one by one
function loadIntro() {
    // Name
    setTimeout(() => {
        document.querySelector("#ji").classList.remove("fadeIn")
    }, 300)
    // About
    setTimeout(() => {
        document.querySelector("#aboutNav").classList.remove("fadeIn")
    }, 600)
    // Featured
    setTimeout(() => {
        document.querySelector("#featuredNav").classList.remove("fadeIn")
    }, 900)
    // Hi
    setTimeout(() => {
        document.querySelector("#hi").classList.remove("fadeIn")
    }, 1200)
    // Adaptable
    setTimeout(() => {
        document.querySelector("#adaptable").classList.remove("fadeIn")
    }, 1500)
    // Fade in pinks at same time (portrait, button)
    setTimeout(() => {
        document.querySelector("#introPortrait").classList.remove("fadeIn")
    }, 1800)
    setTimeout(() => {
        document.querySelector("#introButton").classList.remove("fadeIn")
    }, 2100)
}

// On scroll, check where scrolltop is and adjust the box shadow of the nav accordingly
$(window).scroll(function() {
    // Check scroll top position
    if ($(window).scrollTop() > 10) {
        // Nav
        document.querySelector("nav").style.boxShadow = "0px 3px 5px var(--blue-shadow)";
    } else {
        // Nav
        document.querySelector("nav").style.boxShadow = "none";
    }
});

// Scroll on all link clicks
$(document).on('click', 'a[href^="#"]', function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Animate the scroll to the links target
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// When scrolled to the bottom of the page, fade in the contact section
// Not working with jquery? Using vanilla js
window.onscroll = function() {
    // console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
        // If scrolled into view - bring up top and opacity
        setTimeout(() => {
            document.querySelector("footer").classList.add("show");
        }, 150)
    } else {
        // document.querySelector("footer").classList.remove("show");
    }
};

// On learn more button click, scroll to about section
function learnMoreFunction() {
    document.querySelector('#about').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}