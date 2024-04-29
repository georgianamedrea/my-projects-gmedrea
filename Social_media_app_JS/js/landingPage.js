const nameField = document.getElementById('name')
const phoneNumberField = document.getElementById('phoneNumber')
const callToActionButton = document.getElementById('callToActionButton')
const error = document.getElementById('error')

const validateName = (nameValue) => {
    return nameValue.length >= 3
}

const validatePhone = (phoneNumberValue, regex) => {
    return !!phoneNumberValue.match(regex)
}

const showError = (message) => {
    error.style.display = 'block'
    error.innerText = message
    error.style.color = 'red'
}

const clearInputs = () => {
    nameField.value = ''
    phoneNumberField.value = ''
}

callToActionButton.addEventListener('click', function (event) {
    event.preventDefault()

    const nameValue = nameField.value
    const phoneNumberValue = phoneNumberField.value
    const regexPhonePattern = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/

    if (nameValue === '' || phoneNumberValue === '') {
        showError('All fields are required and must contain a value!')
    } else {
        if(validateName(nameValue) && validatePhone(phoneNumberValue, regexPhonePattern)) {
            alert('We will contact you in the next 24h to confirm your reservation!')
            clearInputs()
            callToActionButton.value = 'Booked!'
            callToActionButton.style.background = 'teal'
        } else {
            alert('Try again!')
            showError('Incomplete name or phone number')
            clearInputs()
        }
    }
})

// POST request

// async function bookNow(nameValue, phoneNumberValue) {
//     const bookUrl = 'url'
//     let bookData = {
//         name: nameValue,
//         phone: phoneNumberValue
//     }

//     const bookConfig = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         body: JSON.stringify(bookData)
//     }

//     const response = await fetch(bookUrl, bookConfig)

//     return response.json()
// }