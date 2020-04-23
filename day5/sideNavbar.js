// without animation
const mySidenav = document.querySelector("#mySidenav");
const close = document.querySelector(".closebtn")
const withoutAnimation = ()=>{
    mySidenav.style.display='block';
    mySidenav.style.width='250px'
}
/* const closeNav= ()=>{
    mySidenav.style.display='none';
    mySidenav.style.width='0'
}
 */
// sidenav push(off-canvas)
const pushOffCanvas =()=>{
    mySidenav.style.width='250px';
    document.querySelector("#main").style.marginLeft='250px';
}
/* const closeNav= ()=>{
    mySidenav.style.width='0'
    document.querySelector("#main").style.marginLeft='0px';
} */

//sidenav push w/opacity
const pushWithOpacity = ()=>{
    mySidenav.style.width='250px';
    document.querySelector("#main").style.marginLeft='250px';
    document.body.style.background='rgba(0,0,0,0.5)';
}
/* const closeNav= ()=>{
    mySidenav.style.width='0'
    document.querySelector("#main").style.marginLeft='0px';
    document.body.style.background='white';
} */

// sidenav full-width

const fullWidth =()=>{
    mySidenav.style.width='100vw';
}
const closeNav= ()=>{
    mySidenav.style.width='0'
}