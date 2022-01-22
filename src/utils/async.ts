import {getBaseUrl} from "./utils";

export async function fetchModels() {
   return await fetch(getBaseUrl() +'models')
       .then(response => response.json())
}

export async function fetchImagePaths(model: string) {
   return await fetch(
       getBaseUrl() + 'model',
       {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ "model": model})
       }
   ).then(response => response.json())
}