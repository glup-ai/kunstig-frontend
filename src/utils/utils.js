
import f from '../images/1024.jpeg';
export const mockImages = [f, f, f,f, f, f, f, f, f, f]

const runOnLocalServer = false;

export const getBaseUrl = () => {
  if (runOnLocalServer) {
    return '';
  } else {
    return 'https://glup-kunstig-api.azurewebsites.net/';
  }
};

