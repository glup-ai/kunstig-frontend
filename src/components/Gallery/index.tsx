import {FunctionComponent, useEffect, useState} from "react";
import Header from "../Header";
import './gallery.scss';
import {useParams} from "react-router-dom";
import {fetchImagePaths} from "../../utils/async";
import { GalleryAsync } from "../../utils/types";
import {mockImages} from "../../utils/utils";

// TODO: no name from url should fetch images from all models
export const Gallery: FunctionComponent = () => {
    const { name } = useParams();

    const [gallery, setGallery] = useState<GalleryAsync>();
    useEffect(() => {
        fetchImagePaths(name)
            //.then(response => setGallery(response)) // TODO: local development
            .then(res => setGallery({displayName: "Halla", images: [...mockImages, ...mockImages,]}))
    })
    return (
    <>
        <Header/>
        <section className="galleryContainer">
            <div className="imagesContainer">
                {gallery?.images?.map((img, index) =>
                    <img className="imageContainer" src={img} alt={`Art-piece made by ${name ?? "Kunstig"}`}/>
                )}
            </div>
        </section>
    </>); 
}