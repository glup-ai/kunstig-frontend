import {Dispatch, FunctionComponent, SetStateAction, useEffect, useState} from "react";
import Header from "../Header";
import './gallery.scss';
import {useParams} from "react-router-dom";
import {fetchImagePaths} from "../../utils/async";
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
    <div className="displayImage">
        <button onClick={() => removeSetDisplay("")}>X</button>
        <img src={img} alt="Larger view of chosen art-piece"/>
    </div>
)

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
                {displayImage && <DisplayImage img={displayImage} removeSetDisplay={setDisplayImage}/>}
                <div className="imagesContainer">
                    <div className="galleryDescription">
                        {gallery?.description}
                    </div>
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