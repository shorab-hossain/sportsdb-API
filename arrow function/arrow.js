// function addNumber(a,b){
//     const result = a + b;
//     return result;
// }
// const myNumber = addNumber(10,5);
// console.log(myNumber);

// const myResult = (a,b=10,c=5) => {
//     const result = a + b+ c;
//     return result;
// }
// console.log(myResult(10));
// const result = n =>20;
// console.log(result(20));
// const result = (num1,num2)=> num1 + num2;
// console.log(result(20,30));
const getName = (name)=> `my friends name is  ${name}`;
const name = getName('habib');
// console.log(name);

//pratice 

function add(num1, num2, num3=10){
    const result = num1 + num2 + num3;
    return result;
}
// console.log(add(20,20))
const result = ()=> 10;
// console.log(result());

function fullName(first,last="chowdary"){
    const name = first +" " + last;
    return name;
}
// console.log(fullName('shakil'));
// console.log(fullName('habib'));
// console.log(fullName('hamim'));
// console.log(fullName('nasim'));
// template String
// const friends =['abul', 'babul', 'kabul', 'sabul'];
const name1 = 'shorab hossain';
const age ='21';
const parentAddress = 'acedemy';
const address = `My name is ${name1}.I am ${age} old.My address ${parentAddress} `;
// console.log(address);
const doMath = (x,y)=>{
    const sum = x + y;
    const diff= x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
};
const total = doMath(5,5);
// console.log(total);
//spread operator
const number = [45, 65, 102, 500, 200];
// console.log(...number);
const min = Math.min(23, 99, 65, 21, 34);
// console.log(min);
const [p,q] = [45,57];
const [x,y,z] =[10, 2, 30]
// console.log(x,y,z);
const {sky,color,soil,money} = {
    sky:'blue',
    soil:'mati',
    color:'red',
    money:'500'
}
const company = {
    name:'Gp',
    ceo:{id:1,name:'shorab',food:'fuskha'},
    web:{
        work:'website development',
        tech :{
            first:'this is my big object',
            second:'css',
            third:'js'
        }
    }
}
const {first,second} =company.web.tech?.right;
console.log(first,second);

// const output =[];
// for (const number of numbers){
//     const result = number * 2;
//     output.push(result);
// }
// console.log(output);
// const numbers = [4, 6, 8, 10];
// const myNumber = numbers.map(number => number * 2);
// console.log(myNumber);
// const output = numbers.map(x => x * 5);
// console.log(output);
// const output2 = numbers.map(x => x * x);
// console.log(output2);

// const output =[];
// const dubbleOld = number => number * 5;
// for (const number of numbers){
//     const result = dubbleOld (number);
//     output.push(result)
// }
// console.log(output);
//map 
// const outputSecond = numbers.map(number => number * 5);
// console.log(outputSecond);
/* const products = [
    {name: 'water bottle', price : 50, color:'yellow'},
    {name: 'mobile', price : 15000,  color: 'black'},
    {name: 'smart watch', price: '300', color: 'black'},
    {name: 'water glass',  price: 3, color: 'white'} */
// ];
// const productNames =products.map(product => product.name);
// const productPriceColor =products.map(product => product.color);
// console.log(productPriceColor);
// products.forEach(product => console.log(product));
// const friend =['shakib', 'rakib', 'habib'];
// const friend2 =[...friend];
// // console.log(friend2)
// const numbers = [5, 16, 7, 41, 5, 2, 19];
// const bigNumbers = numbers.filter(number => number  < 20);
// console.log(bigNumbers)
const products = [
    {name: 'water bottle', price : 50, color:'yellow'},
    {name: 'mobile', price : 15000,  color: 'black'},
    {name: 'smart watch', price: '300', color: 'black'},
    {name: 'water glass',  price: 3, color: 'white'}
];
const expensive = products.filter(product => product.price < 100);
// console.log(expensive);
const black = products.filter(product => product.name == 'water glass');
// console.log(black);
const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem);
const friendList =[
    'moushumi', 'misha', 'manna',  'mimi', 'mahiya'
];
const friendName = friendList.find(friend => friend.length == 5);
// console.log(friendName);
const persons = [
    {name: "pagala baba", id: 10},
    {name: "mati baba", id:50},
    {name: "balu baba", id:20}, 
    {name: "tala baba", id:40},
]
//learn with sumit
const num = [2, 4, 6, 5];
const newNumber = num.filter(function(x){
   if(x  < 5){
       return x;
   }
})
console.log(squareNumber);