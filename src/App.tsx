import './App.scss';
import { FunctionComponent } from 'react';
import './appInsights/appInsights';
import {Gallery} from "./components/Gallery";

const App: FunctionComponent = () => {
    return (
        <main className="mainContainer">
            <Gallery />
        </main>
    );
};

export default App;
