const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const images = document.querySelectorAll('img')
let count = 0

//events
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

//functions
function nextSlide() {
    images[count].classList.remove('active')
    count++
    if (count === images.length) {
        count = 0
    }
    images[count].classList.add('active')
}

function prevSlide() {
    images[count].classList.remove('active')
    if (count === 0) {
        count = images.length
    }
    count--
    images[count].classList.add('active')
}

setInterval(nextSlide, 3000)