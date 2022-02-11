import coolCat from '../../images/coolcat.jpeg';
import {Header} from "../Header";
import './pageNotFound.scss';

export const PageNotFound = () => (
    <>
        <Header/>
        <section className="pageNotFoundContainer">
            <h1 className="pageNotFoundTitle">Woops, sikker på du skulle hit?</h1>
            <img src={coolCat} alt={"En kul katt som plaster på såret at du ikke fant det du lette etter"}/>
            <div>
                <p>4</p>
                <p>0</p>
                <p>4</p>
            </div>
        </section>
    </>
);