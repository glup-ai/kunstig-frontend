import {FunctionComponent} from "react";


interface ModelProps {
    displayName: string;
}
const Model: FunctionComponent<ModelProps> = ({displayName}) => (
    <div className="modelContainer">
        {displayName}
    </div>
)

const models = [
    {
        name: "absintePortretter",
        displayName: "Absinte Portretter"
    },
    {
        name: "gallaktiskeSphaerer",
        displayName: "Gallaktiske Sphærer"
    },
    {
        name: "kunstNStuff",
        displayName: "Kunst n' Stuff"
    }
]

export const Models: FunctionComponent = () => {
    return (
        <section className="modelsContainer">
            {models.map((model, index) =>
                <Model displayName={model.displayName} key={index}/>
            )}
        </section>
    );
};
