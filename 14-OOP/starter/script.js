'use strict';

const person = function(name,age){
    this.name = name,
    this.year = age + 22

    //it is not suggested to do attach a function with this so use prototypes
    //because if the function is attached to the object itself when each instance of the object is created the function is inherited for each intance
    //if we attach the function to the prortype the function is not attached to the object so it is more optimal

    // this.fun = function(){
    //     console.log('hi')
    // }
}

const arvind = new person('Arvind',22)
console.log(arvind)

//constructer function (new)
//new will assing the parameters to the this keyword and the function don't need to return the values 

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const mani = new person('Mani',11)
const harish = new person('priya',20)

console.log(mani,harish)


//checking weather the variable is a instance of the object 

var gopal = 'gopal'

console.log(`is mani a instance of person ${mani instanceof person}`)
console.log(`is gopal a instace of person ${gopal instanceof person}`)

//prototype can be a function also a properties which is attateched to all instance when created
//prototype does not belong to object it belongs to the instance created from the object

person.prototype.fun = function(name){
    console.log(`hi from ${name}`)
}

arvind.fun('arvind')
mani.fun('mani')

console.log(`is instance prototype equal to object prototype ${arvind.__proto__ === person.prototype}`)
console.log(person.prototype.isPrototypeOf(arvind))
console.log(person.prototype.isPrototypeOf(gopal))

//storying the data in side proto insted of each instances

person.prototype.country = 'Asia'

console.log(arvind.country,mani.country)

//we can also attach functions to arrays
//it stays inside the prototype of arrays and if we need it we can use it 

var arr = [1,2,2,2,1,3,3,4,5]

Array.prototype.distinct = function(){
    return [...new Set(this)]
}

console.log(arr.distinct())

//setting function inside a prototype of function

var countries = function(){
    return `hi ${this.name}`
}

var n = countries.bind({name:'arvind'})

console.log(n())

countries.prototype.len = function(){
    console.log(n().length) //this is the function itself
}

var l = new countries()

l.len()

//compare the above code and this code both are same but a more easier way of implementation
//instead of all these we can use classes which is more understandable

class personcl {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    //method will be added to the .prototype in the background automatically
    fun(){
        console.log(arvindcl)
    }
}

//new calls the constructor every time
const arvindcl = new personcl('arvind',22)

console.log(arvindcl)
arvindcl.fun()

//getter and setters

var states = {
    name:'tamilnadu',
    districts : 28,
    arr: [1,2,3,4,5],

    //getters is used to make functions as a properties which means we don't need to call it
    get fun(){
        return this.districts + 22
    },

    set add(val){
        this.arr.push(val)
    }
}

console.log(states.fun)
states.add = 22
console.log(states.arr)

//static methods are the methods which do not belong to the instances of the class or they are not added to the prototype
//so no instances can call it

class sports {
    
    //constructure function called everytime when a new instance is created
    constructor(name,tools){
        this.tools = tools;
        this.name = name;
        this.time = '90 Min'
    }

    //instance methods or prototype method can be called and used by all instances
    //this keyword points the instance of the object
    players(){
        return `${this.name} is played using ${this.tools} and played for ${this.time} and this keyword points${this}`
    }

    //static methods is not inherited by the instance and cannot be called by the instance
    //this keyword points the entier class itself
    static team1(){
         console.log(`this is from the static function which can be called only by the class and it is not stored inside the prototype and this key word points ${this}`)
    }

}

//instance of class(object) sports
const circket = new sports('circket','bat and ball')

//using the instance calling the function since we cannot call the function inside a class using the class itself
console.log(circket.players())

sports.team1();

//inheritance

class games extends sports{
    constructor(name,tools,orgins){
        //always first statement in a constructor since it makes the this keyword
        super(name,tools)
        this.orgins = orgins
    }

    printing(){
        console.log(this.name,this.tools,this.orgins)
    }
}

//instance 
const swimming = new games('swimming','goggles','greek')

swimming.printing()

//how to use classes

class bank {

    //private variables
    #transaction = [];

    constructor(name,pin,amount,action){
        this.name = name;
        this.pin = pin;
        this.amount = amount;
        this.action = action;
        this.history = [];
    }

    deposite(cash){
        this.amount = cash + this.amount
        this.history.push(`deposited ${cash}`)
        //returns everything
        return this
    }

    withdraw(cash){
        this.amount = Math.abs(this.amount - cash)
        this.history.push(`withdrawed ${cash}`)
        return this
    }

    #printtrans(){
        console.log('this is private')
    }
}

const obj = new bank('Arvind',1234,10000,5000)

console.log(obj.deposite(500))

console.log(obj.withdraw(1000))

//how not to use 
//should not do any action by using the class outside
//actions must be done within the class itself

obj.history.push(1111)
console.log(obj.history)

//private variables
//Uncaught SyntaxError: Private field '#transaction' must be declared in an enclosing class
//console.log(obj.#transaction)
//console.log(obj.#printtrans())

//chaining methods 
obj.deposite(100).withdraw(2000).deposite(50000).withdraw(10000)
console.log(obj.history)


//coding challenge
//private method can be used within the class

class carcl{
    
    #car_modals = [];

    constructor(model,speed){
        this.model = model;
        this.speed = speed;
    }  

    fun(){
        this.#car_modals.push(this.model)
        return `${this.model} has a speed of ${this.speed}`
    }

    modals(){
        console.log(this.#car_modals)
    }
    
    
}


class source extends carcl{
    constructor(model,speed,energy){
        super(model,speed);
        this.energy = energy;
    };
};

const hyundai = new carcl('creta','210kmph')
const benz = new carcl('sclass','310kmph')

console.log(hyundai.fun())
console.log(benz.fun())
hyundai.modals()
benz.modals()