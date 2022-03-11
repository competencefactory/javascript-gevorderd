// Opdracht 1: gebruik callbacks om ervoor te zorgen dat
// de volgende tekst (op volgorde) naar de console wordt gelogd
// "Sometimes, things don't work as expected!"

// dit uiteraard zonder de timeouts aan te passen

function printPartOne() {
  setTimeout(() => {
    console.log("sometimes, things");
  }, 2000);
}

function printPartTwo() {
  setTimeout(() => {
    console.log("dont work");
  }, 3000);
}

function printPartThree() {
  setTimeout(() => {
    console.log("as expected!");
  }, 1000);
}

printPartOne();
printPartTwo();
printPartThree();

// Opdracht 2: doe hetzelfde als in de vorige opdracht,
// maar maar dit keer gebruik van promises
