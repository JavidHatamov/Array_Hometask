function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) ) + min;
    return randomNumber
}

const array=[];
const maxLength = 10;

for(let i = 0; i < maxLength; i++){
    array[i]=getRandomNumber(0,101);
}

console.log(array);

let minNumber=array[0];

function findTheSmallestNumberOfTheArray(){
    for(let i = 0;i<maxLength;i++){
        if(minNumber>array[i]){
            minNumber=array[i];
        }
    }
    console.log(`The smallest Member of the array is ${minNumber} !`);
}
//findTheSmallestNumberOfTheArray();1

let maxNumber=array[0];
function findTheBiggestNumberOfTheArray(){
    for(let i = 0;i<maxLength;i++){
        if(maxNumber<array[i]){
            maxNumber=array[i];
        }
    }
    console.log(`The smallest Member of the array is ${maxNumber} !`);
}
//findTheBiggestNumberOfTheArray();2
minIndex=0;
function findIndexOfTheSmallestMember(){
    for(let i = 0;i<maxLength;i++){
        if(minNumber>array[i]){
            minNumber=array[i];
            minIndex=i;
        }
    }
    console.log(`The index of the smallest Member of the array is ${minIndex} !`);
}
//findIndexOfTheSmallestMember();3

maxIndex=0;
function findIndexOfTheBiggestMember(){
    for(let i = 0;i<maxLength;i++){
        if(minNumber<array[i]){
            minNumber=array[i];
            maxIndex=i;
        }
    }
    console.log(`The index of the biggest Member of the array is ${maxIndex} !`);
}
//findIndexOfTheBiggestMember();4
sum=0;
function addAllOddIndexes(){
    for(let i = 1;i<maxLength;i+=2){
       sum+=array[i];
    }
    console.log(sum);
}
//addAllOddIndexes();5

function reverseArray() {
    let length = array.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]];
    }
    console.log(array);
}
//reverseArray();6

count=0;
function findTheCountOfTheOddNumbers(){
    for(let i = 0;i<maxLength;i++){
        if(array[i]%2===1){
           count++;
        }
    }
    console.log(`The count of odd numbers is ${count} !`);
}
//findTheCountOfTheOddNumbers();7


//The function which swap the half of the array*************************************8

function swapTheArray(){

}
//swapTheArray();8

//Bubble sort ascending
let swap;
function createAscendingOrderByBubbleSort(){
    for(let i=0;i<maxLength;i++){
       if(array[i]>array[i+1]){
            swap=array[i];
            array[i]=array[i+1];
            array[i+1]=swap;
       }
       return array
    }
   console.log(array);
}
//createAscendingOrderByBubbleSort();9
//******************************************************************


function createDescendingOrderByBubbleSort(){for (var i = 0; i <= array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);}
  createDescendingOrderByBubbleSort();
