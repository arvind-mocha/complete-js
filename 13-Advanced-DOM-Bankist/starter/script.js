'use strict';

///////////////////////////////////////

//Selecting elements

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header')
console.log(document.querySelectorAll('.sections'))

document.getElementById('section--1')

console.log(document.getElementsByTagName('button')) //all buttons available

console.log(document.getElementsByClassName('btn'))//elements by class name

//creating and inserting html elements

const message = document.createElement('div')
message.classList.add('cookie-message')
//message.textContent = 'We use cookies for better performance'
message.innerHTML = 'We use cookies for better performance <button class="btn btn--close-cookie">Got it</button>'

header.append(message)

header.prepend(message)

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove()
})

//style

message.style.backgroundColor = 'black'
message.style.width = '120%'

console.log(message.style.height)

console.log(getComputedStyle(message))
console.log(getComputedStyle(message).color)

var num = '255px'
console.log(num)

console.log(Number.parseInt(num) + 22) //Number.parse will remove letters and converts the digits into numbers 

//selecting css variables
//document.documentElement.style.setProperty('--color-primary','gold')

//attributes
const logo = document.querySelector('.nav__logo')

console.log(logo.getAttribute('src'))
logo.setAttribute('class','n')
console.log(logo.getAttribute('class'))

//classes

logo.classList.add('c','j');
logo.classList.remove('c','j')
logo.classList.toggle('c');
logo.classList.contains('c')



//position of elements

const btnScroll  = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1')

btnScroll.addEventListener('click',function(){
  const s1coords = section1.getBoundingClientRect()
  console.log(s1coords)

console.log('Current Scroll (X/Y)',window.pageXOffset,pageYOffset)

console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth)


//Scrolling
window.scrollTo({left:s1coords.left,top:s1coords.top+window.pageYOffset,behavior:'smooth'})
}) //top + current position because top is based on the view port not on 0 y


//this is not the best practice if we have more elements since we are using for loop

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

//best way
//we have set the event listener to the parant itself and on clicking we are fetching where the click occured
//then if the clicked element statisfyes our condtion then the function takes place 


document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault()

  console.log(e.target)
  //Matching startegy

  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})

//traversing going downwords

const h1 = document.querySelector('h1')

console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color='red'
h1.lastElementChild.style.color = 'yellow'

//traverse going upwards
//selecting the closest parent

console.log(h1.parentNode)
console.log(h1.parentElement)

h1.closest('.header').style.background = 'pink'
console.log(h1.closest('.header'))
console.log(h1.closest('h1'))

//sibling selector

console.log(h1.previousElementSibling); //no previous element inside that parent cuz h1 is the first element
console.log(h1.nextElementSibling);

//to get all the sibilings traverse to parent and get all the sibilins including the current element
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)';
})


// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//tab component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//better way than scroll [Don't use scroll !!!!!]
//use intersectionobserver

const obsCallback = function(entries,observer){
  entries.forEach(entry => {
    console.log(entry,`threshold ${obsOptions.threshold}`)
  });
};

const obsOptions = {
  root: null, //which means the entier viewport
  threshold: [0,.2,.6], 
  rootMargin:'-90px'
  //threshold value refers the percentage of view port after we entered the current section to activate this event
  //for each value in the threshold array two events occur . while entering the section at that threshold and leaving the section at that threshold value
  //root margin is like -90px from the section where the event is triggered
};

const observer = new IntersectionObserver(obsCallback , obsOptions);
observer.observe(section1);

//selecting tags based on attributes names

const image = document.querySelectorAll('img[data-src]')
console.log(image)


//menu fade 

