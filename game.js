const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const guessesDiv = document.getElementById('guesses');
const messageDiv = document.getElementById('message');
const element = document.querySelector('.neon');
element.style.backgroundColor = 'neon';

let guessCount = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
submitButton.addEventListener('click', function() {
    let guess = parseInt(guessInput.value, 10);

    if (guess >= 1 && guess <= 100) {
        guessCount++;
        if (guess === randomNumber) {
            messageDiv.textContent = 'Glückwunsch! Du konntest die nummer in ' + guessCount + ' versuchen erraten!';
            document.body.style.background = 'green';
            confetti();
            setTimeout(function() {
                
            },1000);
        } else if (guess < randomNumber) {
            messageDiv.textContent = 'Zu Niedrig! Versuche es nochmal.';
            document.body.style.background = 'red';

            setTimeout(function() {
                document.body.style.background = '#00688B';
            },1000);
        } else if (guess > randomNumber) {
            document.body.style.background = 'red';

            setTimeout(function() {
                document.body.style.background = '#00688B';
            }, 1000);
            messageDiv.textContent = 'Zu Hoch! Versuche es nochmal.';
        } if (guessCount === 9) {
         alert("Achtung! Du hast nurnoch ein Versuch")
        }
        guessesDiv.textContent += 'Versuch ' + guessCount + ': ' + guess + '\n';
    } else {
        alert("Nur Nummern von 1-100 Sind erlaubt!");
    }
        
    if (guessCount === 10) {
        messageDiv.textContent = 'Game over! die nummer war: ' + randomNumber + '.';
        disableGame();
        setTimeout(function() {
            document.body.style.background = 'red';
        }, 10000);
    }
});

function disableGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;

}
setInterval(updateClock, 1000);

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    document.getElementById('hours').innerText = hoursStr;
    document.getElementById('minutes').innerText = minutesStr;
    document.getElementById('seconds').innerText = secondsStr;
}




