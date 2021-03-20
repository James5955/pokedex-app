let pokemonRepository = (function () {
// This is my IIFE for pokemonList
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function myPokemonDetailsLoop(pokemon){
    console.log('name: ' + pokemon.name);
    console.log('height: ' + pokemon.height);
    console.log('type: ' + pokemon.type);
  }

pokemonList.forEach(myPokemonDetailsLoop);

function add(pokemonName, pokemonHeight, pokemonType){
pokemonList.push( { name: pokemonName, height: pokemonHeight, type: pokemonType});
}

function getAll(){
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonOrderList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('pokemonButton');
  listItem.appendChild(button);
  pokemonOrderList.appendChild(listItem);
  button.addEventListener('click', function (event) {
    showDetails(pokemon);
  });
}

function showDetails(pokemon){
  console.log(pokemon);
}

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

console.log(pokemonRepository.getAll());

//let globalPokemonList = pokemonRepository.getAll();

//globalPokemonList.forEach(pokemonRepository.addListItem);

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
