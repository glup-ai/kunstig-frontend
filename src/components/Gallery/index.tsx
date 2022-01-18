import {FunctionComponent, useEffect, useState} from "react";
import Header from "../Header";
import './gallery.scss';
import {useParams} from "react-router-dom";
import {fetchImagePaths} from "../../utils/async";
import { GalleryAsync } from "../../utils/types";

interface ImageProps {
    path: string;
    name: string;
}
const Image: FunctionComponent<ImageProps> = ({ path, name }) =>
    <div className="imageContainer">
        <img src={path} alt={`Art-piece made by ${name}`}/>
    </div>

export const Gallery: FunctionComponent = () => {
    const { name } = useParams();

    const [gallery, setGallery] = useState<GalleryAsync>();
    useEffect(() => {
        fetchImagePaths(name)
            .then(response => setGallery(response))
    })
    return (
    <>
        <Header/>
        <section className="galleryContainer">
            <div className="imagesContainer">
            {gallery?.images?.map((img, index) =>
                <Image key={index} path={img} name={name}/>
            )}
            </div>
        </section>
    </>); 
}