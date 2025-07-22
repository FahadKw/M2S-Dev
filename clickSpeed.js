// clickSpeed.js

const clickSound = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');

let clicks = 0;
let timeLeft = 10;
let interval = null;

const gameArea = document.getElementById('gameArea');

gameArea.innerHTML = `
  <h2>اختبر سرعة ضغطتك على الزر خلال 10 ثواني!</h2>
  <button id="clickBtn" style="font-size:24px;padding:20px 40px;">اضغط هنا!</button>
  <div id="timer" style="margin-top:15px;font-size:20px;">الوقت المتبقي: 10</div>
  <div id="result" style="margin-top:15px;font-size:22px;font-weight:bold;"></div>
`;

const clickBtn = document.getElementById('clickBtn');
const timerDiv = document.getElementById('timer');
const resultDiv = document.getElementById('result');

clickBtn.onclick = () => {
  clicks++;
  clickSound.play();
};

interval = setInterval(() => {
  timeLeft--;
  timerDiv.textContent = `الوقت المتبقي: ${timeLeft}`;
  if(timeLeft <= 0) {
    clearInterval(interval);
    clickBtn.disabled = true;
    resultDiv.textContent = `انتهى الوقت! عدد الضغطات: ${clicks}`;
  }
}, 1000);
