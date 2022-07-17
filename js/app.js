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


const button = document.querySelector('button');

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
    for (let section of sections){
        const newListItem = document.createElement('li');
        // newListItem.setAttribute('id', (section.id + 'n'));
        newListItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        navList.appendChild(newListItem);
    }
}

// Add class 'active' to section when near top of viewport
function activateSection() {
    const listItems = document.querySelectorAll('li');
    let currentActive = '';
    for (let section of sections) {
        // const secTop = section.offsetTop
        const secHeight = section.clientHeight
        const secRelativeViewport = section.getBoundingClientRect().top
        if (Math.abs(secRelativeViewport) <= (0.6*secHeight)) {
            currentActive = section.id;
        }
    }
    for (let section of sections) {
        let index = section.id.slice(7)-1
        if (section.id===currentActive) {
            section.classList.add('active')
            
            listItems[index].classList.add('liActive')
            // listItem.classList.add('liActive')

        } else {
            section.classList.remove('active')
            listItems[index].classList.remove('liActive')

        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection (event) {
    event.preventDefault()
    const section = document.querySelector(event.target.hash);
    section.scrollIntoView({behavior: 'smooth'});
}
const scrollHeight  = document.documentElement.scrollHeight
function showButton () {
    
    

    // let visible = false;
    if ((window.scrollY>= (0.1*scrollHeight))) {
        button.classList.remove('hide');

    } else {
        button.classList.add('hide');


    }
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

// Show "scroll to the top" button
document.addEventListener('scroll', showButton);

// Button click event
button.addEventListener('click', () =>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
