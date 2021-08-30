// const product = {
//     name: 'water bottle',
//     color: 'yellow',
//     price: '100'
// };
// const {price} = product;
// // console.log(price);

// const name = 'Adam Sandler';
// const greeting = `hello,  ${name} welcome to the club.`;
// console.log(greeting);
//practice day
// 1/template String
const products = {
    name: 'water bottle',
    color: 'yellow',
    price: '100'
};
const productView = `this is my ${products.name}.it is color ${products.color} .this  product price ${products.price}`;
// console.log(productView);
//task 2 
const number = num => num % 2;
const divide = number(5);
// console.log(divide);
//task 3
const number2 = (num1, num2) => {
    const sumAndMultify = (num1 + 2) * ( num2 + 2);
    return sumAndMultify;
}
const sumMultify = number2(5,5);
// console.log(sumMultify);
//task 4
const number3 = (num1,num2,num3) => num1  * num2 * num3;
const multify = number3(3,4,5);
// console.log(multify);
//task 5
const multilineWork = (num1, num2) =>{
    const sum = num1 + num2;
    const multify = sum * 2;
    const divide = multify / 2;
    const result = sum + multify + divide;
    return result;
}
const myNumber = multilineWork(5,5);
// console.log(myNumber);
//task 5
//map and arrow function
const numbersValue = [4, 6, 8, 10];
// const output = [];
for(const number of numbersValue){
    const multifyValue = number +  5;
    const sum = multifyValue * 2;
    const result = multifyValue + sum; 
    // output.push(result);
}
// console.log(output);
//task6
const num = [5, 3, 4, 6, 8, 11, 15 ,19];
const  oddNumber = num => num %  2;
console.log(oddNumber);

function add(num1,num2,num3 = 20){
    const sum = num1 + num2 + num3;
    return sum;
}
const numAll = add(20,40);
// console.log(numAll);