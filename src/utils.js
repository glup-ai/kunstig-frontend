export const pingServer = () => {
    fetch("https://glup-kunstig-api.azurewebsites.net/")
        .then(response => response.json())
        .then(data => console.log(data));
}