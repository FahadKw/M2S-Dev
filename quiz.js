// quiz.js

const correctSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');
const wrongSound = new Audio('https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg');

const quizQuestions = [
  {question: 'ما هي عاصمة مصر؟', answers: ['القاهرة', 'الإسكندرية', 'الأسكندرية', 'أسوان'], correct: 0},
  {question: 'كم عدد ألوان قوس قزح؟', answers: ['6', '7', '8', '5'], correct: 1},
  {question: 'ما هي لغة البرمجة المستخدمة في صفحات الويب؟', answers: ['بايثون', 'جافاسكريبت', 'جافا', 'سي شارب'], correct: 1},
  {question: 'ما هو أكبر محيط في العالم؟', answers: ['الهندي', 'الأطلسي', 'الهادئ', 'المتجمد الشمالي'], correct: 2}
];

const gameArea = document.getElementById('gameArea');
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(i) {
  currentQuestionIndex = i;
  const q = quizQuestions[i];
  gameArea.innerHTML = `
    <h2>سؤال وجواب ثنائي</h2>
    <p style="font-size:22px; font-weight:bold;">${q.question}</p>
    <div id="answers" style="margin-top:20px;"></div>
    <div id="result" style="margin-top:15px; font-size:22px; font-weight:bold; min-height: 30px;"></div>
  `;

  const answersDiv = document.getElementById('answers');
  const resultDiv = document.getElementById('result');

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.style.margin = '6px';
    btn.style.padding = '12px 24px';
    btn.style.fontSize = '18px';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'pointer';
    btn.style.background = '#3498db';
    btn.style.color = 'white';
    btn.style.fontWeight = '700';
    btn.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.7)';
    btn.onmouseenter = () => btn.style.background = '#2980b9';
    btn.onmouseleave = () => btn.style.background = '#3498db';

    btn.onclick = () => {
      if(resultDiv.textContent !== '') return; // منع اختيار أكثر من مرة
      if(idx === q.correct) {
        btn.style.background = '#27ae60';
        resultDiv.textContent = 'صح! 👍';
        correctSound.play();
        score++;
      } else {
        btn.style.background = '#e74c3c';
        resultDiv.textContent = `خطأ! الإجابة الصحيحة: ${q.answers[q.correct]}`;
        wrongSound.play();
      }
      // تعطيل جميع الأزرار بعد الاختيار
      Array.from(answersDiv.children).forEach(b => b.disabled = true);
      setTimeout(() => {
        if(currentQuestionIndex + 1 >= quizQuestions.length) {
          alert(`انتهت الأسئلة! نتيجتك: ${score} من ${quizQuestions.length}`);
          currentQuestionIndex = 0;
          score = 0;
          loadQuestion(currentQuestionIndex);
        } else {
          loadQuestion(currentQuestionIndex + 1);
        }
      }, 1500);
    };

    answersDiv.appendChild(btn);
  });
}

loadQuestion(0);
