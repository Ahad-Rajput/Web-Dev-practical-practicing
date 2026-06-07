const form = document.getElementById('form')

const passw1 = document.getElementById('passw1')
const passw2 = document.getElementById('passw2')

const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []
    if (!(passw1.value === passw2.value)) {
        message.push("Both passwords must be same!")
    }
    else if (passw1.value.length <= 6) {
        message.push("Password must be longer than 6 characters!")
    }
    else if (passw1.value.length >= 20) {
        message.push("Password must be less than 20 characters!")
    }

    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerHTML = message.join(', ')
    }
})
