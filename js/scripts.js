let pokemonRepository = (function () {
// This is my IIFE for pokemonList
let pokemonList = [];

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
  showDetails: showDetails
};
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add('Magneton', 1, ['Electric', ' Steel']);

let globalPokemonList = pokemonRepository.getAll();

globalPokemonList.forEach(pokemonRepository.addListItem);
