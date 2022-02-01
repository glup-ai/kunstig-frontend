import {FunctionComponent, useContext} from "react";
import './models.scss'
import {Link} from "react-router-dom";
import { KunstigContext } from "../../context/Context";

interface ModelProps {
    displayName: string;
    name: string;
}
const ModelLink: FunctionComponent<ModelProps> = ({displayName, name}) => {
    return (
    <div className="modelContainer">
            <Link className="modelLink" to={`/galleri/${name}`}>{displayName}</Link>
            <div className="modelLinkLine"/>
    </div>
)}


export const Models: FunctionComponent = () => {
    const {globalState} = useContext(KunstigContext);

    console.log(globalState);

    return (
        <section className="modelsContainer">
            <div className="modelLinksContainer">
            {globalState.map((model, index) =>
                <ModelLink displayName={model.displayName} name={model.name} key={index}/>
            )}
            </div>
        </section>
    );
};
