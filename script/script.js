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


    
  
    //переход по странице с кнопок меню
    function getScrollOffset() {
        if (window.innerWidth < 574) {
            return 71;
        } else if (window.innerWidth < 766) {
            return 97;
        }
        return 0;
    }
    
    const ButtonPartners = document.querySelectorAll('.button__partner');
    const TargetPartner = document.querySelector('.target__partner');
    const isOnSecondPage = window.location.pathname.includes('index.html');
    
    ButtonPartners?.forEach(button => {
        button?.addEventListener('click', function() {
            if (isOnSecondPage) {
                if (TargetPartner) {
                    const scrollOffset = getScrollOffset();
                    const targetPosition = TargetPartner.offsetTop - scrollOffset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            } else {
                localStorage.setItem('scrollToPartner', true);
                window.location.href = 'index.html';
            }
        });
    });
    
    if (isOnSecondPage && localStorage.getItem('scrollToPartner')) {
        if (TargetPartner) {
            const scrollOffset = getScrollOffset();
            const targetPosition = TargetPartner.offsetTop - scrollOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
                if (TargetFederation) {
                    const scrollOffset = getScrollOffset();
                    const targetPosition = TargetFederation.offsetTop - scrollOffset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            } else {
                localStorage.setItem('scrollToFederation', true);
                window.location.href = 'index.html';
            }
        });
    });
    
    if (isOnSecondPage && localStorage.getItem('scrollToFederation')) {
        if (TargetFederation) {
            const scrollOffset = getScrollOffset();
            const targetPosition = TargetFederation.offsetTop - scrollOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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
    const burgerLines = document.querySelectorAll('.burger-button-line');

    function toggleBurgerMenu() {
        burger.classList.toggle('open');
        burgerMenu.classList.toggle('active');

        burgerLines.forEach(line => {
            line.classList.toggle('active');
        });
    }

    burger.addEventListener('click', toggleBurgerMenu);

    document.addEventListener('click', (event) => {
        if (!burger.contains(event.target) && !burgerMenu.contains(event.target)) {
            closeBurgerMenu();
        }
    });

    const navLinks = document.querySelectorAll('.burger-nav');
    navLinks.forEach(link => {
        link.addEventListener('click', closeBurgerMenu);
    });

    function closeBurgerMenu() {
        burger.classList.remove('open');
        burgerMenu.classList.remove('active');

        burgerLines.forEach(line => {
            line.classList.remove('active');
        });
    }




    // Прелоадер
    const preloader = document.querySelector('.preloader');
    const bodyIndex = document.querySelector('.body__index');

    if (!sessionStorage.getItem('preloaderShown')) {
        preloader.style.display = 'block';
        preloader.addEventListener('animationend', () => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                bodyIndex?.classList.add('active');
                startAnimations();
            }, 3000);
        });
        sessionStorage.setItem('preloaderShown', 'true');
    } else {
        preloader?.classList.add('hidden');
        bodyIndex?.classList.add('active');
        startAnimations();
    }





    // Анимации
    function startAnimations() {
        const logoAnim = document.querySelector('.header__logo svg');
        if (logoAnim) logoAnim.style.opacity = 1;
    
        const menuAnim = document.querySelector('.header__menu');
        if (menuAnim) menuAnim.style.opacity = 1;
    
        const menuItemsAnim = document.querySelectorAll('.header__menu-item');
        menuItemsAnim.forEach((item, index) => {
            if (item) {
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    
        const MenulineAnim = document.querySelector('.header__line');
        if (MenulineAnim) {
            MenulineAnim.style.width = '100%';
        }
    
        const arm__textAnim = document.querySelector('.arm__text');
        if (arm__textAnim) {
            arm__textAnim.style.clipPath = 'inset(0)';
            arm__textAnim.style.opacity = 1;
        }        
    
        const arm__lineAnim = document.querySelector('.arm__line');
        if (arm__lineAnim) {
            arm__lineAnim.style.opacity = 1;
            arm__lineAnim.style.transform = 'translateX(0)';
        }

        const TitleSvgAnim = document.querySelectorAll('.TitleSvg')
        const TitlesAnim = document.querySelectorAll('.gallery__title')
        TitlesAnim.forEach(Title => {
            if(Title) {
                Title.style.transform = 'translate(0)';
                Title.style.opacity = 1;
            }
        })
        TitleSvgAnim.forEach(TitleSvg => {
            if (TitleSvg) {
                TitleSvg.style.transform = 'rotateY(180deg)';
                TitleSvg.style.opacity = 1;
        }
        })

        const TitleLineAnim = document.querySelectorAll('.gallery__title-line');
        TitleLineAnim.forEach(TitleLine => {
            if (TitleLine) TitleLine.style.width = '100%';
        })
    }
    







})