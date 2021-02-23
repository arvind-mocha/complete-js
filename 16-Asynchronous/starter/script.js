'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//consuming promises and fetch api

const request = fetch('https://restcountries.eu/rest/v2/name/africa')
console.log(request)

const getCountry = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then( response =>{
        console.log(response)
        if (!response.ok){
            throw new Error('Country not found ')
        }
        return response.json() //returns a promise
    })
    .then(data => console.log(data))
    .catch(err => console.error(err)) // if promise is not fulfilled
    .finally(() => console.log('The chain ends'))
}

getCountry('spain')

//creating a promice

const lotteryPromise = new Promise(function(resolve, reject){
    if(Math.random() >= 0.5){
        resolve('Yeah won 😎😎'); // if satisfied then will take this as promice value
    }else{
        reject(new Error('No Lost 😢😢')) //if not satisfied this is the value of promice
    }
})

lotteryPromise.then(data => console.log(data)).catch(err => console.log(err))

//async await
//this is equal to promise and the
//refer line no 12

const fun = async function(){
    var data = await fetch('https://restcountries.eu/rest/v2/name/india')
    const ans = await data.json()
    console.log(ans)
}

fun()

//error handeling

try {
    console.log(`this is from try ${10/s0}`)
}catch(err){
    throw new Error(`error from catch ${err}`)
}finally{
    console.log('this is from final')
}

//running promises parallely
//each api calls takes time to load . it doesn't make any sense taking time for each api call if they are not dependent on each other
//so do all api call as a single call
//check network tab for details
const func = async function(c1,c2,c3){ 
    const val = await Promise.all([
        fetch(`https://restcountries.eu/rest/v2/name/${c1}`),
        fetch(`https://restcountries.eu/rest/v2/name/${c2}`),
        fetch(`https://restcountries.eu/rest/v2/name/${c3}`)
    ]);
    console.log(val)
}

func('india','germany','africa')

//takes time for each api call

const fu = async function(c1,c2,c3){
    const val = fetch(`https://restcountries.eu/rest/v2/name/${c1}`)
    const val1 = fetch(`https://restcountries.eu/rest/v2/name/${c2}`)
    const val2 = fetch(`https://restcountries.eu/rest/v2/name/${c3}`)

    console.log([val,val1,val2])
}

fu('australia','london','scotland')