//  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.


function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
   for(let i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  } 
  
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));