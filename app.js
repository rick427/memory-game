document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {name: 'fries', img:'images/fries.png', id: 1},
        {name: 'hotDog', img:'images/hotDog.png', id: 2},
        {name: 'cheeseBurger', img:'images/cheeseburger.png', id: 3},
        {name: 'ice-cream', img:'images/ice-cream.png', id: 4},
        {name: 'milkshake', img:'images/milkshake.png', id: 5},
        {name: 'pizza', img:'images/pizza.png', id: 6},
        {name: 'fries', img:'images/fries.png', id: 7},
        {name: 'hotDog', img:'images/hotDog.png', id: 8},
        {name: 'cheeseBurger', img:'images/cheeseburger.png', id: 9},
        {name: 'ice-cream', img:'images/ice-cream.png', id: 10},
        {name: 'milkshake', img:'images/milkshake.png', id: 11},
        {name: 'pizza', img:'images/pizza.png', id: 12},
        {name: 'fries', img:'images/fries.png', id: 13},
        {name: 'hotDog', img:'images/hotDog.png', id: 14},
        {name: 'cheeseBurger', img:'images/cheeseburger.png', id: 15},
        {name: 'ice-cream', img:'images/ice-cream.png', id: 16},
        {name: 'milkshake', img:'images/milkshake.png', id: 17},
        {name: 'pizza', img:'images/pizza.png', id: 18},
        {name: 'fries', img:'images/fries.png', id: 19},
        {name: 'hotDog', img:'images/hotDog.png', id: 20},
        {name: 'cheeseBurger', img:'images/cheeseburger.png', id: 21},
        {name: 'ice-cream', img:'images/ice-cream.png', id: 22},
        {name: 'milkshake', img:'images/milkshake.png', id: 23},
        {name: 'pizza', img:'images/pizza.png', id: 24},
    ];

    // randomize the card options
    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const toast = document.querySelector('#snackbar');
    const btn = document.querySelector('.btn');
    let total = document.querySelector('#total');
    total.textContent = cardArray.length;

    let chosenCard = [];
    let chosenCardId = [];
    let cardsWon = [];

    //create game board
    const createBoard = () => {
        cardArray.forEach((card, indx) => {
            //console.log(card.name);
            let img = document.createElement('img');
            img.setAttribute('src', 'images/bl.png');
            img.setAttribute('data-id', indx);
            img.classList.add('img');

         
            img.addEventListener('click', flipCard)
            grid.appendChild(img);
        })
    }

    const checkForMatch = () => {
        let cards = document.querySelectorAll('img');
        const optionOneId = chosenCardId[0];
        const optionTwoId = chosenCardId[1];
        console.log(optionOneId)
        console.log(optionTwoId);

        if(chosenCard[0] === chosenCard[1]){
            toast.classList.add('show');
            toast.textContent = 'Congrats! you found a match.';
            toast.style.backgroundColor = '#34bd7c';
            setTimeout(() => toast.classList.remove('show'), 1000);

            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(chosenCard);

            //console.log('chosen cards',cardsWon)
        }
        else{
            toast.classList.add('show');
            toast.textContent = 'Sorry bruv, try again !';
            toast.style.backgroundColor = '#de2f40';
            setTimeout(() => toast.classList.remove('show'), 1000);

            cards[optionOneId].setAttribute('src', 'images/bl.png');
            cards[optionTwoId].setAttribute('src', 'images/bl.png');
        }

        chosenCard = [];
        chosenCardId = [];
        resultDisplay.textContent = cardsWon.length;

        if(cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = `Congratulations! You scored ${cardsWon.length} points`;
            btn.style.opacity = 1;
        }

    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');

        if(this.getAttribute('src') === 'images/white.png'){
            // toast.classList.add('show');
            // toast.textContent = 'Are you trying to cheat ??';
            // toast.style.backgroundColor = '#de2f40';
            return;
        }

        chosenCard.push(cardArray[cardId].name);
        chosenCardId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        console.log(cardsWon)

        if(chosenCard.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard();
}) 