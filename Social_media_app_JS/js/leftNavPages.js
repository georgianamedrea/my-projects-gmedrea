const likeButton = document.getElementById('like')
const liElement = document.getElementById('page')

const ulElement = document.getElementById('pageList')
console.dir(liElement)

likeButton.addEventListener('click', function () {
    likeButton.style.backgroundColor = 'blue'
    likeButton.style.color = 'white'
    likeButton.innerText = 'Liked'

    liElement.style.display = 'none'

    const newLiElement = document.createElement('li')
    ulElement.appendChild(newLiElement)
    newLiElement.innerHTML = liElement.innerHTML
})
