const main = document.querySelector(".mainImage");
const mainImage = main.querySelector('img');
const numberText = document.querySelector(".numbertext");
const totalSlides = document.querySelectorAll(".column");
const images = document.querySelectorAll(".demo");
let currentIndex = 1;

const plusSlides = (inc) =>{
    currentIndex += inc;

    if(currentIndex < 1) currentIndex = totalSlides.length;
    if(currentIndex > totalSlides.length) currentIndex =1;

    showSlide(currentIndex)

}

const currentSlide = (index) =>{
    showSlide(index)
}


const showSlide = (slideIndex) =>{
    images.forEach(image=>image.classList.remove('active'))
    images[slideIndex-1].classList.add('active');
    mainImage.src = images[slideIndex-1].src;
    numberText.innerHTML = `${slideIndex} / ${totalSlides.length}`;
} 

showSlide(currentIndex);
