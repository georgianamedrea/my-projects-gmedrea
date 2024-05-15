const liElements = document.getElementsByClassName('page')
const ulElement = document.getElementById('pageList')

for (let i = 0; i < liElements.length; i++) {

    const liElement = liElements[i];
    const likeButtons = liElement.querySelectorAll('.like')

    likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', function (event) {
            likeButton.style.backgroundColor = 'blue'
            likeButton.style.color = 'white'
            likeButton.innerText = 'Liked'

            event.currentTarget.parentElement.style.display = 'none'

            const newLiElement = document.createElement('li')
            ulElement.appendChild(newLiElement)
            newLiElement.innerHTML = event.currentTarget.parentElement.innerHTML
        })
    })
}