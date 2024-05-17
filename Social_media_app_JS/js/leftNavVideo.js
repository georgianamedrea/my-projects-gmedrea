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
const noOfLikesElement = document.querySelectorAll('likesNumber')
const noOfSharesElement = document.querySelectorAll('sharesNumber')

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

for (let i = 0; i < postElements.length; i++) {

    const postElement = postElements[i];

    const likeButtons = postElement.querySelectorAll('#likeButton');
    const shareButtons = postElement.querySelectorAll('#shareButton');

    const noOfLikesElements = postElement.querySelectorAll('.likesNumber');
    const noOfSharesElements = postElement.querySelectorAll('.sharesNumber');

    likeButtons.forEach(likeButton => {

        let isLiked = false

        likeButton.addEventListener('click', function (event) {

            isLiked = !isLiked

            noOfLikesElements.forEach(noOfLikesElement => {
                noOfLikesElement.innerText = isLiked
                    ? Number(noOfLikesElement.innerText) + 1
                    : Number(noOfLikesElement.innerText) - 1
            })

            likeButton.classList.toggle('touched')
        })

    })

    shareButtons.forEach(shareButton => {

        let isShared = false

        shareButton.addEventListener('click', function (event) {

            isShared = !isShared


            noOfSharesElements.forEach(noOfSharesElement => {
                noOfSharesElement.innerText = isShared
                    ? Number(noOfSharesElement.innerText) + 1
                    : Number(noOfSharesElement.innerText) - 1
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

const profileOptionsButtons = document.getElementsByClassName('profileOptions')
const profileOptionsDropdowns = document.getElementsByClassName('profileOptionsDropdown')

for (let i = 0; i < postElements.length; i++) {

    let profileOptionsButton = profileOptionsButtons[i];
    let profileOptionsDropdown = profileOptionsDropdowns[i];

    profileOptionsButton.addEventListener('click', function () {
        if (profileOptionsDropdown.style.display === 'none'
            || profileOptionsDropdown.style.display === '') {
            profileOptionsDropdown.style.display = 'flex'
        } else {
            profileOptionsDropdown.style.display = 'none'
        }

    })

    const hidePostButtons = document.querySelectorAll('#hidePost')
    const reportPostButtons = document.querySelectorAll('#reportPost')

    hidePostButtons.forEach(hidePostButton => {
        hidePostButton.addEventListener('click', function () {
            let post = hidePostButton.closest('.post')
            post.style.display = 'none'
        })
    })

    reportPostButtons.forEach(reportPostButton => {
        reportPostButton.addEventListener('click', function () {
            alert('After we will review the content, we will let you know whether it did or did not go against our Community Standards.')
            profileOptionsDropdown.style.display = 'none'
        })
    })
}