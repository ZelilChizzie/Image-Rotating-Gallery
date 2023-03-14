const imageContainerEl = document.querySelector('.image-container');

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener('click', () => {
    x = x + 45;
    clearTimeout(timer);
    updateGalllery();
});
nextEl.addEventListener('click', () => {
    x = x - 45;
    clearTimeout(timer);
    updateGalllery();
});

function updateGalllery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x -45
        updateGalllery()
    }, 5000)
}

updateGalllery()