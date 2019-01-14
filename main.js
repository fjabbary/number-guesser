
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

//UI Elements
const content = document.querySelector('.content'),
  minSpan = document.querySelector('.min'),
  maxSpan = document.querySelector('.max'),
  guessInput = document.getElementById('number'),
  message = document.getElementById('message'),
  submitBtn = document.querySelector('.button-primary');

//Set min and max values
minSpan.textContent = min;
maxSpan.textContent = max;

// Event Listener for submit button
submitBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter the valid number between ${min} and ${max}`, '#ee7300');
    guessInput.style.borderColor = 'orange';
  }
  else {
    setMessage('')
    guessInput.style.borderColor = '';

    if (guess === winningNum) {
      setMessage(`${guess} is the right guess. You WIN!`, 'green');
      setStyle('green');

    } else {
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        setStyle('red');
        setMessage(`Game over. ${guessesLeft} guesses left.`, 'red')

      } else {
        setMessage(`Your guess is not correct. ${guessesLeft} guesses left`, 'red')
      }
      guessInput.value = '';
    }
  }
})

content.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
})

//Set message 
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

//Generate random number
function getRandomNumber(min, max) {
  let randNum = Math.random() * (max - min) + min;
  return Math.floor(randNum);
}

function setStyle(color) {
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  submitBtn.classList.add('play-again');
  submitBtn.value = 'Play Again';
}