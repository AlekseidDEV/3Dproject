export const modalWind = () => {
    const btnPopup = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')

    const openModal = (e) => {
        if(e.target.localName === 'button'){
            popup.style.display = 'block'
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