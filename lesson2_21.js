const quantityHamburger = 10;
const quantityFries = 3;

const hamburger = prompt("How many hamburgers have you had?", "");
const fries = prompt("How many fries have you had?", "");

const hamburger2 = prompt("How many hamburgers have you had?", "");
const fries2 = prompt("How many fries have you had?", "");

const friend1 = parseInt(hamburger) + parseInt(fries);
const friend2 = parseInt(hamburger2) + parseInt(fries2);

console.log(friend1);
console.log(friend2);

switch (true) {
    case friend1 + friend2 <= quantityHamburger + quantityFries:
        alert("Yes");
        break;
    case friend1 + friend2 >= quantityFries + quantityHamburger:
        alert("No");
        break;
    default: alert("Maybe");
}

// VERSION2 

"use strict";

const quantityHamburger = 10;
const quantityFries = 3;

const hamburger = prompt("How many hamburgers  you want FRIEND 1?", "");
const fries = prompt("How many fries you want FRIEND 1?", "");

const hamburger2 = prompt("How many hamburgers you want FRIEND 2?", "");
const fries2 = prompt("How many fries you want FRIEND 2", "");

const quantityHamburger1 = parseInt(hamburger);
const quantityFries1 = parseInt(fries);

const quantityHamburger2 = parseInt(hamburger2);
const quantityFries2 = parseInt(fries2);

const tottalquantityHamburger = quantityHamburger1 + quantityHamburger2;
const tottalquantityFries = quantityFries1 + quantityFries2;

switch (true) {
    case quantityHamburger1 + quantityHamburger2 <= quantityHamburger && quantityFries1 + quantityFries2 <= quantityFries:
        alert ("We HAVE ENOUGH HAMBURGERS!" + "\n and" + "\nWe HAVE ENOUGH FRIES!" + "\n Enjoy your meal!");
        break;
    default:
        alert ("We DON'T HAVE ENOUGH FOOD, We have in stock only " +
            "\n" + quantityHamburger + " hamburgers" +
            "\n and " + "\n" + quantityFries + " fries" +
            "\n" +
            "\n" + "You ordered: " +
            "\n" + tottalquantityHamburger + " : Hamburgers" +
            "\n" + "and" +
            "\n" + tottalquantityFries + " : Fries" +
            "\n" +  " Make new order or come later");
        break;
}
