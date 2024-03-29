export const tabFunc = () => {
    const tabPanel = document.querySelector('.service-header')
    const tabsBtn = document.querySelectorAll('.service-header-tab')
    const tabs = document.querySelectorAll('.service-tab')
    
    const changeTab = (e) => {
        if(e.target.closest('.service-header-tab')){
            tabsBtn.forEach((btn, index) => {
                if(btn === e.target.closest('.service-header-tab')){
                    btn.classList.add('active')
                    tabs[index].classList.remove('d-none')
                } else{
                    btn.classList.remove('active')
                    tabs[index].classList.add('d-none')
                }
            })
        }
    }

    tabPanel.addEventListener('click', changeTab)
}