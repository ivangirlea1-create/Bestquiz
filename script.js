/* =====================================================
   БИТВА ЗНАНИЙ — 100 ВОПРОСОВ
===================================================== */

const questions = [

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна самая большая по площади?",
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
    question: "Продолжи: 2, 4, 8, 16, ?",
    answers: ["20", "24", "32", "36"],
    correct: 2
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное самое быстрое на суше?",
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
    question: "Что означает RPG?",
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
    question: "Что притягивает предметы к Земле?",
    answers: [
      "Магнит",
      "Трение",
      "Гравитация",
      "Давление"
    ],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько градусов составляет полный круг?",
    answers: ["180°", "270°", "360°", "720°"],
    correct: 2
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Франции?",
    answers: ["Рим", "Париж", "Берлин", "Мадрид"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна имеет форму сапога?",
    answers: ["Италия", "Испания", "Греция", "Португалия"],
    correct: 0
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Германии?",
    answers: ["Вена", "Берлин", "Прага", "Бонн"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна известна Эйфелевой башней?",
    answers: ["Франция", "Италия", "Бельгия", "Швейцария"],
    correct: 0
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какой континент самый большой?",
    answers: ["Африка", "Европа", "Азия", "Австралия"],
    correct: 2
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Японии?",
    answers: ["Киото", "Токио", "Осака", "Хиросима"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая река самая длинная в Южной Америке?",
    answers: ["Амазонка", "Нил", "Дунай", "Волга"],
    correct: 0
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Великобритании?",
    answers: ["Лондон", "Манчестер", "Ливерпуль", "Оксфорд"],
    correct: 0
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какой океан находится между Африкой и Австралией?",
    answers: ["Тихий", "Индийский", "Атлантический", "Северный"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Испании?",
    answers: ["Барселона", "Мадрид", "Севилья", "Валенсия"],
    correct: 1
  },


  {
    category: "🔬 НАУКА",
    question: "Какой газ нужен человеку для дыхания?",
    answers: ["Кислород", "Азот", "Гелий", "Водород"],
    correct: 0
  },

  {
    category: "🔬 НАУКА",
    question: "Сколько ног у паука?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Какая планета ближе всего к Солнцу?",
    answers: ["Венера", "Земля", "Меркурий", "Марс"],
    correct: 2
  },

  {
    category: "🔬 НАУКА",
    question: "Какая планета известна своими кольцами?",
    answers: ["Марс", "Сатурн", "Венера", "Меркурий"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Сколько костей примерно у взрослого человека?",
    answers: ["106", "206", "306", "406"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Как называется наука о живых организмах?",
    answers: ["Биология", "Геология", "Астрономия", "Физика"],
    correct: 0
  },

  {
    category: "🔬 НАУКА",
    question: "Что изучает астрономия?",
    answers: [
      "Океаны",
      "Космос",
      "Животных",
      "Растения"
    ],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Какая температура замерзания воды?",
    answers: ["0°C", "10°C", "50°C", "100°C"],
    correct: 0
  },

  {
    category: "🔬 НАУКА",
    question: "Какой орган перекачивает кровь?",
    answers: ["Лёгкие", "Сердце", "Печень", "Желудок"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Какой металл обозначается символом Fe?",
    answers: ["Медь", "Железо", "Золото", "Серебро"],
    correct: 1
  },


  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто был первым президентом США?",
    answers: [
      "Авраам Линкольн",
      "Джордж Вашингтон",
      "Томас Джефферсон",
      "Джон Кеннеди"
    ],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "В каком году закончилась Вторая мировая война?",
    answers: ["1943", "1944", "1945", "1946"],
    correct: 2
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Где находились древние пирамиды Гизы?",
    answers: ["Египет", "Греция", "Италия", "Индия"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто построил Колизей?",
    answers: ["Римляне", "Викинги", "Египтяне", "Майя"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался корабль Титаник?",
    answers: [
      "Военный корабль",
      "Пассажирский лайнер",
      "Подводная лодка",
      "Самолёт"
    ],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто написал «Войну и мир»?",
    answers: [
      "Толстой",
      "Пушкин",
      "Чехов",
      "Гоголь"
    ],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто открыл Америку для европейцев в 1492 году?",
    answers: [
      "Христофор Колумб",
      "Марко Поло",
      "Васко да Гама",
      "Магеллан"
    ],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "В какой стране находился древний Рим?",
    answers: ["Италия", "Франция", "Испания", "Германия"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто был Наполеон?",
    answers: [
      "Французский император",
      "Учёный",
      "Художник",
      "Писатель"
    ],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывались воины древней Спарты?",
    answers: [
      "Самураи",
      "Спартанцы",
      "Гладиаторы",
      "Викинги"
    ],
    correct: 1
  },


  {
    category: "🧠 ЛОГИКА",
    question: "Продолжи: 5, 10, 15, 20, ?",
    answers: ["22", "25", "30", "35"],
    correct: 1
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Продолжи: 1, 3, 5, 7, ?",
    answers: ["8", "9", "10", "11"],
    correct: 1
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Что тяжелее: 1 кг железа или 1 кг пуха?",
    answers: [
      "Железо",
      "Пух",
      "Одинаково",
      "Зависит от размера"
    ],
    correct: 2
  },

  {
    category: "🧠 ЛОГИКА",
    question: "У тебя 3 яблока. Ты взял 2. Сколько у тебя?",
    answers: ["1", "2", "3", "5"],
    correct: 1
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Сколько месяцев имеют 28 дней?",
    answers: ["1", "2", "6", "12"],
    correct: 3
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Что всегда увеличивается и никогда не уменьшается?",
    answers: [
      "Возраст",
      "Температура",
      "Рост",
      "Скорость"
    ],
    correct: 0
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Если сегодня понедельник, какой день будет через 7 дней?",
    answers: [
      "Вторник",
      "Понедельник",
      "Воскресенье",
      "Среда"
    ],
    correct: 1
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Сколько сторон у треугольника?",
    answers: ["2", "3", "4", "5"],
    correct: 1
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Если 2 + 2 × 2, сколько получится?",
    answers: ["6", "8", "10", "4"],
    correct: 0
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Какое число пропущено: 10, 20, 30, ?, 50?",
    answers: ["35", "40", "45", "60"],
    correct: 1
  },


  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное говорит «мяу»?",
    answers: ["Собака", "Кошка", "Корова", "Лошадь"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное самое большое на планете?",
    answers: [
      "Слон",
      "Синий кит",
      "Жираф",
      "Кашалот"
    ],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Как называется детёныш собаки?",
    answers: ["Котёнок", "Щенок", "Теленок", "Жеребёнок"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное имеет длинную шею?",
    answers: ["Жираф", "Лев", "Медведь", "Тигр"],
    correct: 0
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное умеет менять цвет?",
    answers: ["Хамелеон", "Слон", "Лошадь", "Кролик"],
    correct: 0
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное известно как «царь зверей»?",
    answers: ["Тигр", "Лев", "Волк", "Медведь"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Сколько ног у насекомых?",
    answers: ["4", "6", "8", "10"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное живёт в Австралии и имеет сумку?",
    answers: ["Кенгуру", "Панда", "Лама", "Тигр"],
    correct: 0
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какая птица не умеет летать?",
    answers: ["Орёл", "Пингвин", "Ласточка", "Сокол"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное является родственником лошади?",
    answers: ["Зебра", "Лев", "Кошка", "Медведь"],
    correct: 0
  },


  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык используется для стилизации сайтов?",
    answers: ["HTML", "CSS", "Python", "SQL"],
    correct: 1
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык обычно используется для логики сайта в браузере?",
    answers: ["JavaScript", "CSS", "HTML", "XML"],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое CPU?",
    answers: [
      "Процессор",
      "Видеокарта",
      "Память",
      "Монитор"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает USB?",
    answers: [
      "Universal Serial Bus",
      "Ultra Speed Box",
      "Universal System Board",
      "User System Base"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Как называется устройство для отображения изображения?",
    answers: ["Монитор", "Мышь", "Клавиатура", "Роутер"],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что используется для хранения файлов?",
    answers: [
      "SSD",
      "Микрофон",
      "Монитор",
      "Колонка"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Как называется сеть, соединяющая устройства по всему миру?",
    answers: [
      "Интернет",
      "Bluetooth",
      "USB",
      "HDMI"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какая компания создала Android?",
    answers: [
      "Google",
      "Nintendo",
      "Sony",
      "Nokia"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое GitHub?",
    answers: [
      "Платформа для разработки и хранения кода",
      "Игра",
      "Браузер",
      "Антивирус"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Как называется программа для просмотра сайтов?",
    answers: [
      "Браузер",
      "Компилятор",
      "Архиватор",
      "Драйвер"
    ],
    correct: 0
  },


  {
    category: "🎮 ИГРЫ",
    question: "Какая компания создала Minecraft?",
    answers: ["Mojang", "Nintendo", "Valve", "Epic Games"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игровая платформа от Roblox?",
    answers: ["Roblox", "Steam", "Origin", "Epic"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какой персонаж является главным героем Minecraft?",
    answers: ["Стив", "Марио", "Соник", "Кратос"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игра с персонажем Марио?",
    answers: [
      "Super Mario",
      "Minecraft",
      "Fortnite",
      "Valorant"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра построена из блоков?",
    answers: [
      "Minecraft",
      "FIFA",
      "Rocket League",
      "Tetris"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какой жанр у игры FIFA?",
    answers: [
      "Футбольный симулятор",
      "Шутер",
      "Гонки",
      "RPG"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игровая валюта в Brawl Stars?",
    answers: [
      "Монеты",
      "Кристаллы",
      "Звёздные очки",
      "Все перечисленные"
    ],
    correct: 3
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра является королевской битвой?",
    answers: [
      "Fortnite",
      "Minecraft",
      "Tetris",
      "Chess"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игра с падающими фигурами?",
    answers: [
      "Tetris",
      "Roblox",
      "Minecraft",
      "Fortnite"
    ],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая игра создана компанией Valve?",
    answers: [
      "Counter-Strike",
      "Minecraft",
      "Roblox",
      "Brawl Stars"
    ],
    correct: 0
  },


  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 10 + 15?",
    answers: ["20", "25", "30", "35"],
    correct: 1
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 7 × 8?",
    answers: ["48", "54", "56", "64"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 100 ÷ 10?",
    answers: ["5", "10", "20", "25"],
    correct: 1
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 12 × 12?",
    answers: ["124", "132", "144", "154"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 50 - 17?",
    answers: ["23", "33", "37", "43"],
    correct: 1
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько минут в одном часе?",
    answers: ["30", "45", "60", "90"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько секунд в одной минуте?",
    answers: ["30", "45", "60", "100"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько будет 9²?",
    answers: ["18", "72", "81", "90"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Чему равен квадратный корень из 64?",
    answers: ["6", "7", "8", "9"],
    correct: 2
  },

  {
    category: "📐 МАТЕМАТИКА",
    question: "Сколько градусов в прямом угле?",
    answers: ["45°", "90°", "180°", "360°"],
    correct: 1
  },


  {
    category: "⚽ СПОРТ",
    question: "Сколько игроков одной футбольной команды находится на поле?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком спорте используется ракетка?",
    answers: ["Теннис", "Футбол", "Плавание", "Бокс"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько колец на олимпийском символе?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "Какой спорт называют «королём спорта»?",
    answers: ["Футбол", "Бокс", "Теннис", "Хоккей"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько периодов в хоккее?",
    answers: ["2", "3", "4", "5"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "Какой мяч используется в баскетболе?",
    answers: ["Овальный", "Круглый", "Квадратный", "Плоский"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком спорте есть термин «шах и мат»?",
    answers: ["Шахматы", "Футбол", "Теннис", "Бокс"],
    correct: 0
  },

  {
    category: "⚽ СПОРТ",
    question: "Сколько таймов в футбольном матче?",
    answers: ["1", "2", "3", "4"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "Как называется игрок, защищающий ворота?",
    answers: ["Нападающий", "Вратарь", "Судья", "Защитник"],
    correct: 1
  },

  {
    category: "⚽ СПОРТ",
    question: "В каком спорте используется шайба?",
    answers: ["Хоккей", "Футбол", "Баскетбол", "Теннис"],
    correct: 0
  },


  {
    category: "🎨 КУЛЬТУРА",
    question: "Кто написал «Гарри Поттера»?",
    answers: [
      "Дж. К. Роулинг",
      "Толкин",
      "Стивен Кинг",
      "Шекспир"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Кто написал «Властелина колец»?",
    answers: [
      "Толкин",
      "Роулинг",
      "Шекспир",
      "Диккенс"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Какой инструмент имеет клавиши?",
    answers: [
      "Пианино",
      "Скрипка",
      "Труба",
      "Барабан"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Кто написал «Ромео и Джульетту»?",
    answers: [
      "Шекспир",
      "Толстой",
      "Гомер",
      "Данте"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется искусство создания изображений красками?",
    answers: [
      "Живопись",
      "Музыка",
      "Театр",
      "Архитектура"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется человек, который пишет музыку?",
    answers: [
      "Композитор",
      "Архитектор",
      "Актёр",
      "Режиссёр"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется спектакль с пением и оркестром?",
    answers: [
      "Опера",
      "Комедия",
      "Балет",
      "Цирк"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется искусство танца под музыку?",
    answers: [
      "Хореография",
      "Археология",
      "География",
      "Физика"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется человек, снимающий фильмы?",
    answers: [
      "Режиссёр",
      "Повар",
      "Спортсмен",
      "Пилот"
    ],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется место, где показывают фильмы?",
    answers: [
      "Кинотеатр",
      "Библиотека",
      "Стадион",
      "Музей"
    ],
    correct: 0
  }

];


/* =====================================================
   ПРОВЕРКА
===================================================== */

console.log("Загружено вопросов:", questions.length);


/* =====================================================
   СОХРАНЕНИЕ
===================================================== */

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


/* =====================================================
   ПЕРЕМЕННЫЕ ИГРЫ
===================================================== */

let gameQuestions = [];

let currentQuestion = 0;

let score = 0;

let streak = 0;

let lives = 3;

let time = 15;

let timer = null;

let fiftyUsed = false;


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


/* =====================================================
   ПЕРЕМЕШИВАНИЕ
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
   ПЕРЕМЕШИВАНИЕ ОТВЕТОВ
===================================================== */

function shuffleAnswers(q) {

  const data =
    q.answers.map(
      (answer, index) => ({
        answer,
        correct:
          index === q.correct
      })
    );

  const shuffled =
    shuffle(data);

  return {
    answers:
      shuffled.map(
        item => item.answer
      ),

    correct:
      shuffled.findIndex(
        item => item.correct
      )
  };
}


/* =====================================================
   МАГАЗИН
===================================================== */

function updateShop() {

  shopCoins.textContent =
    coins;

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


/* =====================================================
   ОТКРЫТЬ МАГАЗИН
===================================================== */

shopBtn.addEventListener(
  "click",
  () => {

    menu.classList.add("hidden");

    shop.classList.remove("hidden");

    updateShop();
  }
);


/* =====================================================
   НАЗАД
===================================================== */

backBtn.addEventListener(
  "click",
  () => {

    shop.classList.add("hidden");

    menu.classList.remove("hidden");

    updateShop();
  }
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
   ПОКУПКА ВРЕМЕНИ
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
   ПОКУПКА ПРОПУСКА
===================================================== */

document
  .getElementById("buySkip")
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

      inventory.skip++;

      saveData();

      showToast(
        "⏭️ Куплен пропуск!"
      );
    }
  );


/* =====================================================
   НАЧАЛО ИГРЫ
===================================================== */

function startGame() {

  clearInterval(timer);

  currentQuestion = 0;

  score = 0;

  streak = 0;

  lives = 3;

  fiftyUsed = false;

  /*
     ВАЖНО:
     Все 100 вопросов перемешиваются.
  */

  gameQuestions =
    shuffle(questions);


  menu.classList.add("hidden");

  shop.classList.add("hidden");

  result.classList.add("hidden");

  game.classList.remove("hidden");

  updateStats();

  showQuestion();
}


/* =====================================================
   ПОКАЗ ВОПРОСА
===================================================== */

function showQuestion() {

  clearInterval(timer);

  if (
    currentQuestion >=
    gameQuestions.length
  ) {

    finishGame();

    return;
  }


  let q =
    gameQuestions[currentQuestion];


  /*
     Перемешиваем ответы.
  */

  const shuffled =
    shuffleAnswers(q);


  q = {
    category: q.category,

    question: q.question,

    answers: shuffled.answers,

    correct: shuffled.correct
  };


  /*
     Сохраняем перемешанный вопрос.
  */

  gameQuestions[currentQuestion] =
    q;


  questionNumber.textContent =
    currentQuestion + 1;


  progressBar.style.width =
    (
      currentQuestion /
      gameQuestions.length
    ) * 100 + "%";


  category.textContent =
    q.category;


  question.textContent =
    q.question;


  answers.innerHTML = "";


  q.answers.forEach(
    (answer, index) => {

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
        + answer;


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


  fiftyUsed = false;

  updateStats();

  startTimer();
}


/* =====================================================
   ТАЙМЕР
===================================================== */

function startTimer() {

  clearInterval(timer);

  time = 15;

  timerCircle.textContent =
    time;

  timerCircle.style.borderColor =
    "#5e7cff";


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

          wrongAnswer();
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

  clearInterval(timer);

  const q =
    gameQuestions[currentQuestion];


  const allButtons =
    document.querySelectorAll(
      ".answer"
    );


  allButtons.forEach(
    button => {

      button.disabled = true;

    }
  );


  if (
    index === q.correct
  ) {

    selectedButton
      .classList
      .add("correct");


    streak++;


    const multiplier =
      Math.min(
        streak,
        5
      );


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
      700
    );

  } else {

    selectedButton
      .classList
      .add("wrong");


    allButtons[
      q.correct
    ]
      .classList
      .add("correct");


    lives--;

    streak = 0;


    updateStats();


    if (
      lives <= 0
    ) {

      setTimeout(
        finishGame,
        800
      );

    } else {

      showToast(
        "❌ Неправильно!"
      );


      setTimeout(
        nextQuestion,
        800
      );
    }
  }
}


/* =====================================================
   ВРЕМЯ ВЫШЛО
===================================================== */

function wrongAnswer() {

  const q =
    gameQuestions[currentQuestion];


  const allButtons =
    document.querySelectorAll(
      ".answer"
    );


  allButtons.forEach(
    button => {

      button.disabled = true;

    }
  );


  allButtons[
    q.correct
  ]
    .classList
    .add("correct");


  lives--;

  streak = 0;


  updateStats();


  if (
    lives <= 0
  ) {

    setTimeout(
      finishGame,
      800
    );

  } else {

    showToast(
      "⏰ Время вышло!"
    );


    setTimeout(
      nextQuestion,
      800
    );
  }
}


/* =====================================================
   СЛЕДУЮЩИЙ
===================================================== */

function nextQuestion() {

  currentQuestion++;

  showQuestion();
}


/* =====================================================
   50/50
===================================================== */

fiftyBtn.addEventListener(
  "click",
  () => {

    if (fiftyUsed)
      return;


    if (
      inventory.fifty <= 0
    ) {

      showToast(
        "🛒 Купи 50/50 в магазине!"
      );

      return;
    }


    const q =
      gameQuestions[currentQuestion];


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
          .visibility =
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


    updateStats();
  }
);


/* =====================================================
   +10 СЕКУНД
===================================================== */

timeBtn.addEventListener(
  "click",
  () => {

    if (
      inventory.time <= 0
    ) {

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


/* =====================================================
   ПРОПУСК
===================================================== */

skipBtn.addEventListener(
  "click",
  () => {

    if (
      inventory.skip <= 0
    ) {

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
      400
    );
  }
);


/* =====================================================
   СТАТИСТИКА
===================================================== */

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
    "🖤".repeat(
      3 - lives
    );


  fiftyGameCount.textContent =
    inventory.fifty;

  timeGameCount.textContent =
    inventory.time;

  skipGameCount.textContent =
    inventory.skip;
}


/* =====================================================
   КОНЕЦ ИГРЫ
===================================================== */

function finishGame() {

  clearInterval(timer);


  game.classList.add(
    "hidden"
  );


  result.classList.remove(
    "hidden"
  );


  document
    .getElementById(
      "finalScore"
    )
    .textContent =
    score;


  document
    .getElementById(
      "finalCoins"
    )
    .textContent =
    coins;


  document
    .getElementById(
      "finalStreak"
    )
    .textContent =
    streak;


  /*
     Считаем правильные ответы
     отдельно, а не через score,
     потому что множитель серии
     меняет количество очков.
  */

  const correct =
    gameQuestions
      .slice(
        0,
        currentQuestion
      )
      .length;


  document
    .getElementById(
      "correctAnswers"
    )
    .textContent =
    Math.min(
      correct,
      100
    );


  const recordMessage =
    document.getElementById(
      "recordMessage"
    );


  if (
    score > highScore
  ) {

    highScore = score;

    saveData();


    recordMessage
      .classList
      .remove("hidden");


    document
      .getElementById(
        "resultIcon"
      )
      .textContent =
      "👑";


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


    if (
      currentQuestion >= 100
    ) {

      document
        .getElementById(
          "resultIcon"
        )
        .textContent =
        "🏆";


      document
        .getElementById(
          "resultTitle"
        )
        .textContent =
        "100/100! ТЫ ЛЕГЕНДА!";

    } else if (
      score >= 700
    ) {

      document
        .getElementById(
          "resultIcon"
        )
        .textContent =
        "🔥";


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
        .textContent =
        "💪";


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


/* =====================================================
   TOAST
===================================================== */

function showToast(text) {

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
    1600
  );
}


/* =====================================================
   КНОПКИ
===================================================== */

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


/* =====================================================
   ЗАПУСК
===================================================== */

updateShop();
