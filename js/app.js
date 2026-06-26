let currentQuestionIndex = 0;

let score = 0;

function shuffleQuestions () {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
function showQuestion() {
  const question = questions[currentQuestionIndex];

  const app = document.getElementById('app');

  app.innerHTML = `
    <h1>Canadian Citizenship Exam</h1>
    <p class="progress">Question ${currentQuestionIndex + 1} of ${questions.length}</p>
    <p class="question-text">${question.question}</p>
    <div class="choices">
        <button class="choice-btn" data-index="0">${question.choices[0]}</button>
        <button class="choice-btn" data-index="1">${question.choices[1]}</button>
        <button class="choice-btn" data-index="2">${question.choices[2]}</button>
        <button class="choice-btn" data-index="3">${question.choices[3]}</button>
    </div>
    <p class="score-display">Score: ${score}</p>
    <p id="feedback"></p>
    `;

  const buttons = document.querySelectorAll('.choice-btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleAnswer);
  }
}

function handleAnswer(event) {
  const selectedButton = event.target;
  const selectedIndex = parseInt(selectedButton.dataset.index);
  const question = questions[currentQuestionIndex];

  const buttons = document.querySelectorAll('.choice-btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  if (selectedIndex === question.correctAnswer) {
    selectedButton.style.backgroundColor = '#8bc34a';
    document.getElementById('feedback').textContent = '✅ Correct!';
    score++;
  } else {
    selectedButton.style.backgroundColor = '#f44336';
    document.getElementById('feedback').textContent = '❌ Incorrect';
    buttons[question.correctAnswer].style.backgroundColor = '#8bc34a';
  }

  document.getElementById('feedback').innerHTML += `<br><small>${question.explanation}</small>`;

  setTimeout(() => {
    const app = document.getElementById('app');
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next Question';
    nextBtn.className = 'next-btn';
    nextBtn.addEventListener('click', nextQuestion);
    app.appendChild(nextBtn);
  }, 500);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Canadian Citizenship Exam</h1>
      <h2>Quiz Complete</h2>
      <p>Your score: ${score} out of ${questions.length}</p>
      <p>Percentage: ${Math.round((score / questions.length) * 100)}%</p>
      <button class ="choice-btn" onclick="location.reload()">Try Again</button> 
    `;
  }
}

shuffleQuestions();
showQuestion();