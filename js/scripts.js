let pokemonList = [{},{},{},{},{},{},{}];

pokemonList[0] = {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['Grass', 'Poison']
  };

pokemonList[1] = {
    name: 'Charmander',
    height: 0.6,
    type: 'Fire'
  };

pokemonList[2] = {
    name: 'Squirtle',
    height: 0.5,
    type: 'Water'
  };

pokemonList[3] = {
    name: 'Gastly',
    height: 1.3,
    type: ['Ghost', 'Poison']
  };

pokemonList[4] = {
    name: 'Haunter',
    height: 1.6,
    type: ['Ghost', 'Poison']
  };

pokemonList[5] = {
    name: 'Gengar',
    height: 1.5,
    type: ['Ghost', 'Poison']
  };

pokemonList[6] = {
    name: 'Pikachu',
    height: 0.4,
    type: 'Electric'
  };

let index = 0;
let pokemonName = "";
let pokemonHeight = 0;

for (;pokemonList[index];){
  pokemonName = pokemonList[index].name;
  pokemonHeight = pokemonList[index].height;
  document.write(pokemonName + " (height: " + pokemonHeight + ") ");
  index++;
}
