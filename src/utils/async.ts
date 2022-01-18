import {getBaseUrl} from "./utils";

export async function getModels() {
   return await fetch(getBaseUrl() +'models')
       .then(response => response.json())
}