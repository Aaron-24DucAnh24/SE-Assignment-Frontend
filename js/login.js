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

    if (passwordIcon.classList.contains('fa-eye-slash')) {
        passwordIcon.classList.remove('fa-eye-slash')
        passwordIcon.classList.add('fa-eye')
    } 
    
    else {
        passwordIcon.classList.remove('fa-eye')
        passwordIcon.classList.add('fa-eye-slash')
    }
}