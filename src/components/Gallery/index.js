import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { saveAs } from 'file-saver'

import Download from '../Download/Download.js';

import './Gallery.css'
import ArrowButton from '../Arrow/ArrowButton.js';

const Gallery = () => {
    const [imageState, setImageState] = useState({
        currIndex: null,
        images: []
    })

    const [isLoading, setIsLoading] = useState(true)

    const fetchImage = () => {
        fetch("https://glup-kunstig-api.azurewebsites.net/portrait")
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.blob())
            .then(blob => {
                setImageState({
                    currIndex: imageState.currIndex === null ? 0 : imageState.currIndex + 1,
                    images: [...imageState.images, URL.createObjectURL(blob)]
                })
                setIsLoading(false)

            })

    }

    useEffect(() => {
        fetchImage()
    }, [isLoading])

    const downlaodImage = (img) => {
        if (img) {
            saveAs(img, 'image.jpg')
        }
    }

    const previousImage = () => {
        setImageState({
            ...imageState,
            currIndex: imageState.currIndex > 0 ? imageState.currIndex - 1 : 0
        })
    }

    const currentImage = imageState.images[imageState.currIndex]
    return (
        <section className="galleryContainer">
            <div className="galleryImgContainer">

                <ArrowButton handleOnClick={previousImage} rotation="left" />
                <div className="imageContainer">
                    {isLoading
                        ?
                        <Loader
                            type="Rings"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            visible={isLoading}
                        />
                        :
                        <img alt="AI-generated art by kunstig" src={currentImage} />}
                </div>
                <ArrowButton handleOnClick={() => setIsLoading(!isLoading)} rotation="right" />
            </div>
            <div className="galleryDowloadButtonContainer">
                <button className="galleryButton" onClick={() => downlaodImage(currentImage)}><Download /></button>
            </div>
        </section>
    );
}

export default Gallery;
