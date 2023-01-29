const imagesSlides = (direction)=>{
    let currentSlide = document.querySelector('.slide__bg__inner__current')
    let nextSlide;
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

    if (nextSlide) {
        imageSlides.forEach(el => {el.classList.remove('index')})
        const tl = gsap.timeline({
            default: {ease: easing},
            onComplete: function (){
                currentSlide.classList.remove('index')
            }
        })
        tl.from(nextSlide, 0.5, {
            xPercent:100
        })
            .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
                xPercent: -100,
                delay: -0.5
            })

        currentSlide.classList.remove('slide__bg__inner__current')
        nextSlide.classList.add('slide__bg__inner__current')
    }
}