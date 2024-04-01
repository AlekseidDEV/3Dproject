import { animate } from "./helpers/animate"

export const calcFunc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcSelect = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const spanTotal = calcBlock.querySelector('#total')


    const countCalc = () => {
        const typeCalcValue = +calcSelect.value
        const typeSquareValue = +calcSquare.value

        let typeDayValue = 1
        let typeCountValue = 1
        let totalValue = 0

        if(calcCount.value > 1){
            typeCountValue += (+calcCount.value / 10)
        }

        if(calcDay.value && calcDay.value < 5){
            typeDayValue = 1.5
        } else if(calcDay.value && calcDay.value < 10){
            typeDayValue = 2
        }

        if(typeCalcValue && typeSquareValue){
            totalValue = price * typeCalcValue * typeSquareValue * typeCountValue * typeDayValue
        } else{
            totalValue = 0
        }

        animate({
            duration: 400, 
            timing(timeFraction){
                return timeFraction
            },
            draw(progress){
                if(typeCalcValue && typeSquareValue){
                    spanTotal.textContent = Math.floor(totalValue * progress)
                }
            } 
          })
    }

    calcBlock.addEventListener('input', (e) => {
        if(e.target === calcSelect || e.target === calcSquare 
        || e.target === calcCount || e.target === calcDay){
            countCalc()
        }
    })
}