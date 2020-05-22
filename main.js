//add function
function add(x, y) {
    return x + y
}

console.log(add(2, 4))

//Multiplication function
function multiply(x, y) {
    let result = x
    for (let index = 1; index < y; index++) {
        result = add(result, x)
    }
    return result
}

console.log(multiply(6, 4))

//Power/Exponentiation
function power(x, n) {
    result = x
    for (let index = 1; index < n; index++) {
        result = multiply(result, x)
    }
    return result
}

console.log(power(2, 8))
console.log(power(3, 4))

//Factorial
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be: 5 * 4 * 3 * 2 * 1 = 120
//For example, calling factorial(4) should return a result of 24.

function factorial(number) {
    let result = number
    for (let index = number - 1; index > 0; index--) {
        result = multiply(result, index)
    }
    return result
}

console.log(factorial(5))

//Fibonacci
// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.

function fibonacci(n) {

}

console.log(fibonacci(8))