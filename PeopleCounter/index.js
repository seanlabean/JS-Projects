
let count = 0
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let errorEl = document.getElementById("error-el")
let totalEl = document.getElementById("total-el")
let name = "Sean"
let greeting = "Welcome back, "
let errStr = "There's been an error."
welcomeEl.innerText = greeting + name
let saveEl = document.getElementById("save-el")
let total = 0

function increment() {
    errorEl.innerText = ""
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    // console.log(countEl.innerText)
}

function greet() {
    welcomeEl.innerText = greeting + name
}

function error() {
    errorEl.innerText = errStr
}

function toNumber(value) {
    return Number(value)
}

function getTotal() {
    totalEl.textContent = totalEl.textContent.replace(total, "")
    let numArr = saveEl.textContent.replace("Previous logs: ", "").split("-").map(toNumber)
    total = numArr.reduce(function(a,b){return a + b;});
    totalEl.textContent += total
}