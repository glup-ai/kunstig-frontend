import {FunctionComponent, useEffect, useState} from "react";
import {getModels} from "../../utils/async";
import {Model} from "../../utils/types";


interface ModelProps {
    displayName: string;
}
const ModelLink: FunctionComponent<ModelProps> = ({displayName}) => (
    <div className="modelContainer">
        {displayName}
    </div>
)


export const Models: FunctionComponent = () => {
    const [models, setModels] = useState<Model[]>([])
    useEffect(() => {
        getModels()
            .then(response => setModels(response.models))
    }, [])

    return (
        <section className="modelsContainer">
            {models.map((model, index) =>
                <ModelLink displayName={model.displayName} key={index}/>
            )}
        </section>
    );
};
