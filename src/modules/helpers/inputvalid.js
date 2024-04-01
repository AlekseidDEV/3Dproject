export const inputValid = (selector) => {
    const blockInputs = document.querySelector(selector)
    const inputs = blockInputs.querySelectorAll('input')

    const calcBlock = document.querySelector('.calc-block')

    let textRegexp = /[^а-яА-Я\s-]+/g
    let emailRegexp = /[^a-zA-Z0-9@\-_.!~*']+/g
    let telRegexp = /[^\d()\-+]/g
    let messRegexp = /[^а-яА-Я0-9\s-_.!~*'"]+/g

    inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            if(input.getAttribute('type') === 'text'){
                input.value = e.target.value.replace(textRegexp, '')
            } else if(input.getAttribute('type') === 'email'){
                input.value = e.target.value.replace(emailRegexp, '')
            } else if(input.getAttribute('type') === 'tel'){
                input.value = e.target.value.replace(telRegexp, '')
            } else{
                input.value = e.target.value.replace(messRegexp, '')
            }
        })

        input.addEventListener('blur', (e) => {
            if(input.getAttribute('type') === 'text'){
                e.target.value = e.target.value.trim()
                .replace(/\s+/g, ' ')
                .replace(/[-_]*/, '')
                .replace(/( |^)[а-я]/g, (x) => {
                    return x.toUpperCase();
                });
            } else {
                e.target.value = e.target.value.replace(/[-_]*/, '')
            }
        })
    })

    calcBlock.addEventListener('input', (e) => {
        if(e.target.localName === 'input'){
             e.target.value = e.target.value.replace(/\D/g, '')
        }
     })
}