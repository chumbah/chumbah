let firstCard = 10
let secondCard = 8

let sum = firstCard + secondCard

if (sum < 20 || sum === 20 ) {
    console.log("do you want another card!")
}else if (sum === 21) {
    console.log("won!")
}else {
    console.log("out!")
}