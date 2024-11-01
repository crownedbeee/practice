// let name = "Deborah";
// let age = 25;

// let isAfrican = true;

// //console.log(name);
// //console.log(age);
// //console.log(isAfrican);

// //Addition

// let firstNumber = 40;
// let secondNumber = 10;
// let sum = firstNumber + secondNumber;

// //console.log(sum);
// //console.log(47 + 13);

// //Subtraction -

// let diff= firstNumber - secondNumber;

// //console.log(diff);
// //console.log(47 - 13);

// //Exponetiation

// let expon= firstNumber ** secondNumber;

// //console.log(expon);
// //console.log(47 ** 13);

// //Increment ++

// let age2023 = 24
// age2023++

// //console.log(age2023)

// //decrement --

// age2023--
// //console.log(age2023)

// //Length
// let text = "Deborah"
// let Length = text.length

// //console.log(text.length)

// //If, else if

// if(40 < 10) {
//     console.log("40 is less than 10")
// }
// else{
//     console.log("10 is greater than 40")
// }

let arr = [23, 45, 56, 73, 45, 23, 98];
// let sorted = arr.sort((a,b)=>a-b)
// let max=sorted.pop()
let sum = 0;
for(let i = 0; i < arr.length; i++) {
sum += arr[i]



}
const average = sum / arr.length;
console.log(sum)
console.log(average)
//console.log(max)

function getAverage(arr){
   
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
    
    
    }
    const average = sum / arr.length;

return average
} 
console.log(getAverage([23, 45, 56, 73, 45, 23, 98]))

function getMax(arr){
let sorted = arr.sort((a,b) => a-b)
let max = sorted.pop()
return max
}
console.log(getMax([23, 45, 56, 73, 45, 23, 98]))

function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i]}
return sum
}
console.log(getSum([23, 45, 56, 73, 45, 23, 98]))