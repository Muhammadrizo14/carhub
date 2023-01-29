const textSlides = (direction) => {
    let currentSlide = document.querySelector('.slides-container__slide--active')
    let nextSlide;

    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

    if (nextSlide && !nextSlide.classList.contains('main-section__explore')) {
        const tl = gsap.timeline({
            default: {ease: easing},
        })

        tl.to(currentSlide.querySelector('.slides__container__title'), 0.6, {
            opacity: 0,
            y: 100
        })
            .to(currentSlide.querySelector('.designers__info'), 0.6, {
                opacity: 0,
                y: 100
            })
            .to(nextSlide.querySelector('.slides__container__title'), 0.6, {
                opacity: 1,
                y: 0
            })
            .to(nextSlide.querySelector('.designers__info'), 0.6, {
                opacity: 1,
                y: 0
            })

        currentSlide.classList.remove('slides-container__slide--active')
        nextSlide.classList.add('slides-container__slide--active')
    }
}