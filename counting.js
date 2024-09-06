// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function count_zero(binaryString){
    let count = 0;
    for(const binary of binaryString){
        if(binary==='0'){
            count++;
        }
    }
    return count;

}

console.log(count_zero('0011011011000010101011000011'))