// You are given an array of numbers. Count how many times the a number is repeated in the array


function countMultiple(numbers,value){
    
    let count = 0;
    for(const num of numbers){
        if(num===value){
            count++;
        }
    }

    
    return count;
}

console.log(countMultiple( [5,6,11,12,98,5],25))