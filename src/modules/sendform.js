export const sendForm = (idForm) => {
    const form = document.getElementById(idForm)
    const preload = document.querySelector('.preloader')

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: data
        }).then(res => res.json())
    }

    const validInput = (inputs) => {
        let succes = false

        succes = Array.from(inputs).every((input) => {
            if (input.value === '') {
                input.style.border = '3px solid red'
                input.style.color = 'red'
                input.value = 'заполните поле'

                return false
            } else {
                return true
            }
        })

        return succes
    }

    const dataPreporation = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const allInputs = e.target.querySelectorAll('input')

        preload.style.display = 'flex'

        if (validInput(allInputs)) {
            sendData(formData)
                .then(() => {
                    preload.style.display = 'none'
                    allInputs.forEach((input) => {
                        input.value = ''
                    })
                    alert('форма успешно отправлена')
                })
        } else {
            alert('заполните поля')
        }
    }

    form.addEventListener('submit', dataPreporation)
}