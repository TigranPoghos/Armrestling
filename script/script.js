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



    const preloader = document.querySelector('.preloader');

    // Функция, вызываемая по завершении всех анимаций
    function hidePreloader() {
        preloader.classList.add('preloader--hidden');
        // Дополнительно удаляем элемент из DOM после завершения перехода
        setTimeout(() => {
            preloader.style.display = 'none'; // Или можете удалить элемент полностью
        }, 3000); // Задержка должна совпадать с длительностью перехода
    }

    // Добавляем обработчик события окончания анимации
    preloader.addEventListener('animationend', hidePreloader);
    


})