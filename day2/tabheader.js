
const allTabs = document.querySelectorAll(".tabcontent");
const btns = document.querySelector('.btns')
const links = btns.querySelectorAll('.tablink')


function openCity(city,elem,color){
    links.forEach(link=>link.style.backgroundColor='whitesmoke')
    allTabs.forEach(tab=>tab.style.display='none');
    const tab = document.querySelector(`#${city}`);
    tab.style.display='flex'
    tab.style.backgroundColor = color
    elem.style.backgroundColor = color
}

document.querySelector('#defaultOpen').click();