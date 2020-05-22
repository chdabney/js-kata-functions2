//The first three weren't so bad and once I had one completed one it snowballed into completion of the next one. 

//add function
function add(x, y) {
    return x + y
}

console.log('kata 1:', add(2, 4))

//Multiplication function
function multiply(x, y) {
    let result = x
    for (let index = 1; index < y; index = add(index, 1)) {
        result = add(result, x)
    }
    return result
}

console.log('kata 2:', multiply(6, 4))

//Power/Exponentiation
function power(x, n) {
    result = x
    for (let index = 1; index < n; index = add(index, 1)) {
        result = multiply(result, x)
    }
    return result
}

console.log('kata 3:', power(2, 8))
console.log('kata 3:', power(3, 4))



//Factorial
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be: 5 * 4 * 3 * 2 * 1 = 120
//For example, calling factorial(4) should return a result of 24.

function factorial(number) {
    let result = 1
    for (let index = 1; index < add(number, 1); index = add(index, 1)) {
        result = multiply(result, index)

    }
    return result
}

console.log('kata 4:', factorial(4))
// BREAKDOWN:
//result starts at 1 and index starts at 1
//the cycle starts so now when loop checks if index[1] is less than number + 1(5) it will multiply 1 * 1 updating result to 1
//result is now 1 and index updates to 2
//next time around we check if 2 is < number + 1(5)
//returns true so now we multiply 1 * 2 to get 2
//result is now 2 and index increments to 3
// we loop again checking 3 < number + 1(5) returns true
// we multiply 2 * 3 updating result to 6 and index becomes 4
// on the final loop with check if 4 < number + 1(5)
// returns true so we multiply 6 * 4 updating result to 24 and increment index to 5
// we loop again and check if index[5] < number+1(5)
// returns false and we break the loop
// result will return as 24

// this one was a doozy!




//Fibonacci
// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.

// function fibonacci(n) {
//     if (n <= 1) return 1;

//     return add(n - 1, n - 2)
// }


//used below link as a guide
//https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

// this one is beyond me at the moment so I will return to it at a later date.

function fibonacci(n) {
    let a = 0
    let b = 1
    let c = null
    if (n === 0) {
        return a
    }
    for (let index = 3; index <= n; index = add(index, 1)) {
        c = add(a, b)
        a = b
        b = c
    }
    return b
}
console.log('kata 5:', fibonacci(8))

//got it to work
// use below as a source
//https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/