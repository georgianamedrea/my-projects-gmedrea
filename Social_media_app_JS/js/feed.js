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

const postElements = document.getElementsByClassName('post');
const noOfLikesElem = document.querySelectorAll('.likesNumber');
const noOfSharesElem = document.querySelectorAll('.sharesNumber');

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

for (let i = 0; i < postElements.length; i++) {

    const postElement = postElements[i];

    const likeButtons = postElement.querySelectorAll('#likeButton');
    const shareButtons = postElement.querySelectorAll('#shareButton');

    const noOfLikesElems = postElement.querySelectorAll('.likesNumber');
    const noOfSharesElems = postElement.querySelectorAll('.sharesNumber');


    likeButtons.forEach(likeButton => {

        let isLiked = false

        likeButton.addEventListener('click', function (event) {

            isLiked = !isLiked

            noOfLikesElems.forEach(noOfLikesElem => {
                noOfLikesElem.innerText = isLiked
                    ? Number(noOfLikesElem.innerText) + 1
                    : Number(noOfLikesElem.innerText) - 1
            })

            likeButton.classList.toggle('touched')
        })
    })

    shareButtons.forEach(shareButton => {

        let isShared = false

        shareButton.addEventListener('click', function (event) {

            isShared = !isShared

            noOfSharesElems.forEach(noOfSharesElem => {
                noOfSharesElem.innerText = isShared
                    ? Number(noOfSharesElem.innerText) + 1
                    : Number(noOfSharesElem.innerText) - 1
            })

            shareButton.classList.toggle('touched')
        })
    })
}

const commentButtons = document.querySelectorAll('#commentButton')
const newCommentFields = document.querySelectorAll('.newCommentField')
const insertCommentButtons = document.querySelectorAll('.insertCommentButton')

const commentMessages = document.querySelectorAll('.commentMessage')

for (let i = 0; i < commentButtons.length; i++) {

    let commentButton = commentButtons[i];
    let newCommentField = newCommentFields[i];
    let insertCommentButton = insertCommentButtons[i];
    let commentMessage = commentMessages[i];


    commentButton.addEventListener('click', function () {
        newCommentField.focus()
    })

    function setComment() {
        commentMessage.innerText = newCommentField.value;
        newCommentField.value = '';
    }

    newCommentField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            setComment()
            this.blur()
        }
    })

    insertCommentButton.addEventListener('click', setComment)
}

const infoIcons = document.getElementsByClassName('infoIcon')
const infoMessages = document.getElementsByClassName('infoMessage')

for (let i = 0; i < infoIcons.length; i++) {

    let infoIcon = infoIcons[i];
    let infoMessage = infoMessages[i];

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
}

const profileOptionsButtons = document.getElementsByClassName('profileOptions')
const profileOptionsDropdowns = document.getElementsByClassName('profileOptionsDropdown')

for (let i = 0; i < postElements.length; i++) {

    let profileOptionsButton = profileOptionsButtons[i];
    let profileOptionsDropdown = profileOptionsDropdowns [i];

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
}

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
    document.querySelector('.btnSubmit').innerText = "Sent!";
    document.querySelector('.btnSubmit').style.backgroundColor = "aquamarine";
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