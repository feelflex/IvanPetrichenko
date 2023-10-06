const quantityHamburger = 10;
const quantityFries = 3;

const hamburger = prompt("How many hamburgers have you had?", "");
const fries = prompt("How many hamburgers have you had?", "");

const hamburger2 = prompt("How many hamburgers have you had?", "");
const fries2 = prompt("How many hamburgers have you had?", "");

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
