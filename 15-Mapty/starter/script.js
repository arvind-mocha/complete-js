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

let map, mapEvents;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(location){
        const { latitude } = location.coords;
        const { longitude } = location.coords;
        const coords = [latitude, longitude]

        //leaflet API
        //L is the leaflet api
        //it brings the map into our website
        map = L.map('map').setView(coords, 13); //coordinates and zoom level

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
        
        //this is not map function
        //it is a function belongs to leaflet 
        map.on('click',function(mapE){

            mapEvents = mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
        })

    },function(){
        alert('Can\'t get your location')
    })
}

form.addEventListener('submit',function(e){

    e.preventDefault();

    inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = '';

    const { lat , lng } = mapEvents.latlng;

    L.marker([lat, lng]).addTo(map).bindPopup(L.popup({maxWidth: 85, minWidth:10, autoClose: false, closeOnClick: false, className: 'running-popup'}))
    .setPopupContent('Workout').openPopup();
});

inputType.addEventListener('change', function(){
    console.log('hi')
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})