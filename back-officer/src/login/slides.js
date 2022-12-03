// slide handling--------------------------------

setTimeout(handleSlide, 1000);

function handleSlide() {
    const slides = document.querySelectorAll('.slide')
    var i = 1
    
    setInterval(function() {
        slides.forEach(function(slide){
            slide.style = 'display: none;'
        })
        slides[i].style = 'display: block;'
        i++
        if(i > 2) i = 0
    }, 5000)
}

