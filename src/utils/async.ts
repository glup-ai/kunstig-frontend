import {getBaseUrl} from "./utils";

export async function fetchImagePaths(model: string) {
    if (model) {
        return await fetch(
            getBaseUrl() + 'model',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"model": model})
            }
        ).then(response => response.json())
    }
    return await fetch(
        getBaseUrl() + 'images',
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    ).then(response => response.json())
}