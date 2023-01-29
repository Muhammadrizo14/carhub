const startAnimation = ()=>{


    const currentSlide = document.querySelector('.slide__bg__inner__current')
    const currentShape = document.querySelector('.shapes__item__current')
    const currentText = document.querySelector('.slides-container__slide--active')


    startinTl.to('.header', 0.5, {
        opacity:1,
        y:0,
        delay:0.5
    })
        .to('.main-section__explore', 0.5, {
            opacity: 1,
            y: 0,
            delay: 0.5,
        }, '-=0.5')
        .to(currentText.querySelector('.slides__container__title'), 0.6, {
            opacity: 1,
            y:0,
        }, '-=0.1')
        .to(currentText.querySelector('.designers__info'), 0.6, {
            opacity: 1,
            y:0,
        }, '-=0.5')
        .from(currentSlide, 0.4, {
            xPercent: 100
        }, '-=0.6')
        .from(currentText.querySelector('.slide-bg__link'), 0.4, {
            xPercent: -100
        }, '-=0.5')
        .from(currentText.querySelector('.shapes__content'), 0.6, {
            delay: -0.6,
            xPercent: -100
        }, '-=0.5')
}