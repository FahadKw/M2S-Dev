// guessCharacter.js

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');

const characters = [
  {name: 'سوبرمان', img: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'},
  {name: 'باتمان', img: 'https://upload.wikimedia.org/wikipedia/en/8/86/Batman_DC_Comics.png'},
  {name: 'سبايدر مان', img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg'},
  {name: 'أيرون مان', img: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'}
];

const gameArea = document.getElementById('gameArea');
let index = 0;

function loadItem(i) {
  index = i;
  gameArea.innerHTML = `
    <h2>خمن الشخصية</h2>
    <img src="${characters[i].img}" alt="" style="max-width:280px;border-radius:14px;box-shadow:0 0 20px #f39c12;margin-bottom:15px;" />
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
    const correct = characters[index].name.toLowerCase();
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
      resultDiv.textContent = `خطأ! الإجابة الصحيحة: ${characters[index].name}`;
      wrongSound.play();
    }
    nextBtn.style.display = 'inline-block';
  };

  nextBtn.onclick = () => {
    if(index +1 >= characters.length) {
      alert('خلصت كل العناصر! راح يرجع للبداية.');
      index = 0;
    } else {
      index++;
    }
    loadItem(index);
  };
}

loadItem(0);
