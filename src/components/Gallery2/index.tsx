import { FunctionComponent } from "react";
import Header from "../Header";
import { mockImages } from "../../utils/utils";

const Gallery2: FunctionComponent = () => {
    
    return (
    <>
        <Header/>
        <section>
            <div data-aos="fade-up">
                <img src={mockImages[0]}/>
            </div>
            <div data-aos='fade-up'>   
                <p>I am animated!</p>
            </div>
        </section>
    </>); 
}

export default Gallery2; 