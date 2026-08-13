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


/* =========================
   СОХРАНЕНИЕ
========================= */

let highScore =
  Number(localStorage.getItem("quizHighScore")) || 0;

let coins =
  Number(localStorage.getItem("quizCoins")) || 0;

let inventory = {
  fifty:
    Number(localStorage.getItem("abilityFifty")) || 0,

  time:
    Number(localStorage.getItem("abilityTime")) || 0,

  skip:
    Number(localStorage.getItem("abilitySkip")) || 0
};


/* =========================
   ПЕРЕМЕННЫЕ ИГРЫ
========================= */

let currentQuestion = 0;
let score = 0;
let streak = 0;
let lives = 3;
let time = 15;

let timer = null;

let fiftyUsed = false;


/* =========================
   ELEMENTS
========================= */

const menu =
  document.getElementById("menu");

const shop =
  document.getElementById("shop");

const game =
  document.getElementById("game");

const result =
  document.getElementById("result");

const playBtn =
  document.getElementById("playBtn");

const shopBtn =
  document.getElementById("shopBtn");

const backBtn =
  document.getElementById("backBtn");

const againBtn =
  document.getElementById("againBtn");

const menuBtn =
  document.getElementById("menuBtn");

const quitBtn =
  document.getElementById("quitBtn");

const questionNumber =
  document.getElementById("questionNumber");

const progressBar =
  document.getElementById("progressBar");

const category =
  document.getElementById("category");

const question =
  document.getElementById("question");

const answers =
  document.getElementById("answers");

const timerCircle =
  document.getElementById("timerCircle");

const coinsText =
  document.getElementById("coins");

const streakText =
  document.getElementById("streak");

const scoreText =
  document.getElementById("score");

const livesText =
  document.getElementById("lives");

const fiftyBtn =
  document.getElementById("fiftyBtn");

const timeBtn =
  document.getElementById("timeBtn");

const skipBtn =
  document.getElementById("skipBtn");

const fiftyGameCount =
  document.getElementById("fiftyGameCount");

const timeGameCount =
  document.getElementById("timeGameCount");

const skipGameCount =
  document.getElementById("skipGameCount");

const menuRecord =
  document.getElementById("menuRecord");

const menuCoins =
  document.getElementById("menuCoins");

const shopCoins =
  document.getElementById("shopCoins");

const fiftyCount =
  document.getElementById("fiftyCount");

const timeCount =
  document.getElementById("timeCount");

const skipCount =
  document.getElementById("skipCount");

const toast =
  document.getElementById("toast");


/* =========================
   ОБНОВЛЕНИЕ МАГАЗИНА
========================= */

function updateShop() {

  shopCoins.textContent = coins;

  fiftyCount.textContent =
    inventory.fifty;

  timeCount.textContent =
    inventory.time;

  skipCount.textContent =
    inventory.skip;

  menuCoins.textContent =
    coins;

  menuRecord.textContent =
    highScore;
}


/* =========================
   СОХРАНЕНИЕ
========================= */

function saveData() {

  localStorage.setItem(
    "quizCoins",
    coins
  );

  localStorage.setItem(
    "quizHighScore",
    highScore
  );

  localStorage.setItem(
    "abilityFifty",
    inventory.fifty
  );

  localStorage.setItem(
    "abilityTime",
    inventory.time
  );

  localStorage.setItem(
    "abilitySkip",
    inventory.skip
  );

  updateShop();
}


/* =========================
   МАГАЗИН
========================= */

shopBtn.addEventListener("click", () => {

  menu.classList.add("hidden");

  shop.classList.remove("hidden");

  updateShop();
});


backBtn.addEventListener("click", () => {

  shop.classList.add("hidden");

  menu.classList.remove("hidden");

  updateShop();
});


/* ПОКУПКА 50/50 */

document
  .getElementById("buyFifty")
  .addEventListener("click", () => {

    const price = 100;

    if (coins < price) {
      showToast("❌ Не хватает монет!");
      return;
    }

    coins -= price;

    inventory.fifty++;

    saveData();

    showToast("✂️ Куплено 50/50!");
  });


/* ПОКУПКА +10 СЕК */

document
  .getElementById("buyTime")
  .addEventListener("click", () => {

    const price = 150;

    if (coins < price) {
      showToast("❌ Не хватает монет!");
      return;
    }

    coins -= price;

    inventory.time++;

    saveData();

    showToast("⏱️ Куплено +10 секунд!");
  });


/* ПОКУПКА ПРОПУСКА */

document
  .getElementById("buySkip")
  .addEventListener("click", () => {

    const price = 200;

    if (coins < price) {
      showToast("❌ Не хватает монет!");
      return;
    }

    coins -= price;

    inventory.skip++;

    saveData();

    showToast("⏭️ Куплен пропуск!");
  });


/* =========================
   НАЧАЛО ИГРЫ
========================= */

function startGame() {

  currentQuestion = 0;
  score = 0;
  streak = 0;
  lives = 3;

  fiftyUsed = false;

  menu.classList.add("hidden");
  shop.classList.add("hidden");
  result.classList.add("hidden");

  game.classList.remove("hidden");

  updateStats();

  showQuestion();
}


/* =========================
   ПОКАЗ ВОПРОСА
========================= */

function showQuestion() {

  clearInterval(timer);

  if (
    currentQuestion >=
    questions.length
  ) {

    finishGame();

    return;
  }

  const q =
    questions[currentQuestion];

  questionNumber.textContent =
    currentQuestion + 1;

  progressBar.style.width =
    ((currentQuestion) /
      questions.length) * 100 + "%";

  category.textContent =
    q.category;

  question.textContent =
    q.question;

  answers.innerHTML = "";

  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer";

      button.textContent =
        String.fromCharCode(65 + index)
        + ". "
        + answer;

      button.addEventListener(
        "click",
        () => checkAnswer(
          index,
          button
        )
      );

      answers.appendChild(button);
    }
  );

  fiftyUsed = false;

  updateStats();

  startTimer();
}


/* =========================
   ТАЙМЕР
========================= */

function startTimer() {

  clearInterval(timer);

  time = 15;

  timerCircle.textContent =
    time;

  timerCircle.style.borderColor =
    "#5e7cff";

  timer = setInterval(() => {

    time--;

    timerCircle.textContent =
      time;

    if (time <= 5) {

      timerCircle.style.borderColor =
        "#ff5577";
    }

    if (time <= 0) {

      clearInterval(timer);

      wrongAnswer();
    }

  }, 1000);
}


/* =========================
   ОТВЕТ
========================= */

function checkAnswer(
  index,
  selectedButton
) {

  clearInterval(timer);

  const q =
    questions[currentQuestion];

  const allButtons =
    document.querySelectorAll(".answer");

  allButtons.forEach(
    button => {
      button.disabled = true;
    }
  );

  if (index === q.correct) {

    selectedButton
      .classList
      .add("correct");

    streak++;

    const multiplier =
      Math.min(streak, 5);

    const gained =
      100 * multiplier;

    score += gained;

    const earnedCoins =
      10 * multiplier;

    coins += earnedCoins;

    saveData();

    showToast(
      "🔥 +"
      + gained
      + " очков  +"
      + earnedCoins
      + " 💰"
    );

    updateStats();

    setTimeout(
      nextQuestion,
      900
    );

  } else {

    selectedButton
      .classList
      .add("wrong");

    allButtons[q.correct]
      .classList
      .add("correct");

    lives--;

    streak = 0;

    updateStats();

    if (lives <= 0) {

      setTimeout(
        finishGame,
        900
      );

    } else {

      showToast(
        "❌ Неправильно!"
      );

      setTimeout(
        nextQuestion,
        900
      );
    }
  }
}


/* =========================
   ВРЕМЯ ВЫШЛО
========================= */

function wrongAnswer() {

  const q =
    questions[currentQuestion];

  const allButtons =
    document.querySelectorAll(".answer");

  allButtons.forEach(
    button => {
      button.disabled = true;
    }
  );

  allButtons[q.correct]
    .classList
    .add("correct");

  lives--;

  streak = 0;

  updateStats();

  if (lives <= 0) {

    setTimeout(
      finishGame,
      900
    );

  } else {

    showToast(
      "⏰ Время вышло!"
    );

    setTimeout(
      nextQuestion,
      900
    );
  }
}


/* =========================
   СЛЕДУЮЩИЙ ВОПРОС
========================= */

function nextQuestion() {

  currentQuestion++;

  showQuestion();
}


/* =========================
   50/50
========================= */

fiftyBtn.addEventListener(
  "click",
  () => {

    if (fiftyUsed)
      return;

    if (inventory.fifty <= 0) {

      showToast(
        "🛒 Купи 50/50 в магазине!"
      );

      return;
    }

    const q =
      questions[currentQuestion];

    const buttons =
      document.querySelectorAll(
        ".answer"
      );

    let removed = 0;

    for (
      let i = 0;
      i < buttons.length;
      i++
    ) {

      if (
        i !== q.correct &&
        removed < 2
      ) {

        buttons[i]
          .style
          .visibility = "hidden";

        removed++;
      }
    }

    inventory.fifty--;

    fiftyUsed = true;

    saveData();

    showToast(
      "✂️ 50/50 использовано!"
    );

    updateStats();
  }
);


/* =========================
   +10 СЕКУНД
========================= */

timeBtn.addEventListener(
  "click",
  () => {

    if (inventory.time <= 0) {

      showToast(
        "🛒 Купи +10 секунд!"
      );

      return;
    }

    time += 10;

    inventory.time--;

    saveData();

    timerCircle.textContent =
      time;

    showToast(
      "⏱️ +10 секунд!"
    );

    updateStats();
  }
);


/* =========================
   ПРОПУСК
========================= */

skipBtn.addEventListener(
  "click",
  () => {

    if (inventory.skip <= 0) {

      showToast(
        "🛒 Купи пропуск!"
      );

      return;
    }

    clearInterval(timer);

    inventory.skip--;

    saveData();

    showToast(
      "⏭️ Вопрос пропущен!"
    );

    setTimeout(
      nextQuestion,
      500
    );
  }
);


/* =========================
   СТАТИСТИКА
========================= */

function updateStats() {

  coinsText.textContent =
    coins;

  streakText.textContent =
    streak;

  scoreText.textContent =
    score;

  livesText.textContent =
    "❤️".repeat(lives)
    +
    "🖤".repeat(3 - lives);

  fiftyGameCount.textContent =
    inventory.fifty;

  timeGameCount.textContent =
    inventory.time;

  skipGameCount.textContent =
    inventory.skip;
}


/* =========================
   КОНЕЦ
========================= */

function finishGame() {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");

  document
    .getElementById("finalScore")
    .textContent = score;

  document
    .getElementById("finalCoins")
    .textContent = coins;

  document
    .getElementById("finalStreak")
    .textContent = streak;

  const correct =
    Math.round(score / 100);

  document
    .getElementById("correctAnswers")
    .textContent =
      Math.min(
        correct,
        questions.length
      );

  const recordMessage =
    document.getElementById(
      "recordMessage"
    );

  if (score > highScore) {

    highScore = score;

    saveData();

    recordMessage
      .classList
      .remove("hidden");

    document
      .getElementById(
        "resultIcon"
      )
      .textContent = "👑";

    document
      .getElementById(
        "resultTitle"
      )
      .textContent =
        "НОВЫЙ РЕКОРД!";

  } else {

    recordMessage
      .classList
      .add("hidden");

    if (score >= 700) {

      document
        .getElementById(
          "resultIcon"
        )
        .textContent = "🔥";

      document
        .getElementById(
          "resultTitle"
        )
        .textContent =
          "ОТЛИЧНЫЙ РЕЗУЛЬТАТ!";

    } else {

      document
        .getElementById(
          "resultIcon"
        )
        .textContent = "💪";

      document
        .getElementById(
          "resultTitle"
        )
        .textContent =
          "ПОПРОБУЙ ЕЩЁ!";
    }
  }

  updateShop();
}


/* =========================
   TOAST
========================= */

function showToast(text) {

  toast.textContent =
    text;

  toast.classList.add(
    "show"
  );

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 1600);
}


/* =========================
   КНОПКИ
========================= */

playBtn.addEventListener(
  "click",
  startGame
);

againBtn.addEventListener(
  "click",
  startGame
);

menuBtn.addEventListener(
  "click",
  () => {

    result.classList.add(
      "hidden"
    );

    menu.classList.remove(
      "hidden"
    );

    updateShop();
  }
);

quitBtn.addEventListener(
  "click",
  () => {

    clearInterval(timer);

    game.classList.add(
      "hidden"
    );

    menu.classList.remove(
      "hidden"
    );

    updateShop();
  }
);


/* =========================
   ЗАПУСК
========================= */

updateShop();
