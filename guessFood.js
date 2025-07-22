// guessFood.js

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');

const foods = [
  {name: 'بيتزا', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg'},
  {name: 'كبسة', img: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Kabsa.jpg'},
  {name: 'برجر', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg'},
  {name: 'فلافل', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Falafel_with_tahini_and_salad.jpg'}
];

const gameArea = document.getElementById('gameArea');
let index = 0;

function loadItem(i) {
  index = i;
  gameArea.innerHTML = `
    <h2>خمن الأكلة</h2>
    <img src="${foods[i].img}" alt="" style="max-width:280px;border-radius:14px;box-shadow:0 0 20px #f39c12;margin-bottom:15px;" />
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
    const correct = foods[index].name.toLowerCase();
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
      resultDiv.textContent = `خطأ! الإجابة الصحيحة: ${foods[index].name}`;
      wrongSound.play();
    }
    nextBtn.style.display = 'inline-block';
  };

  nextBtn.onclick = () => {
    if(index +1 >= foods.length) {
      alert('خلصت كل الأكلات! راح يرجع للبداية.');
      index = 0;
    } else {
      index++;
    }
    loadItem(index);
  };
}

loadItem(0);
