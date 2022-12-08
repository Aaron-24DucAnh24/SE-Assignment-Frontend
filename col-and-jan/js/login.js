// slide handling--------------------------------

const slides = document.querySelectorAll('.slide')
var i = 1
setInterval(function() {
    slides.forEach(function(slide){
        slide.style = 'display: none;'
    })
    slides[i].style = 'display: block;'
    i++
    if(i > 2) i = 0
}, 5000);

// password witching----------------------------

var passwordInput = document.querySelector(".authen__password")
var passwordIcon = document.querySelector('.password-icon')
function passwordSwitch() {
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
}

// redirect

var password = ''
var loginName = ''
var btn = document.querySelector('.authen__btn')

document.querySelector('.authen__password').oninput = () => {
    password = document.querySelector('.authen__password').value
}
document.querySelector('.authen__login-name').oninput = () => {
    loginName = document.querySelector('.authen__login-name').value
}

btn.addEventListener('click', (e) => {
    if(password == '123' && loginName == 'tiendat') {
        btn.href = 'collector.html'
    }
    else if (password == '123' && loginName == 'ducanh') {
        btn.href = 'janitor.html'
    }
})
