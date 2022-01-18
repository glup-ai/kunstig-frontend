import Header from './components/Header';
import './App.scss';
import  { Models } from "./components/Models";
import {FunctionComponent, useEffect, useState} from "react";
import {getModels} from "./utils/async";
import {Model} from "./utils/types";

const App: FunctionComponent = () => {
    return (
        <main className="mainContainer">
            <Header />
            <Models />
        </main>
    );
};

export default App;
