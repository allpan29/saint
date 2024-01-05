let clickCount = 0;
const popcatElement = document.getElementById('popcat');
const clickCountElement = document.getElementById('clickCount');

popcatElement.addEventListener('click', () => {
    clickCount++;
    updatePopcat();
});

function updatePopcat() {
    const popcatImage = document.querySelector('#popcat img')
    popcatImage.src = 'closed_bf.jpg'
    popcatImage.src = clickCount % 2 === 0 ? 'closed_bf.jpg' : 'opened_bf.jpg';
    clickCountElement.textContent = clickCount;
}