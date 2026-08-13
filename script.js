const questions = [
  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна является самой большой по площади?",
    answers: ["Канада", "Россия", "Китай", "США"],
    correct: 1
  },
  {
    category: "🔬 НАУКА",
    question: "Сколько планет в Солнечной системе?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает HTML?",
    answers: [
      "Hyper Text Markup Language",
      "High Technology Modern Language",
      "Hyper Tool Machine Language",
      "Home Text Making Language"
    ],
    correct: 0
  },
  {
    category: "🏛️ ИСТОРИЯ",
    question: "В каком году человек впервые высадился на Луне?",
    answers: ["1965", "1969", "1972", "1975"],
    correct: 1
  },
  {
    category: "🧠 ЛОГИКА",
    question: "Продолжи последовательность: 2, 4, 8, 16, ?",
    answers: ["20", "24", "32", "36"],
    correct: 2
  },
  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное является самым быстрым на суше?",
    answers: ["Лев", "Гепард", "Лошадь", "Волк"],
    correct: 1
  },
  {
    category: "🌊 ПРИРОДА",
    question: "Какой океан самый большой?",
    answers: [
      "Атлантический",
      "Индийский",
      "Тихий",
      "Северный Ледовитый"
    ],
    correct: 2
  },
  {
    category: "🎮 ИГРЫ",
    question: "Какой жанр означает RPG?",
    answers: [
      "Ролевая игра",
      "Гоночная игра",
      "Спортивная игра",
      "Головоломка"
    ],
    correct: 0
  },
  {
    category: "⚡ ФИЗИКА",
    question: "Как называется сила, притягивающая предметы к Земле?",
    answers: [
      "Магнитная сила",
      "Сила трения",
      "Гравитация",
      "Сила давления"
    ],
    correct: 2
  },
  {
    category: "🏆 ФИНАЛ",
    question: "Сколько градусов составляет полный круг?",
    answers: ["180°", "270°", "360°", "720°"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let coins = 0;
let streak = 0;
let lives = 3;
let time = 15;

let timer = null;
let fiftyUsed = false;
let timeUsed = false;
let skipUsed = false;

let highScore = Number(localStorage.getItem("quizHighScore")) || 0;
let savedCoins = Number(localStorage.getItem("quizCoins")) || 0;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const result = document.getElementById("result");

const playBtn = document.getElementById("playBtn");
const againBtn = document.getElementById("againBtn");
const menuBtn = document.getElementById("menuBtn");
const quitBtn = document.getElementById("quitBtn");

const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

const category = document.getElementById("category");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

const timerCircle = document.getElementById("timerCircle");

const coinsText = document.getElementById("coins");
const streakText = document.getElementById("streak");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");

const fiftyBtn = document.getElementById("fiftyBtn");
const timeBtn = document.getElementById("timeBtn");
const skipBtn = document.getElementById("skipBtn");

const finalScore = document.getElementById("finalScore");
const finalCoins = document.getElementById("finalCoins");
const finalStreak = document.getElementById("finalStreak");
const correctAnswers = document.getElementById("correctAnswers");

const resultTitle = document.getElementById("resultTitle");
const resultIcon = document.getElementById("resultIcon");
const recordMessage = document.getElementById("recordMessage");

const menuRecord = document.getElementById("menuRecord");
const menuCoins = document.getElementById("menuCoins");

const toast = document.getElementById("toast");

menuRecord.textContent = highScore;
menuCoins.textContent = savedCoins;

function startGame() {

  currentQuestion = 0;
  score = 0;
  coins = savedCoins;
  streak = 0;
  lives = 3;

  fiftyUsed = false;
  timeUsed = false;
  skipUsed = false;

  menu.classList.add("hidden");
  result.classList.add("hidden");
  game.classList.remove("hidden");

  updateStats();
  showQuestion();
}

function showQuestion() {

  clearInterval(timer);

  if (currentQuestion >= questions.length) {
    finishGame();
    return;
  }

  const q = questions[currentQuestion];

  questionNumber.textContent = currentQuestion + 1;

  progressBar.style.width =
    ((currentQuestion) / questions.length) * 100 + "%";

  category.textContent = q.category;
  question.textContent = q.question;

  answers.innerHTML = "";

  q.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer";
    button.textContent =
      String.fromCharCode(65 + index) + ". " + answer;

    button.addEventListener("click", () => {
      checkAnswer(index, button);
    });

    answers.appendChild(button);
  });

  updateStats();
  startTimer();
}

function startTimer() {

  time = 15;
  timerCircle.textContent = time;

  timer = setInterval(() => {

    time--;

    timerCircle.textContent = time;

    if (time <= 5) {
      timerCircle.style.borderColor = "#ff5577";
    } else {
      timerCircle.style.borderColor = "#5e7cff";
    }

    if (time <= 0) {
      clearInterval(timer);
      wrongAnswer();
    }

  }, 1000);
}

function checkAnswer(index, selectedButton) {

  clearInterval(timer);

  const q = questions[currentQuestion];
  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach(button => {
    button.disabled = true;
  });

  if (index === q.correct) {

    selectedButton.classList.add("correct");

    streak++;

    const multiplier = Math.min(streak, 5);

    const gained = 100 * multiplier;

    score += gained;
    coins += 10 * multiplier;

    showToast("🔥 +" + gained + " очков!");

    updateStats();

    setTimeout(nextQuestion, 900);

  } else {

    selectedButton.classList.add("wrong");
    allButtons[q.correct].classList.add("correct");

    lives--;
    streak = 0;

    updateStats();

    if (lives <= 0) {
      setTimeout(finishGame, 900);
    } else {
      showToast("❌ Неправильно!");

      setTimeout(nextQuestion, 900);
    }
  }
}

function wrongAnswer() {

  const q = questions[currentQuestion];
  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach(button => {
    button.disabled = true;
  });

  allButtons[q.correct].classList.add("correct");

  lives--;
  streak = 0;

  updateStats();

  if (lives <= 0) {
    setTimeout(finishGame, 900);
  } else {
    showToast("⏰ Время вышло!");

    setTimeout(nextQuestion, 900);
  }
}

function nextQuestion() {

  currentQuestion++;

  showQuestion();
}

function updateStats() {

  coinsText.textContent = coins;
  streakText.textContent = streak;
  scoreText.textContent = score;

  livesText.textContent =
    "❤️".repeat(lives) + "🖤".repeat(3 - lives);
}

/* 50/50 */

fiftyBtn.addEventListener("click", () => {

  if (fiftyUsed) return;

  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer");

  let removed = 0;

  for (let i = 0; i < buttons.length; i++) {

    if (
      i !== q.correct &&
      removed < 2
    ) {
      buttons[i].style.visibility = "hidden";
      removed++;
    }
  }

  fiftyUsed = true;
  fiftyBtn.disabled = true;

  showToast("✂️ Два неправильных ответа убраны!");
});

/* +10 секунд */

timeBtn.addEventListener("click", () => {

  if (timeUsed) return;

  time += 10;

  timerCircle.textContent = time;

  timeUsed = true;
  timeBtn.disabled = true;

  showToast("⏱️ +10 секунд!");
});

/* ПРОПУСК */

skipBtn.addEventListener("click", () => {

  if (skipUsed) return;

  clearInterval(timer);

  skipUsed = true;
  skipBtn.disabled = true;

  showToast("⏭️ Вопрос пропущен!");

  setTimeout(nextQuestion, 500);
});

function finishGame() {

  clearInterval(timer);

  game.classList.add("hidden");
  result.classList.remove("hidden");

  finalScore.textContent = score;
  finalCoins.textContent = coins;
  finalStreak.textContent = streak;

  const correct =
    Math.round(score / 100);

  correctAnswers.textContent =
    Math.min(correct, questions.length);

  let isRecord = false;

  if (score > highScore) {

    highScore = score;

    localStorage.setItem(
      "quizHighScore",
      highScore
    );

    isRecord = true;
  }

  savedCoins = coins;

  localStorage.setItem(
    "quizCoins",
    savedCoins
  );

  if (isRecord) {

    resultIcon.textContent = "👑";
    resultTitle.textContent = "НОВЫЙ РЕКОРД!";
    recordMessage.classList.remove("hidden");

  } else if (score >= 700) {

    resultIcon.textContent = "🔥";
    resultTitle.textContent = "ОТЛИЧНЫЙ РЕЗУЛЬТАТ!";

  } else if (score >= 400) {

    resultIcon.textContent = "😎";
    resultTitle.textContent = "ХОРОШО!";

  } else {

    resultIcon.textContent = "💪";
    resultTitle.textContent = "ПОПРОБУЙ ЕЩЁ!";

  }

  menuRecord.textContent = highScore;
  menuCoins.textContent = savedCoins;
}

function showToast(text) {

  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

playBtn.addEventListener("click", startGame);
againBtn.addEventListener("click", startGame);

menuBtn.addEventListener("click", () => {

  result.classList.add("hidden");
  menu.classList.remove("hidden");

  menuRecord.textContent = highScore;
  menuCoins.textContent = savedCoins;
});

quitBtn.addEventListener("click", () => {

  clearInterval(timer);

  game.classList.add("hidden");
  menu.classList.remove("hidden");

  menuRecord.textContent = highScore;
  menuCoins.textContent = savedCoins;
});
