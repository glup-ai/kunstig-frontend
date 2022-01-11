export const pingServer = () => {
  fetch(getBaseUrl() + '/')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const getBaseUrl = () => {
  if (process.env.NODE_ENV !== 'production') {
    return '';
  } else {
    return 'https://glup-kunstig-api.azurewebsites.net/portrait';
  }
};
