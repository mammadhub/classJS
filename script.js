// 1.
// function A(arr1, arr2){
//     let arr3=[]
//     if(arr1.length==arr2.length){
//         for(let i=0;i<arr1.length;i++){
//             arr3=arr3+(arr1[i]*arr2[i]);
//         }
//         return arr3;
//     }
//     else{
//         console.log("arraylar beraber deyil");
//     }
// }
// let arr1=[1,2,3,4];let arr2=[2,3,4,5];

// console.log(A(arr1,arr2)); 



// 2.
// function araliq(a, b) {
//     arr1 = [];
//     if (typeof araliq != Number) {
//         console.log("eded daxil ed");
//         return;
//     }
//     else {
//         for (let i = a; a <= i && i <= b; i++) {
//             arr1.push(i);
//         }
//         return arr1;
//     }
// }
// console.log(araliq(3, "ss"));

// 3.

// function Arr(arr1){
//     let max=arr1[0];
//     for(i=0;i<arr1.length;i++){
//         if(max < arr1[i]){
//             max=arr1[i];
//         }
//     }
//     return max;
// }
// let arr1=[2,5,4,10,3,9];
// console.log(Arr(arr1));


// 4.

// const cities = [
//     "miami",
//     "barcelona",
//     "madrid",
//     "amsterdam",
//     "berlin",
//     "sao paulo",
//     "lisbon",
//     "mexico city",
//     "paris"
// ];

// function boyuk(arr) {
//     return arr.map((city) => city.split(' ').map((side) =>side[0].toUpperCase() + side.slice(1)).join(' '))
// }
// // boyuk(arr)

// let boyukSheherler = boyuk(cities);


// console.log(boyukSheherler);



// 5. Arrayin icinde tekrarlanan elementin sayi
// 5.1
// function A(arr,b){
//     let newarr=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==b){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr.length;
// }
// let arr=["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
// let b="computer";
// console.log(A(arr,b));

// 5.2
// function A(arr, b) {
//     let i = 0;
//     arr.forEach(item => {
//         if (item === b) {
//             i++;
//         }
//     });
//     return i;
// }

// let arr = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
// let b = "computer";
// console.log(A(arr, b));



// 6.
// const countries = ['Estonia','Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: '' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// // function  A(countries,names, numbers,products){
// //     let i=0;
// //     countries.forEach(item => {
// //         countries.push(item);
// //     })
// //     names.forEach(item => {
// //         names.push(item);
// //     })
// //     numbers.forEach(item => {
// //         numbers.push(item);
// //     })
// //     products.forEach(item =>{
// //         numbers.push(item)
// //     })
// // }
// // console.log(countries, names, numbers,products);
// // A(countries,names,numbers,products);


//   const prices = products.map(item => `${item.product}-${item.price}`);
//   console.log(prices);

//   const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
// console.log(countriesWithLand);


// const countriesWithSixChars = countries.filter(country => country.length === 6);
// console.log(countriesWithSixChars);


// const  countriesE = countries.filter(country => country.toLowerCase().startsWith('e'));
// console.log(countriesE);

// const productsValues = products.filter(product => product.price);
// console.log(productsValues);

// function getStringLists(array) {
//     let stringItems = [];
//     for (let item of array) {
//         if (typeof item === 'string') {
//             stringItems.push(item);
//         }
//     }
//     return stringItems;
// }

// const array = ['apple', 42, 'banana', false, 'orange'];
// const stringList = getStringLists(array);
// console.log(stringList); 


// const numberss = [1, 2, 3, 4, 5];

// const sum = numberss.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);



// const concatenatedSentence = countries.reduce((accumulator, currentValue, i) => {
//   if (i === countries.length - 1) {
//     return accumulator + 'and ' + currentValue + ' are north European countries';
//   } else {
//     return accumulator + currentValue + ', ';
//   }
// }, '');

// console.log(concatenatedSentence);

// const names1 = names.some(name => name.length >= 7);
// console.log(names1);


// const countries1=countries.every(country => country.toLowerCase().includes('land'));
// console.log(countries1);

// const countries2=countries.findIndex(country => country.toLowerCase()==='norway');
// console.log(countries2);


const countries = [
    { country: 'English', count: 91 },
    { country: 'French', count: 45 },
    { country: 'Arabic', count: 25 },
    { country: 'Spanish', count: 24 },
    { country: 'Russian', count: 9 },
    { country: 'Portuguese', count: 98 },
    { country: 'Dutch', count: 8 },
    { country: 'German', count: 7 },
    { country: 'Chinese', count: 5 },
    { country: 'Swahili', count: 4 }
];
let newCountry = [];
for (let i = 0; i < 3; i++) {
    let max=countries[0];
    for (let j = 0; j < countries.length; j++) {
        if (max.count < countries[j].count){
            max = countries[j];
        }
    }
    newCountry.push(max);
    let maxIndex = countries.indexOf(max);
    countries.splice(maxIndex,1);
}
console.log(newCountry);