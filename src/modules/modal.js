import { animate } from "./helpers/animate"

export const modalWind = () => {
    const btnPopup = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')

    const startAnimate = () => {
        if(window.innerWidth < 768){
            // popup.style.transform = 'translate(0px, 0px)'
        } else{
            animate({
                duration: 300, 
                timing(timeFraction){
                    return timeFraction
                },
                draw(progress){
                  popup.style.transform = `translate(${-(100 + (-100 *  progress))}%)`
                } 
              })
        }
    }

    const openModal = (e) => {
        if(e.target.matches('.popup-btn')){
            popup.style.display = 'block'
            startAnimate()
        } else if(e.target.className === 'popup-close'){
            popup.style.display = 'none' 
        } else if(e.target === popup){
            popup.style.display = 'none'
        }
    }

    btnPopup.forEach((btn) => {
        btn.addEventListener('click', openModal)
    })
    popup.addEventListener('click', openModal)
}