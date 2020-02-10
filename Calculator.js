/*
    This is an external javascript file for calculator.
    It Includes functions which are mentioned below:-
    <1>Add <2>Subtract <3>Multiply <4>Divide <5>Remainder
    <6>Factorial <7>is_odd <8>is_even <9>is_prime
*/

// Declaring the global variables.
var num1,num2;

// Declaring the functions.

function add(num1,num2){
    // Adds two numbers
    return (num1 + num2);
}
function subtract(num1,num2){
    // Returns the subtraction of two numbers.
    return (num1 - num2);
}
function multiply(num1,num2){
    // Returns the multiplication of two numbers.
    return (num1 * num2);
}
function divide(num1,num2){
    // Returns the answer of division of two numbers.
    return (num1 / num2);
}
function remainder(num1,num2){
    // Returns the remainder after dividing two numbers.
    return (num1 % num2);
}
function factorial(num1){
    // Return the factorial of given number.
    var i;
    for(i=1;i<=num1;i++){
        total *= i;
    }
    return total;
}
function is_odd(num1){
    // Returns true if number is odd.
    if(num1 % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}
function is_even(num1){
    // Returns true if the number is even.
    if(num1 % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
function is_prime(num1){
    // Returns true if number is prime.
    var i;
    for(i=0;i < ((num1+1)/2);i++) {
        if(num1 == 1 || num1 == 2 || num1 == 0){
            return "Enter Valid Number"
        }
        else{
            if(num1 % i == 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
}