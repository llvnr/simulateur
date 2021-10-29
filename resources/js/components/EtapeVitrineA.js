import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeVitrineA extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        activite: '',
        page: '',
        formContact: ''

    }
    
}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-deux');

    this.props.history.push('/etape-deux');

}

handleActivite = (e) => {

    this.setState({
        activite: e.target.value
    })

}

handlePage = (e) => {

    this.setState({
        page: e.target.value
    })

}

handleContact = (e) => {

    this.setState({
        formContact: e.target.value
    })

}

handleSubmit = (e) => {

    e.preventDefault()


    var restructuringData = []

    restructuringData += this.state.data

    localStorage.setItem('prevProcessus', restructuringData)
    localStorage.setItem('prevEtape', 'Etape-vitrine-A')

    var nouvelleData = [{
        'etape': 'Vitrine - 1',
        'activite': this.state.activite,
        'page': this.state.page,
        'formContact': this.state.formContact
    }]

    restructuringData += JSON.stringify(nouvelleData)

    localStorage.setItem('etape', 'Etape-Vitrine-B');
    localStorage.setItem('processus', restructuringData)

    this.props.history.push('/etape-vitrine-b');

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

                <div style={{ marginTop: '15%', marginBottom: '15%' }}>
                    <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                        Vitrine - Etape 1

                    </h1>

                    <div className="mt-5">
                        <form onSubmit={this.handleSubmit}>
                        <h2 className="text-justify mt-5 mb-2 text-dark"> 

                            Votre secteur d'activité ?

                        </h2>

                        <select className="form-select" onChange={this.handleActivite}>
                            <option value="" selected>Sélectionnez votre secteur d'activité</option>
                            <option value="Hotellerie">Hotellerie</option>
                            <option value="Location saisonnière">Location saisonnière</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Sportif">Sportif</option>
                            <option value="Coaching">Coaching</option>
                            <option value="Vacances">Vacances</option>
                            <option value="Loisirs">Loisirs</option>
                            <option value="Santé">Santé</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Informatique / Technologie">Informatique / Technologie</option>
                            <option value="Autres">Autres</option>
                        </select>

                        <h2 className="text-justify mt-5 mb-2 text-dark"> 

                            Combien de pages ?

                        </h2>

                        <p className="text-justify mt-2 mb-2 text-dark"> 

                            Plus vous rajouter de page, plus le travail est long et cela affecte 
                            le temps développement et donc la facturation.

                        </p>

                        <select className="form-select" onChange={this.handlePage}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="10 et +">10 et +</option>
                        </select>

                        <h2 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'un formulaire de contact ?

                        </h2>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Oui" name="contact" onClick={this.handleContact} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Non" name="contact" onClick={this.handleContact} />
                            <label className="form-check-label text-dark">Non</label>
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

export default withRouter(EtapeVitrineA);