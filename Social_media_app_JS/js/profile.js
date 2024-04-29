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

    // if (isLiked) {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
    // } else {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1
    // }

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
    // commentInput.blur()  // reversul functiei focus
})

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value))
    commentInput.value = ''
}

removeCommentButton.addEventListener('click', () => {
    // localStorage.clear() // sterge tot din local storage
    localStorage.removeItem('comment') // sterge numai elementul cu cheia respectiva
})

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

// infoIcon.addEventListener('mouseover', function() {
//     setTimeout(() => {
//         infoMessage.style.display = 'block'
//     }, 1000)
// })

// infoIcon.addEventListener('mouseout', function() {
//     infoMessage.style.display = 'none'
// })

// infoIcon.addEventListener('click', function () {
//     if (infoMessage.style.display === 'block') {
//         infoMessage.style.display = 'none'
//     } else {
//         infoMessage.style.display = 'block'
//     }
// })

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

const searchInput = document.querySelector('.searchInput')

searchInput.addEventListener('keydown', function (event) {
    // Filtrare pe FE

    const data = [
        {
            username: 'Username 1',
            likes: 10,
            shares: 15,
            comments: [],
            title: 'Ceva',
            description: 'Altceva'
        },
        {
            username: 'Username 2',
            likes: 20,
            shares: 25,
            comments: [],
            title: 'Titlu 2',
            description: 'Description 2'
        }
    ]

    // Ne va returna numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii
    // setTimeout(() => {
    //     const filtredResults = data.filter(post => post.username === event.target.value)
    //     console.log(filtredResults)
    // })

    // Ne va returna orice rezultat care contine sirul de caractere folosit la cautare
    setTimeout(() => {
        const filterdResults = data.filter(post => post.username.includes(event.target.value))
        console.log(filterdResults)
    })

    // Filtrare pe BE

    filterData(event.target.value).then(() => {
        // manipularea datelor si afisarea
    })

})

async function filterData(searchTerm) {
    const filteredPostUrl = 'url'
    let filteredData = {
        searchTerm: searchTerm
    }

    const filterPostConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filteredData)
    }

    const response = await fetch(filteredPostUrl, filterPostConfig)

    return response.json()
}

const myProfileButton = document.getElementsByClassName('myProfile')[0]
const profileDropdown = document.getElementsByClassName('profileDropdown')[0]

myProfileButton.addEventListener('click', function () {
    if (profileDropdown.style.display === 'none'
        || profileDropdown.style.display === '') {
            profileDropdown.style.display = 'flex'
    } else {
        profileDropdown.style.display = 'none'
    }

})

myProfileButton.addEventListener('blur', function () {
    profileDropdown.style.display = 'none'
})