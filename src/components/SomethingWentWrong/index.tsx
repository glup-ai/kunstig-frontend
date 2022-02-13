import errorCat from '../../images/errorCat.jpg';
import './somethingWentWrong.scss';
import React from "react";

export const SomethingWentWrong: React.FC = () => (
    <div className="errorContainer">
        <p className="glitch">
            <span aria-hidden="true">Noe gikk galt</span>
            Noe gikk galt
            <span aria-hidden="true">Noe gikk galt</span>
        </p>
        <img className="surprisedCat" alt="Overrasket katt" src={errorCat}/>
    </div>
)