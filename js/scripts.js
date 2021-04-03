let pokemonRepository = (function () {
  // This is my IIFE for pokemonList
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

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
    //pokemon.classList.add('group-list-item');
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
    button.classList.add('btn');
    button.classList.add('btn-outline-primary');
    listItem.appendChild(button);
    pokemonOrderList.appendChild(listItem);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Try passing in a pokemon, then access attributes inside showModal??
  function showModal(pokemon){

  }

  function hideModal() {

  }

window.addEventListener('keydown', (e) => {
  if( e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
    hideModal();
  }
});

window.addEventListener('click', (e) => {
  if( e.target === modalContainer){
    hideModal();
  }
});

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
