'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//slice and splice

var arr = [1,2,3,4,5,6]

console.log(arr.slice(0,-1)) // fetches the based index
console.log(arr.splice(2,3))  //delets based on index. first argument is the index , second values is the no of index to be deleted after tha index

//reversing
//affects the original array

var alpha = ['e','d','c','b','a']
alpha.reverse()
console.log(alpha)

//concat
//original array is not affected

const combine = arr.concat(alpha)
console.log(combine)

console.log(combine.join(' - '))

console.log('----FOR OF LOOP----')
for(var i of alpha) console.log(i)
console.log('----FOR EACH LOOP----')
alpha.forEach(a => console.log(a))

//for each first parameter contains the element . second parameter contains the index and the third contains the whole array

alpha.forEach((val,index,array)=>console.log(val,index,array))

//for each on maps

currencies.forEach((val,index,arr) => console.log(val,index,arr))

//more map

var num = [1,2,3,4,5,6]

console.log(num.map(val => val + 1))

//filter method

console.log(num.filter(val => val > 3))

console.log(num.filter((val,index,arr) => {
  return arr[0] + arr[index] > 4
}))

//reduce method

var red = num.reduce((acc,val,i,arr) => {
  console.log(`index ${i} : operation accumulator plus value ${acc} + ${val} and the array ${arr}`)
  return acc + val

})
console.log(red)

var multiply = num.reduce((acc,val,index,arr)=> acc * val)
console.log(multiply)

//combining map filter and reduce

console.log(num.filter(val => val > 4).map(val => val +100).reduce((acc,val)=> val + acc))

//some method
//checks if the condition is satified atleast once

console.log(num.some(val => val > 7))
console.log(num.some(val => val > 4))

//flat and flatmap

var arrays = [1,2,3,4,[1,2],[1,2,3,4]]

console.log(arrays.flat())