/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
// ["Section 1", "Section 2", 
    // "Section 3", "Section 4"];
const navList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navPopulate() {
    for (section of sections){
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        navList.appendChild(newListItem);
    }
}

// Add class 'active' to section when near top of viewport
function activateSection() {
    let currentActive = '';
    for (section of sections) {
        // const secTop = section.offsetTop
        const secHeight = section.clientHeight
        const secRelativeViewport = section.getBoundingClientRect().top
        if (Math.abs(secRelativeViewport) <= (0.6*secHeight)) {
            currentActive = section.id;
        }
    }
    for (section of sections) {
        if (section.id===currentActive) {
            section.classList.add('active')
        } else {
            section.classList.remove('active')
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection (event) {
    event.preventDefault()
    const section = document.querySelector(event.target.hash);
    section.scrollIntoView({behavior: 'smooth'});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',navPopulate);

// Scroll to section on link click
navList.addEventListener('click', scrollToSection)

// Set sections as active
document.addEventListener('scroll', activateSection);
