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

for (;pokemonList[index];){
  pokemonName = pokemonName + " " + pokemonList[index.name];
  index++;
}
document.write(pokemonName);
document.write(pokemonList[0].name);
