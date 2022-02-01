import React, { Dispatch, SetStateAction, useState } from "react"
import { Model } from "../utils/types"


interface GlobalState {
    globalState: Model[],
    updateGlobalState: Dispatch<SetStateAction<Model[]>>
};

const initialGlobalState = [];

export const KunstigContext = React.createContext<GlobalState>({globalState: initialGlobalState, updateGlobalState: () => {}});

export const KunstigProvider = ({children}) => {
    const [state, setState] = useState(initialGlobalState);

    return (
        <KunstigContext.Provider value={{globalState: state, updateGlobalState: setState}}>
            {children}
        </KunstigContext.Provider>
    );
};