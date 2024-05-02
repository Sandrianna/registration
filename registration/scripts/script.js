const btn = document.querySelector('button')
const loginInput = document.querySelector('#login')
const passInput = document.querySelector('#pass')
const copyPassInput = document.querySelector('#copyPas')
const err = document.querySelector('h4')
const form = document.querySelector('form')
btn.addEventListener('click', getValidate)

function getValidate(){
    if(passInput.value !== copyPassInput.value){
        err.style.opacity = 1
        return
    }
    if(loginInput.value && copyPassInput.value && passInput.value !== ''){
        err.style.opacity = 0
        form.reset()
        form.innerHTML = '<h1>Спасибо за регистрацию</h1>'
    }

}
