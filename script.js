/* =====================================================
   БИТВА ЗНАНИЙ
   100 вопросов
   БЕСКОНЕЧНЫЕ УРОВНИ
   10 вопросов = 1 уровень
===================================================== */


/* =====================================================
   100 ВОПРОСОВ
===================================================== */

const questions = [

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна самая большая по площади?",
    answers: ["Канада", "Россия", "Китай", "США"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Франции?",
    answers: ["Лондон", "Берлин", "Париж", "Рим"],
    correct: 2
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какой океан самый большой?",
    answers: ["Атлантический", "Индийский", "Тихий", "Северный Ледовитый"],
    correct: 2
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Германии?",
    answers: ["Берлин", "Мюнхен", "Гамбург", "Кёльн"],
    correct: 0
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "На каком материке находится Египет?",
    answers: ["Европа", "Африка", "Азия", "Америка"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая страна имеет форму сапога?",
    answers: ["Испания", "Италия", "Греция", "Португалия"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Японии?",
    answers: ["Киото", "Осака", "Токио", "Хиросима"],
    correct: 2
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая река самая длинная в мире по традиционному школьному ответу?",
    answers: ["Амазонка", "Нил", "Волга", "Дунай"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Столица Италии?",
    answers: ["Милан", "Рим", "Венеция", "Неаполь"],
    correct: 1
  },

  {
    category: "🌍 ГЕОГРАФИЯ",
    question: "Какая пустыня крупнейшая жаркая пустыня?",
    answers: ["Гоби", "Сахара", "Калахари", "Атакама"],
    correct: 1
  },


  {
    category: "🔬 НАУКА",
    question: "Сколько планет в Солнечной системе?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Какой газ нужен человеку для дыхания?",
    answers: ["Азот", "Кислород", "Водород", "Гелий"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Сколько ног у паука?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Как называется замерзшая вода?",
    answers: ["Пар", "Лёд", "Туман", "Роса"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Какой орган перекачивает кровь?",
    answers: ["Лёгкие", "Сердце", "Печень", "Мозг"],
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
    question: "Какой металл жидкий при комнатной температуре?",
    answers: ["Железо", "Медь", "Ртуть", "Золото"],
    correct: 2
  },

  {
    category: "🔬 НАУКА",
    question: "Что изучает астрономия?",
    answers: ["Океаны", "Космос", "Животных", "Языки"],
    correct: 1
  },

  {
    category: "🔬 НАУКА",
    question: "Как называется наука о живых организмах?",
    answers: ["Биология", "Геология", "Физика", "Химия"],
    correct: 0
  },

  {
    category: "🔬 НАУКА",
    question: "При какой температуре вода замерзает по шкале Цельсия?",
    answers: ["0°C", "10°C", "50°C", "100°C"],
    correct: 0
  },


  {
    category: "🧠 ЛОГИКА",
    question: "Продолжи: 2, 4, 8, 16, ?",
    answers: ["20", "24", "32", "36"],
    correct: 2
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Что лишнее: яблоко, банан, морковь, апельсин?",
    answers: ["Яблоко", "Банан", "Морковь", "Апельсин"],
    correct: 2
  },

  {
    category: "🧠 ЛОГИКА",
    question: "5 + 5 × 2 = ?",
    answers: ["20", "15", "25", "10"],
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
    question: "У тебя 3 яблока. Ты взял 1. Сколько у тебя?",
    answers: ["1", "2", "3", "0"],
    correct: 0
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Какое число пропущено: 10, 20, 30, ?, 50?",
    answers: ["35", "40", "45", "60"],
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
    question: "Что тяжелее: 1 кг железа или 1 кг перьев?",
    answers: ["Железо", "Перья", "Одинаково", "Зависит от размера"],
    correct: 2
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Если сегодня понедельник, какой день будет через 3 дня?",
    answers: ["Вторник", "Среда", "Четверг", "Пятница"],
    correct: 2
  },

  {
    category: "🧠 ЛОГИКА",
    question: "Сколько будет 100 ÷ 10?",
    answers: ["5", "10", "20", "100"],
    correct: 1
  },


  {
    category: "🏛️ ИСТОРИЯ",
    question: "В каком году человек впервые высадился на Луне?",
    answers: ["1965", "1969", "1972", "1975"],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто был первым президентом США?",
    answers: ["Авраам Линкольн", "Джордж Вашингтон", "Томас Джефферсон", "Джон Кеннеди"],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался корабль Титаник?",
    answers: ["Titanic", "Britannia", "Olympic", "Atlantic"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто построил пирамиды в Древнем Египте?",
    answers: ["Римляне", "Египтяне", "Викинги", "Греки"],
    correct: 1
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Какой город был столицей Римской империи?",
    answers: ["Рим", "Париж", "Берлин", "Афины"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто написал «Ромео и Джульетту»?",
    answers: ["Шекспир", "Толстой", "Гёте", "Диккенс"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Как назывался период рыцарей и замков?",
    answers: ["Средневековье", "Античность", "Будущее", "Каменный век"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто был известным завоевателем Македонии?",
    answers: ["Александр Македонский", "Цезарь", "Наполеон", "Колумб"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Кто открыл Америку для европейцев в 1492 году?",
    answers: ["Христофор Колумб", "Марко Поло", "Магеллан", "Ньютон"],
    correct: 0
  },

  {
    category: "🏛️ ИСТОРИЯ",
    question: "Где находились древние Олимпийские игры?",
    answers: ["Рим", "Олимпия", "Париж", "Лондон"],
    correct: 1
  },


  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное самое быстрое на суше?",
    answers: ["Лев", "Гепард", "Лошадь", "Волк"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное называют царём зверей?",
    answers: ["Тигр", "Лев", "Медведь", "Слон"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Сколько ног у осьминога?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное самое крупное на планете?",
    answers: ["Слон", "Синий кит", "Жираф", "Касатка"],
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
    question: "Какая птица не умеет летать?",
    answers: ["Орёл", "Пингвин", "Ласточка", "Сокол"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное имеет хобот?",
    answers: ["Слон", "Носорог", "Бегемот", "Жираф"],
    correct: 0
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное известно своей чёрно-белой окраской?",
    answers: ["Панда", "Лев", "Верблюд", "Волк"],
    correct: 0
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Как называется детёныш кошки?",
    answers: ["Щенок", "Котёнок", "Теленок", "Цыплёнок"],
    correct: 1
  },

  {
    category: "🐾 ЖИВОТНЫЕ",
    question: "Какое животное живёт в Австралии и носит детёныша в сумке?",
    answers: ["Кенгуру", "Тигр", "Панда", "Лось"],
    correct: 0
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
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык используется для стилизации сайтов?",
    answers: ["HTML", "CSS", "Python", "SQL"],
    correct: 1
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык используется для программирования логики сайта?",
    answers: ["CSS", "HTML", "JavaScript", "Photoshop"],
    correct: 2
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает CPU?",
    answers: [
      "Центральный процессор",
      "Компьютерная память",
      "Видеокарта",
      "Жёсткий диск"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что хранит файл .css?",
    answers: [
      "Стили",
      "Музыку",
      "Видео",
      "Пароли"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой язык популярен для разработки игр?",
    answers: ["C#", "HTML", "CSS", "SQL"],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое GitHub?",
    answers: [
      "Платформа для хранения и совместной работы с кодом",
      "Игра",
      "Браузер",
      "Операционная система"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что означает URL?",
    answers: [
      "Адрес ресурса в интернете",
      "Тип процессора",
      "Название игры",
      "Вид файла"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Какой файл обычно является главной страницей сайта?",
    answers: [
      "index.html",
      "main.exe",
      "game.css",
      "start.png"
    ],
    correct: 0
  },

  {
    category: "💻 ТЕХНОЛОГИИ",
    question: "Что такое браузер?",
    answers: [
      "Программа для просмотра сайтов",
      "Игровая консоль",
      "Процессор",
      "Видеокарта"
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
    category: "⚡ ФИЗИКА",
    question: "Скорость света примерно равна:",
    answers: [
      "300 км/с",
      "300 000 км/с",
      "30 км/с",
      "3 000 км/с"
    ],
    correct: 1
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Что измеряется в килограммах?",
    answers: ["Масса", "Скорость", "Время", "Температура"],
    correct: 0
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Что измеряется в градусах Цельсия?",
    answers: ["Масса", "Температура", "Расстояние", "Сила"],
    correct: 1
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Какая сила мешает движению предмета по поверхности?",
    answers: ["Гравитация", "Трение", "Свет", "Давление"],
    correct: 1
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Что происходит с телом при падении на Землю?",
    answers: [
      "Оно ускоряется вниз",
      "Оно исчезает",
      "Оно становится легче",
      "Оно летит вверх"
    ],
    correct: 0
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Какая единица измерения времени?",
    answers: ["Метр", "Секунда", "Килограмм", "Ньютон"],
    correct: 1
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Что является источником света?",
    answers: ["Солнце", "Камень", "Вода", "Лёд"],
    correct: 0
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Как называется прибор для измерения температуры?",
    answers: ["Барометр", "Термометр", "Компас", "Секундомер"],
    correct: 1
  },

  {
    category: "⚡ ФИЗИКА",
    question: "Что быстрее распространяется: свет или звук?",
    answers: ["Свет", "Звук", "Они одинаковы", "Зависит от цвета"],
    correct: 0
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
    category: "🎮 ИГРЫ",
    question: "Как называется игра от Mojang с кубическим миром?",
    answers: ["Roblox", "Minecraft", "Fortnite", "Terraria"],
    correct: 1
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игровая валюта Brawl Stars?",
    answers: ["Гемы", "Робуксы", "В-баксы", "Монеты Minecraft"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какая компания создала Roblox?",
    answers: ["Roblox Corporation", "Nintendo", "Valve", "Sony"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется главный герой Super Mario?",
    answers: ["Mario", "Link", "Sonic", "Pikachu"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Какой персонаж является синим ёжиком?",
    answers: ["Mario", "Sonic", "Kirby", "Pikachu"],
    correct: 1
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется популярная игра с падающими блоками?",
    answers: ["Tetris", "FIFA", "Minecraft", "Roblox"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Как называется игровой режим, где нужно победить всех игроков?",
    answers: ["Battle Royale", "Creative", "Story", "Training"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Что обычно означает HP в играх?",
    answers: ["Здоровье", "Скорость", "Монеты", "Уровень"],
    correct: 0
  },

  {
    category: "🎮 ИГРЫ",
    question: "Что обычно означает XP?",
    answers: ["Опыт", "Золото", "Жизни", "Оружие"],
    correct: 0
  },


  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько градусов составляет полный круг?",
    answers: ["180°", "270°", "360°", "720°"],
    correct: 2
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько дней в обычном году?",
    answers: ["300", "365", "366", "400"],
    correct: 1
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько часов в сутках?",
    answers: ["12", "24", "48", "60"],
    correct: 1
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько минут в одном часе?",
    answers: ["30", "50", "60", "100"],
    correct: 2
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько сторон у квадрата?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько цветов обычно в радуге?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Какой язык является основным в Бразилии?",
    answers: ["Испанский", "Португальский", "Английский", "Французский"],
    correct: 1
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Какой самый распространённый металл в земной коре?",
    answers: ["Железо", "Алюминий", "Золото", "Серебро"],
    correct: 1
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Сколько букв в русском алфавите?",
    answers: ["31", "32", "33", "34"],
    correct: 2
  },

  {
    category: "📚 ОБЩИЕ ЗНАНИЯ",
    question: "Какой символ используется для обозначения процента?",
    answers: ["#", "%", "&", "@"],
    correct: 1
  },


  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 7 × 8?",
    answers: ["54", "56", "58", "64"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 100 - 37?",
    answers: ["53", "63", "73", "67"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 12 × 12?",
    answers: ["124", "144", "154", "164"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 81 ÷ 9?",
    answers: ["7", "8", "9", "10"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 15 + 27?",
    answers: ["40", "42", "44", "52"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 9²?",
    answers: ["18", "72", "81", "99"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Половина от 100?",
    answers: ["25", "40", "50", "75"],
    correct: 2
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 6 × 7?",
    answers: ["36", "42", "48", "56"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 200 ÷ 20?",
    answers: ["5", "10", "20", "40"],
    correct: 1
  },

  {
    category: "➗ МАТЕМАТИКА",
    question: "Сколько будет 45 + 55?",
    answers: ["90", "95", "100", "110"],
    correct: 2
  },


  {
    category: "🌊 ПРИРОДА",
    question: "Какой океан самый глубокий?",
    answers: ["Тихий", "Атлантический", "Индийский", "Северный Ледовитый"],
    correct: 0
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Как называется вода в газообразном состоянии?",
    answers: ["Лёд", "Пар", "Снег", "Роса"],
    correct: 1
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Какое дерево известно своими жёлудями?",
    answers: ["Берёза", "Дуб", "Сосна", "Ель"],
    correct: 1
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Что выделяют растения во время фотосинтеза?",
    answers: ["Кислород", "Железо", "Соль", "Песок"],
    correct: 0
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Как называется спутник Земли?",
    answers: ["Марс", "Луна", "Солнце", "Венера"],
    correct: 1
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Какая планета известна своими кольцами?",
    answers: ["Марс", "Сатурн", "Меркурий", "Земля"],
    correct: 1
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Какая планета ближе всего к Солнцу?",
    answers: ["Земля", "Венера", "Меркурий", "Марс"],
    correct: 2
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Как называется процесс превращения воды в пар?",
    answers: ["Замерзание", "Испарение", "Плавление", "Конденсация"],
    correct: 1
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Какое время года идёт после зимы?",
    answers: ["Лето", "Осень", "Весна", "Зима"],
    correct: 2
  },

  {
    category: "🌊 ПРИРОДА",
    question: "Какое время года обычно самое жаркое?",
    answers: ["Весна", "Лето", "Осень", "Зима"],
    correct: 1
  },


  {
    category: "🎨 КУЛЬТУРА",
    question: "Сколько струн у обычной гитары?",
    answers: ["4", "5", "6", "7"],
    correct: 2
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется человек, который рисует картины?",
    answers: ["Художник", "Повар", "Архитектор", "Пилот"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется искусство создания музыки?",
    answers: ["Музыка", "География", "Математика", "Физика"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется большой театр с местами для зрителей?",
    answers: ["Театр", "Гараж", "Склад", "Магазин"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Кто написал «Войну и мир»?",
    answers: ["Лев Толстой", "Пушкин", "Гоголь", "Достоевский"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Кто написал «Евгения Онегина»?",
    answers: ["Пушкин", "Толстой", "Чехов", "Тургенев"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется японское искусство складывания бумаги?",
    answers: ["Оригами", "Каллиграфия", "Кимоно", "Манга"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется книга с картами?",
    answers: ["Атлас", "Роман", "Словарь", "Комикс"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется человек, который пишет книги?",
    answers: ["Писатель", "Инженер", "Врач", "Спортсмен"],
    correct: 0
  },

  {
    category: "🎨 КУЛЬТУРА",
    question: "Как называется произведение для большого музыкального коллектива?",
    answers: ["Симфония", "Рецепт", "Роман", "Картина"],
    correct: 0
  }

];


/* =====================================================
   СОХРАНЕНИЕ
===================================================== */

let highScore =
  Number(localStorage.getItem("quizHighScore")) || 0;

let coins =
  Number(localStorage.getItem("quizCoins")) || 0;

let bestLevel =
  Number(localStorage.getItem("quizBestLevel")) || 1;

let inventory = {

  fifty:
    Number(localStorage.getItem("abilityFifty")) || 0,

  time:
    Number(localStorage.getItem("abilityTime")) || 0,

  skip:
    Number(localStorage.getItem("abilitySkip")) || 0
};


/* =====================================================
   ПЕРЕМЕННЫЕ
===================================================== */

let level = 1;

let currentQuestion = 0;

let score = 0;

let streak = 0;

let lives = 3;

let time = 15;

let timer = null;

let fiftyUsed = false;

let levelQuestions = [];


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

const levelNumber =
  document.getElementById("levelNumber");

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

const menuLevel =
  document.getElementById("menuLevel");

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
   СОЗДАТЬ 10 ВОПРОСОВ ДЛЯ УРОВНЯ
===================================================== */

function createLevelQuestions() {

  levelQuestions =
    shuffle(questions).slice(0, 10);
}


/* =====================================================
   ОБНОВИТЬ МАГАЗИН
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

  menuLevel.textContent =
    bestLevel;
}


/* =====================================================
   СОХРАНЕНИЕ
===================================================== */

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
    "quizBestLevel",
    bestLevel
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
   МАГАЗИН
===================================================== */

shopBtn.addEventListener(
  "click",
  () => {

    menu.classList.add("hidden");

    shop.classList.remove("hidden");

    updateShop();
  }
);


backBtn.addEventListener(
  "click",
  () => {

    shop.classList.add("hidden");

    menu.classList.remove("hidden");

    updateShop();
  }
);


/* 50/50 */

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


/* +10 */

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


/* Пропуск */

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

  level = 1;

  currentQuestion = 0;

  score = 0;

  streak = 0;

  lives = 3;

  fiftyUsed = false;

  createLevelQuestions();

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

  /*
    Если 10 вопросов закончились —
    переходим на следующий уровень.
  */

  if (
    currentQuestion >= 10
  ) {

    nextLevel();

    return;
  }

  const q =
    levelQuestions[currentQuestion];

  levelNumber.textContent =
    level;

  questionNumber.textContent =
    currentQuestion + 1;

  progressBar.style.width =
    (
      currentQuestion / 10
    ) * 100 + "%";

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
   СЛЕДУЮЩИЙ УРОВЕНЬ
===================================================== */

function nextLevel() {

  clearInterval(timer);

  /*
    Уровни бесконечные.
    Хоть 1000, хоть 10000.
  */

  level++;

  currentQuestion = 0;

  /*
    На каждом новом уровне
    снова выбираем 10 случайных
    вопросов из 100.
  */

  createLevelQuestions();

  /*
    Награда за прохождение уровня.
  */

  const levelBonus =
    50 + level * 5;

  coins += levelBonus;

  if (level > bestLevel) {

    bestLevel = level;
  }

  saveData();

  showToast(
    "🎉 УРОВЕНЬ "
    + (level - 1)
    + " ПРОЙДЕН! +"
    + levelBonus
    + " 💰"
  );

  setTimeout(
    () => {

      lives = 3;

      updateStats();

      showQuestion();

    },
    1000
  );
}


/* =====================================================
   ТАЙМЕР
===================================================== */

function startTimer() {

  clearInterval(timer);

  /*
    Каждый вопрос начинается с 15 секунд.
  */

  time = 15;

  timerCircle.textContent =
    time;

  timerCircle.style.borderColor =
    "#5e7cff";

  timer = setInterval(
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
   ПРОВЕРКА ОТВЕТА
===================================================== */

function checkAnswer(
  index,
  selectedButton
) {

  clearInterval(timer);

  const q =
    levelQuestions[currentQuestion];

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

    /*
      Чем длиннее серия,
      тем больше очков.
    */

    const multiplier =
      Math.min(
        streak,
        5
      );

    /*
      На высоких уровнях
      награда становится больше.
    */

    const levelMultiplier =
      Math.min(
        level,
        10
      );

    const gained =
      100 *
      multiplier *
      levelMultiplier;

    score += gained;

    const earnedCoins =
      10 *
      multiplier +
      Math.floor(level / 5);

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
      800
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
    levelQuestions[currentQuestion];

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
   СЛЕДУЮЩИЙ ВОПРОС
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

    if (fiftyUsed) {

      showToast(
        "✂️ Уже использовано!"
      );

      return;
    }

    if (
      inventory.fifty <= 0
    ) {

      showToast(
        "🛒 Купи 50/50 в магазине!"
      );

      return;
    }

    const q =
      levelQuestions[currentQuestion];

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
      500
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

  levelNumber.textContent =
    level;
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
      "finalLevel"
    )
    .textContent =
    level;

  /*
    Примерное количество правильных
    ответов считается по счёту.
  */

  const correct =
    Math.min(
      Math.floor(
        score / 100
      ),
      1000
    );

  document
    .getElementById(
      "correctAnswers"
    )
    .textContent =
    correct;

  const recordMessage =
    document.getElementById(
      "recordMessage"
    );

  if (
    score > highScore
  ) {

    highScore =
      score;

    saveData();

    recordMessage
      .classList
      .remove(
        "hidden"
      );

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
      .add(
        "hidden"
      );

    if (
      level >= 10
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
        "НЕВЕРОЯТНЫЙ УРОВЕНЬ!";

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
