const suggestedEventElement = document.getElementById('suggestedEvent')
const interestedBtn = document.getElementById('interestedBtn')
const ulElement = document.getElementById('eventList')

interestedBtn.addEventListener('click', function () {
    interestedBtn.style.background = 'blue'
    interestedBtn.style.color = 'white'
    suggestedEventElement.style.display = 'none'

    const newLiElement = document.createElement('li')
    ulElement.appendChild(newLiElement)

    newLiElement.innerHTML = suggestedEventElement.innerHTML
})

