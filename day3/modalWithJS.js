const myModal = document.querySelector("#myModal img");
const images = document.querySelectorAll("#myImg")
const close = document.querySelector(".close")
function showInModal(){
    console.log(this)
    myModal.src =this.src;
    myModal.parentElement.classList.add('active')
}

images.forEach(i=>i.addEventListener('click',showInModal))
close.addEventListener('click',()=>{
    myModal.parentElement.classList.remove('active')
})