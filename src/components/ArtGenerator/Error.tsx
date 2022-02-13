import errorCat from '../../images/errorCat.jpg';
import './error.scss';
export const Error = () => (
    <div className="errorContainer">
        <p className="glitch">
            <span aria-hidden="true">Noe gikk galt</span>
            Noe gikk galt
            <span aria-hidden="true">Noe gikk galt</span>
        </p>
        <img alt="Overrasket katt" src={errorCat}/>
    </div>
)