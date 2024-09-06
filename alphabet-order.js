//  Write a JavaScript function that returns a string that has letters in alphabetical order.


function alphabetString(str){
    console.log(str)
    return str.split('').sort().join('');
}

console.log(alphabetString('I am a Web Devoloper'));