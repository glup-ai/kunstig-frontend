const runOnLocalServer = false;

export const getBaseUrl = () => {
  if (runOnLocalServer) {
    return '';
  } else {
    return 'https://glup-kunstig-api.azurewebsites.net/';
  }
};

