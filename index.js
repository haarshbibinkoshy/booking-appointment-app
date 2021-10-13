let form=document.querySelector(`#my-form`)
form.addEventListener(`submit`,addToStorage)

function addToStorage(e) {
    e.preventDefault()
    let name=document.querySelector(`#name`).value
    let email=document.querySelector(`#email`).value
console.log(name);
console.log(email);
localStorage.setItem(`userName`,name)
localStorage.setItem(`userEmailId`,email)

}

