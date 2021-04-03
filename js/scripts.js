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
    // Create modal and make it visible
    let pokemonModal = document.createElement('div');
    pokemonModal.classList.add('modal');
    pokemonModal.classList.add('is-visible');
    // Clear all existing pokemonModal content
    pokemonModal.innertext = '';

    let closeButton = document.createElement('button');
    closeButton.classList.add('modal-x');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', hideModal);

    let pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemon.name;

    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = 'height: ' + pokemon.height;

    let pokemonImg = document.createElement('img');
    pokemonImg.classList.add('pokemonImage');
    pokemonImg.src = pokemon.imageUrl;

    // Add X, name, height to pokemonModal
    pokemonModal.append(closeButton);
    pokemonModal.append(pokemonName);
    pokemonModal.append(pokemonHeight);
    pokemonModal.append(pokemonImg);
    // Add pokemonModal to the larger modal that contains it
    modalContainer.appendChild(pokemonModal);

    // Make modalContainer visible
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
  modalContainer.classList.remove('is-visible');
  modalContainer.removeChild(modalContainer.firstChild);
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
