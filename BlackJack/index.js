
// First card and second card random number

let cardVals = [11,11,11,11,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let cardFace = ["0AD", "0AH", "0AS", "0AC", "02D", "02H", "02S", "03C", "03D", "03H", "03S", "03C", "04D", "04H", "04S", "04C", "05D", "05H", "05S", "05C", "06D", "06H", "06S", "06C", "07D", "07H", "07S", "07C", "08D", "08H", "08S", "08C", "09D", "09H", "09S", "09C", "10D", "10H", "10S", "10C", "0JD", "0JH", "0JS", "0JC", "0QD", "0QH", "0QS", "0QC", "0KD", "0KH", "0KS", "0KC"]
let cardsEl = document.getElementById("cards-el")
let scoreEl = document.getElementById("score-el")
let DrawEl = document.getElementById("draw-el")
let messageEl = document.getElementById("message-el")

function getCard() {
    var ind = Math.floor(Math.random() * cardVals.length)
    var rCard = cardVals[ind]
    console.log(rCard, ind)
    return [rCard, ind]
}

function startGame() { 
    for (var i= document.images.length; i-->0;)
        document.images[i].parentNode.removeChild(document.images[i]);
    [firstCard, ind] = getCard()
    var src = "./assets/" + cardFace[ind] + ".jpg";
    show_image(src, 64, 109, "");
    [secondCard, ind] = getCard()
    var src = "./assets/" + cardFace[ind] + ".jpg"; 
    show_image(src, 64, 109, "");
    sum = firstCard+secondCard
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
    //var sum = Number(scoreEl.textContent.replace("Score:",""))
    var [thirdCard, ind] = getCard()
    var src = "./assets/" + cardFace[ind] + ".jpg"; 
    show_image(src, 64, 109, "");
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

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}