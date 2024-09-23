const pi = (3 + 2) - 76 * (1 + 1);
// pi = 10;

let a = 10
let b = 7 * a

console.log(a)
console.log(b)

console.log(pi); // What will be output?
console.log((4 + 6 + 9) / 77)


let max = 57
let actual = max - 13
let percentage = actual / max



const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);
let year = 2015;

// if (year == 2015) {
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
//  }

function add7 (num) {
    return num + 7;
}

function multiply (num, num2) {
    return num * num2;
}

function capitalize (str) {
    // temp = str[0].toUpperCase() + str.substring(1);
    str = str[0].toUpperCase() + str.substring(1);
    return str;
}

function lastLetter(str) {
    letter = str[str.length-1];
    return letter;
}

var test = "myTest";

console.log(add7(5));
console.log(add7(505));

console.log(multiply(5, 7));

console.log(capitalize(test));

console.log(lastLetter("myCrazy"));

