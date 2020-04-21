const links = document.querySelectorAll(".tablink")
const contents = document.querySelectorAll(".tabcontent")
const openPage = (id, elem, color)=>{
    links.forEach(link=>link.style.backgroundColor="whitesmoke")
    contents.forEach(content=> content.style.display='none')
    elem.style.backgroundColor=color;
    document.querySelector(`#${id}`).style.display = 'block'
}

document.querySelector("#default").click();