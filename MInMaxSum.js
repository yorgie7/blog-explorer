let array=[1, 3, 5, 7, 9];
let min=array[0];
let max=array[0];

let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

for(let i=1 ; i<array.length; i++){
    if(max < array[i]){
     max= array[i];
    } else if(min > array[i]){
      min = array[i];
  }
}

console.log(`Min: ${sum -max} and Max: ${sum -min}`);
