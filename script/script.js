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

    const ButtonEvents = document.querySelectorAll('.button__event');
    const TargetEvent = document.querySelector('.target__event');

    ButtonEvents?.forEach(button => {
        button?.addEventListener('click', function() {
            TargetEvent?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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






})