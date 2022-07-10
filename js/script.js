/* Получим элементы куда мы будем все выводить */
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const milisecondElement = document.querySelector('.milisecond');

/* Получим баттоны */
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const lapButton = document.querySelector('.lap');
const clearButton = document.querySelector('.clearlaps');

let results = document.querySelector('.results');
let block = document.createElement('div');

/* Слушатели */

startButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
  clearFileds();
});

lapButton.addEventListener('click', () => {
  count++;
  results = document.querySelector('.results');
  block = document.createElement('div');
  block.innerText = `Lap ${count}: ${hour}:${minute}:${second}:${milisecond}`;
  results.append(block);
  clearFileds();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

clearButton.addEventListener('click', () => {
  results = document.querySelector('.results').innerHTML = '';
  count = 0;
});

/* Дополнительные переменные */

let hour = 00;
let minute = 00;
let second = 00;
let milisecond = 00;
let count = 0;
let interval;

/* Создадим функцию которая будет отвечать за таймер */
/* Нужно будет менять значения переменных по мере возрастания их значений */
/* Милисекунды заполнились => +1 к секунде. 60 секунд заполнилось => 
минута +1 и тд */

function startTimer() {
  /* Для милисекунд */

  milisecond++;
  if (milisecond < 9) {
    milisecondElement.innerText = '0' + milisecond;
  }

  if (milisecond > 9) {
    milisecondElement.innerText = milisecond;
  }

  if (milisecond > 99) {
    second++;
    secondElement.innerText = '0' + second;
    milisecond = 0;
    milisecondElement.innerText = '0' + milisecond;
  }

  /* Для секунд */
  if (second > 9) {
    secondElement.innerText = '0' + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = '0' + minute;
    second = 0;
    secondElement.innerText = '0' + second;
  }

  /* Для минут */
  if (minute > 9) {
    minuteElement.innerText = '0' + second;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerText = '0' + hour;
    if (hour > 9) {
      hourElement.innerText = hour;
    }
    minute = 0;
    minuteElement.innerText = '0' + minute;
  }
}

function clearFileds() {
  hour = 00;
  minute = 00;
  second = 00;
  milisecond = 00;
  interval;
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  milisecondElement.textContent = '00';
}
