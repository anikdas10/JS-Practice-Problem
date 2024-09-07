// Write a function to count the number of vowels in a string.

function countVowel(string){
    let str = string.toLowerCase();
    
    let count=0;
    for(const item of str){
      
        if('aeiou'.includes(item)){
            count++;
        }
    }
  return count;
}

 console.log(countVowel('I am learning Programming to become a programmer'));
