export const modalMenu = () => {
    const btnMenu = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeMenu = document.querySelector('.close-btn')

    const openMenu = (e) => {
        if(e.target.closest('.menu')){
            menu.classList.add('active-menu')
        } else if(e.target === closeMenu){
            menu.classList.remove('active-menu')
        } else if(e.target.closest('li')){
            // smoothScroll()
        }
    }

    btnMenu.addEventListener('click', openMenu)
    menu.addEventListener('click', openMenu)
}