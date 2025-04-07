let array=[1, 3, 5, 7, 9];
let min_index = 0;
let max_index = 0;

let sum = array[0];

for(let i = 1; i < array.length; i++){
     sum = sum + array[i];

    if(array[max_index] < array[i]){
      max_index= i;
    } else if(array[min_index] > array[i]){
      min_index = i;
  }
}

console.log(`Min: ${sum - array[max_index]} and Max: ${sum -array[min_index]}`);
