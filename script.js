const card = document.querySelector('.card');
const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');

openBtn.addEventListener('click', () => {
    card.classList.add('flipped');
});

closeBtn.addEventListener('click', () => {
    card.classList.remove('flipped');
});