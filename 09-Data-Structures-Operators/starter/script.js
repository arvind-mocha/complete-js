'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order : function(one,two){
    return [this.starterMenu[one],this.starterMenu[two]]
  }
};

//destructing the array

var [country,food,type,natural] = restaurant['categories']
console.log(country,food,type,natural)

var [starter,maincourse] = restaurant.order(0,2)
console.log(`my starter ${starter} and my maincourse ${maincourse} `)

//object destructuring
//in object destructuring we need to specify the object we to to get and we can even change the name of the object by referring it


var {name} = restaurant // it is equal to retarunt.name
var {openingHours} = restaurant

console.log(openingHours)
console.log(name)
 
//giving our own name for objects

const {name: restaruntname,categories:foodtype,openingHours:hours} = restaurant
console.log(restaurant,foodtype,hours)

//adding our data with objects data
const {mainMenu: Main,mymenu = ['gobi 65','noodles']} = restaurant
console.log(Main,mymenu)

var a = {
  'name':'arvind',
'age':22
}

//destructuring to the core 
var {openingHours} = restaurant
console.log(openingHours)

var {sat} = openingHours
console.log(sat)

var {open,close} = sat
console.log(open,close)

var {open:o ,close: c} = sat
console.log(o,c)

//destructing objects as arguments

var sports = {
  'game1':'football',
  'game2':'volleyball',
  'game3':'circket',
  'game4':'basketball'
}

var sports1 = {
  'game3' : 'high jump',
  'game4' : 'running'
}

function games({game1 = 'tennis',game2 = 'swimming',game3,game4}){ // if game1 and game2 is not available in the object which is passed then tennis and swimming will be the vale of them both
  console.log(`i love ${game1} but my friend play ${game2} and ${game3} so I played ${game4}`)
}

games(sports)

games(sports1)

//spread operator
//just used to unpack the array

var arr = [1,2,3,4,5,6,7]

console.log(arr)
console.log(...arr)

var num = [10,11,12,13,14,15,...arr]
console.log(num)

var num = [10,11,12,13,14,15,arr]
console.log(num)

//spread operator with functions 

function pizza(toppings,sauce,spices,vegs){
  console.log(`I neea a pizza with ${toppings} , ${sauce} and ${spices} with these ${vegs}`)
}

var custom_pizza = ['peperonies','tomato','olives','onions , carrots']

pizza(...custom_pizza)

//spread operator with objects

var obj = {
  'name':'Arvind',
  'age':22,
  'sports':'soccer'
}

var obj_copy = {...obj}

console.log(obj_copy.age,obj_copy.sports)

//Spread operator for packing which is called as rest because it takes the rest of the element and packs it as an array
//the rest must be the last value always

var arr = [1,2,3,4,5,6]

var [a,b,...num] = arr
console.log(a,b,num)

/*
openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
*/

var {sat,...week_days} = restaurant.openingHours
console.log(sat,week_days)

//for of loop

var arr = [1,2,3,4,5]

for (var i of arr) console.log(i)

//new es6 feature 
//we dont need to mentiomn key for a object data

//old

var data = {
  arr:arr,
  fun : function(){
    return 'this is from es5'
  }
}

console.log(data.arr,data.fun())

//new
//you don't have to mention the key


var data = {
  arr,
  fun(){
    return 'this is from es6'
  },
  food(){
    console.log('I love food')
  }
}

console.log(data.arr,data.fun())

//set like in python

const foodset = new Set(['Pasta','Pasta','Pasta','Bread','Bread'])

console.log(foodset)

//converting objects to array

console.log(Object.entries(data))

//array to set with spread operator

var nation = ['India','Srilanka','japan','india','Japan','Malaysia']

console.log(...new Set(nation))

//Maps

const rest = new Map()
rest.set('name','Saravanas');

console.log(rest)

rest.set(1,'delhi').set(2,'chennai').set(3,'london').set('morning',true).set('night',false)

console.log(rest)

console.log(rest.get('morning'),rest.get(2))

//maps without using set 

var question = new Map([
  ['question','what is the capital of india'],
  [1,'delhi'],
  [2,'mysore'],
  [3,'chennai'],
  [true,'Correct'],
  [false,'Wrong']
])

console.log(question)
console.log(question.get(true))

//converting ojects to map

var obj = {
  'name':'Arvind',
  'age':22
}

console.log(new Map(Object.entries(obj)))

//Strings

var s = 'Arvind'.length

console.log(`length of the string is ${s}`)

console.log('Arvind is great'.slice(0,6))

console.log('Arvind is great'.lastIndexOf(' '))

console.log(`Upper case for Arvind is ${'Arvind'.toUpperCase()}`)

console.log('255$'.replace('5$','10%'))

var [firstname,lastname] = 'Arvind Nachiappan'.split(' ')

var myname = ['Mr.','L',firstname,lastname].join(' ')

console.log(myname)

const msg = 'You are beautiful'

console.log(msg.padStart(100,' + '))