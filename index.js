//When hamburger menu is clicked, open it if closed and vice versa
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//when button is clicked
navToggle.addEventListener("click", () => {
//define the visibility const
const visibility = nav.getAttribute ("data-visible");
//if closed, open
if (visibility === "false"){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
} 
//if open, close
else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}
})