let pokemonPerPage = null;

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
getPokemon(baseUrl);

/**
 * Get Pokemon to display in <main> as a list
 * @param {string} url 
 */
function getPokemon(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      pokemonPerPage = pokemonPerPage ? pokemonPerPage : json.results.length;

      // Create list
      let pokemonList = '<ul>';
      for (const pokemon of json.results) {
        pokemonList += `<li onclick="displayPokemonDetails('${pokemon.url}')">
            ${pokemon.name.toUpperCase()} 
          </li>`;
      }
      pokemonList += '</ul>';
      document.getElementById('main').innerHTML = pokemonList;

      // Prev & Next Buttons
      document.getElementById('prev').onclick = () => {
        if (json.previous) getPokemon(json.previous);
      };
      document.getElementById('next').onclick = () => {
        if (json.next) getPokemon(json.next);
      };
      
      // Page Number Buttons
      const maxPages = Math.ceil(json.count / pokemonPerPage);
      let pageList = "";
      for (let i = 0; i < maxPages; i++) {
        const url =
            baseUrl + "?offset=" + pokemonPerPage * i + "&limit=" + pokemonPerPage;
        pageList += `<button onclick="getPokemon('${url}')">${i+1}</button>`;
      }
      document.getElementById('pageList').innerHTML = pageList;
    })
    .catch(err => console.error(err));
}

/**
 * Display Pokemon Details to display in the modal
 * @param {string} url 
 */
function displayPokemonDetails(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      let pokemonType = 
        `<div id="modalBackground">
          <div id="modalBody">
          <header id ="modalBodyHeader"
              onclick="document.getElementById('modalBackground').remove()">X</header>
            <p>${json.name}
            (${json.height}')</p>`;
      for (const pokemon of json.types) {
        pokemonType += `<p>${pokemon.type.name}</p>`;
      }
      pokemonType += `</div></div>`;
      document.getElementById('modal').innerHTML = pokemonType;
    })
    .catch(err => console.error(err));
}

