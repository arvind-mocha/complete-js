'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//promises and fetch api

const request = fetch('https://restcountries.eu/rest/v2/name/india')
console.log(request)