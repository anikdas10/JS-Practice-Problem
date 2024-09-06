// Write a JavaScript function that reverses a number.


function reverse(number){
    let result = number.toString();
    console.log(result);
    return result.split('').reverse().join('');
}

console.log(reverse(454668975));