import React, {Component, ReactNode} from "react";

import cuteDog from '../../images/cuteDog.jpg';
import './errorBoundary.scss'
interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return {hasError: true};
    }

    public render() {
        if (this.state.hasError) {
            return (
                <section className="errorBoundaryContainer">
                    <h1>Oi... her gikk ikke ting helt som planlagt</h1>
                    <h2>Her har du et bilde av en søt jente med en søt valp i stedet for️</h2>
                    <div className="errorBoundaryImageContainer red">
                        <div className="red">
                        <div className="orange">
                            <div className="yellow">
                                <div className="green">
                                    <div className="blue">
                                        <div className="purple">
                                            <img src={cuteDog} alt="Jente som holder valp"/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;