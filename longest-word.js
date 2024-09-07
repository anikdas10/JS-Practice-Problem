// Write a function to find the longest word in a given string

function longestWord(string){
    let words = string.split(' ');
    let longestWord = '';
    for(const word of words){
        if(word.length>longestWord.length){
            longestWord = word;     
        }   
    }
    return longestWord;
}

console.log(longestWord('I am learning Programming to become a programmer'));
