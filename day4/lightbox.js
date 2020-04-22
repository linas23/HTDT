const myModal = document.querySelector("#myModal");
const images = document.querySelectorAll(".option img")
const thumbnails = document.querySelector(".thumbnails");
const mainImage = document.querySelector(".mainImage img");
const numberText = document.querySelector('.numbertext');
let slideIndex = 1;

const openModal =()=>{
    myModal.style.display='block';
}
const closeModal =()=>{
    myModal.style.display='none';
}

// thumbnails innerHTML
var html = '';
images.forEach((image,index)=>{
    html += `
        <div class="column">
            <img class="demo" src="${image.src}" onclick="currentSlide(${index+1})" >
        </div>
            `
})

thumbnails.innerHTML = html;
const demos = document.querySelectorAll(".thumbnails .demo");

const currentSlide = (index) =>{
    demos.forEach(demo=>{
        demo.style.opacity=0.7
        demo.style.transform=`scale(1)`;
    });
    slideIndex = index;
    numberText.innerHTML = `${index} / ${images.length}`
    mainImage.src = images[index-1].src;
    demos[index-1].style.opacity=1;
    demos[index-1].style.transform=`scale(1.1)`;
}

const plusSlides = (inc)=>{
    slideIndex += inc;

    if(slideIndex <= 0) slideIndex = images.length;
    if(slideIndex > images.length) slideIndex = 1

    currentSlide(slideIndex);
}