/**
 * Get JSON
 * @param {string} url 
 */
export async function getJSON(url) {
  return await fetch(url)
    .then(response => {
      if (response.ok) return response;
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(json => {
      console.log('fetch result:', json);
      return json;
    })
    .catch(err => console.error(err));
}

export const getLocation = function (options = {}) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export function displayModal() {
  document.getElementById('modalBackground').style.display = 'flex';
  document.getElementById('modalHeader').onclick = closeModal;
}

export function closeModal() {
  document.getElementById('modalBackground').style.display = 'none';
}
