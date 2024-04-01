export const sliderFunc = ([sliderClass, slidesClass, slideActive = 'portfolio-item-active', dotClass, dotActive = 'dot-active', prevLink, nextLink, time]) => {
    const slider = document.querySelector(sliderClass)
    const slides = document.querySelectorAll(slidesClass)

    let count = 0
    let interval
    let arrDots

    const addDots = () => {
        const dotWrapper = slider.querySelector('.portfolio-dots')

        for (let dot = 0; dot <= slides.length - 1; dot++) {
            const newDots = document.createElement('li')

            dotWrapper.append(newDots)
        }

        arrDots = dotWrapper.querySelectorAll('li')

        arrDots.forEach((dot, index) => {
            if (index === 0) {
                dot.classList.add(dotClass, dotActive)
            } else {
                dot.classList.add(dotClass)
            }
        })
    }

    const prev = (arrElem, activeClass, index) => {
        arrElem[index].classList.remove(activeClass)
    }

    const next = (arrElem, activeClass, index) => {
        arrElem[index].classList.add(activeClass)
    }

    const autoSlider = () => {
        prev(arrDots, dotActive, count)
        prev(slides, slideActive, count)
        count++

        if (count >= slides.length) {
            count = 0
        }

        next(arrDots, dotActive, count)
        next(slides, slideActive, count)
    }

    const changeSlider = (e) => {
        e.preventDefault()

        prev(arrDots, dotActive, count)
        prev(slides, slideActive, count)

        if (e.target.matches(prevLink)) {
            count--
        } else if (e.target.matches(nextLink)) {
            count++
        } else if (e.target.matches('.dot')) {
            arrDots.forEach((dot, index) => {
                if (e.target === dot) {
                    count = index
                }
            })
        }

        if (count < 0) {
            count = slides.length - 1
        }

        if (count >= slides.length) {
            count = 0
        }

        next(arrDots, dotActive, count)
        next(slides, slideActive, count)
    }

    const startSlider = () => {
        if (slider && slides) {
            addDots()
            interval = setInterval(autoSlider, time)

            slider.addEventListener('click', changeSlider)
            slider.addEventListener('mouseover', (e) => {
                if (e.target.matches('.dot') || e.target.matches('.portfolio-btn')) {
                    clearInterval(interval)
                }
            })
            slider.addEventListener('mouseleave', (e) => {
                if (e.target.matches('.dot') || e.target.matches('.portfolio-btn')) {
                    interval = setInterval(autoSlider, time)
                }
            }, true)

        } else {
            throw new Error('Передан не верный селектор в модуль слайдера, исправь пожалуста :)')
        }
    }

    startSlider()
}