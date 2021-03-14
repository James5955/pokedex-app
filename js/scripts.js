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

  function add(pokemon){
    pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
  }

  return{
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add( { name: 'Charzard' , height: 2.0, type: ['Fire']});

function writePokemonDetails(pokemon){
  document.write('name: ' + pokemon.name + '<br>');
  document.write('height: ' + pokemon.height + '<br>');
  document.write('type: ' + pokemon.type + '<br>');
  document.write('<br> <br>');
}

//for (;pokemonList[index];){
//  pokemonName = pokemonList[index].name;
//  pokemonHeight = pokemonList[index].height;
//  pokemonType = pokemonList[index].type;
//  document.write(pokemonName + " (height: " + pokemonHeight + ") ");
//  if (pokemonHeight > 1.5){
//    document.write(' - Wow that\'s big! ');
//  }
//  document.write(pokemonType + '<br>');
//  index++;
//}
let globalPokemonList = pokemonRepository.getAll();

globalPokemonList.forEach(writePokemonDetails);
