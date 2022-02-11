import {Dispatch, FunctionComponent, SetStateAction, useEffect, useState} from "react";
import Tilt from 'react-parallax-tilt';

import './gallery.scss';
import {Link, useParams} from "react-router-dom";
import {fetchImagePaths} from "../../utils/async";
import { Header } from "../Header";
import { GalleryAsync } from "../../utils/types";

interface ImageProps {
    img: string;
    name: string;
    setDisplayImage: Dispatch<SetStateAction<string>>;
    index: number;
}
const Image = ({img, name, setDisplayImage, index}: ImageProps) => {
    const [isClicked, setIsClicked] = useState(false)
    const handleOnClick = () => {
        setDisplayImage(!isClicked ? img : "")
        setIsClicked(!isClicked)
    }
    return (
        <div onClick={handleOnClick} className={`galleryItem galleryItem__${index}`}>
            <img
                className="imageContainer"
                src={img}
                alt={`Art-piece made by ${name ?? "Kunstig"}`}
            />
        </div>
    )
}

interface DisplayImageProps {
    img: string;
    removeSetDisplay: Dispatch<SetStateAction<string>>;
}

const DisplayImage = ({ img, removeSetDisplay }: DisplayImageProps) =>  (
    <Tilt
        className="displayImage"
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
    >
        <button onClick={() => removeSetDisplay(undefined)}>X</button>
        <img src={img} alt="Forstørret visning av kunstverket som ble trykket på"/>
    </Tilt>
)

interface GenerateArtButtonProps {
    description?: string;
    name: string;
}

const GenerateArtButton = ({ description, name }: GenerateArtButtonProps) => {
    if (!description) {
        return <></>
    }
    return (
        <div className="galleryDescription">
            {description}
            <Link className="generateArtLink" to={`/generer/${name}`}>
                Lag din egen kunst
            </Link>
        </div>)
}
// TODO: no name from url should fetch images from all models
export const Gallery: FunctionComponent = () => {
    const { name } = useParams();
    const [gallery, setGallery] = useState<GalleryAsync>();
    const [displayImage, setDisplayImage] = useState<string>()

    useEffect(() => {
        fetchImagePaths(name)
            .then(response => setGallery(response))
    }, [name])

    return (
        <>
            <Header/>
            <section className="galleryContainer">
                <div className={displayImage ? "overlay" : "" }>
                    {displayImage && <DisplayImage img={displayImage} removeSetDisplay={setDisplayImage}/>}
                </div>
                <div className="imagesContainer">
                    <GenerateArtButton description={gallery?.description} name={name} />
                    {gallery?.images?.map((img, index) =>
                        <Image
                                key={index}
                                index={index}
                                img={img}
                                name={name}
                                setDisplayImage={setDisplayImage}
                        />
                    )}
                </div>
            </section>
        </>
    );
}