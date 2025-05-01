// homepage.js

// Quotes
const quotes = [
  "Every action counts. 🌟",
  "Be the change you wish to see in the world.",
  "Hunger knows no boundaries — neither should kindness. 🤝",
  "A small act of love can feed a soul. ❤️",
  "Together, we can end hunger. 🥪",
  "Hope begins with a meal. 🍽️",
  "One person can make a difference — you can. 🌎"
];

// Facts
const facts = [
  "Over 800 million people suffer from hunger every night.",
  "1 in 9 people globally experience hunger.",
  "Children under 5 are the most vulnerable to malnutrition.",
  "A staggering number of people in developed nations still live in food insecurity.",
  "The world produces enough food to feed everyone — yet hunger persists."
];

// Quiz Questions
const quizData = [
  {
    question: "How many people worldwide suffer from hunger?",
    answers: ["Over 800 million", "Over 100 million", "Over 50 million", "Over 1 billion"],
    correct: 0
  },
  {
    question: "What group is most vulnerable to malnutrition?",
    answers: ["Elderly", "Adults", "Children under 5", "Teenagers"],
    correct: 2
  },
  {
    question: "Which country has the highest number of hungry people?",
    answers: ["USA", "India", "Brazil", "France"],
    correct: 1
  },
  {
    question: "What is a major cause of hunger?",
    answers: ["Laziness", "Food waste", "Overproduction", "All of the above"],
    correct: 1
  },
  {
    question: "True or False: There is enough food to feed everyone.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Which organization fights hunger globally?",
    answers: ["NASA", "FMSC", "Google", "UNICEF"],
    correct: 1
  },
  {
    question: "What percentage of food is wasted each year globally?",
    answers: ["10%", "17%", "30%", "50%"],
    correct: 2
  },
  {
    question: "Where does most hunger exist?",
    answers: ["Urban areas", "Rural areas", "Suburbs", "Wealthy nations"],
    correct: 1
  },
  {
    question: "What is a food desert?",
    answers: ["A place with no restaurants", "An area with limited access to affordable nutritious food", "A sandy area", "A luxury market"],
    correct: 1
  },
  {
    question: "What day is World Hunger Day?",
    answers: ["May 28", "April 15", "October 16", "November 5"],
    correct: 0
  }
];

// ===== Random Fact Generator =====
function generateFact() {
  const factElement = document.getElementById('random-fact');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
}

// ===== Random Quote Generator =====
function showRandomQuote() {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// ===== QUIZ =====
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

// Start or Restart Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Show a question
function showQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerHTML = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index));
    answerButtons.appendChild(button);
  });
}

// Reset for next question
function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Select Answer
function selectAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].correct;
  const buttons = answerButtons.children;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === correctIndex) {
      buttons[i].classList.add('correct');
    } else {
      buttons[i].classList.add('wrong');
    }
  }

  if (selectedIndex === correctIndex) {
    score++;
  }

  nextButton.style.display = 'block';
}

// Show Final Score
function showScore() {
  resetState();
  let message = '';

  if (score <= 3) {
    message = 'Try again! You can do better!';
  } else if (score <= 7) {
    message = 'Good job! Keep learning!';
  } else if (score <= 9) {
    message = 'Great work! Almost perfect!';
  } else {
    message = 'Perfect score! You are a Hunger Awareness Champion!';
  }

  questionElement.innerHTML = `You scored ${score} out of ${quizData.length}.<br><br>${message}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = 'block';
}

// Handle Next Button
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < quizData.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Initialize
startQuiz();
showRandomQuote(); // Show a random quote immediately

// ===== Smooth Fade Animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
