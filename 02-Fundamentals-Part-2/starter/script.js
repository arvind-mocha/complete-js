"use strict"; //it spots out the error in the code on the console

let license = false;
const testpass = true;

if (testpass) license = true;
if (testpass) console.log("I can drive now");

//arrow function

const birthday = (date) => 2020 - date;
console.log(birthday(2000));

//if more than one argument use ()

const age = (date, year) => date - year;
console.log(age(2020, 2000));

//more than one line of code

const salary = (exp, pay) => {
  return `your salary is ${exp * pay} as per your experience`;
};

console.log(salary(2, 40000));

//arrow function does not support this keyword

//arrays

const friends = [5, "Arvind", "Mani", "Arun", "Ashok", "puzhal"];
console.log(typeof friends[0]);

//push addding element at the end

friends.push("Gopal", "Premnath");
console.log(friends);

//unshift adding element at the begining

friends.unshift("Shobi");
console.log(friends);

//pop remove the last element

friends.pop();
console.log(friends);

//shift removing the first element

friends.shift();
console.log(friends);

//to get the index of a value

console.log(` index of mani is ${friends.indexOf("Mani")}`);

//objects

var me = {
  name: "Arvind",
  age: 25,
};

me.salary = [100000, 200000];
me["location"] = "Chennai";

console.log(me);

console.log(`my salary is ${me.salary[0]} and I am ${me["name"]}`);

//function inside a n object

var score = {
  test: 20,
  country: "india",
  points: function () {
    return this.test + 200;
  },
};

console.log(score.points());
