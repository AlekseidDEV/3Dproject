export const smoothScroll = (id) => {
    const blockScroll = document.querySelector(id)
    
    blockScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}