// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers){
    let result = 0;
    for(const number of numbers){
        result = result + number;
    }
    return result/numbers.length;
    }
console.log('The average of those values is =', make_avg([34,56,44,31,87,90,85,65]));