// this will hold the JWT (an encrypted string) if/when we receive it below (see line2 23-24)
let jsonWebToken = null;

/**
 * Make HTTP Request for JSON
 * @param {string} url 
 * @param {object} opts={} Fetch initialization options
 */
export async function requestJson(url, opts = {}) {
  opts.headers = { 'Content-Type': 'application/json' };
  if (jsonWebToken) opts.headers.Authorization = `Bearer ${jsonWebToken}`;

  return await fetch(url, opts)
    .then(response => {
      if ( ! response.ok) throw Error(`${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then(json => {

      console.log('fetch result:', json); // DEBUG

      if (json.hasOwnProperty('accessToken')) {
        jsonWebToken = json.accessToken;
        document.forms.login.classList.add('hidden');
        document.getElementById('getPosts').classList.remove('hidden');
        document.forms.message.classList.remove('hidden');
      }

      return json;
    })
    .catch(err => showPopup(err));
}

/**
 * Show Pop-up with any errors
 * @param {string} msg 
 */
function showPopup(msg) {
  const errorsDiv = document.getElementById('errors');
  const div = document.createElement('div');
  div.innerText = msg;
  errorsDiv.appendChild(div);

  setTimeout(() => { div.remove() }, 5000);
}
