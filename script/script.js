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





    // window.onload = function () {
    //     document.body.classList.add('loaded_hiding');
    //     window.setTimeout(function () {
    //       document.body.classList.add('loaded');
    //       document.body.classList.remove('loaded_hiding');
    //     }, 500);
    // }

    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         const preloader = document.getElementById('.preloader');
    //         preloader.classList.add('hidden');
            
    //         // Показываем контент, когда прелоадер скрыт
    //         const header = document.getElementById('.header');
    //         const main = document.getElementById('.main');
    //         const footer = document.getElementById('.footer');

    //         header.style.display = 'flex';
    //         main.style.display = 'flex';
    //         footer.style.display = 'flex';
    //     }, 3000); // Задержка 3 секунды
    // });

})