const allTabs = document.querySelectorAll(".tabcontent");
const cities = ['London','Paris','Tokyo'];

const randomIndex =Math.floor(Math.random()*3);
const c = cities[randomIndex];

openCity(null,c);

function openCity(e,city){
    allTabs.forEach(tab=>tab.style.display='none')
    document.querySelector(`#${city}`).style.display='block'
}