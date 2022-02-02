import {FunctionComponent, useCallback, useContext, useEffect, useState} from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { saveAs } from 'file-saver';

import './artgenerator.scss';
import { getBaseUrl } from '../../utils/utils.js';
import { Header } from "../Header";
import { useParams } from "react-router-dom";
import {ModelsAsyncContext} from "../../context/ModelAsync";
import {Spinner} from "../Spinner/Spinner";

export const ArtGenerator: FunctionComponent = () => {
  const { name } = useParams();
  const [image, setImage] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [currentModel, setCurrentModel] = useState(name ?? "nonfigurativAbstrusivitet")
  const {modelsAsyncState} = useContext(ModelsAsyncContext);

  const fetchImage = useCallback(() => {
    setIsLoading(true);
    fetch(getBaseUrl() + 'generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "model": currentModel })
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
        setIsLoading(false);
      });
  }, [currentModel]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  const downloadImage = (img) => {
    if (img) {
      saveAs(img, 'image.jpg');
    }
  };

  const options = modelsAsyncState.data?.map(model => ({value: model.name, label: model.displayName}))

  return (
    <>
      <Header />
      <section className="artgeneratorContainer">
        <div className="artgeneratorDropdownContainer">
          {options && <Dropdown
              options={options}
              onChange={event => setCurrentModel(event.value)}
              value={currentModel}
              placeholder="Velg en AI-kunstner"
              className="artgeneratorDropdown"
              controlClassName="artgeneratorDropdownControl"
              menuClassName="artgeneratorDropdownMenu"
              arrowClassName="artgeneratorDropdownArrow"
          />}
        </div>
        <div className="artgeneratorImageContainer">
          <div className="artgeneratorImage">
            {isLoading ? (
              <Spinner/>
            ) : (
              <img alt="AI-generated art by kunstig" src={image} />
            )}
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
            onClick={() => downloadImage(image)}
          >
            <p>Last ned bildet</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default ArtGenerator;
