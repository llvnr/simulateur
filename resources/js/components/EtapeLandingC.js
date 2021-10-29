import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeLandingC extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        pluginsGratuit: '',
        pluginsPayant: '',
        design: ''

    }

}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-landingpage-B');

    this.props.history.push('/etape-landingpage-b');

}

handlePluginsGratuit = (e) => {

    this.setState({

        pluginsGratuit: e.target.value

    })

}

handlePluginsPayants = (e) => {

    this.setState({

        pluginsPayant: e.target.value

    })

}

handleDesign = (e) => {

    this.setState({

        design: e.target.value

    })

}


handleSubmit = (e) => {

    e.preventDefault();

    var restructuringData = []

    restructuringData += this.state.data

    localStorage.setItem('prevProcessus', restructuringData)
    localStorage.setItem('prevEtape', 'Etape-landingpage-C')

    var nouvelleData = [{
        'etape': 'Landingpage - 3',
        'pluginsGratuit': this.state.pluginsGratuit,
        'pluginsPayant': this.state.pluginsPayant,
        'design': this.state.design
    }]

    restructuringData += JSON.stringify(nouvelleData)

    localStorage.setItem('etape', 'Etape-landingpage-D');
    localStorage.setItem('processus', restructuringData)

    this.props.history.push('/etape-landingpage-d');

}

componentDidMount()
{

    const dataProcessus = localStorage.getItem('processus');

    this.setState({
        data: dataProcessus
    })

}

render() {

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

                        LandingPage - Etape 3

                    </h1>

                    <div className="mt-5">

                        <form onSubmit={this.handleSubmit}>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin de plugins gratuit supplémentaire ?

                        </h3>

                        <div className="mb-3">
                            <label className="form-label text-dark">Si oui, remplissez le champ suivant avec le nom des plugins qui vous intéresse ou si vous ne savez pas décrivez au mieux ce que doit faire les plugins : </label>
                            <textarea className="form-control" onChange={this.handlePluginsGratuit} rows="3"></textarea>
                        </div>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin de plugins payant supplémentaire ?

                        </h3>

                        <div className="mb-3">
                        <label className="form-label text-dark">Si oui, remplissez le champ suivant avec le nom des plugins qui vous intéresse ou si vous ne savez pas décrivez au mieux ce que doit faire les plugins : </label>
                        <textarea className="form-control" onChange={this.handlePluginsPayants} rows="3"></textarea>
                        </div>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous des inspirations graphiques pour votre site ? 

                        </h3>

                        <div className="mb-3">
                        <label className="form-label text-dark">Si oui, collez les liens qui peuvent nous aider : </label>
                        <textarea className="form-control"  onChange={this.handleDesign} rows="3"></textarea>
                        </div>

                        <br/>
                        <br/>
                        <button className="btn float-start mt-5 btn-dark" onClick={this.handleReturn}>Retour à l'étape précédente</button>
                        <button type="submit" className="btn float-end mt-5 btn-dark">Suivant</button>
                        </form>
                    </div>
 
                </div>

                
                <br/>
                <br/>
                <br/>

            </div>
        </Fragment>
        );
    }

}

export default withRouter(EtapeLandingC);