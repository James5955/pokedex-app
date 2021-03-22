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
    console.log(pokemon);
  });
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

// Register form validation!

(function (){
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

  function validateEmail(){
    let value = emailInput.value;

    // If input is empty, return string then return false
    if (!value){
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }
    // If input value doesn't have an index w/ @ sign, return string and return false
    if (value.indexOf('@') === -1){
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
    // Else.. erase existing error, and don't pass string of error since string is null
    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePassword(){
    let value = passwordInput.value;
    // If password field is empty, return string and return false
    if (!value){
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }
    // If password is less than 8 characters long, return string, return false
    if (value.length < 8){
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long');
      return false;
    }
    // Else.. erase existing error and don't pass string of error since string is null
    showErrorMessage(passwordInput, null);
    return true;
  }

  function validateForm(){
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }

  function showErrorMessage(input, message){
    let container = input.parentElement; // The .input-wrapper

    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error){
      container.removeChild(error);
    }

    // Now add the error if the message isn't empty
    if (message){
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  // When form is submitted, don't send data to server and validate form, if validation is strue, alert success
  form.addEventListener('submit', (e)){
    e.preventDefault(); // Do not Submit to server
    if (validationForm()){
      alert('Sucess!');

  emailInput.addEventListener('submit', validateEmail);
  passwordInput.addEventListener('submit', validatePassword);
    }
  }
})(); // () for execute immediately! */
