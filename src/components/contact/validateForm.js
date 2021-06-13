function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkEmailDomain(email){
    return fetch(`https://mailcheck.p.rapidapi.com/?domain=${email}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY,
            "x-rapidapi-host": process.env.REACT_APP_X_RAPID_API_HOST
        }
    })
}

function validateForm(formulario) {
    const name = formulario.current.elements[0].value.trim()
    const email = formulario.current.elements[1].value.trim()
    const subject = formulario.current.elements[2].value.trim()
    const message = formulario.current.elements[3].value.trim()
    const checkDomain = {}
    
    let nameLenght = name.length >= 3 && name.length <= 25
    let subjectLenght = subject.length >= 3
    let messageLenght = message.length >= 3
    let validEmail = validateEmail(email)
    const namevalid = parseInt(name)
    const emailvalid = parseInt(email)
    const subjectvalid = parseInt(subject)
    const emptyString = (name ==='' || subject ==='' || message ==='' || email ==='')
    const isNumeruc = !Number.isNaN(namevalid) || !Number.isNaN(emailvalid) || !Number.isNaN(subjectvalid)

    if(isNumeruc){
        console.log('number')
        checkDomain.valid = false
        checkDomain.text = 'Error, Invalid filds.'
        return false
    }
    if(!nameLenght || !subjectLenght || !messageLenght || !validEmail || emptyString){
        checkDomain.valid = false
        checkDomain.text = 'Error.'
        return false
    }else{
        return true
    }

    

}

module.exports= {validateForm, checkEmailDomain}