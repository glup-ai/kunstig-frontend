import { FunctionComponent, useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { saveAs } from 'file-saver';

import Download from '../Download/Download.js';
import ArrowButton from '../Arrow/ArrowButton';
import './artgenerator.css';
import { getBaseUrl } from '../../utils/utils.js';

export const ArtGenerator: FunctionComponent = () => {
  const [images, setImages] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImage = () => {
    setIsLoading(true);
    fetch(getBaseUrl() + 'portrait')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.blob())
      .then((blob) => {
        setImages([...images, URL.createObjectURL(blob)]);
        setCurrIndex(currIndex + 1);

        setIsLoading(false);
      });
  };

  useEffect(() => {
    const fetchImageInitially = () => {
      setIsLoading(true);
      fetch(getBaseUrl() + 'portrait')
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.blob())
        .then((blob) => {
          setImages([URL.createObjectURL(blob)]);
          setCurrIndex(0);

          setIsLoading(false);
        });
    };
    fetchImageInitially();
  }, []);

  const downlaodImage = (img) => {
    if (img) {
      saveAs(img, 'image.jpg');
    }
  };

  const previousImage = () => {
    setCurrIndex(currIndex > 0 ? currIndex - 1 : 0);
  };

  return (
    <section className="artgeneratorContainer">
      <div className="artgeneratorImageContainer">
        <ArrowButton
          handleOnClick={previousImage}
          rotation="left"
          disabled={isLoading}
        />
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
            <img alt="AI-generated art by kunstig" src={images[currIndex]} />
          )}
        </div>
        <ArrowButton
          handleOnClick={() => fetchImage()}
          rotation="right"
          disabled={isLoading}
        />
      </div>
      <div className="dowloadButtonContainer">
        <button
          className="artgeneratorButtonContainer"
          onClick={() => downlaodImage(images[currIndex])}
        >
          <Download />
        </button>
      </div>
    </section>
  );
};

export default ArtGenerator;
