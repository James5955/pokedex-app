let pokemonList = [];

pokemonList[0] = {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['Grass', ' Poison']
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
    type: 'Electric'
  };

let index = 0;
let pokemonName = "";
let pokemonHeight = 0;
let pokemonType = "";

for (;pokemonList[index];){
  pokemonName = pokemonList[index].name;
  pokemonHeight = pokemonList[index].height;
  pokemonType = pokemonList[index].type;
  document.write(pokemonName + " (height: " + pokemonHeight + ") ");
  if (pokemonHeight > 1.5){
    document.write(' - Wow that\'s big! ');
  }
  document.write(pokemonType + '<br>');
  index++;
}

function divide(dividend, divisor){
  if (divisor == 0){
    return "You\'re trying to divide by zero.";
  }
  else{
    return dividend / divisor;
  }
}
