import {getBaseUrl} from "./utils";
import {Dispatch, SetStateAction} from "react";
import {GalleryAsyncResponse, GalleryAsyncState} from "./types";


function requestImageFromModel(model: string, updateState: Dispatch<SetStateAction<GalleryAsyncState>>) {
    let error = false;
    return fetch(
        getBaseUrl() + 'model',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"model": model})
        }
    )
        .then(response => {
            if(!response.ok) {
                error = true;
                updateState({data: undefined, error: true})
            }
            return response
        })
        .then(response => response.json())
        .then(data => data as GalleryAsyncResponse)
        .then(data => {
            if(!error) {
                updateState({data: data, error: false})
            }
        })
}
function requestImagesFromAllModels(updateState: Dispatch<SetStateAction<GalleryAsyncState>>){
    let error = false;
    return fetch(
        getBaseUrl() + 'images',
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    )
        .then(response => {
            if(!response.ok) {
                error = true;
                updateState({data: undefined, error: true})
            }
            return response
        })
        .then(response => response.json())
        .then(data => data as GalleryAsyncResponse)
        .then(data => {
            if(!error) {
                updateState({data: data, error: false})
            }
        })
}

export async function fetchImagePaths(updateState: Dispatch<SetStateAction<GalleryAsyncState>>, model?: string) {
    updateState(state => ({data: state.data, error: false}))
    if (model) {
        await requestImageFromModel(model, updateState);
    }
    else {
        await requestImagesFromAllModels(updateState);
    }
}