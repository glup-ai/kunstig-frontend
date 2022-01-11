export const pingServer = () => {
  fetch('/')
    .then((response) => response.json())
    .then((data) => console.log(data));
};
