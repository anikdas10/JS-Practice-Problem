// Array has some duplicate elements


function no_duplicate(array){

  const uniqueArray = [];
  for(const element of array){

    if(uniqueArray.includes(element)===false){
        uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

function no_duplicate2(array2){
    const unique = [];
    for(const item of array2){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}

const birianikhor = ['abul','babul','kabul','babul','chabul','dabul','abul'];

const number = [34,54,34,87,88,87,54,88,91,52,91,47,88];

console.log(no_duplicate(birianikhor));

console.log(no_duplicate2(number));