const inputs = document.querySelectorAll('input')

const validations = {
    firstname: /^[a-zA-Z]{0,}$/,
    lastname: /^[a-z]{0,}$/ig,
    password: /^[A-Za-z\d]{8,}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]){2,}(\.[a-z]{2,8})?$/ 
}

//any letters, numbers, dots or hyphens
//any letters, numbers and/or hypens
//any letters
//a dot(.) then any letters s
//(yourname) @ (domain). (extension)(.again)


validate = (field, regex) => {

    if(regex.test(field.value)){
        field.className = 'valid';
        console.log('it is valid');
    } else {
        field.className = 'invalid';
        console.log('NOT VALID');
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value)
    validate(e.target, validations[e.target.attributes.name.value])
    })
})


