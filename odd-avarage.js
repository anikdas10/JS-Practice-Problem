//avarage of a odd number of an array.......

function odd_avarage(numbers){
let result = 0;
let count = 0;
for(const number of numbers)
{
    if(number%2===1){
        result = result + number;
        count++;
    }
}
return (result/count);
}

const avg = odd_avarage([45,67,88,66,43,60,54,37,38,20,5,86]);
console.log('Avarage of the odd number is = ',avg);