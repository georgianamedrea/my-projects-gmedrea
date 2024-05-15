const suggestedEventElements = document.getElementsByClassName('suggestedEvent')
const ulElement = document.getElementById('eventList')

for (let i = 0; i < suggestedEventElements.length; i++) {
    const suggestedEventElement = suggestedEventElements[i];
    const interestedBtns = suggestedEventElement.querySelectorAll('.interestedBtn');

    interestedBtns.forEach(interestedBtn => {
        interestedBtn.addEventListener('click', function (event) {
            interestedBtn.style.background = 'blue'
            interestedBtn.style.color = 'white'

            event.currentTarget.parentElement.style.display = 'none'

            const newLiElement = document.createElement('li')
            ulElement.appendChild(newLiElement)

            newLiElement.innerHTML = event.currentTarget.parentElement.innerHTML
        })
    })
}

