export const sliderFunc = (time) => {
    const slider = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')

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

        arrDots.forEach((dotLi, index) => {
            if (index === 0){
                dotLi.classList.add("dot", 'dot-active')
            } else {
                dotLi.classList.add('dot')
            }
        })
    }

    const prev = (arrElem, activeClass, index) => {
        arrElem[index].classList.remove(activeClass)
        arrElem[index].classList.remove(activeClass)
    }

    const next = (arrElem, activeClass, index) => {
        arrElem[index].classList.add(activeClass)
        arrElem[index].classList.add(activeClass)
    }

    const autoSlider = () => {
        prev(arrDots, "dot-active", count)
        prev(slides, 'portfolio-item-active', count)
        count++

        if (count >= slides.length) {
            count = 0
        }

        next(arrDots, "dot-active", count)
        next(slides, 'portfolio-item-active', count)
    }

    const changeSlider = (e) => {
        e.preventDefault()

        prev(arrDots, 'dot-active', count)
        prev(slides, 'portfolio-item-active', count)

        if (e.target.matches('.prev')) {
            count--
        } else if (e.target.matches('.next')) {
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

        next(arrDots, "dot-active", count)
        next(slides, 'portfolio-item-active', count)
    }

    const startSlider = () => {
        interval = setInterval(autoSlider, time)
        // if (slider && slides) {
        //     interval = setInterval(autoSlider, time)
        // } else {
        //     return
        // }
    }
    startSlider()
    addDots()

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
}