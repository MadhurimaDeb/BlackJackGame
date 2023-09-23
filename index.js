let cardEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let saveEl = document.getElementById("count-el")
let sum = 0;
let card = []
let isAlive = false
let hasBlackJack = false
function getRandom(){
    return Math.floor(Math.random() * 9) + 2
}

function start(){
    isAlive = true
    renderGame()
}

function renderGame(){
    let num1 = getRandom()
    let num2 = getRandom()
    card = [num1,num2]
    sum = num1 + num2
    
    cardEl.textContent = "Cards: " + card[0] +" , " + card[1]
    sumEl.textContent = "Sum: " + sum 

    if (sum <= 20) {
        saveEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        saveEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        saveEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let num = getRandom()
        sum += num
        card.push(num)
        cardEl.textContent += " , " + num
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            saveEl.textContent = "Do you want to draw a new card?"
        } else if (sum === 21) {
            saveEl.textContent = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
        } else {
            saveEl.textContent = "You're out of the game!"
            isAlive = false
        }
    }
    
}