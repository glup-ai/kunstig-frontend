export const pingServer = () => {
  fetch(getBaseUrl() + '/')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const runOnLocalServer = true;
export const getBaseUrl = () => {
  if (runOnLocalServer) {
    return '';
  } else {
    return 'https://glup-kunstig-api.azurewebsites.net/portrait';
  }
};
