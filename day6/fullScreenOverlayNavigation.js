const myNav = document.querySelector("#myNav");


function closeNav(){
    myNav.style.width='0%';
    myNav.style.height='0%'
}

function slideRight(){
    myNav.style.width='100%'
    myNav.style.height='100%'
}

function slideTop(){
    myNav.style.height='100%'
    myNav.style.width='100%'
}
function slideLeft(){
    myNav.style.height='100%'
    myNav.style.right='0';
    myNav.style.width='100%'
}