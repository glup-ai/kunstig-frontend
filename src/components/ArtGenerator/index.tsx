import {FunctionComponent, useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {saveAs} from 'file-saver';

import {getBaseUrl} from '../../utils/utils.js';
import {ArtGeneratorAsyncState} from "../../utils/types";
import {ModelsAsyncContext} from "../../context/ModelAsync";

import {SomethingWentWrong} from "../SomethingWentWrong";
import {Header} from "../Header";
import {Spinner} from "../Spinner/Spinner";

import './artgenerator.scss';
import { appInsights } from '../../appInsights/appInsights';

export const ArtGenerator: FunctionComponent = () => {
    const {name} = useParams();

    const [artGeneratorAsyncState, setArtGeneratorAsyncState] = useState<ArtGeneratorAsyncState>({
       image: undefined,
       loading: true,
       error: false
    })
    const [currentModel, setCurrentModel] = useState(name)
    const {modelsAsyncState} = useContext(ModelsAsyncContext);

    const fetchImage = useCallback(() => {
        let error = false;
        setArtGeneratorAsyncState(state => ({...state, loading: true, error: false}))
        fetch(getBaseUrl() + 'generate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"model": currentModel ?? "nonfigurativAbstrusivitet"})
        })
            .then((response) => {
                if (!response.ok) {
                    error = true;
                    setArtGeneratorAsyncState({ image: undefined, loading: false, error: true })
                }
                appInsights.appInsights.trackEvent({name: 'fetchImage', properties: {
                    currentModel: currentModel,
                    responseStatus: response.status
                }})
                return response;
            })
            .then((response) => response.blob())
            .then((blob) => {
                if(!error) {
                    setArtGeneratorAsyncState({ image: URL.createObjectURL(blob), loading: false, error: false })
                }
            });
    }, [currentModel]);

    useEffect(() => {
        fetchImage();
    }, [fetchImage]);

    const downloadImage = (img) => {
        if (img) {
            saveAs(img, 'image.jpg');
            appInsights.appInsights.trackEvent({name: 'downloadImage', properties: {
                currentModel: currentModel
            }})
        }
    };

    const options = modelsAsyncState.data?.map(model => ({value: model.name, label: model.displayName})) ?? []

    const content = artGeneratorAsyncState.error
        ? <SomethingWentWrong/>
        : artGeneratorAsyncState.loading
        ? <Spinner/>
        : artGeneratorAsyncState.image
        ?  <img alt="Kunst generert av vår kunstig intelligente modell, Kunstig" src={artGeneratorAsyncState.image}/>
        : "Ukjent feil"

    const initialDisplayName = modelsAsyncState?.data?.find(model => model.name === name)?.displayName
    return (
        <>
            <Header/>
            <section className="artgeneratorContainer">
                <div className="artgeneratorDropdownContainer">
                    {options && <Dropdown
                        options={options}
                        onChange={event => setCurrentModel(event.value)}
                        value={initialDisplayName ?? undefined}
                        placeholder="Velg en AI-kunstner"
                        className="artgeneratorDropdown"
                        controlClassName="artgeneratorDropdownControl"
                        menuClassName="artgeneratorDropdownMenu"
                        arrowClassName="artgeneratorDropdownArrow"
                    />}
                </div>
                <div className="artgeneratorImageContainer">
                    <div className="artgeneratorImage">
                        {content}
                    </div>
                </div>
                <div className="actionButtonsContainer">
                    <button
                        className="actionButtonContainer"
                        onClick={() => fetchImage()}
                    >
                        <p>Generer ny kunst</p>
                    </button>

                    <button
                        className="actionButtonContainer"
                        onClick={() => downloadImage(artGeneratorAsyncState.image)}
                    >
                        <p>Last ned bildet</p>
                    </button>
                </div>
            </section>
        </>
    );
};

export default ArtGenerator;
