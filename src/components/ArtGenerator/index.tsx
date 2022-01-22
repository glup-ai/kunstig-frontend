import {FunctionComponent, useCallback, useEffect, useState} from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { saveAs } from 'file-saver';

import './artgenerator.scss';
import { getBaseUrl } from '../../utils/utils.js';
import { Header } from "../Header";
import { useParams } from "react-router-dom";

export const ArtGenerator: FunctionComponent = () => {
  const [image, setImage] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();
  const model = name ?? "absintePortretter";

  const fetchImage = useCallback(() => {
    setIsLoading(true);
    fetch(getBaseUrl() + 'generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "model": model })
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
  }, [model]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  const downloadImage = (img) => {
    if (img) {
      saveAs(img, 'image.jpg');
    }
  };

  return (
    <>
      <Header />
      <section className="artgeneratorContainer">
        <div className="artgeneratorImageContainer">
          <div className="imageContainer">
            {isLoading ? (
              <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                visible={isLoading}
              />
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
            Generate new image
          </button>

          <button
            className="actionButtonContainer"
            onClick={() => downloadImage(image)}
          >
            Download image
          </button>
        </div>
      </section>
    </>
  );
};

export default ArtGenerator;
