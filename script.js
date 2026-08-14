// ===============================
// КВИЗИ — SCRIPT.JS
// ===============================

let level = 1;
let money = 0;
let currentQuestion = null;
let answered = false;
let menuTimer = null;

// ===============================
// ВОПРОСЫ
// ===============================

const questions = [
    {
        category: "nature",
        question: "Какая планета известна как Красная планета?",
        answers: ["Марс", "Венера", "Юпитер", "Сатурн"],
        correct: 0
    },
    {
        category: "games",
        question: "Какая компания создала Minecraft?",
        answers: ["Nintendo", "Mojang", "Roblox", "Valve"],
        correct: 1
    },
    {
        category: "technology",
        question: "Что означает HTML?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Tool Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        category: "cinema",
        question: "Как называется волшебная школа в Гарри Поттере?",
        answers: ["Хогвартс", "Хогсмид", "Азкабан", "Нарния"],
        correct: 0
    },
    {
        category: "sport",
        question: "Сколько игроков одной команды находится на поле в футболе?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        category: "history",
        question: "Кто был первым человеком на Луне?",
        answers: [
            "Юрий Гагарин",
            "Нил Армстронг",
            "Илон Маск",
            "Альберт Эйнштейн"
        ],
        correct: 1
    },
    {
        category: "math",
        question: "Сколько будет 12 × 8?",
        answers: ["86", "96", "108", "88"],
        correct: 1
    },
    {
        category: "nature",
        question: "Какое самое большое животное на Земле?",
        answers: ["Слон", "Жираф", "Синий кит", "Кашалот"],
        correct: 2
    },
    {
        category: "games",
        question: "В какой игре есть режим Battle Royale?",
        answers: ["Fortnite", "Minecraft", "Tetris", "Pac-Man"],
        correct: 0
    },
    {
        category: "technology",
        question: "Что используется для хранения файлов?",
        answers: ["SSD", "Монитор", "Мышь", "Клавиатура"],
        correct: 0
    },
    {
        category: "cinema",
        question: "Как зовут главного героя фильма «Человек-паук»?",
        answers: [
            "Питер Паркер",
            "Тони Старк",
            "Стив Роджерс",
            "Брюс Уэйн"
        ],
        correct: 0
    },
    {
        category: "sport",
        question: "В каком виде спорта используется шайба?",
        answers: ["Футбол", "Хоккей", "Теннис", "Баскетбол"],
        correct: 1
    }
];

// ===============================
// ЭЛЕМЕНТЫ
// ===============================

const questionElement =
    document.getElementById("question") ||
    document.querySelector(".question");

const answersElement =
    document.getElementById("answers") ||
    document.querySelector(".answers");

const resultElement =
    document.getElementById("result") ||
    document.querySelector(".result");

const levelElement =
    document.getElementById("level") ||
    document.querySelector(".level");

const moneyElement =
    document.getElementById("money") ||
    document.querySelector(".money");

const gameElement =
    document.getElementById("game") ||
    document.querySelector(".game");

const menuElement =
    document.getElementById("menu") ||
    document.querySelector(".menu");

// ===============================
// ПОКАЗ ДЕНЕГ
// ===============================

function updateMoney() {
    if (moneyElement) {
        moneyElement.textContent = money + " 💰";
    }
}

// ===============================
// ПОКАЗ УРОВНЯ
// ===============================

function updateLevel() {
    if (levelElement) {
        levelElement.textContent = "Уровень: " + level;
    }
}

// ===============================
// ПОЛУЧИТЬ СЛУЧАЙНЫЙ ВОПРОС
// ===============================

function getRandomQuestion() {
    return questions[
        Math.floor(Math.random() * questions.length)
    ];
}

// ===============================
// НАЧАТЬ УРОВЕНЬ
// ===============================

function startLevel() {
    answered = false;

    updateLevel();
    updateMoney();

    if (resultElement) {
        resultElement.innerHTML = "";
        resultElement.style.display = "none";
    }

    if (answersElement) {
        answersElement.innerHTML = "";
    }

    currentQuestion = getRandomQuestion();

    showQuestion();
}

// ===============================
// ПОКАЗАТЬ ВОПРОС
// ===============================

function showQuestion() {
    if (!questionElement || !answersElement) return;

    questionElement.textContent = currentQuestion.question;

    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.addEventListener("click", function () {
            answerQuestion(index);
        });

        answersElement.appendChild(button);
    });
}

// ===============================
// ОТВЕТ
// ===============================

function answerQuestion(index) {
    if (answered) return;

    answered = true;

    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const correct = index === currentQuestion.correct;

    if (correct) {
        money += 50;

        showResult(
            "🎉 ПРАВИЛЬНО!",
            true
        );
    } else {
        showResult(
            "❌ НЕПРАВИЛЬНО!",
            false
        );
    }

    updateMoney();

    // Через 2 секунды показываем выбор
    setTimeout(() => {
        showNextMenu();
    }, 2000);
}

// ===============================
// РЕЗУЛЬТАТ
// ===============================

function showResult(text, correct) {
    if (!resultElement) return;

    resultElement.style.display = "block";

    resultElement.innerHTML = `
        <div class="result-text ${correct ? "correct" : "wrong"}">
            ${text}
        </div>
    `;
}

// ===============================
// КНОПКИ «ДАЛЬШЕ» / «В МЕНЮ»
// ===============================

function showNextMenu() {
    if (!resultElement) return;

    resultElement.innerHTML += `
        <div class="next-buttons">
            <button id="nextQuestionBtn">
                ➡️ Дальше
            </button>

            <button id="backMenuBtn">
                🏠 В меню
            </button>
        </div>
    `;

    const nextButton =
        document.getElementById("nextQuestionBtn");

    const menuButton =
        document.getElementById("backMenuBtn");

    nextButton.addEventListener("click", () => {
        nextLevel();
    });

    menuButton.addEventListener("click", () => {
        goToMenuAfter5Seconds();
    });
}

// ===============================
// ДАЛЬШЕ
// ===============================

function nextLevel() {
    level++;

    if (level % 5 === 0) {
        startHardLevel();
    } else {
        startLevel();
    }
}

// ===============================
// СЛОЖНЫЙ УРОВЕНЬ
// КАЖДЫЙ 5-Й УРОВЕНЬ
// ===============================

let hardQuestions = [];
let hardQuestionIndex = 0;
let hardCorrectAnswers = 0;

function startHardLevel() {
    hardQuestions = [];

    while (hardQuestions.length < 3) {
        const q = getRandomQuestion();

        if (!hardQuestions.includes(q)) {
            hardQuestions.push(q);
        }
    }

    hardQuestionIndex = 0;
    hardCorrectAnswers = 0;

    showHardQuestion();
}

// ===============================
// ПОКАЗ СЛОЖНОГО ВОПРОСА
// ===============================

function showHardQuestion() {
    answered = false;

    currentQuestion = hardQuestions[hardQuestionIndex];

    if (resultElement) {
        resultElement.style.display = "none";
        resultElement.innerHTML = "";
    }

    if (questionElement) {
        questionElement.innerHTML = `
            🔥 СЛОЖНЫЙ УРОВЕНЬ<br>
            Вопрос ${hardQuestionIndex + 1}/3<br><br>
            ${currentQuestion.question}
        `;
    }

    if (!answersElement) return;

    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.addEventListener("click", () => {
            answerHardQuestion(index);
        });

        answersElement.appendChild(button);
    });
}

// ===============================
// ОТВЕТ НА СЛОЖНЫЙ ВОПРОС
// ===============================

function answerHardQuestion(index) {
    if (answered) return;

    answered = true;

    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const correct =
        index === currentQuestion.correct;

    if (correct) {
        hardCorrectAnswers++;

        showResult(
            "🔥 ПРАВИЛЬНО!",
            true
        );
    } else {
        showResult(
            "❌ НЕПРАВИЛЬНО!",
            false
        );
    }

    updateMoney();

    // Через 2 секунды показываем кнопки
    setTimeout(() => {
        showHardNextButtons();
    }, 2000);
}

// ===============================
// КНОПКИ СЛОЖНОГО УРОВНЯ
// ===============================

function showHardNextButtons() {
    if (!resultElement) return;

    if (hardQuestionIndex < 2) {

        resultElement.innerHTML += `
            <div class="next-buttons">

                <button id="hardNextBtn">
                    ➡️ Дальше
                </button>

                <button id="hardMenuBtn">
                    🏠 В меню
                </button>

            </div>
        `;

        document
            .getElementById("hardNextBtn")
            .addEventListener("click", () => {

                hardQuestionIndex++;

                showHardQuestion();
            });

        document
            .getElementById("hardMenuBtn")
            .addEventListener("click", () => {

                goToMenuAfter5Seconds();
            });

    } else {

        let reward = Math.floor(
            Math.random() * (485 - 200 + 1)
        ) + 200;

        money += reward;

        updateMoney();

        resultElement.innerHTML += `
            <div class="hard-finish">
                <h2>🔥 Сложный уровень завершён!</h2>

                <p>
                    Правильных ответов:
                    ${hardCorrectAnswers}/3
                </p>

                <p>
                    💰 Награда: +${reward}
                </p>

                <div class="next-buttons">

                    <button id="hardFinishBtn">
                        ➡️ Дальше
                    </button>

                    <button id="hardFinishMenuBtn">
                        🏠 В меню
                    </button>

                </div>
            </div>
        `;

        document
            .getElementById("hardFinishBtn")
            .addEventListener("click", () => {

                level++;
                startLevel();
            });

        document
            .getElementById("hardFinishMenuBtn")
            .addEventListener("click", () => {

                goToMenuAfter5Seconds();
            });
    }
}

// ===============================
// В МЕНЮ ЧЕРЕЗ 5 СЕКУНД
// ===============================

function goToMenuAfter5Seconds() {

    if (menuTimer) {
        clearInterval(menuTimer);
    }

    let seconds = 5;

    if (resultElement) {
        resultElement.innerHTML = `
            <div class="menu-countdown">
                🏠 Возвращение в меню через
                <strong>${seconds}</strong> сек.
            </div>
        `;
    }

    menuTimer = setInterval(() => {

        seconds--;

        if (resultElement) {
            resultElement.innerHTML = `
                <div class="menu-countdown">
                    🏠 Возвращение в меню через
                    <strong>${seconds}</strong> сек.
                </div>
            `;
        }

        if (seconds <= 0) {

            clearInterval(menuTimer);
            menuTimer = null;

            openMenu();
        }

    }, 1000);
}

// ===============================
// ОТКРЫТЬ МЕНЮ
// ===============================

function openMenu() {

    if (gameElement) {
        gameElement.style.display = "none";
    }

    if (menuElement) {
        menuElement.style.display = "block";
    }

    if (resultElement) {
        resultElement.innerHTML = "";
    }
}

// ===============================
// НАЧАТЬ ИГРУ ИЗ МЕНЮ
// ===============================

function startGame() {

    if (menuElement) {
        menuElement.style.display = "none";
    }

    if (gameElement) {
        gameElement.style.display = "block";
    }

    level = 1;

    updateMoney();
    updateLevel();

    startLevel();
}

// ===============================
// КНОПКИ START
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const startButton =
        document.getElementById("startButton") ||
        document.getElementById("startGame");

    if (startButton) {
        startButton.addEventListener("click", startGame);
    }

    updateMoney();
    updateLevel();
});
