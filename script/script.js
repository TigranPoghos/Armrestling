document.addEventListener("DOMContentLoaded", function(){

    //Галерея
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


    //прелоадер
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
    


    //переход по странице с кнопок меню
    const ButtonPartners = document.querySelectorAll('.button__partner');
    const TargetPartner = document.querySelector('.target__partner');
    const isOnSecondPage = window.location.pathname.includes('index.html');
    
    ButtonPartners?.forEach(button => {
        button?.addEventListener('click', function() {
            if (isOnSecondPage) {
                TargetPartner.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                localStorage.setItem('scrollToPartner', true);
                window.location.href = 'index.html';
            }
        });
    });
    if (isOnSecondPage && localStorage.getItem('scrollToPartner')) {
        if (TargetPartner) {
            TargetPartner.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.removeItem('scrollToPartner');
    }
    


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
            if (isOnSecondPage) {
                TargetFederation.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                localStorage.setItem('scrollToFederation', true);
                window.location.href = 'index.html';
            }
        });
    });
    if (isOnSecondPage && localStorage.getItem('scrollToFederation')) {
        if (TargetFederation) {
            TargetFederation.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.removeItem('scrollToFederation');
    }
    




    




    //Вопросы
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
                        FaqJs__answer.style.height = '0';
                        FaqJs__answer.classList.remove('active');
                    }, 400);
                }
                if (FaqJs__svg) FaqJs__svg.classList.remove('active');
                if (FaqJs__line) FaqJs__line.classList.remove('active');
            });
        }
    });
    document.querySelectorAll('.FaqJs__item').forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
    
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
                            siblingAnswer.style.height = '0';
                            siblingAnswer.classList.remove('active');
                        }, 400);
                    }
                    if (siblingSvg) siblingSvg.classList.remove('active');
                    if (siblingLine) siblingLine.classList.remove('active');
                }
            });
    
            if (FaqJs__answer.classList.contains('active')) {
                FaqJs__answer.classList.remove('show-text');
                setTimeout(() => {
                    FaqJs__answer.style.height = '0';
                    FaqJs__answer.classList.remove('active');
                }, 400);
            } else {
                FaqJs__answer.classList.add('active');
                FaqJs__answer.style.height = FaqJs__answer.scrollHeight + 'px';
                setTimeout(() => {
                    FaqJs__answer.classList.add('show-text'); 
                }, 400);
            }
    
            if (FaqJs__svg) FaqJs__svg.classList.toggle('active');
            if (FaqJs__line) FaqJs__line.classList.toggle('active');
        });
    });
    





    //бургер
    const burger = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger');
    const burgerLines = document.querySelectorAll('.burger-button-line'); // Получаем все линии бургер-кнопки

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        burgerMenu.classList.toggle('active');

        burgerLines.forEach(line => {
            line.classList.toggle('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
            burger.classList.remove('open');
            burgerMenu.classList.remove('active');
            
            burgerLines.forEach(line => {
                line.classList.remove('active');
            });
        }
    });

    

    //скролл
    let isScrolling = false; // Флаг для предотвращения зацикливания
    const largeHeaderHeight = 97; // Высота шапки на экранах от 766px до 575px
    const smallHeaderHeight = 71; // Высота шапки на экранах 575px и ниже
  
    window.addEventListener('wheel', function(event) {
      const firstScreen = document.querySelector('.arm');
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;
  
      // Если уже идет плавный переход, выходим
      if (isScrolling) return;
  
      // Определяем высоту шапки в зависимости от ширины экрана
      let headerHeight;
      if (screenWidth <= 574) {
        headerHeight = smallHeaderHeight; // Для экранов 575px и ниже
      } else if (screenWidth <= 766) {
        headerHeight = largeHeaderHeight; // Для экранов от 766px до 575px
      } else {
        headerHeight = 0; // Для экранов больше 766px шапка не влияет
      }
  
      // Целевая позиция для скролла
      const targetScrollPosition = firstScreen.clientHeight - headerHeight;
  
      if (event.deltaY > 0 && scrollPosition < targetScrollPosition) {
        // Если скроллим вниз и находимся на первом экране
        isScrolling = true;
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
        setTimeout(() => isScrolling = false, 500); // Задержка для предотвращения зацикливания
      } else if (event.deltaY < 0 && scrollPosition > 0 && scrollPosition <= targetScrollPosition) {
        // Если скроллим вверх и находимся в пределах первого экрана
        isScrolling = true;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(() => isScrolling = false, 500);
      }
    });

})