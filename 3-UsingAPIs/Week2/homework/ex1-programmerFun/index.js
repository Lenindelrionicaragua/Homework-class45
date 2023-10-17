'use strict';

function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function renderImage(data) {
  const imageElement = document.createElement('img');
  imageElement.src = data.img;
  imageElement.alt = 'image comic highway';
  document.body.appendChild(imageElement);
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = `Error: ${error.message}`;
  document.body.appendChild(errorElement);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
