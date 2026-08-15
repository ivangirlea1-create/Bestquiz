/* =====================================================
   БИТВА ЗНАНИЙ
   1 вопрос = обычный уровень
   Каждый 5-й = 3 сложных вопроса
   После ответа = 2 секунды
   Потом экран результата БЕЗ автоматического перехода
===================================================== */


/* =====================================================
   ВОПРОСЫ
===================================================== */

const questions = [

  {
    category: "🌿 ПРИРОДА",
    question: "Какой океан самый большой?",
    answers: [
      "Атлантический",
      "Тихий",
      "Индийский",
      "Северный Ледовитый"
    ],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Сколько ног у паука?",
    answers: [
      "6",
      "8",
      "10",
      "12"
    ],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какое животное самое быстрое на суше?",
    answers: [
      "Лев",
      "Гепард",
      "Волк",
      "Лошадь"
    ],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какое животное самое большое на Земле?",
    answers: [
      "Слон",
      "Синий кит",
      "Жираф",
      "Кашалот"
    ],
    correct: 1
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра содержит кубический мир и крафт?",
    answers: [
      "Minecraft",
      "FIFA",
      "Tetris",
      "Chess"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "В какой игре игроки строят фигуры из падающих блоков?",
    answers: [
      "Tetris",
      "Roblox",
      "Brawl Stars",
      "Fortnite"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Что означает RPG?",
    answers: [
      "Ролевая игра",
      "Гоночная игра",
      "Спортивная игра",
      "Музыкальная игра"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется платформа с пользовательскими играми?",
    answers: [
      "Roblox",
      "Spotify",
      "Word",
      "Excel"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает HTML?",
    answers: [
      "Hyper Text Markup Language",
      "High Technology Modern Language",
      "Home Tool Machine Language",
      "Hyper Transfer Main Language"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Для чего используется CSS?",
    answers: [
      "Для оформления сайтов",
      "Для звонков",
      "Для фотографий",
      "Для музыки"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык используется для логики веб-сайта?",
    answers: [
      "JavaScript",
      "HTML",
      "CSS",
      "PNG"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает CPU?",
    answers: [
      "Центральный процессор",
      "Память компьютера",
      "Видеокарта",
      "Жёсткий диск"
    ],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как называется волшебная школа в Гарри Поттере?",
    answers: [
      "Хогвартс",
      "Хогсмит",
      "Азкабан",
      "Нарния"
    ],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут льва из «Короля Льва»?",
    answers: [
      "Симба",
      "Муфаса",
      "Шрам",
      "Тимон"
    ],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут главного героя «Матрицы»?",
    answers: [
      "Нео",
      "Тони",
      "Питер",
      "Джек"
    ],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько игроков одной команды на поле в футболе?",
    answers: [
      "9",
      "10",
      "11",
      "12"
    ],
    correct: 2
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько колец на олимпийском символе?",
    answers: [
      "4",
      "5",
      "6",
      "7"
    ],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком спорте используется шайба?",
    answers: [
      "Футбол",
      "Хоккей",
      "Теннис",
      "Баскетбол"
    ],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "В каком году человек впервые высадился на Луне?",
    answers: [
      "1965",
      "1969",
      "1972",
      "1975"
    ],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто первым полетел в космос?",
    answers: [
      "Юрий Гагарин",
      "Нил Армстронг",
      "Алексей Леонов",
      "Альберт Эйнштейн"
    ],
    correct: 0
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 7 × 8?",
    answers: [
      "54",
      "56",
      "58",
      "64"
    ],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 100 ÷ 4?",
    answers: [
      "20",
      "25",
      "30",
      "40"
    ],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Продолжи: 2, 4, 8, 16, ?",
    answers: [
      "20",
      "24",
      "32",
      "36"
    ],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько градусов в полном круге?",
    answers: [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    correct: 3
  }

];


/* =====================================================
   КАТЕГОРИИ
===================================================== */

const categories = [
  "🌿 ПРИРОДА",
  "🎮 ИГРЫ",
  "💻 ТЕХНОЛОГИИ",
  "🎬 КИНО",
  "⚽ СПОРТ",
  "🏛️ ИСТОРИЯ",
  "➗ МАТЕМАТИКА"
];


/* =====================================================
   СОХРАНЕНИЕ
===================================================== */

let level =
  Number(localStorage.getItem("quizLevel")) || 1;

let highScore =
  Number(localStorage.getItem("quizHighScore")) || 0;

let coins =
  Number(localStorage.getItem("quizCoins")) || 0;


let inventory = {

  fifty:
    Number(localStorage.getItem("abilityFifty")) || 0,

  time:
    Number(localStorage.getItem("abilityTime")) || 0,

  other:
    Number(localStorage.getItem("abilityOther")) || 0

};


/* =====================================================
   СОСТОЯНИЕ ИГРЫ
===================================================== */

let score = 0;

let streak = 0;

let lives = 3;

let time = 15;

let timer = null;

let currentQuestion = null;

let currentQuestions = [];

let hardQuestionIndex = 0;

let hardCorrect = 0;

let selectedCategory = "";

let fiftyUsed = false;

let answerLocked = false;


/* =====================================================
   ELEMENTS
===================================================== */

const menu =
  document.getElementById("menu");

const shop =
  document.getElementById("shop");

const game =
  document.getElementById("game");

const result =
  document.getElementById("result");

const categoryScreen =
  document.getElementById("categoryScreen");


const question =
  document.getElementById("question");

const category =
  document.getElementById("category");

const answers =
  document.getElementById("answers");

const timerCircle =
  document.getElementById("timerCircle");

const progressBar =
  document.getElementById("progressBar");


const coinsText =
  document.getElementById("coins");

const scoreText =
  document.getElementById("score");

const streakText =
  document.getElementById("streak");

const livesText =
  document.getElementById("lives");

const levelNumber =
  document.getElementById("levelNumber");


const menuLevel =
  document.getElementById("menuLevel");

const menuCoins =
  document.getElementById("menuCoins");

const menuRecord =
  document.getElementById("menuRecord");

const shopCoins =
  document.getElementById("shopCoins");


const fiftyBtn =
  document.getElementById("fiftyBtn");

const timeBtn =
  document.getElementById("timeBtn");

const otherBtn =
  document.getElementById("otherBtn");


const fiftyGameCount =
  document.getElementById("fiftyGameCount");

const timeGameCount =
  document.getElementById("timeGameCount");

const otherGameCount =
  document.getElementById("otherGameCount");


const fiftyCount =
  document.getElementById("fiftyCount");

const timeCount =
  document.getElementById("timeCount");

const otherCount =
  document.getElementById("otherCount");


const hardBadge =
  document.getElementById("hardBadge");

const categoryChoices =
  document.getElementById("categoryChoices");

const toast =
  document.getElementById("toast");


/* =====================================================
   СОХРАНЕНИЕ
===================================================== */

function saveData() {

  localStorage.setItem(
    "quizLevel",
    level
  );

  localStorage.setItem(
    "quizHighScore",
    highScore
  );

  localStorage.setItem(
    "quizCoins",
    coins
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
    "abilityOther",
    inventory.other
  );

  updateUI();
}


/* =====================================================
   UI
===================================================== */

function updateUI() {

  menuLevel.textContent = level;

  menuCoins.textContent = coins;

  menuRecord.textContent = highScore;

  shopCoins.textContent = coins;

  coinsText.textContent = coins;

  scoreText.textContent = score;

  streakText.textContent = streak;

  levelNumber.textContent = level;


  livesText.textContent =
    "❤️".repeat(lives) +
    "🖤".repeat(3 - lives);


  fiftyCount.textContent =
    inventory.fifty;

  timeCount.textContent =
    inventory.time;

  otherCount.textContent =
    inventory.other;


  fiftyGameCount.textContent =
    inventory.fifty;

  timeGameCount.textContent =
    inventory.time;

  otherGameCount.textContent =
    inventory.other;
}


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

  const copy = [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      copy[i],
      copy[j]
    ] =
    [
      copy[j],
      copy[i]
    ];
  }

  return copy;
}


/* =====================================================
   СЛОЖНЫЙ ЛИ УРОВЕНЬ
===================================================== */

function isHardLevel() {

  return level % 5 === 0;

}


/* =====================================================
   МЕНЮ
===================================================== */

function showMenu() {

  clearInterval(timer);

  menu.classList.remove("hidden");

  shop.classList.add("hidden");

  game.classList.add("hidden");

  result.classList.add("hidden");

  categoryScreen.classList.add("hidden");

  updateUI();
}


/* =====================================================
   НАЧАТЬ ИГРУ
===================================================== */

function startGame() {

  clearInterval(timer);

  score = 0;

  streak = 0;

  lives = 3;

  answerLocked = false;

  menu.classList.add("hidden");

  shop.classList.add("hidden");

  result.classList.add("hidden");


  if (isHardLevel()) {

    showCategorySelection();

  } else {

    categoryScreen.classList.add("hidden");

    game.classList.remove("hidden");

    startNormalLevel();

  }
}


/* =====================================================
   ОБЫЧНЫЙ УРОВЕНЬ
===================================================== */

function startNormalLevel() {

  hardBadge.classList.add("hidden");

  progressBar.style.width = "100%";

  currentQuestion =
    questions[
      Math.floor(
        Math.random() *
        questions.length
      )
    ];

  showQuestion();
}


/* =====================================================
   ПОКАЗ ВОПРОСА
===================================================== */

function showQuestion() {

  clearInterval(timer);

  answerLocked = false;

  fiftyUsed = false;

  time = 15;

  timerCircle.textContent = time;

  timerCircle.style.borderColor =
    "#5e7cff";


  category.textContent =
    currentQuestion.category;

  question.textContent =
    currentQuestion.question;


  answers.innerHTML = "";


  currentQuestion.answers.forEach(
    (answerText, index) => {

      const button =
        document.createElement("button");

      button.className = "answer";

      button.textContent =
        String.fromCharCode(65 + index)
        + ". "
        + answerText;


      button.addEventListener(
        "click",
        () => {

          checkAnswer(
            index,
            button
          );

        }
      );


      answers.appendChild(button);

    }
  );


  updateUI();

  startTimer();
}


/* =====================================================
   ТАЙМЕР
===================================================== */

function startTimer() {

  clearInterval(timer);

  timer =
    setInterval(
      () => {

        time--;

        timerCircle.textContent =
          time;


        if (time <= 5) {

          timerCircle.style.borderColor =
            "#ff5577";

        }


        if (time <= 0) {

          clearInterval(timer);

          answerLocked = true;

          handleWrongAnswer();

        }

      },
      1000
    );
}


/* =====================================================
   ПРОВЕРКА ОТВЕТА
===================================================== */

function checkAnswer(
  index,
  selectedButton
) {

  if (answerLocked)
    return;

  answerLocked = true;

  clearInterval(timer);


  const buttons =
    document.querySelectorAll(".answer");


  buttons.forEach(
    button => {
      button.disabled = true;
    }
  );


  if (
    index ===
    currentQuestion.correct
  ) {

    selectedButton.classList.add(
      "correct"
    );

    handleCorrectAnswer();

  } else {

    selectedButton.classList.add(
      "wrong"
    );

    buttons[
      currentQuestion.correct
    ].classList.add(
      "correct"
    );

    handleWrongAnswer();

  }
}


/* =====================================================
   ПРАВИЛЬНО
===================================================== */

function handleCorrectAnswer() {

  streak++;

  const multiplier =
    Math.min(streak, 5);

  const gained =
    100 * multiplier;

  score += gained;

  coins +=
    10 * multiplier;

  saveData();

  showToast(
    "🔥 Правильно! +" +
    gained +
    " очков"
  );


  /*
     ВАЖНО:
     Ждём только 2 секунды,
     чтобы игрок увидел правильный ответ.
  */

  setTimeout(
    () => {

      if (isHardLevel()) {

        hardCorrect++;

        hardNextQuestion();

      } else {

        finishNormalLevel(true);

      }

    },
    2000
  );
}


/* =====================================================
   НЕПРАВИЛЬНО
===================================================== */

function handleWrongAnswer() {

  clearInterval(timer);

  streak = 0;

  lives = 0;

  updateUI();

  showToast(
    "❌ Неправильно!"
  );


  /*
     Правильный ответ уже подсвечен.
     Через 2 секунды открываем результат.
  */

  setTimeout(
    () => {

      if (isHardLevel()) {

        hardFailed();

      } else {

        finishNormalLevel(false);

      }

    },
    2000
  );
}


/* =====================================================
   РЕЗУЛЬТАТ ОБЫЧНОГО УРОВНЯ
===================================================== */

function finishNormalLevel(won) {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");


  document.getElementById(
    "resultIcon"
  ).textContent =
    won ? "🎉" : "💪";


  document.getElementById(
    "resultTitle"
  ).textContent =
    won
      ? "УРОВЕНЬ ПРОЙДЕН!"
      : "ОТВЕТ НЕВЕРНЫЙ";


  document.getElementById(
    "finalScore"
  ).textContent =
    score;


  document.getElementById(
    "finalCoins"
  ).textContent =
    coins;


  document.getElementById(
    "correctAnswers"
  ).textContent =
    won ? "1/1" : "0/1";


  document.getElementById(
    "finalLevel"
  ).textContent =
    level;


  document.getElementById(
    "resultCountdown"
  ).textContent =
    "Выбери действие 👇";


  if (score > highScore) {

    highScore = score;

    saveData();

  }

  /*
     НИКАКОГО setInterval здесь нет.
     Игрок сам выбирает кнопку.
  */
}


/* =====================================================
   СЛОЖНЫЙ УРОВЕНЬ
===================================================== */

function showCategorySelection() {

  clearInterval(timer);

  menu.classList.add("hidden");

  shop.classList.add("hidden");

  game.classList.add("hidden");

  result.classList.add("hidden");

  categoryScreen.classList.remove("hidden");

  createCategoryChoices();
}


/* =====================================================
   КАТЕГОРИИ
===================================================== */

function createCategoryChoices() {

  categoryChoices.innerHTML = "";

  const randomCategories =
    shuffle(categories).slice(0, 3);


  randomCategories.forEach(
    cat => {

      const button =
        document.createElement("button");

      button.className =
        "category-btn";

      button.textContent =
        cat;


      button.addEventListener(
        "click",
        () => {

          chooseCategory(cat);

        }
      );


      categoryChoices.appendChild(
        button
      );

    }
  );
}


/* =====================================================
   ВЫБОР КАТЕГОРИИ
===================================================== */

function chooseCategory(cat) {

  selectedCategory = cat;


  const categoryQuestions =
    questions.filter(
      q =>
        q.category === cat
    );


  currentQuestions =
    shuffle(
      categoryQuestions
    ).slice(0, 3);


  /*
     Если в категории меньше 3 вопросов,
     добираем из общей базы.
  */

  while (
    currentQuestions.length < 3
  ) {

    const extra =
      questions[
        Math.floor(
          Math.random() *
          questions.length
        )
      ];

    if (
      !currentQuestions.includes(extra)
    ) {

      currentQuestions.push(extra);

    }
  }


  hardQuestionIndex = 0;

  hardCorrect = 0;

  score = 0;

  lives = 3;


  categoryScreen.classList.add(
    "hidden"
  );

  game.classList.remove(
    "hidden"
  );

  hardBadge.classList.remove(
    "hidden"
  );


  currentQuestion =
    currentQuestions[0];


  showHardQuestion();
}


/* =====================================================
   СЛОЖНЫЙ ВОПРОС
===================================================== */

function showHardQuestion() {

  clearInterval(timer);

  answerLocked = false;

  fiftyUsed = false;

  time = 15;

  timerCircle.textContent =
    time;

  timerCircle.style.borderColor =
    "#ff7777";


  category.textContent =
    currentQuestion.category;

  question.textContent =
    currentQuestion.question;


  answers.innerHTML = "";


  currentQuestion.answers.forEach(
    (answerText, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer";

      button.textContent =
        String.fromCharCode(65 + index)
        + ". "
        + answerText;


      button.addEventListener(
        "click",
        () => {

          checkAnswer(
            index,
            button
          );

        }
      );


      answers.appendChild(button);

    }
  );


  progressBar.style.width =
    (
      (
        hardQuestionIndex + 1
      ) / 3
    ) * 100 + "%";


  updateUI();

  startTimer();
}


/* =====================================================
   СЛЕДУЮЩИЙ СЛОЖНЫЙ ВОПРОС
===================================================== */

function hardNextQuestion() {

  hardQuestionIndex++;


  if (
    hardQuestionIndex >= 3
  ) {

    hardCompleted();

    return;

  }


  currentQuestion =
    currentQuestions[
      hardQuestionIndex
    ];


  showHardQuestion();
}


/* =====================================================
   СЛОЖНЫЙ ПРОЙДЕН
===================================================== */

function hardCompleted() {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");


  const reward =
    Math.floor(
      Math.random() * 286
    ) + 200;


  coins += reward;

  score += 500;


  if (score > highScore) {

    highScore = score;

  }


  saveData();


  document.getElementById(
    "resultIcon"
  ).textContent =
    "👑";


  document.getElementById(
    "resultTitle"
  ).textContent =
    "🔥 СЛОЖНЫЙ УРОВЕНЬ ПРОЙДЕН!";


  document.getElementById(
    "finalScore"
  ).textContent =
    score;


  document.getElementById(
    "finalCoins"
  ).textContent =
    "+" + reward;


  document.getElementById(
    "correctAnswers"
  ).textContent =
    "3/3";


  document.getElementById(
    "finalLevel"
  ).textContent =
    level;


  document.getElementById(
    "resultCountdown"
  ).textContent =
    "🎉 Отлично! Выбери действие 👇";
}


/* =====================================================
   СЛОЖНЫЙ ПРОВАЛЕН
===================================================== */

function hardFailed() {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");


  document.getElementById(
    "resultIcon"
  ).textContent =
    "❌";


  document.getElementById(
    "resultTitle"
  ).textContent =
    "СЛОЖНЫЙ УРОВЕНЬ ПРОВАЛЕН";


  document.getElementById(
    "finalScore"
  ).textContent =
    score;


  document.getElementById(
    "finalCoins"
  ).textContent =
    coins;


  document.getElementById(
    "correctAnswers"
  ).textContent =
    hardCorrect + "/3";


  document.getElementById(
    "finalLevel"
  ).textContent =
    level;


  document.getElementById(
    "resultCountdown"
  ).textContent =
    "Попробуй ещё раз или выйди в меню 👇";
}


/* =====================================================
   50/50
===================================================== */

fiftyBtn.addEventListener(
  "click",
  () => {

    if (answerLocked)
      return;


    if (fiftyUsed)
      return;


    if (inventory.fifty <= 0) {

      showToast(
        "🛒 Купи 50/50!"
      );

      return;

    }


    const buttons =
      document.querySelectorAll(".answer");


    let removed = 0;


    for (
      let i = 0;
      i < buttons.length;
      i++
    ) {

      if (
        i !== currentQuestion.correct &&
        removed < 2
      ) {

        buttons[i].style.visibility =
          "hidden";

        removed++;

      }

    }


    inventory.fifty--;

    fiftyUsed = true;

    saveData();


    showToast(
      "✂️ 50/50 использовано!"
    );

  }
);


/* =====================================================
   +10 СЕКУНД
===================================================== */

timeBtn.addEventListener(
  "click",
  () => {

    if (answerLocked)
      return;


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

  }
);


/* =====================================================
   ДРУГОЙ ВОПРОС
===================================================== */

otherBtn.addEventListener(
  "click",
  () => {

    if (answerLocked)
      return;


    if (isHardLevel()) {

      showToast(
        "🔥 На сложном уровне нельзя менять вопрос!"
      );

      return;

    }


    if (inventory.other <= 0) {

      showToast(
        "🛒 Купи другой вопрос!"
      );

      return;

    }


    inventory.other--;


    let newQuestion;


    do {

      newQuestion =
        questions[
          Math.floor(
            Math.random() *
            questions.length
          )
        ];

    } while (
      newQuestion ===
      currentQuestion
    );


    currentQuestion =
      newQuestion;


    saveData();

    showQuestion();


    showToast(
      "🔄 Новый вопрос!"
    );

  }
);


/* =====================================================
   МАГАЗИН
===================================================== */

document
  .getElementById("shopBtn")
  .addEventListener(
    "click",
    () => {

      menu.classList.add("hidden");

      shop.classList.remove("hidden");

      updateUI();

    }
  );


document
  .getElementById("backBtn")
  .addEventListener(
    "click",
    showMenu
  );


/* =====================================================
   ПОКУПКА 50/50
===================================================== */

document
  .getElementById("buyFifty")
  .addEventListener(
    "click",
    () => {

      const price = 100;


      if (coins < price) {

        showToast(
          "❌ Не хватает монет!"
        );

        return;

      }


      coins -= price;

      inventory.fifty++;

      saveData();


      showToast(
        "✂️ Куплено 50/50!"
      );

    }
  );


/* =====================================================
   ПОКУПКА +10
===================================================== */

document
  .getElementById("buyTime")
  .addEventListener(
    "click",
    () => {

      const price = 150;


      if (coins < price) {

        showToast(
          "❌ Не хватает монет!"
        );

        return;

      }


      coins -= price;

      inventory.time++;

      saveData();


      showToast(
        "⏱️ Куплено +10 секунд!"
      );

    }
  );


/* =====================================================
   ПОКУПКА ДРУГОГО
===================================================== */

document
  .getElementById("buyOther")
  .addEventListener(
    "click",
    () => {

      const price = 200;


      if (coins < price) {

        showToast(
          "❌ Не хватает монет!"
        );

        return;

      }


      coins -= price;

      inventory.other++;

      saveData();


      showToast(
        "🔄 Куплен другой вопрос!"
      );

    }
  );


/* =====================================================
   НАЧАТЬ
===================================================== */

document
  .getElementById("playBtn")
  .addEventListener(
    "click",
    startGame
  );


/* =====================================================
   ИГРАТЬ СНОВА
===================================================== */

document
  .getElementById("againBtn")
  .addEventListener(
    "click",
    () => {

      /*
         Переход на следующий уровень
         происходит только после нажатия
         "ИГРАТЬ СНОВА".
      */

      level++;

      saveData();

      startGame();

    }
  );


/* =====================================================
   В МЕНЮ
===================================================== */

document
  .getElementById("menuBtn")
  .addEventListener(
    "click",
    () => {

      showMenu();

    }
  );


/* =====================================================
   ВЫЙТИ ИЗ ИГРЫ
===================================================== */

document
  .getElementById("quitBtn")
  .addEventListener(
    "click",
    () => {

      clearInterval(timer);

      showMenu();

    }
  );


/* =====================================================
   ОТМЕНА СЛОЖНОГО
===================================================== */

document
  .getElementById("cancelHardBtn")
  .addEventListener(
    "click",
    showMenu
  );


/* =====================================================
   TOAST
===================================================== */

function showToast(text) {

  toast.textContent = text;

  toast.classList.add("show");


  setTimeout(
    () => {

      toast.classList.remove("show");

    },
    1800
  );

}


/* =====================================================
   ЗАПУСК
===================================================== */

updateUI();

showMenu();
