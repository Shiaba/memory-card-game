// Memory game
let cards = document.querySelectorAll('.animal');
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;
let moves = 0;


document.getElementById('moves').textContent = moves;

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
        moves++;
        document.getElementById('moves').textContent = moves;
        
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

//Restart button



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


