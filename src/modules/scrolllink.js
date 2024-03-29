export const scrollLink = () => {
    const link = document.querySelector('main > a')

    link.addEventListener('click', (e) => {
        e.preventDefault()
            document.querySelector(e.target.closest('a').hash).scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
    })
}