document.addEventListener("DOMContentLoaded", function(){

    const marquee = document.querySelector('.marquee');
    const containerWidth = document.querySelector('.marquee-container').offsetWidth;
    const marqueeWidth = marquee.scrollWidth;

    const animationDuration = (marqueeWidth / 100) + 's';

    marquee.style.animationDuration = animationDuration;



    const marquee2 = document.querySelector('.marquee2');
    const containerWidth2 = document.querySelector('.marquee-container2').offsetWidth;
    const marqueeWidth2 = marquee2.scrollWidth;

    const animationDuration2 = (marqueeWidth2 / 100) + 's';

    marquee2.style.animationDuration = animationDuration2;

})