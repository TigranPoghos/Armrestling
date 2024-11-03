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




    //Анимации
    function startAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        
        gsap.to(".header__logo svg", {
            opacity: 1,
            duration: 1,
            delay: 1,
        });
        mm.add("(max-width: 768px)", () => {
            gsap.to(".header__logo svg", {
                x: 0, 
                duration: 1,
            })
        });
    
        gsap.to('.header__menu', {
            opacity: 1,
            duration: 1,
        });
    
        gsap.to('.header__menu-item', {
            opacity: 1,
            duration: 1,
        });
    
        gsap.to('.header__line', {
            width: '100%',
            duration: 1,
        });

        gsap.to('.arm__text', {
            opacity: 1,
            clipPath: 'inset(0)',
            duration: 1,
        });

        document.querySelectorAll('.gallery__title-line').forEach
        (titleLine => {
            gsap.to(titleLine, { 
                width: '100%',
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: titleLine,
                    start: "100% bottom",
                    scrub: false,
                }
            })
        })

        document.querySelectorAll('.gallery__title').forEach
        (title => {
            gsap.to(title, {
                opacity: 1, 
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "100% bottom",
                    scrub: false,
                }
            })
        })

        document.querySelectorAll('.TitleSvg').forEach
        (titlesvg => {
            gsap.to(titlesvg, {
                opacity: 1,
                rotateY: '180deg',
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: titlesvg,
                    start: "100% bottom",
                    scrub: false,
                }
            })
        })

        document.querySelectorAll('.federation__text-block').forEach
        (text__block => {
            gsap.to(text__block, {
                x:0,
                duration: 1,
                scrollTrigger: {
                    trigger: text__block,
                    start: "100% bottom",
                    scrub: false,
                }
            })
        })

        gsap.to('.federation__fon', {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                start: "90% bottom",
                scrub: false,
            }
        })

        gsap.to('.federation__percon', {
            opacity: 1,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                start: "90% bottom",
                scrub: false,
            }
        })

        gsap.to('.federation__name', {
            opacity: 1,
            clipPath: 'inset(0)',
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                start: "90% bottom",
                scrub: false,
            }
        })

        gsap.to('.federation__president', {
            opacity: 1,
            clipPath: 'inset(0)',
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                start: "90% bottom",
                scrub: false,
            }
        })
        mm.add("(max-width: 768px)", () => {
            gsap.to(".federation__president", {
                opacity: 1,
                clipPath: 'inset(0)',
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: '.federation__percon-adapt',
                    start: "90% bottom",
                    scrub: false,
                }
            })
        });

        gsap.to('.event__content-text', {
            x:0,
            duration:1,
            scrollTrigger: {
                trigger: '.event__content-text',
                start: "100% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__item', {
            duration: 1,
            clipPath: 'inset(-150px)',
            delay: 1,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })
        mm.add("(max-width: 768px)", () => {
            gsap.to(".event__item", {
                duration: 1,
                clipPath: 'inset(-150px)',
                scrollTrigger: {
                    trigger: '.event__item-content',
                    start: "50% bottom",
                    scrub: false,
                }
            })
        });

        gsap.to('.event__item-content', {
            x:0,
            duration: 1,
            delay: 2,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__minotavr', {
            duration: 1,
            clipPath: 'inset(0 0 0 0)',
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__fon', {
            duration: 1,
            clipPath: 'inset(0 0 0 0)',
            delay: 1,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__fon-1366', {
            duration: 1,
            clipPath: 'inset(0 0 0 0)',
            delay: 1,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__fon-1024', {
            duration: 1,
            clipPath: 'inset(0 0 0 0)',
            delay: 1,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.event__fon-768', {
            duration: 1,
            clipPath: 'inset(0 0 0 0)',
            delay: 1,
            scrollTrigger: {
                trigger: '.event__item-content',
                start: "50% bottom",
                scrub: false,
            }
        })

        gsap.to('.partner__fon-1', {
            duration: 1, 
            x: 0,
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.partner__item-block',
                start: '150% bottom',
                scrub: false,
            }
        })

        gsap.to('.partner__fon-3', {
            duration: 1, 
            clipPath: 'inset(0 0 0 0)',
            scrollTrigger: {
                trigger: '.partner__item-block',
                start: '150% bottom',
                scrub: false,
            }
        })

        gsap.to('.partner__fon-2', {
            duration: 1, 
            x: 0,
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.partner__item-block',
                start: '150% bottom',
                scrub: false
            }
        })

        gsap.to('.partner__item-block', {
            opacity: 1,
            duration: 1,
            delay: 2,
            scrollTrigger: {
                trigger: '.partner__item-block',
                start: '150% bottom',
                scrub: false
            }
        })
        mm.add("(max-width: 768px)", () => {
            gsap.to('.partner__item-block', {
                opacity: 1,
                duration: 1,
                delay: 0,
                scrollTrigger: {
                    trigger: '.partner__item-block',
                    start: '80% bottom',
                    scrub: false
                }
            })
        });

        document.querySelectorAll('.footer__contact-left a').forEach
        (contactLeft => {
            gsap.to(contactLeft, {
                x: 0,
                delay: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.footer__contact-middle',
                    start: '100% bottom',
                    scrub: false
                }
            })
        }) 

        document.querySelectorAll('.footer__contact-right a').forEach
        (contactRight => {
            gsap.to(contactRight, {
                x: 0,
                delay: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.footer__contact-middle',
                    start: '100% bottom',
                    scrub: false
                }
            })
        })

        gsap.from('.footer__contact-middle', {
            scale: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.footer__contact-middle',
                start: '100% bottom',
                scrub: false
            }
        })

        gsap.to('.footer__title-text', {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.footer__subtitle span',
                start: '100% bottom',
                scrub: false
            }
        })

        gsap.to('.footer__subtitle span', {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.footer__subtitle span',
                start: '100% bottom',
                scrub: false
            }
        })

        gsap.to('.footer__line', {
            width: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.footer__line',
                start: '500% bottom',
                scrub: false
            }
        })

        gsap.to('.footer__nav', {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.footer__line',
                start: '500% bottom',
                scrub: false
            }
        })

        gsap.to('.burger-button', {
            x: 0,
            duration: 1,
        })

        gsap.to('.federation__name-adapt', {
            x: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__percon-adapt',
                start: "90% bottom",
                scrub: false,
            }
        })

        gsap.to('.federation__percon-adapt', {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.federation__percon-adapt',
                start: "90% bottom",
                scrub: false,
            }
        })

        gsap.to('.footer__adapt', {
            y: 0,
            duration: 1,
        })

        gsap.to('.Event__title', {
            x: 0,
            duration: 1,
        })

        gsap.to('.Event__subtitle', {
            x: 0,
            duration: 1,
        })

        gsap.from('.Event__year', {
            x: '-110%',
            duration: 1,
            scrollTrigger: {
                trigger: '.Event__year',
                start: '100% bottom',
                scrub: false,
            }
        })

        document.querySelectorAll('.Event__tournament').forEach
        (tournament => {
            gsap.from(tournament, {
                x: '-110%',
                duration: 1,
                scrollTrigger: {
                    trigger: tournament,
                    start: '100% bottom',
                    scrub: false,
                }
            })
        })

        gsap.from('.Event__info', {
            x: '-110%',
            duration: 1,
            scrollTrigger: {
                trigger: '.Event__info',
                start: '100% bottom',
                scrub: false,
            }
        })

        gsap.from('.line-top', {
            scaleY: 0,
            duration: 0.5,
            transformOrigin: 'bottom'
        })

        gsap.from('.line-bottom', {
            scaleY: 0,
            duration: 0.5,
            delay: 0.5,
        })

        gsap.to("#mask-top rect", {
            duration: 1,
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });
          
        gsap.to("#mask-bottom rect", {
            duration: 1,
            delay: 0, 
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });

        gsap.to("#mask-top-1024 rect", {
            duration: 1,
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });
          
        gsap.to("#mask-bottom-1024 rect", {
            duration: 1,
            delay: 0, 
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });

        gsap.to("#mask-top-768 rect", {
            duration: 1,
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });
          
        gsap.to("#mask-bottom-768 rect", {
            duration: 1,
            delay: 0, 
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });

        gsap.to("#mask-top-1740 rect", {
            duration: 1,
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });
          
        gsap.to("#mask-bottom-1740 rect", {
            duration: 1,
            delay: 0, 
            attr: { width: '100%' },
            delay: 1,
            scrollTrigger: {
                trigger: '.federation__fon',
                scrub: false,
                start: '90% bottom'
            }
        });

        gsap.from('.faq__top-row', {
            x: '-110%',
            duration: 1,
        })

        document.querySelectorAll('.faq__bottom-item').forEach
        (faqItem => {
            gsap.from(faqItem, {
                x: '-110%',
                duration: 1,
                scrollTrigger: {
                    trigger: faqItem,
                    start: '100% bottom',
                    scrub: false
                }
            })
        })







    }
    


    //партнеры
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
    });


      
      
    





})

