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
  // Bonus Task attempt
  function add2(pokemon){
    if( pokemon === 'object' && pokemon !== null)
    pokemonList.push(pokemon);
    else{
      console.log('Pokemon that was attempted to be added was not an object')
      return;
    }
  };

  function getAll(){
    return pokemonList;
  }

  return{
    add: add,
    add2: add2,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());

let Charzard = {
  name: 'Charzard',
  height: 2,
  type: ['Fire']
};

// The working add function
pokemonRepository.add('Magneton', 1, ['Electric', ' Steel']);

// Attempting to get Charzard to be recognized as an object  for bonus task
pokemonRepository.add2(Charzard);
// Making sure that Charzard has properties
console.log(Charzard.name);

function writePokemonDetails(pokemon){
  let pokemonOrderList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('pokemonButton');
  listItem.appendChild(button);
  pokemonOrderList.appendChild(button);
}

let globalPokemonList = pokemonRepository.getAll();

globalPokemonList.forEach(writePokemonDetails);
