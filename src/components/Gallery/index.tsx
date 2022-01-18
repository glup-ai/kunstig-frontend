import { FunctionComponent } from "react";
import Header from "../Header";
import { mockImages } from "../../utils/utils";
import './gallery.scss';

interface ImageProps {
    path: string; 
}
const Image: FunctionComponent<ImageProps> = ({ path }) =>
    <div className="imageContainer">
        <img src={path} alt={""}/>
    </div>

const Gallery: FunctionComponent = () => {
    return (
    <>
        <Header/>
        <section className="galleryContainer">
            <div className="imagesContainer">
            {mockImages.map((img, index) =>
                <Image key={index} path={img}/>
            )}
            </div>

        </section>
    </>); 
}

export default Gallery;