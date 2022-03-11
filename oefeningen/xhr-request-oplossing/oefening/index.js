// Opdracht 1: haal met gebruik van `XMLHttpRequest` een Pokemon op (GET request)
// toon de naam van de pokemon in een alert
// toon een alert wanneer het request is mislukt

// De stappen zijn als volgt:
// 1. Maak een XHR object aan
let xhr = new XMLHttpRequest();
// 2. Open de request
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
// 3.Zet de responsetype
xhr.responseType = "json";
// 4. Verstuur de request over het netwerk
xhr.send();
// 5. "Luister" naar de XHR events voor de response (onload, onerror, onprogress)
// Wij gebruiken onload
xhr.onload = function () {
  if (xhr.status == !200) {
    alert("Er ging iets mis");
  } else {
    console.log(xhr.response);
  }
};
