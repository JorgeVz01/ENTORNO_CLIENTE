// Baraja de cartas
const deck = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
];

let playerHand = [];
let dealerHand = [];

const startButton = document.getElementById("startButton");
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const playerPointsSpan = document.getElementById("playerPoints");
const dealerPointsSpan = document.getElementById("dealerPoints");
const message = document.getElementById("message");

startButton.addEventListener("click", startGame);
hitButton.addEventListener("click", playerHit);
standButton.addEventListener("click", playerStand);

function startGame() {
    // Barajar la baraja
    shuffleDeck(deck);
    
    // Repartir cartas iniciales
    playerHand = [drawCard(), drawCard()];
    dealerHand = [drawCard(), drawCard()];

    displayPlayerHand();
    displayDealerHand();
    calculatePoints();

    startButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;

    message.textContent = "¿Pedir carta o plantarse?";
}

function drawCard() {
    return deck.pop();
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function displayPlayerHand() {
    const hand = playerHand.join(", ");
    playerPointsSpan.textContent = calculateHandPoints(playerHand);
}

function displayDealerHand() {
    const hand = dealerHand.join(", ");
    dealerPointsSpan.textContent = calculateHandPoints(dealerHand);
}

function calculateHandPoints(hand) {
    let points = 0;
    let aceCount = 0;

    for (const card of hand) {
        if (card === "A") {
            points += 11;
            aceCount++;
        } else if (card === "K" || card === "Q" || card === "J") {
            points += 10;
        } else {
            points += parseInt(card);
        }
    }

    while (points > 21 && aceCount > 0) {
        points -= 10;
        aceCount--;
    }

    return points;
}

function calculatePoints() {
    displayPlayerHand();
    displayDealerHand();

    const playerPoints = calculateHandPoints(playerHand);
    const dealerPoints = calculateHandPoints(dealerHand);

    if (playerPoints > 21) {
        endGame(false);
    } else if (dealerPoints > 21 || dealerPoints < playerPoints) {
        endGame(true);
    } else if (dealerPoints > playerPoints) {
        endGame(false);
    } else if (dealerPoints === 21 && dealerHand.length === 2) {
        endGame(false);
    }
}

function playerHit() {
    playerHand.push(drawCard());
    calculatePoints();
}

function playerStand() {
    while (calculateHandPoints(dealerHand) < 17) {
        dealerHand.push(drawCard());
    }
    calculatePoints();
}

function endGame(playerWins) {
    if (playerWins) {
        message.textContent = "¡Ganaste!";
    } else {
        message.textContent = "La casa gana.";
    }
    startButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
}