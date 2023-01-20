
// First card and second card random number

let cardVals = [11,11,11,11,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let cardsEl = document.getElementById("cards-el")
let scoreEl = document.getElementById("score-el")
let DrawEl = document.getElementById("draw-el")
let messageEl = document.getElementById("message-el")

function getCard() {
    var rCard = cardVals[Math.floor(Math.random() * cardVals.length)]
    return rCard
}

function startGame(firstCard, secondCard) { 
    var sum = firstCard+secondCard
    console.log(sum)
    messageEl.textContent = "Good luck..."
    cardsEl.textContent = "Cards: "
    scoreEl.textContent = "Score: "
    cardsEl.textContent += firstCard + ", " + secondCard
    scoreEl.textContent += sum
    return {firstCard, secondCard}
}

function cardDraw() {
    console.log("Draw!")
    var sum = Number(scoreEl.textContent.replace("Score:",""))
    var thirdCard = getCard()
    
    cardsEl.textContent += ", " + thirdCard

    sum += thirdCard
    console.log(sum)
    scoreEl.textContent = "Score: "

    scoreEl.textContent += sum
    if (sum <= 20) {
        messageEl.textContent = "Hit or Stay?"
        gameState = 0
    } else if (sum === 21) {
        messageEl.textContent = "You got blackjack!!"
        gameState = 1
    } else {
        messageEl.textContent = "You lost."
        gameState = -1
    }
}