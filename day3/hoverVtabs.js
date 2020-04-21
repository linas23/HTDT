const cities = document.querySelectorAll('.tabcontent')
const openCity = (e,city)=>{
    // e.target.style
    cities.forEach(city=>city.style.display='none')
    document.getElementById(city).style.display="block"
}

document.getElementById('default').onmouseover();