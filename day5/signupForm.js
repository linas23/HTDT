const form = document.myForm;

const showSignup = ()=>{
    form.classList.add('active')
    document.body.style.backgroundColor="rgba(0,0,0,0.5)"
}
const closeform = ()=>{
    document.body.style.backgroundColor="white"
    form.classList.remove('active')
}