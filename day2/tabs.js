//default open one tab

// document.querySelector('#defaultOpen').classList.add('active');

const allTabs = document.querySelectorAll(".tabcontent")
const alllinks = document.querySelectorAll(".tablinks")

function openCity(e,city){

    alllinks.forEach(el=>el.classList.remove('active'))
    e.target.classList.add('active')
    allTabs.forEach(tab=>{
        tab.classList.remove('active');
    })

    const tab = document.querySelector(`#${city}`);
    tab.classList.add('active')

}