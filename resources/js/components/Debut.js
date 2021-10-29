import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class Debut extends Component {

constructor(props){
    super(props)

    
}

handleReprendre = (e) => {

    const etape = localStorage.getItem('etape');
    console.log(etape)
    switch (etape) {
        case 'Etape-Un-Oui':
            this.props.history.push('/etape-un-oui');
            break;
        case 'Etape-deux':
            this.props.history.push('/etape-deux');
            break;
        case 'Etape-landingpage-A':
            this.props.history.push('/etape-landingpage-a');
            break;
        case 'Etape-landingpage-B':
            this.props.history.push('/etape-landingpage-b');
            break;
        case 'Etape-landingpage-C':
            this.props.history.push('/etape-landingpage-c');
            break;
        case 'Etape-landingpage-D':
            this.props.history.push('/etape-landingpage-d');
            break;
        case 'Etape-Application-A':
            this.props.history.push('/etape-application-a');
            break;
        case 'Etape-Application-B':
            this.props.history.push('/etape-application-b');
            break;
        case 'Etape-Application-C':
            this.props.history.push('/etape-application-c');
            break;
        case 'Etape-Application-D':
            this.props.history.push('/etape-application-d');
            break;
        case 'Etape-vitrine-A':
            this.props.history.push('/etape-vitrine-a');
            break;
        case 'Etape-Vitrine-B':
            this.props.history.push('/etape-vitrine-b');
            break;
        case 'Etape-Vitrine-C':
            this.props.history.push('/etape-vitrine-c');
            break;
        case 'Etape-Vitrine-D':
            this.props.history.push('/etape-vitrine-d');
            break;
        case 'Derniere-Etape':
            this.props.history.push('/derniere-etape');
            break;
        default:
            break;
    }

}

handleStart = (e) => {

    localStorage.clear();
    var GenerationSimulation = localStorage.setItem('simulation', true);

    this.props.history.push('/etape-un');

}

render() {

        const Simulation = localStorage.getItem('simulation');
        const Etape = localStorage.getItem('etape');

        return (
        <Fragment>
            <div className="container mt-2">
                
                <p className="text-justify mt-2 mb-2 text-dark"> 

                    Bienvenue, vous êtes sur le questionnaire qui va nous aider 
                    à mieux connaître votre projet afin de pouvoir établir une 
                    tarification raisonnable avec le maximum d'informations.

                </p>

                <div style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                        Simulation de projet

                    </h1>

                    <div className="mt-5">

                        <center>
                            {Simulation && Etape != "Final" ? (
                                <div>
                                    <button className="btn mt-5 btn-dark" onClick={this.handleReprendre}>Reprendre une simulation</button><br/>
                                    <button className="btn mt-2 btn-dark" onClick={this.handleStart}>Nouvelle simulation</button>
                                </div>
                            ) : (
                                <button type="submit" className="btn mt-2 btn-dark" onClick={this.handleStart}>Nouvelle simulation</button>
                            )}

                        </center>
                    </div>
 
                </div>

            </div>
        </Fragment>
        );
    }

}

export default withRouter(Debut);