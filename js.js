let clickCount = 0;
const popcatElement = document.getElementById('popcat');
const clickCountElement = document.getElementById('clickCount');
const stageElement = document.getElementById('stage');

popcatElement.addEventListener('click', () => {
    clickCount++;
    updatePopcat();
});

function updatePopcat() {
    const popcatImage = document.querySelector('#popcat img')
    popcatImage.src = 'closed_bf.jpg'
    popcatImage.src = clickCount % 2 === 0 ? 'closed_bf.jpg' : 'opened_bf.jpg';
    clickCountElement.textContent = clickCount;

    if (clickCount >= 20 && clickCount < 40) {
        popcatImage.src = 'happy_bf.jpg'
        popcatImage.src = clickCount % 2 === 0 ? 'happy_bf.jpg' : 'opened_hp_bf.jpg';
        stageElement.textContent = "행복한 김성현"
    } else if (clickCount >= 40) {
        popcatImage.src = 'sad_bf.jpg'
        popcatImage.src = clickCount % 2 === 0 ? 'sad_bf.jpg' : 'opened_sd_bf.jpg';
        stageElement.textContent = "슬픈 김성현"
    }
}