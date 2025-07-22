// guessDrawing.js

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');

const drawings = [
  {name: 'شجرة', img: 'https://i.imgur.com/3vQdXNP.png'},
  {name: 'بيت', img: 'https://i.imgur.com/n6s2aGz.png'},
  {name: 'سيارة', img: 'https://i.imgur.com/HV7fXWy.png'}
];

const gameArea = document.getElementById('gameArea');
let index = 0;

function loadItem(i) {
  index = i;
  gameArea.innerHTML = `
    <h2>خمن الرسمة</h2>
    <img src="${drawings[i].img}" alt="" style="max-width:280px;border-radius:14px;box-shadow:0 0 20px #f39c12;margin-bottom:15px;" />
    <br />
    <input id="userInput" type="text" placeholder="اكتب إجابتك هنا" style="font-size:20px;padding:10px 20px;border-radius:12px;width:70%;text-align:center;" />
    <br />
    <button id="checkBtn" style="margin:10px;padding:12px 30px;font-size:18px;border-radius:12px;background:#f39c12;color:#222;cursor:pointer;">تحقق</button>
    <div id="result" style="font-size:22px;margin-top:15px;font-weight:bold;min-height:30px;"></div>
    <button id="nextBtn" style="display:none;margin:10px;padding:12px 30px;font-size:18px;border-radius:12px;background:#27ae60;color:white;cursor:pointer;">التالي</button>
  `;

  const userInput = document.getElementById('userInput');
  const checkBtn = document.getElementById('checkBtn');
  const nextBtn = document.getElementById('nextBtn');
  const resultDiv = document.getElementById('result');

  checkBtn.onclick = () => {
    const answer = userInput.value.trim().toLowerCase();
    const correct = drawings[index].name.toLowerCase();
    if(answer === '') {
      alert('اكتب إجابتك أولاً');
      return;
    }
    if(answer === correct) {
      resultDiv.style.color = '#27ae60';
      resultDiv.textContent = 'صح! 👍';
      correctSound.play();
    } else {
      resultDiv.style.color = '#e74c3c';
      resultDiv.textContent = `خطأ! الإجابة الصحيحة: ${drawings[index].name}`;
      wrongSound.play();
    }
    nextBtn.style.display = 'inline-block';
  };

  nextBtn.onclick = () => {
    if(index +1 >= drawings.length) {
      alert('خلصت كل الرسومات! راح يرجع للبداية.');
      index = 0;
    } else {
      index++;
    }
    loadItem(index);
  };
}

loadItem(0);
