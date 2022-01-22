import {FunctionComponent, useEffect, useState} from "react";
import {fetchModels} from "../../utils/async";
import {Model} from "../../utils/types";
import './models.scss'
import {Link} from "react-router-dom";

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

    const [models, setModels] = useState<Model[]>([])
    useEffect(() => {
        fetchModels()
            .then(response => setModels(response.models))
    }, [])

    return (
        <section className="modelsContainer">
            <div className="modelLinksContainer">
            {models.map((model, index) =>
                <ModelLink displayName={model.displayName} name={model.name} key={index}/>
            )}
            </div>
        </section>
    );
};
