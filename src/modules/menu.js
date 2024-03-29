import { smoothScroll } from "./smoothscroll"

export const modalMenu = () => {
    const btnMenu = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeMenu = document.querySelector('.close-btn')

    const openMenu = (e) => {
        e.preventDefault()
        if(e.target.closest('.menu')){
            menu.classList.add('active-menu')
        } else if(e.target === closeMenu){
            menu.classList.remove('active-menu')
        } else if(e.target.closest('li')){
            menu.classList.remove('active-menu')
            smoothScroll(e.target.hash)
        }
    }

    btnMenu.addEventListener('click', openMenu)
    menu.addEventListener('click', openMenu)
}