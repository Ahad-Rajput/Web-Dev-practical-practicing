const form = document.getElementById('form')
const password = document.getElementById('password')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []
    if (password.value.length <= 6) {
        message.push("Password must be longer than 6 characters!")
    }
    else if (password.value.length >= 20) {
        message.push("Password must be less than 20 characters!")
    }

    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})
