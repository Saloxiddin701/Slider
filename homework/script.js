const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.querySelectorAll(".image");

const img = document.querySelectorAll(".img1");
const nextImg = document.querySelector(".next-img");
const previous = document.querySelector(".previous");

let count = 0;
let count2 = 0;

//events
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

nextImg.addEventListener("click", function () {
    img[count2].classList.remove("slide");
    count2++;

    if (count2 === img.length) {
        count2 = 0;
    }

    img[count2].classList.add("slide");
});

previous.addEventListener("click", function () {
    img[count2].classList.remove("slide");
    if (count2 === 0) {
        count2 = img.length;
    }
    count2--;
    img[count2].classList.add("slide");
});

//functions
function nextSlide() {
    images[count].classList.remove("active");
    count++;
    if (count === images.length) {
        count = 0;
    }
    images[count].classList.add("active");
}

function prevSlide() {
    images[count].classList.remove("active");
    if (count === 0) {
        count = images.length;
    }
    count--;
    images[count].classList.add("active");
}

setInterval(nextSlide, 2000);