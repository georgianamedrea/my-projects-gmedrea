const noOfFriendsElement = document.getElementById('friendsNumber')
const friendRequestElements = document.getElementsByClassName('friendRequest')
const ulElement = document.getElementById('friendList')
const suggestedFriendElements = document.getElementsByClassName('suggestedFriend')


let isFriend = false

function getNumberOfFriends() {
    noOfFriendsElement.innerText = noOfFriendsElement.innerText || 447
}

getNumberOfFriends()

for (let i = 0; i < friendRequestElements.length; i++) {

    const friendRequestElement = friendRequestElements[i];
    const confirmBtns = friendRequestElement.querySelectorAll('.confirm');
    const removeBtns = friendRequestElement.querySelectorAll('.remove');

    confirmBtns.forEach(confirmBtn => {
        confirmBtn.addEventListener('click', function (event) {

            isFriend = !isFriend

            if (isFriend) {
                noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText) + 1

                event.currentTarget.parentElement.style.display = 'none';

                const newLiElement = document.createElement('li')
                ulElement.appendChild(newLiElement)

                newLiElement.innerHTML = event.currentTarget.parentElement.innerHTML;
            } else {
                noOfFriendsElement.innerText = Number(noOfFriendsElement.innerText)
            }
        })
    })


    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', function (event) {
            event.currentTarget.parentElement.style.display = 'none';
        })

    })
}

for (let i = 0; i < friendRequestElements.length; i++) {

    const suggestedFriendElement = suggestedFriendElements[i];
    const addFriendBtns = suggestedFriendElement.querySelectorAll('.addFriend');
    const removeRequestBtns = suggestedFriendElement.querySelectorAll('.removeRequest');

    addFriendBtns.forEach(addFriendBtn => {
        addFriendBtn.addEventListener('click', function () {
            suggestedFriendElement.style.display = 'none'
            alert('Request sent!')
        })
    })

    removeRequestBtns.forEach(removeRequestBtn => {
        removeRequestBtn.addEventListener('click', function () {
            suggestedFriendElement.style.display = 'none'
        })
    })
}


