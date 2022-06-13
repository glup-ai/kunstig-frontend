import {Dispatch, FunctionComponent, SetStateAction, useContext, useEffect, useState} from "react";
import Tilt from 'react-parallax-tilt';

import './gallery.scss';
import {Link, useParams} from "react-router-dom";
import {fetchImagePaths} from "../../utils/async";
import { Header } from "../Header";
import {GalleryAsyncState} from "../../utils/types";
import {SomethingWentWrong} from "../SomethingWentWrong";
import {ModelsAsyncContext} from "../../context/ModelAsync";

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
                alt={`Kunstverk laget av ${name ?? "Kunstig"}`}
                placeholder="blur"
                loading="lazy"
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
    const {modelsAsyncState} = useContext(ModelsAsyncContext);

    if (!description) {
        return (<div className="galleryDescription">
            {modelsAsyncState?.data
              ?.filter(model => model.name !== "munch")
              ?.map(model =>
                <Link className="generateArtFromModelLink" to={`/galleri/${model.name}`} key={model.name}>
                    {model.displayName}
                </Link>
            )}
        </div>)
    }
    return (
        <div className="galleryDescription">
            {description}
            <Link className="generateArtLink" to={`/generer/${name}`}>
                Lag din egen kunst
            </Link>
            {(name === 'portretterteRariteter' || name === 'nonfigurativAbstrusivitet' || name === 'galaktiskeSfærer') &&
                <Link className="generateArtLink" to={`/om/${name}`}>
                    Se video
                </Link>
            }
        </div>)
}

export const Gallery: FunctionComponent = () => {
    const { name } = useParams();
    const [galleryAsyncState, setGalleryAsyncState] = useState<GalleryAsyncState>({
        error: false,
        data: undefined
    });
    const [displayImage, setDisplayImage] = useState<string>()

    useEffect(() => {
        fetchImagePaths(setGalleryAsyncState, name)
    }, [name])

    return (
        <>
            <Header/>
            <section className="galleryContainer">
                <div className={displayImage ? "overlay" : "" }>
                    {displayImage && <DisplayImage img={displayImage} removeSetDisplay={setDisplayImage}/>}
                </div>
                {galleryAsyncState.error
                    ? <div className="galleryErrorContainer"><SomethingWentWrong/></div>
                    : (
                        <div className="imagesContainer">
                            <GenerateArtButton description={galleryAsyncState?.data?.description} name={name}/>
                            {galleryAsyncState?.data?.images?.map((img, index) =>
                                <Image
                                    key={index}
                                    index={index}
                                    img={img}
                                    name={name}
                                    setDisplayImage={setDisplayImage}
                                />
                            )}
                        </div>
                    )}
            </section>
        </>
    );
}