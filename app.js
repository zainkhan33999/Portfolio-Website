const header = document.querySelector('header');
const list = document.querySelector('ul');
const hamburger = document.querySelector('#menu-icon');
const moblist = document.querySelector('.mob-list');

// Function to toggle sticky class
function toggleSticky() {
  header.classList.toggle('sticky');
  list.classList.toggle('mob-list');
  
}
window.addEventListener ("scroll",()=>{
    header.classList.toggle("sticky",window.scroll)
})

// Add click event listener to hamburger menu
hamburger.addEventListener('click', toggleSticky);