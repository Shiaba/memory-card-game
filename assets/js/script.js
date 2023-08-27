// Memory game
let cards = document.querySelectorAll('.animal');
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockboard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        //Calculating match
        if (firstCard.dataset.framework ===
            secondCard.dataset.framework) {
            //Disable matched cards    
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            //Unflip if not matching
        } else {
            lockboard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockboard = false;
            }, 750);
        }

    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

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


