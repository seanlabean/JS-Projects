// document.getElementById("count-el").innerText = 54

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(countEl.innerText)
}

let count = 0
let countEl = document.getElementById("count-el")

