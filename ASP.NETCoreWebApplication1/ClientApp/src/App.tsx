import Header from './components/Header';
import './App.scss';
import { Models } from './components/Models';
import { FunctionComponent } from 'react';
import './appInsights/appInsights';

const App: FunctionComponent = () => {
    return (
        <main className="mainContainer">
            <Header />
            <Models />
        </main>
    );
};

export default App;
