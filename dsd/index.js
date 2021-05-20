const slides = document.getElementsByClassName('carousel-item');
let btnNext = document.getElementById('carousel-button-next');
let btnPrev = document.getElementById('carousel-button-prev');

let current_slide = 0;

slides[current_slide].classList.remove('carousel-item-visible');


btnNext.addEventListener('click',nextSlide)
btnPrev.addEventListener('click',prevSlide)
function nextSlide(){
    current_slide++
    delet()
    slides[current_slide].classList.add('carousel-item-visible');
    slides[current_slide].classList.add('animation');
    if(current_slide == 3 && current_slide++){
        current_slide = 0
    }
}
function prevSlide(){
    current_slide--
    if(current_slide == 3 && current_slide++){
        current_slide = 0
    }
    
}
slides[current_slide].classList.add('carousel-item-visible');

function delet(){
    for(let i = 0; i< slides.length; i++){
        slides[i].classList.remove('carousel-item-visible');
    }
    if(current_slide == 3 && current_slide++){
        current_slide = 0
    }
    

}

if(current_slide == 3 && current_slide++){
    current_slide = 0
}
