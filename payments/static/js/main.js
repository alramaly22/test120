/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') :
        header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
    /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ==============NUMM==============



let valueDisplays = document.querySelectorAll('.num');
let interval = 2000;
let isScrollingDown = false;

// Function to animate counting
function animateCounters() {
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue + "K";
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

// Function to reset counters to 0K
function resetCounters() {
    valueDisplays.forEach((valueDisplay) => {
        valueDisplay.textContent = "0K";
    });
}

// Check for scrolling direction
window.addEventListener("scroll", function() {
    if (window.scrollY > 0 && !isScrollingDown) {
        // Scrolling down, stop animations and reset values
        resetCounters();
        isScrollingDown = true;
    } else if (window.scrollY === 0 && isScrollingDown) {
        // Scrolling back up, restart animations
        animateCounters();
        isScrollingDown = false;
    }
});

// Start the initial animation
animateCounters();




document.addEventListener('DOMContentLoaded', function() {
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});



/*=============== HOME SWIPER ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    // var swiper = new Swiper('.swiper-container', {
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier:1,
    //       slideShadows:true,
    //     },
    //     pagination: {
    //       el: '.swiper-pagination',

//     },
//     });
/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () => {
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')

        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) => {
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== Testimonial ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000, // تحديد مدة زمنية بالميللي ثانية، هنا تم تحديدها لتكون 4 ثواني
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});








/*=============== Calc ===============*/



// const calories = document.querySelector(".bmr-calculator .result .calories");
// const calculateBtn = document.querySelector(
//   ".bmr-calculator .result .calculate-btn"
// );
// const age = document.querySelector(".bmr-calculator form #age");
// const height = document.querySelector(".bmr-calculator form #height");
// const weight = document.querySelector(".bmr-calculator form #weight");
// const errorMessage = document.querySelector(
//   ".bmr-calculator .result .error-message"
// );


// const calculateBMR = (weight, height, age, gender) => {
//   if (gender == "male") {
//     return 10 * weight + 6.25 * height - 5 * age + 5;
//   }

//   return 10 * weight + 6.25 * height - 5 * age - 161;
// };

// calculateBtn.addEventListener("click", () => {
//   if (
//     age.classList.contains("invalid") ||
//     height.classList.contains("invalid") ||
//     weight.classList.contains("invalid")
//   ) {
//     errorMessage.classList.add("active");
//     return;
//   }

//   errorMessage.classList.remove("active");

//   let genderValue = document.querySelector(
//     ".bmr-calculator form input[name='gender']:checked"
//   ).value;

//   let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

//   calories.innerHTML = BMR.toLocaleString("en-US");
// });



// age.addEventListener("input", (e) => {
//   let ageValue = e.target.value;

//   if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
//     age.classList.add("invalid");
//   } else {
//     age.classList.remove("invalid");
//   }
// });

// height.addEventListener("input", (e) => {
//   let heightValue = e.target.value;

//   if (!heightValue || isNaN(heightValue) || heightValue < 0) {
//     height.classList.add("invalid");
//   } else {
//     height.classList.remove("invalid");
//   }
// });

// weight.addEventListener("input", (e) => {
//   let weightValue = e.target.value;

//   if (!weightValue || isNaN(weightValue) || weightValue < 0) {
//     weight.classList.add("invalid");
//   } else {
//     weight.classList.remove("invalid");
//   }
// });
/*=============== SHOW SCROLL UP ===============*/


// // //////////////////   22
// const testimonialList = [
//     {
//       image: "http://placeskull.com/80/80/A4C2A5",
//       text: "Lorem ipsum dolor sit amet"
//     },
//     {
//       image: "http://placeskull.com/80/80/F49D37",
//       text: "Probny testimonial 2"
//     },
//     {
//       image: "http://placeskull.com/80/80/3F5E5A",
//       text: "A tutaj jeszcze jeden! mo alramaly and fgdjknk"
//     }
//   ];

//   let $image = null;
//   let $text = null;

//   const ONE_SECOND = 1000; 
//   const TIME_INTERVAL = 3 * ONE_SECOND;

//   function displayTestimonial(testimonialIndex) {
//     let testimonial = testimonialList[testimonialIndex];
//     $image.setAttribute('src', testimonial.image);
//     $text.textContent = testimonial.text;
//   }

//   function rotateTestimonial(index) {
//     displayTestimonial(index);

//     setInterval(() => {
//       index++;

//       if (index === testimonialList.length) {
//         index = 0;
//       }

//       displayTestimonial(index);
//     }, TIME_INTERVAL);
//   }

//   function setup() {
//     $image = document.querySelector('.testimonial__image');
//     $text = document.querySelector('.testimonial__text');

//     rotateTestimonial(0);
//   }

//   window.addEventListener('DOMContentLoaded', setup);
/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');


const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_r4pzfdm', 'template_by27eqq', '#contact-form', 'KWf-F2DJ0ZymYu54a')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 1500);

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message failed to send (error)';
        });
};

contactForm.addEventListener('submit', sendEmail);


var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})