'use strict';

function bricks(amount){
    return amount*25
}

function cement(amount){
    return amount
}

const building = (area,floors,bricks,cement) => {
    var area_cost = area + bricks(10) + cement(10) + floors
    return `the cost of the building is ${area_cost} and the name of the function used is ${bricks.name} , ${cement.name}`
}

console.log(building(2300,10,bricks,cement))

//function returning a function

const f_return_f =  () => {

    return function(){
        console.log('A function can return a function by  calling the function then calling the inner function')
    }
}

const af_return_af = () => () => console.log('A arrow function can also return a arrow function')

const infunction = f_return_f()
infunction()

f_return_f()()
af_return_af()()

//This and more 

const flights = {
    name:'ASIAN Airways',
    location:'Chennai India',
    price(destination){
        console.log(`Your ${this.name} flight is located in ${this.location} and your destination is ${destination}`)
        console.log(`your seat no is ${this.seat} of ${this.sname} class`) //this keyword gives error while calling it normally since the function price does not have any variable named seat and sname
    }
}

var flight = flights.price

//causes error
//flight()

//so we need to set the values for this keyword to point or the variables for the method

var flight_data = {
    seat :'22',
    sname : 'Buisness'
}

//now the flight_data is the variable which belongs to the function price. The first value is the representation of the variables for the function
//and the second data is the parameters which is to be passed

flight.call(flight_data,'DUBAI') 
flight.call({seat:'33',sname:'local'},'LONDON')

//another way of giving values to a function which can be used by the this keyword is by using bind 
//the bind keyword will bind the variables with the function so that the variables belongs to the function 

var plane = flight.bind(flight_data)
var plane1 = flight.bind({seat:243,sname:'CLASSIC'})
plane('USA');
plane1('SIMLA');


//immidietly invoking a function
//running a function only once

(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

(() => console.log('This is an only once executed arrow function'))();

//Closure

var closure = function(){
    var num = 0;
    return function(){
        num++;
        return console.log(`${num} cloosure knows history`);
    }
}

var closure_call = closure();
closure_call()
closure_call()
closure_call()

let inner

function outter(){
    console.log('I am the outter function')
    inner = function(){
        console.log('I am the inner function')
    }
}

outter()
inner()

console.dir(inner)