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

    return (
        <>
            <Header/>
            <section className="pageNotFoundContainer">
                {cells.map(cell => cell)}
                <div className="content">
                    {titles.map(title => title)}
                </div>
                <img src={coolCat} alt={"En kul katt som plaster på såret at du ikke fant det du lette etter"}/>
                <div>
                    <p>4</p>
                    <p>0</p>
                    <p>4</p>
                </div>
            </section>
        </>
    )
};