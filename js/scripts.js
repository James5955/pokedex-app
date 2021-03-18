let pokemonRepository = (function () {
  // This is my IIFE for pokemonList
  let pokemonList = [];

  pokemonList[0] = {
      name: 'Bulbasaur',
      height: 0.7,
      type: ['Grass', ' Poison']
    };

  pokemonList[1] = {
      name: 'Charmander',
      height: 0.6,
      type: ['Fire']
    };

  pokemonList[2] = {
      name: 'Squirtle',
      height: 0.5,
      type: ['Water']
    };

  pokemonList[3] = {
      name: 'Gastly',
      height: 1.3,
      type: ['Ghost', ' Poison']
    };

  pokemonList[4] = {
      name: 'Haunter',
      height: 1.6,
      type: ['Ghost', ' Poison']
    };

  pokemonList[5] = {
      name: 'Gengar',
      height: 1.5,
      type: ['Ghost', ' Poison']
    };

  pokemonList[6] = {
      name: 'Pikachu',
      height: 0.4,
      type: ['Electric']
    };

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
    return;
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
