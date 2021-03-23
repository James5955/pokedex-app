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

  function add(pokemon){
    pokemonList.push(pokemon);
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

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //showModal(pokemon.name, pokemon.height);
    });
  }

  function showModal(name, height){
    let pokemonModal = document.createElement('div');
    pokemonModal.classList.add('modal');
    // Clear all existing pokemonModal content
    pokemonModal.innertext = '';

    let closeButton = document.createElement('button');
    closeButton.classList.add('modal-x');
    closeButton.innerText = 'X';
    // closeButton.addEventListener('click', hideModal);

    let pokemonName = document.createElement('h1');
    pokemonName = name;

    let pokemonHeight = document.createElement('p');
    pokemonHeight = height;

    pokemonModal.appendChild(closeButton);
    pokemonModal.appendChild(pokemonName);
    pokemonModal.appendChild(pokemonHeight);

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

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
