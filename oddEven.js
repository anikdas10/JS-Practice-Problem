// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(number){
    let result;
    if(number%2===0){
        result = 'Even';
    }
    else{
        result = 'Odd';
    }
    return result;
}

console.log(odd_even(48));