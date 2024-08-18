document.addEventListener("DOMContentLoaded", function(){

    //галерея
    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //     loop: true,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //     },
    //     speed: 3000,
    // });


    // var swiper2 = new Swiper(".mySwiper2", {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //     loop: true,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //         reverseDirection: true,
    //     },
    //     speed: 3000,
    // });
    
    const marquee = document.querySelector('.marquee');
    const containerWidth = document.querySelector('.marquee-container').offsetWidth;
    const marqueeWidth = marquee.scrollWidth;

    const animationDuration = (marqueeWidth / 500) + 's';

    marquee.style.animationDuration = animationDuration;


})