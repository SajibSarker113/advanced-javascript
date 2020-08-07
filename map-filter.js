// const numbers = [3,4,5,6,7,8];
//  const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);    
// }
// console.log(output);

/*const numbers = [3,4,5,6,7,8];
// function square(element){
//     return element * element;
// } 
// const square = element => element * element;
// const square = x => x * x;
const result = numbers.map(function(element){
    return element * element;
})
console.log(result); */
     //  execelent method
        // const numbers = [3,4,5,6,7,8];
        // const result = numbers.map(x => x * x);
        // console.log(result);
// filter provides a array and find provide a element or number. jodi 3 er theke choto logic dei tahole empty array dibe.
const numbers = [3,4,5,6,7,8];
const bigger = numbers.filter(x => x > 5);
const emptyArray = numbers.filter(x => x < 3);
const isThere = numbers.find(x => x > 5)
console.log(bigger);
console.log(emptyArray);
console.log(isThere);
