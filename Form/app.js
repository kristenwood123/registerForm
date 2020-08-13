
const PASSWORD = document.getElementById('password')

form.addEventListener('sumbit', (e) => {
    e.preventDefault()

    checkInput()
})

checkInput = () => {
    const PASSWORDvalue = PASSWORD.value.trim()

    if(PASSWORDvalue.length < 8) {
        alert('must be 8')
    }
    else {
        
      //show success
    }
}