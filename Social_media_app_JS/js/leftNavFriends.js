const noOfFriendsElement = document.getElementById('friendsNumber')
const confirmBtn = document.getElementById('confirm')
const removeBtn = document.getElementById('remove')
const friendRequestElement = document.getElementById('friendRequest')
const ulElement = document.getElementById('friendList')
const suggestedFriendElement = document.querySelector('#suggestedFriend')
const addFriendBtn = document.querySelector('#addFriend')
const removeRequestBtn = document.querySelector('#removeRequest')


let isFriend = false

function getNumberOfFriends() {
    noOfFriendsElement.innerText = noOfFriendsElement.innerText || 447
}

getNumberOfFriends()

confirmBtn.addEventListener('click', function () {
    isFriend = !isFriend

    if (isFriend) {
        noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText) + 1

        friendRequestElement.style.display = 'none'

        const newLiElement = document.createElement('li')
        ulElement.appendChild(newLiElement)

        newLiElement.innerHTML = friendRequestElement.innerHTML
    } else {
        noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText)
    }
})

removeBtn.addEventListener('click', function () {
    friendRequestElement.style.display = 'none'
})

addFriendBtn.addEventListener('click', function () {
    suggestedFriendElement.style.display = 'none'
    alert('Request sent!')
})

removeRequestBtn.addEventListener('click', function () {
    suggestedFriendElement.style.display = 'none'
})
