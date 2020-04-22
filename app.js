document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {name: 'fries', img:'images/fries.png'},
        {name: 'hotDog', img:'images/hotDog.png'},
        {name: 'cheeseBurger', img:'images/cheeseburger.png'},
        {name: 'ice-cream', img:'images/ice-cream.png'},
        {name: 'milkshake', img:'images/milkshake.png'},
        {name: 'pizza', img:'images/pizza.png'},
        {name: 'fries', img:'images/fries.png'},
        {name: 'hotDog', img:'images/hotDog.png'},
        {name: 'cheeseBurger', img:'images/cheeseburger.png'},
        {name: 'ice-cream', img:'images/ice-cream.png'},
        {name: 'milkshake', img:'images/milkshake.png'},
        {name: 'pizza', img:'images/pizza.png'},
        {name: 'fries', img:'images/fries.png'},
        {name: 'hotDog', img:'images/hotDog.png'},
        {name: 'cheeseBurger', img:'images/cheeseburger.png'},
        {name: 'ice-cream', img:'images/ice-cream.png'},
        {name: 'milkshake', img:'images/milkshake.png'},
        {name: 'pizza', img:'images/pizza.png'},
        {name: 'fries', img:'images/fries.png'},
        {name: 'hotDog', img:'images/hotDog.png'},
        {name: 'cheeseBurger', img:'images/cheeseburger.png'},
        {name: 'ice-cream', img:'images/ice-cream.png'},
        {name: 'milkshake', img:'images/milkshake.png'},
        {name: 'pizza', img:'images/pizza.png'},
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
            cardArray.find((val, index) => index === indx ) ? img.addEventListener('click', flipCard) : null;
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

            console.log('chosen cards',cardsWon)
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
            btn.addEventListener('click', () => {
                //cardArray.sort(() => 0.5 - Math.random());
                cardsWon = [];
            })
        }

    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        chosenCard.push(cardArray[cardId].name);
        chosenCardId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(chosenCard.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard();
}) 