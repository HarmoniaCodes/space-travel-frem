//Set Crew Stuff
function loadCommander() {
  document.getElementById("crew-title").innerText = "Commander";
  document.getElementById("crew-name").innerText = "Douglas Hurley";
  document.getElementById("crew-bio").innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  document.getElementById("crew-pic").innerHTML = '<source srcset="assets/crew/image-douglas-hurley.webp" type="image/webp"><img src="assets/crew/image-douglas-hurley.png" alt="Commander Douglas Hurley">';
}
function loadSpecialist() {
  document.getElementById("crew-title").innerText = "Specialist";
  document.getElementById("crew-name").innerText = "Mark Shuttleworth";
  document.getElementById("crew-bio").innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  document.getElementById("crew-pic").innerHTML = '<source srcset="assets/crew/image-mark-shuttleworth.webp" type="image/webp"><img src="assets/crew/image-mark-shuttleworth.png" alt="Specialist Mark Shuttleworth">';
}
function loadPilot() {
  document.getElementById("crew-title").innerText = "Pilot";
  document.getElementById("crew-name").innerText = "Victor Glover";
  document.getElementById("crew-bio").innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the \
  International Space Station. Glover is a commander in the U.S. Navy where \
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a \
  station systems flight engineer.";
  document.getElementById("crew-pic").innerHTML = '<source srcset="assets/crew/image-victor-glover.webp" type="image/webp"><img src="assets/crew/image-victor-glover.png" alt="Pilot Victor Glover">';
}
function loadEngineer() {
  document.getElementById("crew-title").innerText = "Flight Engineer";
  document.getElementById("crew-name").innerText = "Anousheh Ansari";
  document.getElementById("crew-bio").innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
  document.getElementById("crew-pic").innerHTML = '<source srcset="assets/crew/image-anousheh-ansari.webp" type="image/webp"><img src="assets/crew/image-anousheh-ansari.png" alt="Flight Engineer Anousheh Ansari">';
}
//
// Set planet stuff
//
function loadMoon() {
  document.getElementById("dest-name").innerText = "Moon";
  document.getElementById("dest-desc").innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  document.getElementById("dest-dist").innerText = "384,400 km";
  document.getElementById("dest-travtime").innerText = "3 days";
  document.getElementById("dest-img").innerHTML = '        <source srcset="assets/destination/image-moon.webp" type="image/webp"><img src="assets/destination/image-moon.png" alt="the moon">';
}
function loadMars() {
  document.getElementById("dest-name").innerText = "Mars";
  document.getElementById("dest-desc").innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  document.getElementById("dest-dist").innerText = "225 mil. km";
  document.getElementById("dest-travtime").innerText = "9 months";
  document.getElementById("dest-img").innerHTML = '<source srcset="assets/destination/image-mars.webp" type="image/webp"><img src="assets/destination/image-mars.png" alt="the planet mars">';
}
function loadEuropa() {
  document.getElementById("dest-name").innerText = "Europa";
  document.getElementById("dest-desc").innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  document.getElementById("dest-dist").innerText = "628 mil. km";
  document.getElementById("dest-travtime").innerText = "3 years";
  document.getElementById("dest-img").innerHTML = '<source srcset="assets/destination/image-europa.webp" type="image/webp"><img src="assets/destination/image-europa.png" alt="the moon Europa">';
}
function loadTitan() {
  document.getElementById("dest-name").innerText = "Titan";
  document.getElementById("dest-desc").innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  document.getElementById("dest-dist").innerText = "1.6 bil. km";
  document.getElementById("dest-travtime").innerText = "7 years";
  document.getElementById("dest-img").innerHTML = '<source srcset="assets/destination/image-titan.webp" type="image/webp"><img src="assets/destination/image-titan.png" alt="the moon Titan">';
}
//Change Selector Highlight
//When hamburger menu is clicked, open it if closed and vice versa
const tabs = document.querySelector(".btn-tab");
const visibility = tabs.getAttribute ("aria-selected");
//when button is clicked
tabs.addEventListener("click", () => {
if (visibility === "false"){
    tabs.setAttribute("aria-selected", true);
} 
else {
    tabs.setAttribute("aria-selected", false);
}
});

