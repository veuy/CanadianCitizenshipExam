let currentScreen = 'dashboard';

let currentQuestionIndex = 0;
let score = 0;

let mockExamQuestions = [];
let mockExamAnswers = [];
let mockExamCurrentIndex = 0;
let mockExamTimer = null;
let mockExamTimeLeft = 0;
let allQuestionsAnswers = [];
let wrongReviewQuestions = [];
let wrongReviewCurrentIndex = 0;

function renderScreen() {
  if (currentScreen === 'dashboard') {
      renderDashboard();
  } else if (currentScreen === 'allQuestions') {
      shuffleQuestions();
      currentQuestionIndex = 0;
      score = 0;
      allQuestionsAnswers = [];
      showAllQuestions();
  } else if (currentScreen === 'mockExam') {
      setupMockExam();
      showMockExamQuestion();
  } else if (currentScreen === 'mockExamReview') {
      showMockExamReview();
  } else if (currentScreen === 'mockExamResults') {
      showMockExamResults();
  } else if (currentScreen === 'wrongAnswerReview') {
        setupWrongAnswerReview();
        showWrongAnswerQuestion();
  }
}

function renderDashboard() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="nav-bar">
            <span class="nav-title">Canadian Citizenship Exam</span>
        </div>
        <div class="dashboard">
            <h2>Welcome!</h2>
            <p class="dashboard-subtitle">Choose your study mode:</p>
            <button class="dashboard-btn" id="btn-all">📚 All Questions</button>
            <p class="dashboard-desc">Practice all 200 questions with instant feedback after each answer.</p>
            <button class="dashboard-btn" id="btn-mock">📝 Mock Exam</button>
            <p class="dashboard-desc">Simulate the real exam: 20 questions, no feedback until you submit.</p>
            <div id="resume-section"></div>
        </div> 
    `;

     document.getElementById('btn-all').addEventListener('click', () => {
        currentScreen = 'allQuestions';
        renderScreen();
    });

    document.getElementById('btn-mock').addEventListener('click', () => {
        currentScreen = 'mockExam';
        renderScreen();
    });

    // Show resume buttons if saved progress exists
    const resumeSection = document.getElementById('resume-section');
    const savedAll = localStorage.getItem('allQuestionsProgress');
    const savedMock = localStorage.getItem('mockExamProgress');

    if (savedAll || savedMock) {
        let resumeHTML = '<hr class="resume-divider"><p class="resume-label">Resume</p>';

        if (savedAll) {
            const data = JSON.parse(savedAll);
            resumeHTML += `
                <button class="dashboard-btn resume-btn" id="btn-resume-all">
                    📚 Resume All Questions (Q${data.currentQuestionIndex + 1} of ${data.questions.length})
                </button>
            `;
        }

        if (savedMock) {
            const data = JSON.parse(savedMock);
            const min = Math.floor(data.timeLeft / 60);
            const sec = data.timeLeft % 60;
            resumeHTML += `
                <button class="dashboard-btn resume-btn" id="btn-resume-mock">
                    📝 Resume Mock Exam (Q${data.currentIndex + 1} of 20, ${min}:${sec.toString().padStart(2, '0')} left)
                </button>
            `;
        }

        resumeSection.innerHTML = resumeHTML;

        if (savedAll) {
            document.getElementById('btn-resume-all').addEventListener('click', () => {
                loadAllQuestionsProgress();
            });
        }
        if (savedMock) {
            document.getElementById('btn-resume-mock').addEventListener('click', () => {
                loadMockExamProgress();
            });
        }
    }
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showAllQuestions() {
    const question = questions[currentQuestionIndex];
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-all">🏠 Home</button>
            <span class="nav-title">All Questions</span>
        </div>
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

    document.getElementById('btn-home-all').addEventListener('click', () => {
        clearAllProgress();
        currentScreen = 'dashboard';
        renderScreen();
    });

    const buttons = document.querySelectorAll('.choice-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleAllQuestionAnswer);
    }
}

function handleAllQuestionAnswer(event) {
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

    allQuestionsAnswers.push({
        question: question,
        selectedAnswer: selectedIndex,
        isCorrect: selectedIndex === question.correctAnswer
    });

    saveAllQuestionsProgress();
    
    document.getElementById('feedback').innerHTML += `<br><small>${question.explanation}</small>`;

    setTimeout(() => {
        const app = document.getElementById('app');
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next Question →';
        nextBtn.className = 'next-btn';
        nextBtn.addEventListener('click', nextAllQuestion);
        app.appendChild(nextBtn);
    }, 500);
}

function nextAllQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showAllQuestions();
    } else {
        const app = document.getElementById('app');
        const wrongCount = allQuestionsAnswers.filter(a => !a.isCorrect).length;
        
        app.innerHTML = `
            <div class="nav-bar">
                <button class="home-btn" id="btn-home-results">🏠 Home</button>
                <span class="nav-title">All Questions</span>
            </div>
            <h2 class="results-title">Quiz Complete! 🎉</h2>
            <p class="results-text">Your score: ${score} out of ${questions.length}</p>
            <p class="results-text">Percentage: ${Math.round((score / questions.length) * 100)}%</p>
            <div class="results-buttons">
                <button class="dashboard-btn" id="btn-try-again">Try Again</button>
                ${wrongCount > 0 ? `<button class="dashboard-btn review-btn" id="btn-review-wrong">🔄 Review ${wrongCount} Wrong Answers</button>` : ''}
                <button class="dashboard-btn" id="btn-home-again">Back to Dashboard</button>
            </div>
        `;

        document.getElementById('btn-home-results').addEventListener('click', () => {
            currentScreen = 'dashboard';
            renderScreen();
        });
        document.getElementById('btn-home-again').addEventListener('click', () => {
            currentScreen = 'dashboard';
            renderScreen();
        });
        document.getElementById('btn-try-again').addEventListener('click', () => {
            currentScreen = 'allQuestions';
            renderScreen();
        });
        if (wrongCount > 0) {
            document.getElementById('btn-review-wrong').addEventListener('click', () => {
                wrongReviewQuestions = allQuestionsAnswers.filter(a => !a.isCorrect).map(a => a.question);
                wrongReviewCurrentIndex = 0;
                score = 0;
                currentScreen = 'wrongAnswerReview';
                showWrongAnswerQuestion();
            });
        }
    }
}

function startMockExamTimer() {
    mockExamTimeLeft = 45 * 60; // 45 minutes in seconds
    updateTimerDisplay();

    mockExamTimer = setInterval(() => {
        mockExamTimeLeft--;
        updateTimerDisplay();

        if (mockExamTimeLeft <= 0) {
            clearInterval(mockExamTimer);
            mockExamTimer = null;
            // Time's up — auto submit
            currentScreen = 'mockExamResults';
            renderScreen();
        }
    }, 1000);
}

function stopMockExamTimer() {
    if (mockExamTimer) {
        clearInterval(mockExamTimer);
        mockExamTimer = null;
    }
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('mock-timer');
    if (!timerEl) return;

    const minutes = Math.floor(mockExamTimeLeft / 60);
    const seconds = mockExamTimeLeft % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timerEl.textContent = display;

    // Remove old warning classes
    timerEl.classList.remove('timer-warning', 'timer-danger');

    // Add warning colors based on time left
    if (mockExamTimeLeft <= 300) {        // Under 5 minutes
        timerEl.classList.add('timer-danger');
    } else if (mockExamTimeLeft <= 600) { // Under 10 minutes
        timerEl.classList.add('timer-warning');
    }
}

function setupMockExam() {
    // Copy and shuffle the full question pool, take 20
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    mockExamQuestions = shuffled.slice(0, 20);
    mockExamAnswers = [];
    mockExamCurrentIndex = 0;
    startMockExamTimer();
}

function showMockExamQuestion() {
    const question = mockExamQuestions[mockExamCurrentIndex];
    const app = document.getElementById('app');
    const total = 20;
    const timerMinutes = Math.floor(mockExamTimeLeft / 60);
    const timerSeconds = mockExamTimeLeft % 60;
    const timerDisplay = `${timerMinutes}:${timerSeconds.toString().padStart(2, '0')}`;

    // Check if this question has already been answered
    const existingAnswer = mockExamAnswers.find(
        a => a.questionIndex === mockExamCurrentIndex
    );

    // Build navigation buttons
    let navButtons = '';
    if (mockExamCurrentIndex === 0) {
        // First question: only Next
        navButtons = `<button class="mock-nav-btn" id="btn-mock-next">Next →</button>`;
    } else if (mockExamCurrentIndex === total - 1) {
        // Last question: Back + Finish
        navButtons = `
            <button class="mock-nav-btn" id="btn-mock-back">← Back</button>
            <button class="mock-nav-btn mock-finish-btn" id="btn-mock-next">Finish Exam ✓</button>
        `;
    } else {
        // Middle questions: Back + Next
        navButtons = `
            <button class="mock-nav-btn" id="btn-mock-back">← Back</button>
            <button class="mock-nav-btn" id="btn-mock-next">Next →</button>
        `;
    }

    // Build choice buttons, marking the selected one if exists
    let choicesHTML = '';
    for (let i = 0; i < question.choices.length; i++) {
        let extraClass = '';
        if (existingAnswer && existingAnswer.selectedAnswer === i) {
            extraClass = 'selected-answer';  // Highlight previously selected
        }
        choicesHTML += `
            <button class="choice-btn ${extraClass}" data-index="${i}">
                ${question.choices[i]}
            </button>
        `;
    }

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-mock">🏠 Home</button>
            <span class="nav-title">Mock Exam</span>
            <span class="mock-timer" id="mock-timer">${timerDisplay}</span>
        </div>
        <p class="progress">Question ${mockExamCurrentIndex + 1} of ${total}</p>
        <p class="question-text">${question.question}</p>
        <div class="choices">
            ${choicesHTML}
        </div>
        <div class="mock-nav">
            ${navButtons}
        </div>
        <p class="mock-answered-count">
            Answered: ${mockExamAnswers.length} of ${total}
        </p>
    `;

    // Home button
    document.getElementById('btn-home-mock').addEventListener('click', () => {
        if (confirm('Leave the exam? Your answers will be lost.')) {
            stopMockExamTimer();
            clearAllProgress();
            currentScreen = 'dashboard';
            renderScreen();
        }
    });

    // Choice buttons — select answer
    const buttons = document.querySelectorAll('.choice-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleMockExamAnswer);
    }

    // Back button (if exists)
    const backBtn = document.getElementById('btn-mock-back');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            mockExamCurrentIndex--;
            showMockExamQuestion();
        });
    }

    // Next/Finish button
    const nextBtn = document.getElementById('btn-mock-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (mockExamCurrentIndex === total - 1) {
                // Last question — go to end screen
                showMockExamEnd();
            } else {
                mockExamCurrentIndex++;
                showMockExamQuestion();
            }
        });
    }
    updateTimerDisplay();
}

function handleMockExamAnswer(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const question = mockExamQuestions[mockExamCurrentIndex];

    // Check if we already answered this question
    const existing = mockExamAnswers.find(
        a => a.questionIndex === mockExamCurrentIndex
    );

    if (existing) {
        // Update existing answer
        existing.selectedAnswer = selectedIndex;
        existing.isCorrect = selectedIndex === question.correctAnswer;
    } else {
        // Record new answer
        mockExamAnswers.push({
            questionIndex: mockExamCurrentIndex,
            selectedAnswer: selectedIndex,
            isCorrect: selectedIndex === question.correctAnswer
        });
    }

    // Re-render to highlight the new selection
    showMockExamQuestion();
    saveMockExamProgress();
}

function showMockExamEnd() {
    stopMockExamTimer();
    const answeredCount = mockExamAnswers.length;
    const unanswered = 20 - answeredCount;
    const app = document.getElementById('app');
    

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-end">🏠 Home</button>
            <span class="nav-title">Mock Exam</span>
        </div>
        <div class="mock-end">
            <h2>Exam Complete</h2>
            <p class="mock-end-text">You answered ${answeredCount} of 20 questions.</p>
            ${unanswered > 0 ? `<p class="mock-end-warning">⚠️ Warning: ${unanswered} question(s) not answered yet!</p>` : ''}
            <p class="mock-end-hint">Review your answers or submit for results.</p>
            <div class="mock-end-buttons">
                ${unanswered > 0 ? `<button class="dashboard-btn" id="btn-continue">Continue Answering</button>` : ''}
                <button class="dashboard-btn" id="btn-review">🔍 Review Answers</button>
                <button class="dashboard-btn" id="btn-submit">✅ Submit Exam</button>
            </div>
        </div>
    `;

    document.getElementById('btn-home-end').addEventListener('click', () => {
        currentScreen = 'dashboard';
        renderScreen();
    });

    const continueBtn = document.getElementById('btn-continue');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            // Go back to the end of questions
            mockExamCurrentIndex = 19;
            showMockExamQuestion();
        });
    }

    document.getElementById('btn-review').addEventListener('click', () => {
        currentScreen = 'mockExamReview';
        renderScreen();
    });

    document.getElementById('btn-submit').addEventListener('click', () => {
        currentScreen = 'mockExamResults';
        renderScreen();
    });
}

function showMockExamReview() {
    const app = document.getElementById('app');

    let questionsHTML = '';
    for (let i = 0; i < mockExamQuestions.length; i++) {
        const question = mockExamQuestions[i];
        const userAnswer = mockExamAnswers.find(a => a.questionIndex === i);

        let answeredText = '<span class="not-answered">Not answered</span>';
        if (userAnswer) {
            answeredText = question.choices[userAnswer.selectedAnswer];
        }

        questionsHTML += `
            <div class="review-card">
                <p class="review-q-number">Question ${i + 1}</p>
                <p class="review-q-text">${question.question}</p>
                <p class="review-your-answer">Your answer: <strong>${answeredText}</strong></p>
                <button class="review-edit-btn" data-goto="${i}">✏️ Edit this answer</button>
            </div>
        `;
    }

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-review">🏠 Home</button>
            <span class="nav-title">Review Answers</span>
        </div>
        <h2 class="results-title">Review Your Answers</h2>
        <p class="review-hint">Click "Edit" to change an answer. Correct answers will be revealed after you submit.</p>
        ${questionsHTML}
        <div class="review-bottom-buttons">
            <button class="dashboard-btn" id="btn-back-to-end">← Back</button>
            <button class="dashboard-btn" id="btn-review-submit">✅ Submit Exam</button>
        </div>
    `;

    document.getElementById('btn-home-review').addEventListener('click', () => {
        currentScreen = 'dashboard';
        renderScreen();
    });

    document.getElementById('btn-back-to-end').addEventListener('click', () => {
        showMockExamEnd();
    });

    document.getElementById('btn-review-submit').addEventListener('click', () => {
        currentScreen = 'mockExamResults';
        renderScreen();
    });

    // Edit buttons — jump to that question
    const editButtons = document.querySelectorAll('.review-edit-btn');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (event) => {
            const goto = parseInt(event.target.dataset.goto);
            mockExamCurrentIndex = goto;
            showMockExamQuestion();
        });
    }
}

function showMockExamResults() {
    stopMockExamTimer();
    clearAllProgress();
    const app = document.getElementById('app');
    

    let correctCount = 0;
    for (let i = 0; i < mockExamAnswers.length; i++) {
        if (mockExamAnswers[i].isCorrect) {
            correctCount++;
        }
    }
    const passed = correctCount >= 15;
    const wrongCount = 20 - correctCount;

    let resultsHTML = '';
    for (let i = 0; i < mockExamQuestions.length; i++) {
        const question = mockExamQuestions[i];
        const userAnswer = mockExamAnswers.find(a => a.questionIndex === i);
        const isCorrect = userAnswer && userAnswer.isCorrect;

        let statusIcon, statusClass;
        if (!userAnswer) {
            statusIcon = '⬜';
            statusClass = '';
        } else if (isCorrect) {
            statusIcon = '✅';
            statusClass = 'result-correct';
        } else {
            statusIcon = '❌';
            statusClass = 'result-wrong';
        }

        resultsHTML += `
            <div class="review-card ${statusClass}">
                <p class="review-q-number">${statusIcon} Question ${i + 1}</p>
                <p class="review-q-text">${question.question}</p>
                <p class="result-correct-answer">Correct answer: ${question.choices[question.correctAnswer]}</p>
                <p class="review-your-answer">Your answer: ${userAnswer ? question.choices[userAnswer.selectedAnswer] : 'Not answered'}</p>
                <p class="result-explanation"><small>${question.explanation}</small></p>
            </div>
        `;
    }

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-results-mock">🏠 Home</button>
            <span class="nav-title">Mock Exam Results</span>
        </div>
        <h2 class="results-title">${passed ? '🎉 PASSED!' : '❌ Failed'}</h2>
        <p class="results-text">Your score: ${correctCount} out of 20</p>
        <p class="results-text">Passing score: 15 out of 20 (75%)</p>
        ${resultsHTML}
        <div class="results-buttons">
            <button class="dashboard-btn" id="btn-retry-mock">Try New Mock Exam</button>
            ${wrongCount > 0 ? `<button class="dashboard-btn review-btn" id="btn-review-mock-wrong">🔄 Review ${wrongCount} Wrong Answers</button>` : ''}
            <button class="dashboard-btn" id="btn-home-mock-results">Back to Dashboard</button>
        </div>
    `;

    document.getElementById('btn-home-results-mock').addEventListener('click', () => {
        currentScreen = 'dashboard';
        renderScreen();
    });

    document.getElementById('btn-home-mock-results').addEventListener('click', () => {
        currentScreen = 'dashboard';
        renderScreen();
    });

    document.getElementById('btn-retry-mock').addEventListener('click', () => {
        currentScreen = 'mockExam';
        renderScreen();
    });

    if (wrongCount > 0) {
        document.getElementById('btn-review-mock-wrong').addEventListener('click', () => {
            wrongReviewQuestions = mockExamAnswers.filter(a => !a.isCorrect).map(a => mockExamQuestions[a.questionIndex]);
            wrongReviewCurrentIndex = 0;
            score = 0;
            currentScreen = 'wrongAnswerReview';
            showWrongAnswerQuestion();
        });
    }
}

/* ──────────────────────────────────────────
   WRONG ANSWER REVIEW MODE
   ────────────────────────────────────────── */

// STEP 1: Filter wrong answers from the answer sheet
function setupWrongAnswerReview() {
    // Decide which answer sheet to use
    // If coming from All Questions, use allQuestionsAnswers
    // If coming from Mock Exam, use mockExamAnswers
    let answersToReview;

    if (allQuestionsAnswers.length > 0) {
        answersToReview = allQuestionsAnswers;
    } else {
        answersToReview = mockExamAnswers;
    }

    // filter() creates a new array with only items where the arrow function returns true
    const wrongAnswers = answersToReview.filter(a => !a.isCorrect);

    // map() transforms each wrong answer's question object into the wrongReviewQuestions array
    wrongReviewQuestions = wrongAnswers.map(a => {
        if (a.question) return a.question;
        return mockExamQuestions[a.questionIndex];
    });

    wrongReviewCurrentIndex = 0;
    score = 0; // Reset score for this review session
}

// STEP 2: Show one wrong-answer question (same format as All Questions)
function showWrongAnswerQuestion() {
    const question = wrongReviewQuestions[wrongReviewCurrentIndex];
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="nav-bar">
            <button class="home-btn" id="btn-home-wrong">🏠 Home</button>
            <span class="nav-title">Reviewing Wrong Answers</span>
        </div>
        <p class="progress">Question ${wrongReviewCurrentIndex + 1} of ${wrongReviewQuestions.length}</p>
        <p class="question-text">${question.question}</p>
        <div class="choices">
            <button class="choice-btn" data-index="0">${question.choices[0]}</button>
            <button class="choice-btn" data-index="1">${question.choices[1]}</button>
            <button class="choice-btn" data-index="2">${question.choices[2]}</button>
            <button class="choice-btn" data-index="3">${question.choices[3]}</button>
        </div>
        <p class="score-display">Correct in review: ${score}</p>
        <p id="feedback"></p>
    `;

    document.getElementById('btn-home-wrong').addEventListener('click', () => {
        currentScreen = 'dashboard';
        renderScreen();
    });

    const buttons = document.querySelectorAll('.choice-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleWrongAnswer);
    }
}

// STEP 3: Handle clicking an answer in review mode
function handleWrongAnswer(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const question = wrongReviewQuestions[wrongReviewCurrentIndex];

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
        nextBtn.textContent = 'Next Question →';
        nextBtn.className = 'next-btn';
        nextBtn.addEventListener('click', nextWrongAnswer);
        app.appendChild(nextBtn);
    }, 500);
}

// STEP 4: Move to the next wrong question, or finish
function nextWrongAnswer() {
    wrongReviewCurrentIndex++;

    if (wrongReviewCurrentIndex < wrongReviewQuestions.length) {
        showWrongAnswerQuestion();
    } else {
        // All wrong answers reviewed
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="nav-bar">
                <button class="home-btn" id="btn-home-wrong-done">🏠 Home</button>
                <span class="nav-title">Review Complete</span>
            </div>
            <h2 class="results-title">🎉 Review Complete!</h2>
            <p class="results-text">You reviewed ${wrongReviewQuestions.length} wrong answer(s).</p>
            <p class="results-text">Got ${score} correct this time.</p>
            <div class="results-buttons">
                <button class="dashboard-btn" id="btn-review-again">Review Wrong Again</button>
                <button class="dashboard-btn" id="btn-home-wrong-end">Back to Dashboard</button>
            </div>
        `;

        document.getElementById('btn-home-wrong-done').addEventListener('click', () => {
            currentScreen = 'dashboard';
            renderScreen();
        });
        document.getElementById('btn-home-wrong-end').addEventListener('click', () => {
            currentScreen = 'dashboard';
            renderScreen();
        });
        document.getElementById('btn-review-again').addEventListener('click', () => {
            // Reset and review the same wrong questions again
            wrongReviewCurrentIndex = 0;
            score = 0;
            showWrongAnswerQuestion();
        });
    }
}

function saveAllQuestionsProgress () {
    const data = {
        currentQuestionIndex: currentQuestionIndex,
        score: score,
        questions: questions,
        answers: allQuestionsAnswers
    };
    localStorage.setItem('allQuestionsProgress', JSON.stringify(data));
}

function saveMockExamProgress() {
    const data = {
        currentIndex: mockExamCurrentIndex,
        questions: mockExamQuestions,
        answers: mockExamAnswers,
        timeLeft: mockExamTimeLeft
    };
    localStorage.setItem('mockExamProgress', JSON.stringify(data));
}

function clearAllProgress() {
    localStorage.removeItem('allQuestionsProgress');
    localStorage.removeItem('mockExamProgress');
}

function loadAllQuestionsProgress() {
    const saved = localStorage.getItem('allQuestionsProgress');
    if (!saved) return false;

    const data = JSON.parse(saved);

    // Restore the questions array in the correct order
    // We copy the saved array back into the global questions variable
    // (spread the saved array, also copy each question object to break reference)
    for (let i = 0; i < data.questions.length; i++) {
        questions[i] = data.questions[i];
    }

    currentQuestionIndex = data.currentQuestionIndex;
    score = data.score;
    allQuestionsAnswers = data.answers || [];
    currentScreen = 'allQuestions';
    showAllQuestions();
    return true;
}

function loadMockExamProgress() {
    const saved = localStorage.getItem('mockExamProgress');
    if (!saved) return false;

    const data = JSON.parse(saved);
    mockExamQuestions = data.questions;
    mockExamAnswers = data.answers;
    mockExamCurrentIndex = data.currentIndex;
    mockExamTimeLeft = data.timeLeft || 45 * 60;

    startMockExamTimer();
    currentScreen = 'mockExam';
    showMockExamQuestion();
    return true;
}


renderScreen();