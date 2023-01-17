
// First card and second card random number


let cardsEl = document.getElementById("cards-el")
let scoreEl = document.getElementById("score-el")
let DrawEl = document.getElementById("draw-el")
let messageEl = document.getElementById("message-el")


function startGame() {
    var firstCard = Math.floor(Math.random() * 11) + 1
    var secondCard = Math.floor(Math.random() * 11) + 1 
    var sum = firstCard+secondCard
    var message = ""
    var gameState = 0
    console.log(firstCard, secondCard)
    console.log(sum)
    messageEl.textContent = "Good luck..."
    cardsEl.textContent = "Cards: "
    scoreEl.textContent = "Score: "
    cardsEl.textContent += firstCard + ", " + secondCard
    scoreEl.textContent += sum
    return sum
}

function cardDraw() {
    console.log("Draw!")
    var sum = Number(scoreEl.textContent.replace("Score:",""))
    var thirdCard = Math.floor(Math.random() * 11) + 1
    
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

    console.log(message)
}