// popBalloon.js

const popSound = new Audio('https://actions.google.com/sounds/v1/cartoon/balloon_pop.ogg');

const gameArea = document.getElementById('gameArea');
let poppedCount = 0;
let totalBalloons = 15;

gameArea.innerHTML = `
  <h2>فجر البالونات - اضغط على البالونات لتفجيرها!</h2>
  <div id="balloonContainer" style="margin-top: 20px;"></div>
  <div id="result" style="margin-top: 20px; font-size: 22px; font-weight: bold; min-height: 30px;"></div>
`;

const balloonContainer = document.getElementById('balloonContainer');
const resultDiv = document.getElementById('result');

for(let i=0; i<totalBalloons; i++) {
  const balloon = document.createElement('div');
  balloon.textContent = '🎈';
  balloon.style.background = '#f39c12';
  balloon.style.width = '60px';
  balloon.style.height = '60px';
  balloon.style.lineHeight = '60px';
  balloon.style.textAlign = 'center';
  balloon.style.borderRadius = '50%';
  balloon.style.margin = '10px';
  balloon.style.display = 'inline-block';
  balloon.style.cursor = 'pointer';
  balloon.style.userSelect = 'none';
  balloon.style.boxShadow = '0 0 12px #f39c12';
  balloon.style.transition = 'transform 0.3s ease';

  balloon.onclick = () => {
    if(balloon.style.visibility === 'hidden') return;
    balloon.style.visibility = 'hidden';
    poppedCount++;
    popSound.play();
    if(poppedCount === totalBalloons) {
      resultDiv.textContent = '🎉 تهانينا! فزت! 🎉';
    }
  };

  balloonContainer.appendChild(balloon);
}
