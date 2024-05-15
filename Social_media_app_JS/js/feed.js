const accountSettingsButton = document.getElementById('accountSettingsButton')
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0]

const logoutButton = document.getElementById('logoutButton')

accountSettingsButton.addEventListener('click', function () {
    if (accountSettingsList.style.display === 'flex') {
        accountSettingsList.style.display = 'none'
    } else {
        accountSettingsList.style.display = 'flex'
    }
})

logoutButton.addEventListener('click', () => {
    window.open('../login.html', '_self')
})

const noOfLikesElem = document.getElementById('likesNumber')
const noOfSharesElem = document.getElementById('sharesNumber')

const likeButton = document.getElementById('likeButton')
const shareButton = document.getElementById('shareButton')

let isLiked = false
let isShared = false

function getNumberOfLikes() {
    noOfLikesElem.innerText = noOfLikesElem.innerText || 21
}

function getNumberOfShares() {
    noOfSharesElem.innerText = noOfSharesElem.innerText || 27
}

function getData() {
    getNumberOfLikes()
    getNumberOfShares()
}

getData()

likeButton.addEventListener('click', function () {
    isLiked = !isLiked
    console.dir(noOfLikesElem)

    noOfLikesElem.innerText = isLiked
        ? noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
        : noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1

    this.classList.toggle('touched')
})

shareButton.addEventListener('click', function () {
    isShared = !isShared
    noOfSharesElem.innerText = isShared
        ? Number(noOfSharesElem.innerText) + 1
        : Number(noOfSharesElem.innerText) - 1

    this.classList.toggle('touched')
})

const commentButton = document.getElementById('commentButton')
const commentInput = document.getElementById('commentInput')
const commentInputButton = document.getElementById('commentInputButton')

const commentMessage = document.getElementById('commentMessage')
const removeCommentButton = document.getElementById('removeCommentButton')

commentMessage.innerText = localStorage.getItem('comment') || commentMessage.innerText;

commentButton.addEventListener('click', function () {
    commentInput.focus()
})

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value))
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

const infoIcon = document.getElementsByClassName('infoIcon')[0]
const infoMessage = document.getElementsByClassName('infoMessage')[0]

infoIcon.addEventListener('click', function () {
    if (infoMessage.style.display === 'block') {
        infoMessage.style.display = 'none'
    } else {
        infoMessage.style.display = 'block'
    }
})

infoIcon.addEventListener('blur', function () {
    infoMessage.style.display = 'none'
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

profileOptionsButton.addEventListener('blur', function () {
    profileOptionsDropdown.style.display = 'none'
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

closeForm()

const onlineUserElements = document.querySelectorAll('.onlineUser');
const label = document.getElementById('messageLabel');

onlineUserElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            openForm();
            label.innerText = `Message to ${this.innerText}`;
        }
    })
})

function sendMessage() {
    document.querySelector('.message').style.display = "none";
    document.querySelector('.btn').innerText = "Sent!";
    document.querySelector('.btn').style.backgroundColor = "aquamarine";
}

closeForm()

const onlineGroupElements = document.querySelectorAll('.onlineGroup');

onlineGroupElements.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event) {
            openForm();
            label.innerText = `Message to ${this.innerText}`;
        }
    })
})