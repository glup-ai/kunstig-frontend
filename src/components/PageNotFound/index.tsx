import coolCat from '../../images/coolcat.jpeg';
import {Header} from "../Header";
import './pageNotFound.scss';

let titles = []
for(let i = 0; i < 10; i++) {
    titles.push(<div className="css">Woops</div>);
}

let cells = []
for(let i = 0; i < 50; i++) {
    cells.push(<div className="cell"/>);
}

export const PageNotFound = () => {
    // todo: https://codepen.io/finnhvman/pen/BGmygj
    return (
        <>
            <Header/>
            <section className="pageNotFoundContainer">
                <div className="pageNotFoundTitleContainer">
                {cells.map(cell => cell)}
                <div className="content">
                    {titles.map(title => title)}
                </div>
                <img src={coolCat} alt={"En kul katt som plaster på såret at du ikke fant det du lette etter"}/>
                </div>
                <div className="deconstructed">
                    404
                    <div>404</div>
                    <div>404</div>
                    <div>404</div>
                    <div>404</div>
                </div>
            </section>
        </>
    )
};