// Opdracht 1: doe een fetch GET request om
// een Pokémon op te halen wanneer er op de knop wordt geklikt
// gebruik hiervoor de onClick functie
// log de response naar de console

// const onClick = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// Opdracht 2: toon de namen van de "held items" van je Pokémon op de pagina
const onClick = () => {
  let heldItems = [];
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => {
      data.held_items.forEach((item) => {
        heldItems.push(item.item.name);
      });
      const items = heldItems.toString();
      document.getElementById("held-items").innerHTML = items;
    });
};
