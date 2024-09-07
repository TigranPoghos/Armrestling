document.addEventListener("DOMContentLoaded", function(){

    const marquee = document.querySelector('.marquee');
    const containerWidth = document.querySelector('.marquee-container')?.offsetWidth;
    const marqueeWidth = marquee?.scrollWidth;

    const animationDuration = (marqueeWidth / 100) + 's';

    if (marquee) {
        marquee.style.animationDuration = animationDuration;
    }



    const marquee2 = document.querySelector('.marquee2');
    const containerWidth2 = document.querySelector('.marquee-container2')?.offsetWidth;
    const marqueeWidth2 = marquee2?.scrollWidth;
    const animationDuration2 = (marqueeWidth2 / 100) + 's';

    if (marquee2) {
        marquee2.style.animationDuration = animationDuration2;
    }



    const preloader = document.querySelector('.preloader');
    const bodyIndex = document.querySelector('.body__index')

    function hidePreloader() {
        preloader.classList.add('preloader--hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
            bodyIndex?.classList.add('active');
        }, 3000);
    }
    preloader?.addEventListener('animationend', hidePreloader);
    



    const ButtonPartners = document.querySelectorAll('.button__partner');
    const TargetPartner = document.querySelector('.target__partner');

    ButtonPartners?.forEach(button => {
        button?.addEventListener('click', function() {
            TargetPartner?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const ButtonContacts = document.querySelectorAll('.button__contact');
    const TargetContact = document.querySelector('.target__contact');

    ButtonContacts?.forEach(button => {
        button?.addEventListener('click', function() {
            TargetContact?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const ButtonFederations = document.querySelectorAll('.button__federation');
    const TargetFederation = document.querySelector('.target__federation');

    ButtonFederations?.forEach(button => {
        button?.addEventListener('click', function() {
            TargetFederation?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    






    // document.querySelectorAll('.FaqJs__item')?.forEach(item => {
    //     item?.addEventListener('click', function() { 
    //         const FaqJs__answer = item.querySelector('.FaqJs__answer');
    //         const FaqJs__svg = item.querySelector('.FaqJs__svg');  
    //         const FaqJs__line = item.querySelector('.FaqJs__line');  
    
    //         document.querySelectorAll('.FaqJs__item')?.forEach(siblingitem => {
    //             if (siblingitem !== item) {
    //                 const siblingAnswer = siblingitem.querySelector('.FaqJs__answer');
    //                 const siblingSvg = siblingitem.querySelector('.FaqJs__svg');
    //                 const siblingLine = siblingitem.querySelector('.FaqJs__line');
    
    //                 if (siblingAnswer) {
    //                     siblingAnswer.style.height = '0'; // Скрываем ответ
    //                     siblingAnswer.classList.remove('active');
    //                 }
    //                 if (siblingSvg) siblingSvg.classList.remove('active');
    //                 if (siblingLine) siblingLine.classList.remove('active');
    //             }
    //         });
    
    //         if (FaqJs__answer.classList.contains('active')) {
    //             FaqJs__answer.style.height = '0'; // Сворачиваем ответ
    //             FaqJs__answer.classList.remove('active');
    //         } else {
    //             FaqJs__answer.classList.add('active');
    //             FaqJs__answer.style.height = FaqJs__answer.scrollHeight + 'px'; // Раскрываем ответ
    //         }
    
    //         if (FaqJs__svg) FaqJs__svg.classList.toggle('active');
    //         if (FaqJs__line) FaqJs__line.classList.toggle('active');
    //     });
    // });
    





    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.FaqJs__item');
    
        if (!isClickInside) {
            document.querySelectorAll('.FaqJs__item').forEach(item => {
                const FaqJs__answer = item.querySelector('.FaqJs__answer');
                const FaqJs__svg = item.querySelector('.FaqJs__svg');
                const FaqJs__line = item.querySelector('.FaqJs__line');
    
                if (FaqJs__answer && FaqJs__answer.classList.contains('active')) {
                    FaqJs__answer.classList.remove('show-text');
                    setTimeout(() => {
                        FaqJs__answer.style.height = '0'; // Сворачиваем ответ
                        FaqJs__answer.classList.remove('active');
                    }, 400); // Время задержки для завершения анимации текстового блока
                }
                if (FaqJs__svg) FaqJs__svg.classList.remove('active');
                if (FaqJs__line) FaqJs__line.classList.remove('active');
            });
        }
    });
    
    document.querySelectorAll('.FaqJs__item').forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Предотвращаем всплытие события клика
    
            const FaqJs__answer = item.querySelector('.FaqJs__answer');
            const FaqJs__svg = item.querySelector('.FaqJs__svg');  
            const FaqJs__line = item.querySelector('.FaqJs__line');  
    
            document.querySelectorAll('.FaqJs__item').forEach(siblingitem => {
                if (siblingitem !== item) {
                    const siblingAnswer = siblingitem.querySelector('.FaqJs__answer');
                    const siblingSvg = siblingitem.querySelector('.FaqJs__svg');
                    const siblingLine = siblingitem.querySelector('.FaqJs__line');
    
                    if (siblingAnswer) {
                        siblingAnswer.classList.remove('show-text');
                        setTimeout(() => {
                            siblingAnswer.style.height = '0'; // Скрываем ответ
                            siblingAnswer.classList.remove('active');
                        }, 400); // Время задержки для завершения анимации текстового блока
                    }
                    if (siblingSvg) siblingSvg.classList.remove('active');
                    if (siblingLine) siblingLine.classList.remove('active');
                }
            });
    
            if (FaqJs__answer.classList.contains('active')) {
                FaqJs__answer.classList.remove('show-text');
                setTimeout(() => {
                    FaqJs__answer.style.height = '0'; // Сворачиваем ответ
                    FaqJs__answer.classList.remove('active');
                }, 400); // Время задержки для завершения анимации текстового блока
            } else {
                FaqJs__answer.classList.add('active');
                FaqJs__answer.style.height = FaqJs__answer.scrollHeight + 'px'; // Раскрываем ответ
                setTimeout(() => {
                    FaqJs__answer.classList.add('show-text'); // Добавляем класс для текста
                }, 400); // Время задержки для завершения анимации высоты блока
            }
    
            if (FaqJs__svg) FaqJs__svg.classList.toggle('active');
            if (FaqJs__line) FaqJs__line.classList.toggle('active');
        });
    });
    


})