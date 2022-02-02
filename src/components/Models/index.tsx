import {FunctionComponent, useContext} from "react";
import './models.scss'
import {Link} from "react-router-dom";
import { ModelsAsyncContext } from "../../context/ModelAsync";

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
    const {modelsAsyncState} = useContext(ModelsAsyncContext);

    if(modelsAsyncState.error) {
        return <h1>TODO: bedre feilhåndtering</h1>
    }

    return (
        <section className="modelsContainer">
            <div className="modelLinksContainer">
            {modelsAsyncState.data?.map((model, index) =>
                <ModelLink displayName={model.displayName} name={model.name} key={index}/>
            )}
            </div>
        </section>
    );
};
