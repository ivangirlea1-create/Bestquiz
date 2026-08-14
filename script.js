/* =====================================================
   БИТВА ЗНАНИЙ
   Версия с уровнями до 1000+
===================================================== */


/* =====================================================
   ВОПРОСЫ
===================================================== */

const questions = [

  /* =========================
     ПРИРОДА
  ========================= */

  {
    category: "🌿 ПРИРОДА",
    question: "Какое дерево считается самым высоким?",
    answers: ["Секвойя", "Берёза", "Дуб", "Ива"],
    correct: 0
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какой океан самый большой?",
    answers: ["Атлантический", "Тихий", "Индийский", "Северный Ледовитый"],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какое животное самое быстрое на суше?",
    answers: ["Лев", "Гепард", "Волк", "Лошадь"],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Сколько ног у паука?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какой газ нужен растениям для фотосинтеза?",
    answers: ["Кислород", "Азот", "Углекислый газ", "Гелий"],
    correct: 2
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какое животное является самым большим на Земле?",
    answers: ["Слон", "Синий кит", "Жираф", "Кашалот"],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Как называется детёныш лягушки?",
    answers: ["Головастик", "Личинка", "Малёк", "Куколка"],
    correct: 0
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какой цветок обычно ассоциируется с подсолнцем?",
    answers: ["Роза", "Подсолнечник", "Тюльпан", "Лилия"],
    correct: 1
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Какое животное впадает в спячку?",
    answers: ["Медведь", "Гепард", "Дельфин", "Пингвин"],
    correct: 0
  },

  {
    category: "🌿 ПРИРОДА",
    question: "Сколько континентов на Земле?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },


  /* =========================
     ИГРЫ
  ========================= */

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра содержит кубический мир и крафт?",
    answers: ["Minecraft", "FIFA", "Tetris", "Chess"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "В какой игре игроки строят фигуры из падающих блоков?",
    answers: ["Tetris", "Roblox", "Brawl Stars", "Fortnite"],
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
    question: "В какой игре есть персонаж Mario?",
    answers: ["Nintendo", "Minecraft", "Roblox", "Valorant"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игровая валюта в Brawl Stars?",
    answers: ["Монеты", "Гемы", "Робуксы", "В-баксы"],
    correct: 1
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра известна режимом Battle Royale?",
    answers: ["Fortnite", "Chess", "Tetris", "Solitaire"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется платформа с огромным количеством пользовательских игр?",
    answers: ["Roblox", "Excel", "Spotify", "Word"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какой жанр означает FPS?",
    answers: [
      "Шутер от первого лица",
      "Гонки",
      "Стратегия",
      "Симулятор"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Что обычно означает HP в игре?",
    answers: [
      "Здоровье",
      "Монеты",
      "Скорость",
      "Уровень"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Что такое NPC?",
    answers: [
      "Неигровой персонаж",
      "Игровая валюта",
      "Оружие",
      "Карта"
    ],
    correct: 0
  },


  /* =========================
     ТЕХНОЛОГИИ
  ========================= */

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
    question: "Какой язык используется для программирования логики веб-сайта?",
    answers: ["JavaScript", "HTML", "CSS", "PNG"],
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
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что хранит данные после выключения компьютера?",
    answers: [
      "SSD",
      "ОЗУ",
      "Процессор",
      "Кулер"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое GitHub?",
    answers: [
      "Платформа для хранения и совместной работы с кодом",
      "Игра",
      "Браузер",
      "Антивирус"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой файл обычно содержит HTML-код?",
    answers: [
      "index.html",
      "style.css",
      "script.js",
      "image.png"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой файл используется для CSS?",
    answers: [
      "style.css",
      "index.html",
      "script.js",
      "data.exe"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой файл обычно содержит JavaScript?",
    answers: [
      "script.js",
      "style.css",
      "index.html",
      "photo.jpg"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое браузер?",
    answers: [
      "Программа для просмотра сайтов",
      "Игровая приставка",
      "Процессор",
      "Клавиатура"
    ],
    correct: 0
  },


  /* =========================
     КИНО
  ========================= */

  {
    category: "🎬 КИНО",
    question: "Как называется волшебная школа в Гарри Поттере?",
    answers: ["Хогвартс", "Хогсмит", "Азкабан", "Нарния"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Кто живёт в ананасе под водой?",
    answers: ["Губка Боб", "Шрек", "Микки", "Симба"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут льва из мультфильма «Король Лев»?",
    answers: ["Симба", "Муфаса", "Шрам", "Тимон"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как называется ледяная принцесса из «Холодного сердца»?",
    answers: ["Анна", "Эльза", "Рапунцель", "Моана"],
    correct: 1
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут зелёного героя из DreamWorks?",
    answers: ["Шрек", "Халк", "Грут", "Йода"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "В каком фильме есть персонаж Джек Воробей?",
    answers: [
      "Пираты Карибского моря",
      "Титаник",
      "Матрица",
      "Аватар"
    ],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как называется страна супергероев Marvel?",
    answers: ["Marvel Universe", "Hogwarts", "Narnia", "Middle-earth"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут робота из WALL-E?",
    answers: ["WALL-E", "EVE", "R2-D2", "BB-8"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как зовут главного героя «Матрицы»?",
    answers: ["Нео", "Тони", "Питер", "Джек"],
    correct: 0
  },

  {
    category: "🎬 КИНО",
    question: "Как называется школа для юных мутантов в Людях Икс?",
    answers: [
      "Институт Ксавьера",
      "Хогвартс",
      "Академия Старка",
      "Щ.И.Т."
    ],
    correct: 0
  },


  /* =========================
     СПОРТ
  ========================= */

  {
    category: "⚽ СПОРТ",
    question: "Сколько игроков одной команды находится на поле в футболе?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько колец на олимпийском символе?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком виде спорта используется шайба?",
    answers: ["Футбол", "Хоккей", "Теннис", "Баскетбол"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько очков обычно дают за гол в футболе?",
    answers: ["1", "2", "3", "5"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Как называется площадка для тенниса?",
    answers: ["Корт", "Ринг", "Трек", "Поле"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком спорте используется кольцо и мяч?",
    answers: ["Баскетбол", "Хоккей", "Гольф", "Бокс"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Как называется начало шахматной партии?",
    answers: ["Дебют", "Финиш", "Тайм-аут", "Раунд"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько минут длится обычный футбольный матч без добавленного времени?",
    answers: ["60", "75", "90", "120"],
    correct: 2
  },

  {
    category: "⚽ СПОРТ",
    question: "Как называется спортивный удар ногой по мячу?",
    answers: ["Удар", "Подача", "Пас", "Все варианты"],
    correct: 3
  },

  {
    category: "⚽ СПОРТ",
    question: "Какой спорт связан с Формулой-1?",
    answers: ["Автоспорт", "Плавание", "Бокс", "Регби"],
    correct: 0
  },


  /* =========================
     ИСТОРИЯ
  ========================= */

  {
    category: "🏛️ ИСТОРИЯ",
    question: "В каком году человек впервые высадился на Луне?",
    answers: ["1965", "1969", "1972", "1975"],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывались викинги-мореплаватели?",
    answers: ["Норманны", "Самураи", "Рыцари", "Легионеры"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Где находились древние пирамиды Гизы?",
    answers: ["Египет", "Греция", "Италия", "Индия"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался знаменитый римский амфитеатр?",
    answers: ["Колизей", "Парфенон", "Кремль", "Акрополь"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто был первым человеком на Луне?",
    answers: [
      "Нил Армстронг",
      "Юрий Гагарин",
      "Базз Олдрин",
      "Илон Маск"
    ],
    correct: 0
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
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался воин Японии?",
    answers: ["Самурай", "Викинг", "Гладиатор", "Легионер"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Какой народ построил Колизей?",
    answers: ["Римляне", "Египтяне", "Викинги", "Майя"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался правитель Древнего Египта?",
    answers: ["Фараон", "Царь", "Султан", "Император"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывались древние египетские письмена?",
    answers: ["Иероглифы", "Кириллица", "Латынь", "Руны"],
    correct: 0
  },


  /* =========================
     МАТЕМАТИКА
  ========================= */

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 7 × 8?",
    answers: ["54", "56", "58", "64"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 100 ÷ 4?",
    answers: ["20", "25", "30", "40"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Продолжи: 2, 4, 8, 16, ?",
    answers: ["20", "24", "32", "36"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько градусов в полном круге?",
    answers: ["90°", "180°", "270°", "360°"],
    correct: 3
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 15 + 27?",
    answers: ["40", "41", "42", "43"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 9 × 9?",
    answers: ["72", "81", "90", "99"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Чему равен квадратный корень из 64?",
    answers: ["6", "7", "8", "9"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько сторон у пятиугольника?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 200 - 75?",
    answers: ["115", "120", "125", "130"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 12 × 12?",
    answers: ["124", "132", "144", "154"],
    correct: 2
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
   ПЕРЕМЕННЫЕ
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

let resultTimeout = null;


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

const rerollBtn =
  document.getElementById("rerollBtn");

const cancelHardBtn =
  document.getElementById("cancelHardBtn");


const toast =
  document.getElementById("toast");


/* =====================================================
   ПРОВЕРКА СЛОЖНОГО УРОВНЯ
===================================================== */

function isHardLevel() {

  return level % 5 === 0;

}


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

  menuLevel.textContent =
    level;

  menuCoins.textContent =
    coins;

  menuRecord.textContent =
    highScore;

  shopCoins.textContent =
    coins;

  coinsText.textContent =
    coins;

  scoreText.textContent =
    score;

  streakText.textContent =
    streak;

  levelNumber.textContent =
    level;


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
   ПЕРЕМЕШИВАНИЕ
===================================================== */

function shuffle(array) {

  const copy =
    [...array];

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
   НАЧАЛО
===================================================== */

function startGame() {

  score = 0;

  streak = 0;

  lives = 3;

  clearInterval(timer);

  result.classList.add("hidden");

  menu.classList.add("hidden");

  shop.classList.add("hidden");

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

  hardQuestionIndex = 0;

  currentQuestions = [];

  const randomQuestions =
    shuffle(questions);

  currentQuestion =
    randomQuestions[0];

  game.classList.remove("hidden");

  hardBadge.classList.add("hidden");

  progressBar.style.width =
    "100%";

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

  timerCircle.textContent =
    time;

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

      button.className =
        "answer";

      button.textContent =
        String.fromCharCode(
          65 + index
        )
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


      answers.appendChild(
        button
      );

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

          handleWrongAnswer();

        }

      },
      1000
    );

}


/* =====================================================
   ОТВЕТ
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
    document.querySelectorAll(
      ".answer"
    );


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
   ПРАВИЛЬНЫЙ ОТВЕТ
===================================================== */

function handleCorrectAnswer() {

  streak++;

  const multiplier =
    Math.min(
      streak,
      5
    );


  const gained =
    100 * multiplier;


  score +=
    gained;


  coins +=
    10 * multiplier;


  saveData();


  showToast(
    "🔥 Правильно! +" +
    gained +
    " очков"
  );


  if (isHardLevel()) {

    hardCorrect++;

    setTimeout(
      hardNextQuestion,
      5000
    );

  } else {

    setTimeout(
      finishNormalLevel,
      5000
    );

  }

}


/* =====================================================
   НЕПРАВИЛЬНЫЙ ОТВЕТ
===================================================== */

function handleWrongAnswer() {

  lives = 0;

  streak = 0;

  updateUI();


  if (isHardLevel()) {

    showToast(
      "❌ Ошибка! Сложный уровень провален."
    );


    setTimeout(
      hardFailed,
      5000
    );

  } else {

    showToast(
      "❌ Неправильно!"
    );


    setTimeout(
      finishNormalLevel,
      5000
    );

  }

}


/* =====================================================
   НОРМАЛЬНЫЙ УРОВЕНЬ ЗАКОНЧЕН
===================================================== */

function finishNormalLevel() {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");


  document.getElementById(
    "resultIcon"
  ).textContent =
    score > 0 ? "🎉" : "💪";


  document.getElementById(
    "resultTitle"
  ).textContent =
    "УРОВЕНЬ ПРОЙДЕН!";


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
    "1";


  document.getElementById(
    "finalLevel"
  ).textContent =
    level;


  if (score > highScore) {

    highScore =
      score;

    saveData();

  }


  startReturnCountdown(
    () => {

      level++;

      saveData();

      showMenu();

    }
  );

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

  categoryScreen.classList.remove(
    "hidden"
  );


  createCategoryChoices();

}


/* =====================================================
   3 СЛУЧАЙНЫЕ КАТЕГОРИИ
===================================================== */

function createCategoryChoices() {

  categoryChoices.innerHTML = "";


  const randomCategories =
    shuffle(
      categories
    ).slice(
      0,
      3
    );


  randomCategories.forEach(
    cat => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "category-btn";

      button.textContent =
        cat;


      button.addEventListener(
        "click",
        () => {

          chooseCategory(
            cat
          );

        }
      );


      categoryChoices.appendChild(
        button
      );

    }
  );

}


/* =====================================================
   ПЕРЕКРУТКА
===================================================== */

rerollBtn.addEventListener(
  "click",
  () => {

    if (coins < 70) {

      showToast(
        "❌ Нужно 70 монет!"
      );

      return;

    }


    coins -= 70;

    saveData();

    createCategoryChoices();


    showToast(
      "🔄 Категории изменены!"
    );

  }
);


/* =====================================================
   ВЫБОР КАТЕГОРИИ
===================================================== */

function chooseCategory(
  cat
) {

  selectedCategory =
    cat;


  const categoryQuestions =
    questions.filter(
      q =>
        q.category ===
        cat
    );


  currentQuestions =
    shuffle(
      categoryQuestions
    ).slice(
      0,
      3
    );


  hardQuestionIndex = 0;

  hardCorrect = 0;

  score = 0;

  lives = 3;

  streak = 0;


  categoryScreen.classList.add(
    "hidden"
  );

  game.classList.remove(
    "hidden"
  );


  hardBadge.classList.remove(
    "hidden"
  );


  progressBar.style.width =
    "33%";


  currentQuestion =
    currentQuestions[0];


  showHardQuestion();

}


/* =====================================================
   ВОПРОС СЛОЖНОГО УРОВНЯ
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
    selectedCategory;


  question.textContent =
    currentQuestion.question;


  answers.innerHTML = "";


  currentQuestion.answers.forEach(
    (answerText, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "answer";

      button.textContent =
        String.fromCharCode(
          65 + index
        )
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


      answers.appendChild(
        button
      );

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
   СЛЕДУЮЩИЙ ВОПРОС СЛОЖНОГО
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
   СЛОЖНЫЙ УРОВЕНЬ ПРОЙДЕН
===================================================== */

function hardCompleted() {

  clearInterval(timer);

  game.classList.add("hidden");

  result.classList.remove("hidden");


  const reward =
    Math.floor(
      Math.random() *
      (
        485 - 200 + 1
      )
    ) + 200;


  coins += reward;


  score += 500;


  if (score > highScore) {

    highScore =
      score;

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


  startReturnCountdown(
    () => {

      level++;

      saveData();

      showMenu();

    }
  );

}


/* =====================================================
   СЛОЖНЫЙ УРОВЕНЬ ПРОВАЛЕН
===================================================== */

function hardFailed() {

  clearInterval(timer);

  game.classList.add("hidden");

  categoryScreen.classList.remove(
    "hidden"
  );


  showToast(
    "🔄 Выбери новую категорию!"
  );


  createCategoryChoices();

}


/* =====================================================
   ОБРАТНЫЙ ОТСЧЁТ 5 СЕКУНД
===================================================== */

function startReturnCountdown(
  callback
) {

  let seconds = 5;


  const countdown =
    document.getElementById(
      "resultCountdown"
    );


  countdown.textContent =
    "Возврат в меню через " +
    seconds +
    "...";


  clearTimeout(
    resultTimeout
  );


  const interval =
    setInterval(
      () => {

        seconds--;


        if (
          seconds <= 0
        ) {

          clearInterval(
            interval
          );

          callback();

          return;

        }


        countdown.textContent =
          "Возврат в меню через " +
          seconds +
          "...";

      },
      1000
    );

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
        i !==
        currentQuestion.correct
        &&
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
        "🛒 Купи «Другой вопрос»!"
      );

      return;

    }


    inventory.other--;

    saveData();


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


    showQuestion();


    showToast(
      "🔄 Новый вопрос!"
    );

  }
);


/* =====================================================
   МАГАЗИН
===================================================== */

shopBtn.addEventListener(
  "click",
  () => {

    menu.classList.add(
      "hidden"
    );

    shop.classList.remove(
      "hidden"
    );

    updateUI();

  }
);


backBtn.addEventListener(
  "click",
  () => {

    shop.classList.add(
      "hidden"
    );

    menu.classList.remove(
      "hidden"
    );

  }
);


/* =====================================================
   ПОКУПКА 50/50
===================================================== */

document
  .getElementById(
    "buyFifty"
  )
  .addEventListener(
    "click",
    () => {

      const price = 100;


      if (
        coins <
        price
      ) {

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
  .getElementById(
    "buyTime"
  )
  .addEventListener(
    "click",
    () => {

      const price = 150;


      if (
        coins <
        price
      ) {

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
   ПОКУПКА ДРУГОГО ВОПРОСА
===================================================== */

document
  .getElementById(
    "buyOther"
  )
  .addEventListener(
    "click",
    () => {

      const price = 200;


      if (
        coins <
        price
      ) {

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
   КНОПКА ИГРАТЬ
===================================================== */

playBtn.addEventListener(
  "click",
  startGame
);


againBtn.addEventListener(
  "click",
  startGame
);


/* =====================================================
   МЕНЮ
===================================================== */

menuBtn.addEventListener(
  "click",
  () => {

    clearInterval(timer);

    showMenu();

  }
);


/* =====================================================
   ВЫЙТИ
===================================================== */

quitBtn.addEventListener(
  "click",
  () => {

    clearInterval(timer);

    showMenu();

  }
);


/* =====================================================
   ОТМЕНА СЛОЖНОГО
===================================================== */

cancelHardBtn.addEventListener(
  "click",
  () => {

    showMenu();

  }
);


/* =====================================================
   TOAST
===================================================== */

function showToast(
  text
) {

  toast.textContent =
    text;

  toast.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },
    1800
  );

}


/* =====================================================
   ЗАПУСК
===================================================== */

updateUI();

showMenu();
