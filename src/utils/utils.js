import a from '../images/munch/1.png';
import b from '../images/munch/2.png';
import c from '../images/munch/3.png';
import d from '../images/munch/4.png';
import e from '../images/munch/5.png';

export const pingServer = () => {
  fetch(getBaseUrl())
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const runOnLocalServer = false;

export const getBaseUrl = () => {
  if (runOnLocalServer) {
    return '';
  } else {
    return 'https://glup-kunstig-api.azurewebsites.net/';
  }
};

export const mockImages = [a, b, c, d, e] 