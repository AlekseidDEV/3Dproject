export const timer = (deadline) => {
const timerHours = document.getElementById('timer-hours')
const timerMinutes = document.getElementById('timer-minutes')
const timerSeconds = document.getElementById('timer-seconds')
const timerDay = document.getElementById('timer-day')


const getTime = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000

    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, days, hours, minutes, seconds}
}

const updateClock = () => {
    const {timeRemaining, days, hours, minutes, seconds} = getTime()

    timerHours.textContent = hours < 10 ? `0${hours}` : hours
    timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes
    timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds
    timerDay.textContent = days < 10 ? `0${days}` : days

    if(timeRemaining > 0){
        setInterval(updateClock, 1000)
    }
}

updateClock()
}
