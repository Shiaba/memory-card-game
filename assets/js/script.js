// Memory game
let cards = document.querySelectorAll('.animal');
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockboard) return;
    this.classList.add('flip');

    //Flip both cards
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        calculateMatch()
    }
}

//Calculate match
function calculateMatch() {
    if (firstCard.dataset.framework ===
        secondCard.dataset.framework) {

        disableMatchedCards();
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

cards.forEach(card => card.addEventListener('click', flipCard));

//Timer 
var timer;
var timeCount = document.getElementById('time');

(function () {
    var sec = 0;
    timer = setInterval(() => {
        timeCount.innerHTML = '' + sec;
        sec++;
    }, 1000);
})();

// Light / Dark button function
let toggle = document.getElementById('light-dark');

let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('fa-moon');
    if (this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});


