var slideIndex = 0;
const mySlides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll('.dot')
const slidesLength = mySlides.length;

showSlides(slideIndex);


function plusSlides(inc){
    slideIndex += inc;

    if(slideIndex > slidesLength-1) slideIndex = 0;
    if(slideIndex < 0) slideIndex = slidesLength -1;

    showSlides(slideIndex)
}

function currentSlide(index){
    showSlides(index-1)
}

function showSlides(index){
    mySlides.forEach(el=>el.style.display='none');
    dots.forEach(el=>el.classList.remove('active'));

    const numberText=mySlides[index].querySelector('.numbertext');
    numberText.innerHTML = `${index+1} / ${slidesLength}`;

    mySlides[index].style.display='block'
    mySlides[index].classList.add('fade')
    dots[index].classList.add('active')
}
/* index= 0;
function automatedSlides(){
    setInterval(autoSlides,2000)
}
function autoSlides(index){
    console.log(index)

    if(index > slidesLength-1) index = 0;
    if(index < 0) index = slidesLength -1;

    mySlides.forEach(el=>el.style.display='none');
    dots.forEach(el=>el.classList.remove('active'));
    console.log(index)
    const numberText=mySlides[index].querySelector('.numbertext');
    numberText.innerHTML = `${index+1} / ${slidesLength}`;

    mySlides[index].style.display='block'
    mySlides[index].classList.add('fade')
    dots[index].classList.add('active')
    index++;
}
automatedSlides() */