import {ChangeEvent, useContext, useState} from "react";
import {Header} from "../Header";
import "./writtenArtGenerator.scss";
import {getBaseUrl} from "../../utils/utils";
import {appInsights} from "../../appInsights/appInsights";
import {ArtGeneratorAsyncState} from "../../utils/types";
import {SomethingWentWrong} from "../SomethingWentWrong";
import {Spinner} from "../Spinner/Spinner";
import {Dropdown} from "../Dropdown";
import {ModelsAsyncContext} from "../../context/ModelAsync";


export const WrittenArtGenerator = () => {
  const [inputValue, setInputvalue] = useState("")
  const [modelValue, setModelValue] = useState("psykadeliskOverenstemmelse")
  const {modelsAsyncState} = useContext(ModelsAsyncContext);

  const [artGeneratorAsyncState, setArtGeneratorAsyncState] = useState<ArtGeneratorAsyncState>({
    image: undefined,
    loading: false,
    error: false
  })

  const fetchImage = () => {
    let error = false;
    setArtGeneratorAsyncState({ ...artGeneratorAsyncState, loading: true, error: false })
    fetch(getBaseUrl() + 'generate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"model": modelValue, "inputString": inputValue})
    })
      .then((response) => {
        if (!response.ok) {
          error = true;
          setArtGeneratorAsyncState({ image: undefined, loading: false, error: true })
        }
        appInsights.appInsights.trackEvent({name: 'fetchImage', properties: {
            currentModel: modelValue,
            inputString: inputValue,
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
  }

  const content = artGeneratorAsyncState.error
    ? <SomethingWentWrong/>
    : artGeneratorAsyncState.loading
      ? <Spinner/>
      : artGeneratorAsyncState.image
        ?  <img alt="Kunst generert av vår kunstig intelligente modell, Kunstig" src={artGeneratorAsyncState.image}/>
        : <></>

  return (
    <section>
      <Header/>
      <div className="writtenArtGeneratorContainer">
        {modelsAsyncState?.data &&
            <div className="writtenArtGeneratorDropdownContainer">
              <Dropdown
                  options={modelsAsyncState?.data.map(model => ({value: model.name, label: model.displayName}))}
                  handleOnChange={setModelValue}
              />
            </div>
        }
        <input
          type="text"
          placeholder="Skriv et ord..."
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputvalue(e.currentTarget.value) }
        />
        <button
          className="generateButton"
          onClick={() => fetchImage()}
        >
          <p>Generer kunst</p>
        </button>
        <div className="artgeneratorImageContainer">
          <div className="artgeneratorImage">
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}

