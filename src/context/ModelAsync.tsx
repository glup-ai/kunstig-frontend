import React, {Dispatch, SetStateAction, useEffect, useState} from "react"
import { Model } from "../utils/types"
import {getBaseUrl} from "../utils/utils";

export interface ModelsAsyncState {
    data?: Model[];
    error: boolean;
}

interface ModelsAsync {
    modelsAsyncState: ModelsAsyncState,
    updateModelsAsyncState: Dispatch<SetStateAction<ModelsAsyncState>>
}

const initialState = {data: undefined, error: false};

export const ModelsAsyncContext = React.createContext<ModelsAsync>({modelsAsyncState: initialState, updateModelsAsyncState: () => {}});

export const ModelsAsyncProvider = ({children}) => {
    const [modelsAsyncState, updateModelsAsyncState] = useState(initialState);

    useEffect(() => {
        async function fetchModels() {
            await fetch(getBaseUrl() + 'models')
                .then(response => {
                    if(!response.ok) {
                        updateModelsAsyncState({ data: undefined, error: true});
                    }

                    return response.json() as Promise<{ models: Model[] }>;
                })
                .then(result => {
                    updateModelsAsyncState({data: result.models, error: false})
                })
        }
        fetchModels();
    }, []);

    return (
        <ModelsAsyncContext.Provider value={{modelsAsyncState: modelsAsyncState, updateModelsAsyncState: updateModelsAsyncState}}>
            {children}
        </ModelsAsyncContext.Provider>
    );
};