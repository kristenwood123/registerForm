const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

document.addEventListener('submit', (e) => {
 if (password.value.length < 8) {
     alert('Password must be 8 characters long') 
} else {  
    return console.log(`Name: ${firstName.value} ${lastName.value},
    Email: ${email.value}, Password: ${password.value}`)
}
e.preventDefault()
})


