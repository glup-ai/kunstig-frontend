import React, { useEffect, useState } from 'react';

import { saveAs } from 'file-saver'

import Download from '../Download/Download.js';

import './Gallery.css'
import ArrowButton from '../Arrow/ArrowButton.js';

const Gallery = () => {
    const [imageState, setImageState] = useState({
        currIndex: null,
        images: []
    })

    const fetchImage = () => {
        fetch("https://glup-stig-wa.azurewebsites.net/munch")
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

            })

    }

    useEffect(() => {
        fetchImage()
    }, [])

    const downlaodImage = (img) => {
        saveAs(img, 'image.jpg')
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
                <img width="300" alt="AI-generated art by kunstig" src={currentImage} />
                <ArrowButton handleOnClick={fetchImage} rotation="right" />
            </div>
            <div className="galleryDowloadButtonContainer">
                <button className="galleryButton" onClick={() => downlaodImage(currentImage)}><Download /></button>
            </div>
        </section>
    );
}

export default Gallery;
