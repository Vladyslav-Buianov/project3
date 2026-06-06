// const dinoRef = document.getElementById('dino');
// const cactusRef = document.getElementById('cactus');
// const btnRef = document.querySelector('.dino__btn');
// function getScore() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get('score') || 0;
// }
// console.log(getScore());// console is / on vite
// const hScore = getScore();

// let score = 0;
// document.getElementById("dino__best").innerHTML ="HI: " + ((hScore - (hScore % 10))/10).toString().padStart(6, "0");
// btnRef.addEventListener('click', evt => {
// cactusRef.style.display = "block"
//   const jump = () => {
//     if (dinoRef.classList != 'jump') {
//       dinoRef.classList.add('jump');

//       setTimeout(function () {
//         dinoRef.classList.remove('jump');
//       }, 500);
//     }
//   };//
//   let isAlive = setInterval(() => {
//     let dinoTop = parseInt(
//       window.getComputedStyle(dinoRef).getPropertyValue('top')
//     );

//     let cactusLeft = parseInt(
//       window.getComputedStyle(cactusRef).getPropertyValue('left')
//     );
//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//       alert('Схоже ви натрапили на кактус!');
//       window.location.href = window.location.pathname + '?score=' + score;
//     }
//     score++;

//     document.getElementById("dino__score").innerHTML = ((score - (score % 10))/10).toString().padStart(6, "0");
//   }, 10);

// document.addEventListener('keydown', evt => {
//     if (evt.code === 'ArrowUp' || evt.code === 'Space') {
//     evt.preventDefault();
//     jump();
//   }
// });
// });

document.addEventListener("DOMContentLoaded", () => {
  const dino = document.getElementById('dino');
  const cactus = document.getElementById('cactus');
  const btn = document.querySelector('.dino__btn');
  const scoreRef = document.getElementById("dino__score");
  const bestRef = document.getElementById("dino__best");
  const gameOverRef = document.getElementById("dino__game-over");

  let isPlaying = false;
  let isJumping = false;
  let score = 0;
  let speed = 6; // Початкова швидкість руху кактуса (пікселі за кадр)
  let cactusLeft = 720;
  let animationFrameId = null;

  // Завантаження рекорду
  let hScore = localStorage.getItem('dino_high_score') || 0;
  bestRef.innerHTML = "HI " + formatScore(hScore);

  function formatScore(val) {
    return Math.floor(val).toString().padStart(5, "0");
  }

  // Обробка стрибка
  function jump() {
    if (isJumping || !isPlaying) return;
    isJumping = true;
    dino.classList.add('jump');

    // Анімація стрибка триває 500мс
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 500);
  }

  // Головний ігровий цикл (60 кадрів на секунду)
  function gameLoop() {
    if (!isPlaying) return;

    // 1. Рух кактуса
    cactusLeft -= speed;
    if (cactusLeft < -20) {
      cactusLeft = 720; // Повертаємо кактус на початок праворуч
    }
    cactus.style.left = cactusLeft + "px";

    // 2. Нарахування очок та плавне збільшення швидкості
    score += 0.15; // Швидкість росту рахунку
    scoreRef.innerHTML = formatScore(score);
    speed += 0.001; // Поступове мікро-прискорення гри

    // 3. Точна перевірка зіткнення через Хітбокси
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    // Штучно звужуємо хітбокс на 6px, щоб гра прощала легкі дотики повітря навколо спрайтів
    if (
      dinoRect.right - 6 > cactusRect.left &&
      dinoRect.left + 6 < cactusRect.right &&
      dinoRect.bottom - 6 > cactusRect.top
    ) {
      endGame();
      return;
    }

    // Запускаємо наступний кадр
    animationFrameId = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    if (isPlaying) return;

    isPlaying = true;
    score = 0;
    speed = 6;
    cactusLeft = 720;

    // Оновлення інтерфейсу
    gameOverRef.classList.remove('visible');
    btn.style.display = "none";
    cactus.style.display = "block";
    cactus.style.left = cactusLeft + "px";

    // Старт циклу
    animationFrameId = requestAnimationFrame(gameLoop);
  }

  function endGame() {
    isPlaying = false;
    cancelAnimationFrame(animationFrameId);

    // Показуємо Game Over
    gameOverRef.classList.add('visible');
    btn.style.display = "block";
    btn.innerText = "Повторити";

    // Оновлення рекорду
    if (score > hScore) {
      hScore = score;
      localStorage.setItem('dino_high_score', Math.floor(hScore));
      bestRef.innerHTML = "HI " + formatScore(hScore);
    }
  }

  // Глобальне керування клавішами
  document.addEventListener('keydown', evt => {
    if (evt.code === 'ArrowUp' || evt.code === 'Space') {
      evt.preventDefault();
      if (isPlaying) {
        jump();
      } else {
        startGame(); // Старт по кнопці Space/Вгору
      }
    }
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Запобігає подвійному кліку
    startGame();
  });
});
