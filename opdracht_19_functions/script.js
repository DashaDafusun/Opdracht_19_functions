'use strict'






function getSquare(num1, num2) {
    let sum = (num1 * num1) + (num2 * num2)
    return sum * sum

}


let getSquareOptie2 = function (number1, number2) {
    let result = (number1 * number1) + (number2 * number2)
    return result * result
}


let getSquareViaArrow = (nummer1, nummer2) => {
    let result = (nummer1 * nummer1) + (nummer2 * nummer2)
    return result * result
}

console.log(getSquare(4, 5));
console.log(getSquareOptie2(4, 5));
console.log(getSquareViaArrow(4, 5));