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
        setTimeout (() => {
            if (TargetPartner) {
                const scrollOffset = getScrollOffset();
                const targetPosition = TargetPartner.offsetTop - scrollOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            localStorage.removeItem('scrollToPartner');
        }, 500)
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
        setTimeout(() => {
        if (TargetFederation) {
            const scrollOffset = getScrollOffset();
            const targetPosition = TargetFederation.offsetTop - scrollOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
        localStorage.removeItem('scrollToFederation');
        }, 500)
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


    gsap.set('.line-top', { scaleY: 0, transformOrigin: 'bottom'});
    gsap.set('.line-bottom', { scaleY: 0});

    // Прелоадер
    const preloader = document.querySelector('.preloader');
    const bodyIndex = document.querySelector('.body__index');
    const tl = gsap.timeline()

    tl.to('.preloader__line-top', {
        height: 50,
        duration: 1,
    },0).to('.preloader__line-middle', {
        height: 86,
        duration: 1,
    },0).to('.preloader__line-bottom', {
        height: 115,
        duration: 1,
    },0) .to('.preloader__line-top', {
        height: 115,
        duration: 1,
    },1).to('.preloader__line-middle', {
        height: 50,
        duration: 1,
    },1).to('.preloader__line-bottom', {
        height: 115,
        duration: 1,
    },1).to('.preloader__line-top', {
        height: 115,
        duration: 1,
    },2).to('.preloader__line-middle', {
        height: 86,
        duration: 1,
    },2).to('.preloader__line-bottom', {
        height: 50,
        duration: 1,
    },2).to('.preloader__line-top', {
        height: 86,
        duration: 1,
    },3).to('.preloader__line-middle', {
        height: 115,
        duration: 1,
    },3).to('.preloader__line-bottom', {
        height: 86,
        duration: 1,
    },3).then(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
            bodyIndex?.classList.add('active');
            startAnimations();
        }, 200);
    });    

    if (!sessionStorage.getItem('preloaderShown')) {
        preloader.style.display = 'block';
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
        
        gsap.to(".header__logo img", {
            opacity: 1,
            duration: 1,
            delay: 1,
        });
        mm.add("(max-width: 768px)", () => {
            gsap.to(".header__logo img", {
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

        const armText = document.querySelector('.arm__text');
        if (armText) {
            gsap.to(armText, {
                opacity: 1,
                clipPath: 'inset(0)',
                duration: 1,
            });
        }

        document.querySelectorAll('.gallery__title-line').forEach
        (titleLine => {
            if (titleLine) {
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
            }
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
            if (titlesvg) {
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
            }
        })

        document.querySelectorAll('.federation__text-block').forEach
        (text__block => {
            if (text__block) {
                gsap.to(text__block, {
                    x:0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: text__block,
                        start: "100% bottom",
                        scrub: false,
                    }
                })
            }
        })

        const federationFon = document.querySelector('.federation__fon')
        if (federationFon) {
            gsap.to(federationFon, {
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        const federationPercon = document.querySelector('.federation__percon')
        if (federationPercon) {
            gsap.to(federationPercon, {
                opacity: 1,
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        const federationName = document.querySelector('.federation__name')
        if (federationName) {
            gsap.to(federationName, {
                opacity: 1,
                clipPath: 'inset(0)',
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        const federationPresident = document.querySelector('.federation__president')
        if (federationPresident) {
            gsap.to('.federation__president', {
                opacity: 1,
                clipPath: 'inset(0)',
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        const federationPerconAdapt = document.querySelector('.federation__percon-adapt')
        if (federationPerconAdapt) {
            gsap.to(federationPerconAdapt, {
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: federationPerconAdapt,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        const federationNameAdapt = document.querySelector('.federation__name-adapt')
        if (federationNameAdapt) {
            gsap.to(federationNameAdapt, {
                x: 0,
                duration: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: federationPerconAdapt,
                    start: "80% bottom",
                    scrub: false,
                }
            })
        }

        mm.add("(max-width: 768px)", () => {
            if (federationPresident) {
                gsap.to('.federation__president', {
                    opacity: 1,
                    clipPath: 'inset(0)',
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: federationPerconAdapt,
                        start: "80% bottom",
                        scrub: false,
                    }
                })
            }
        });
        
        const eventContentText = document.querySelector('.event__content-text')
        if (eventContentText) {
            gsap.to(eventContentText, {
                x:0,
                duration:1,
                scrollTrigger: {
                    trigger: eventContentText,
                    start: "100% bottom",
                    scrub: false,
                }
            })
        }

        const EventItemContent = document.querySelector('.event__item-content') 
        if (EventItemContent) {
            gsap.to(EventItemContent, {
                x:0,
                duration: 1,
                delay: 2,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const EventItem = document.querySelector('.event__item')
        if (EventItem) {
            gsap.to(EventItem, {
                duration: 1,
                clipPath: 'inset(-150px)',
                delay: 1,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        mm.add("(max-width: 768px)", () => {
            if (EventItem) {
                gsap.to(EventItem, {
                    duration: 1,
                    clipPath: 'inset(-150px)',
                    scrollTrigger: {
                        trigger: EventItemContent,
                        start: "50% bottom",
                        scrub: false,
                    }
                })
            }
        });

        const EventMinotavr = document.querySelector('.event__minotavr') 
        if (EventMinotavr) {
            gsap.to(EventMinotavr, {
                duration: 1,
                clipPath: 'inset(0 0 0 0)',
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const EventFon = document.querySelector('.event__fon')
        if (EventFon) {
            gsap.to(EventFon, {
                duration: 1,
                clipPath: 'inset(0 0 0 0)',
                delay: 1,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const EventFon1366 = document.querySelector('.event__fon-1366')
        if (EventFon1366) {
            gsap.to(EventFon1366, {
                duration: 1,
                clipPath: 'inset(0 0 0 0)',
                delay: 1,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const EventFon1024 = document.querySelector('.event__fon-1024')
        if (EventFon1024) {
            gsap.to(EventFon1024, {
                duration: 1,
                clipPath: 'inset(0 0 0 0)',
                delay: 1,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const EventFon768 = document.querySelector('.event__fon-768')
        if (EventFon768) {
            gsap.to(EventFon768, {
                duration: 1,
                clipPath: 'inset(0 0 0 0)',
                delay: 1,
                scrollTrigger: {
                    trigger: EventItemContent,
                    start: "50% bottom",
                    scrub: false,
                }
            })
        }

        const PartnerFon1 = document.querySelector('.partner__fon-1')
        if (PartnerFon1) {
            gsap.to(PartnerFon1, {
                duration: 1, 
                x: 0,
                opacity: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: '.partner__item-block',
                    start: '110% bottom',
                    scrub: false,
                }
            })
        }

        const PartnerFon3 = document.querySelector('.partner__fon-3')
        if (PartnerFon3) {
            gsap.to(PartnerFon3, {
                duration: 1, 
                clipPath: 'inset(0 0 0 0)',
                scrollTrigger: {
                    trigger: '.partner__item-block',
                    start: '110% bottom',
                    scrub: false,
                }
            })
        }

        const PartnerFon2 = document.querySelector('.partner__fon-2')
        if (PartnerFon2) {
            gsap.to(PartnerFon2, {
                duration: 1, 
                x: 0,
                opacity: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: '.partner__item-block',
                    start: '110% bottom',
                    scrub: false
                }
            })
        }

        const PartnerItemBlock = document.querySelector('.partner__item-block')
        mm.add("(min-width: 769px)", () => {
            if (PartnerItemBlock) {
                gsap.from('.partner__item-block', {
                    opacity: 0,
                    duration: 1,
                    delay: 2,
                    scrollTrigger: {
                        trigger: PartnerItemBlock,
                        start: '110% bottom',
                        scrub: false
                    }
                })
            }
        })
        mm.add("(max-width: 768px)", () => {
            if (PartnerItemBlock) {
                gsap.from('.partner__item-block', {
                    opacity: 0,
                    duration: 1,
                    delay: 0,
                    scrollTrigger: {
                        trigger: PartnerItemBlock,
                        start: '80% bottom',
                        scrub: false
                    }
                })
            }
        })

        document.querySelectorAll('.footer__contact-left a').forEach
        (contactLeft => {
            if (contactLeft) {
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
            }
        }) 

        document.querySelectorAll('.footer__contact-right a').forEach
        (contactRight => {
            if (contactRight) {
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
            }
        })

        gsap.to('.footer__contact-middle', {
            scale: 1,
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

        gsap.to('.footer__adapt', {
            y: 0,
            duration: 1,
        })

        const EventTitle = document.querySelector('.Event__title')
        if (EventTitle) {
            gsap.to(EventTitle, {
                x: 0,
                duration: 1,
            })
        }

        const EventSubtitle = document.querySelector('.Event__subtitle')
        if (EventSubtitle) {
            gsap.to(EventSubtitle, {
                x: 0,
                duration: 1,
            })
        }

        const EventYear = document.querySelector('.Event__year')
        if (EventYear) {
            gsap.from(EventYear, {
                x: '-110%',
                duration: 1,
                scrollTrigger: {
                    trigger: EventYear,
                    start: '100% bottom',
                    scrub: false,
                }
            })
        }

        document.querySelectorAll('.Event__tournament').forEach
        (tournament => {
            if (tournament) {
                gsap.from(tournament, {
                    x: '-110%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: tournament,
                        start: '100% bottom',
                        scrub: false,
                    }
                })
            }
        })

        const EventInfo = document.querySelector('.Event__info')
        if (EventInfo) {
            gsap.from(EventInfo, {
                x: '-110%',
                duration: 1,
                scrollTrigger: {
                    trigger: EventInfo,
                    start: '100% bottom',
                    scrub: false,
                }
            })
        }

        document.querySelectorAll('.line-top').forEach
        (lineTop => {
            gsap.to(lineTop, {
                scaleY: 1,
                duration: 0.5,
                transformOrigin: 'bottom',
                scrollTrigger: {
                    trigger: lineTop,
                    scrub: false,
                    start: '100% bottom'
                }
            })
        })

        document.querySelectorAll('.line-bottom').forEach
        (lineBottom => {
            gsap.to(lineBottom, {
                scaleY: 1,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: lineBottom,
                    scrub: false,
                    start: '100% bottom'
                }
            })
        })

        const MaskTop = document.querySelector('#mask-top rect')
        if (MaskTop) {
            gsap.to(MaskTop, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }
          
        const MaskBottom = document.querySelector('#mask-bottom rect')
        if (MaskBottom) {
            gsap.to(MaskBottom, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }

        const MaskTop1024 = document.querySelector('#mask-top-1024 rect')
        if (MaskTop1024) {
            gsap.to(MaskTop1024, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }
          
        const MaskBottom1024 = document.querySelector('#mask-bottom-1024 rect')
        if (MaskBottom1024) {
            gsap.to(MaskBottom1024, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }

        const MaskTop768 = document.querySelector('#mask-top-768 rect')
        if (MaskTop768) {
            gsap.to(MaskTop768, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }
          
        const MaskBottom768 = document.querySelector('#mask-bottom-768 rect')
        if (MaskBottom768) {
            gsap.to(MaskBottom768, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }

        const MaskTop1740 = document.querySelector('#mask-top-1740 rect')
        if (MaskTop1740) {
            gsap.to(MaskTop1740, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }
          
        const MaskBottom1740 = document.querySelector('#mask-bottom-1740 rect')
        if (MaskBottom1740) {
            gsap.to(MaskBottom1740, {
                duration: 1,
                attr: { width: '100%' },
                delay: 1,
                scrollTrigger: {
                    trigger: federationFon,
                    scrub: false,
                    start: '90% bottom'
                }
            });
        }

        const FaqTopRow = document.querySelector('.faq__top-row')
        if (FaqTopRow) {
            gsap.from(FaqTopRow, {
                x: '-110%',
                duration: 1,
            })
        }

        document.querySelectorAll('.faq__bottom-item').forEach
        (faqItem => {
            if (faqItem) {
                gsap.from(faqItem, {
                    x: '-110%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: faqItem,
                        start: '100% bottom',
                        scrub: false
                    }
                })
            }
        })

        document.querySelectorAll('.gallery__item-block').forEach
        (galleryBlock => {
            if (galleryBlock) {
                gsap.to (galleryBlock, {
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: galleryBlock,
                        start: '100% bottom',
                        scrub: false,
                    }
                })
            }
        })




    }
    


    //партнеры
    if (document.querySelector(".mySwiper")) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            breakpoints: {
                375: {
                    spaceBetween: 19,
                },

                576: {
                    spaceBetween: 29,
                },

                1024: {
                    spaceBetween: 39,
                },

                1366: {
                    spaceBetween: 60,
                }
            }
        });
    }
    


      
      
      

      
      
    





})

