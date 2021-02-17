'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(function(location){
    const { latitude } = location.coords;
    const { longitude } = location.coords;

    const coords = [latitude, longitude]

    //leaflet API
    //L is the leaflet api
    //it brings the map into our website
    const map = L.map('map').setView(coords, 13); //coordinates and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();


    var icon = L.icon({
        iconUrl : 'icon.png',

        iconSize: [40,30]
    })
    //this is not map function
    //it is a function belongs to leaflet 
    map.on('click',function(mapEvents){
        console.log(mapEvents);
        const { lat , lng } = mapEvents.latlng;

        L.marker([lat, lng],{icon: icon}).addTo(map).bindPopup('Workout').openPopup();
    })

},function(){
    alert('Can\'t get your location')
})