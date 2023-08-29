// Memory game
let cards = document.querySelectorAll('.animal');
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;
var flippedCard = 0
// Log total score in game over section
let moves = 0;
console.log(moves);

function flipCard() {
    if (lockboard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    //Flip both cards
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        //moves counter
        moves++;
        document.getElementById('moves').textContent = moves;

        calculateMatch();
    }
}

//Calculate match
function calculateMatch() {
    //Match
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {

        disableMatchedCards();
        
        gameOver()
        
    } else {

        unflipCard();
    }
}

//Disable matched cards
function disableMatchedCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//unflip cards
function unflipCard() {
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockboard = false;
    }, 750);
}

//Card shuffle
(function cardShuffle() {
    cards.forEach(card => {
        let cardPosition = Math.floor(Math.random() * 16);
        card.style.order = cardPosition;
    });
})();

//Game over
function gameOver() {
    flippedCard += 2;
    if (flippedCard === cards.length) {
        
        reveal();
    }
}

//Game over screen
let gameOverScreen = document.querySelector('.game-over');
let hideScreen = true;

function reveal() {
    if (hideScreen) {
        gameOverScreen.style.display = 'block';
    } else {
        gameOverScreen.style.display = 'none';
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

// Light & Dark button function for body
let toggle = document.getElementById('light-dark');
let body = document.querySelector('body');
// For instructions & move counter
let instruction = document.querySelector('.instruction');
let moveCounter = document.getElementById('move-counter');

toggle.addEventListener('click', function () {
    this.classList.toggle('fa-moon');
    if (this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';

        instruction.style.background = 'cyan';
        instruction.style.color = 'black';
        instruction.style.transition = '1s';

        moveCounter.style.color = 'black';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';

        instruction.style.background = 'red';
        instruction.style.color = 'white';
        instruction.style.transition = '1s';

        moveCounter.style.color = 'black';
    }
});