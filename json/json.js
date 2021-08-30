const user = {
    id:11,
    name: 'amir khan',
    job: 'actor'
}
const stringified = JSON.stringify(user);
// console.log(user);/

// console.log(stringified);
const shop = {
    name: 'alia bhatt',
    road: 'dhaka road',
    address: 'dhaka',
    products: ['laptop', 'mobile', 'computer'],
    expensive : true
}
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
console.log(converted.expensive);
// const converted = JSON.parse(stringified);
// console.log(converted.job);