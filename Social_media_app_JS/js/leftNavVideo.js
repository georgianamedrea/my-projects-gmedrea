const noOfLikesElement = document.getElementById('likesNumber')
const noOfSharesElement = document.getElementById('sharesNumber')

const likeButton = document.getElementById('likeButton')
const shareButton = document.getElementById('shareButton')

let isLiked = false
let isShared = false

function getNumberOfLikes() {
    noOfLikesElement.innerText = noOfLikesElement.innerText || 2
}

function getNumberOfShares() {
    noOfSharesElement.innerText = noOfSharesElement.innerText || 2
}

function getData() {
    getNumberOfLikes()
    getNumberOfShares()
}

getData()

likeButton.addEventListener('click', function () {
    isLiked = !isLiked

    if (isLiked) {
        noOfLikesElement.innerText = Number(noOfLikesElement.innerText) + 1
    } else {
        noOfLikesElement.innerText = Number(noOfLikesElement.innerText) - 1
    }

    this.classList.toggle('touched')
})


shareButton.addEventListener('click', function () {
    getNumberOfShares()

    isShared = !isShared

    if (isShared) {
        noOfSharesElement.innerText = Number(noOfSharesElement.innerText) + 1
    } else {
        noOfSharesElement.innerText = Number(noOfSharesElement.innerText) - 1
    }

    this.classList.toggle('touched')
})

const commentButton = document.getElementById('commentButton')
const commentInput = document.getElementById('commentInput')
const commentInputButton = document.getElementById('commentInputButton')

const commentMessage = document.getElementById('commentMessage')
const removeCommentButton = document.getElementById('removeCommentButton')

commentButton.addEventListener('click', function () {
    commentInput.focus()
})

function setComment() {
    commentMessage.innerText = commentInput.value;
    commentInput.value = ''
}

commentInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        setComment()
        this.blur()
    }
})

commentInputButton.addEventListener('click', setComment)

const commentText = document.getElementsByClassName('userCommentText')[0]
commentText.addEventListener('mouseover', function () {
    removeCommentButton.style.display = 'inline-block'
})

commentText.addEventListener('mouseout', function () {
    removeCommentButton.style.display = 'none'
})

const profileOptionsButton = document.getElementsByClassName('profileOptions')[0]
const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0]

profileOptionsButton.addEventListener('click', function () {
    if (profileOptionsDropdown.style.display === 'none'
        || profileOptionsDropdown.style.display === '') {
        profileOptionsDropdown.style.display = 'flex'
    } else {
        profileOptionsDropdown.style.display = 'none'
    }
})

const hidePostButton = document.getElementById('hidePost')
const reportPostButton = document.getElementById('reportPost')
const postElement = document.getElementsByClassName('post')[0]

hidePostButton.addEventListener('click', function () {
    postElement.style.display = 'none'
})

reportPostButton.addEventListener('click', function () {
    alert('After we will review the content, we will let you know whether it did or did not go against our Community Standards.')
    profileOptionsDropdown.style.display = 'none'
})