let array=[8,5,2,7,4];
let min=array[0];
let max=array[0];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = array.reduce(reducer, 0);
// for(let i=0;i<5;i++){
// sum = sum+ array[i];
// }

for(let i=0; i<4;i++){
    if(max <array[i+1]){
     max= array[i+1];
    }}
for(let i=0; i<4;i++){
    if(min > array[i+1]){
     min = array[i+1];
    }}

console.log(`Minimum Sum is ${sum -max}`);
console.log(`Maximum Sum is ${sum -min}`);
