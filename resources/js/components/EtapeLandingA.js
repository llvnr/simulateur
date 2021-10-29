import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeLandingA extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        activite: '',
        msgActivite: '',
        section: '',
        msgSection: '',
        formContact: '',
        msgFormContact: ''

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

handleSection = (e) => {

    this.setState({
        section: e.target.value
    })

}

handleContact = (e) => {

    this.setState({
        formContact: e.target.value
    })

}

handleSubmit = (e) => {

    e.preventDefault();

    if(this.state.activite.length != 0 && this.state.section.length != 0 && this.state.formContact.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data
    
        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-landingpage-A')
    
    
        var nouvelleData = [{
            'etape': 'Landingpage - 1',
            'activite': this.state.activite,
            'section': this.state.section,
            'formContact': this.state.formContact
        }]
    
        restructuringData += JSON.stringify(nouvelleData)
    
        localStorage.setItem('etape', 'Etape-landingpage-B');
        localStorage.setItem('processus', restructuringData)
    
        this.props.history.push('/etape-landingpage-b');


    }
    else
    {

        if(this.state.activite.length == 0)
        {

            this.setState({
                msgActivite: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgActivite: "" });
            }, 2000);

        }
        else if(this.state.section.length == 0)
        {

            this.setState({
                msgSection: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgSection: "" });
            }, 2000);

        }
        else if(this.state.formContact.length == 0)
        {

            this.setState({
                msgFormContact: 'Veuillez cocher un choix.'
            })
            setTimeout(() => {
            this.setState({ msgFormContact: "" });
            }, 2000);

        }

    }

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

                        LandingPage - Etape 1

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
                        <p className="text-danger">{this.state.msgActivite}</p>

                        <h2 className="text-justify mt-5 mb-2 text-dark"> 

                            Combien de sections ?

                        </h2>

                        <p className="text-justify mt-2 mb-2 text-dark"> 

                            Une section, c'est une partie, votre landingpage peut contenir plusieurs sections, mais il est conseillé 
                            de ne pas trop en mettre pour que la page ne soit pas trop longue. 

                        </p>


                        <select className="form-select" onChange={this.handleSection}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <p className="text-danger">{this.state.msgSection}</p>

                        <h2 className="text-justify mt-5 mb-2 text-dark" style={{ color: '#E3A948' }}> 

                            Avez-vous besoin d'un formulaire de contact ?

                        </h2>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="Oui" name="contact" onClick={this.handleContact} />
                            <label class="form-check-label text-dark">Oui</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" value="Non" name="contact" onClick={this.handleContact} />
                            <label class="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgFormContact}</p>

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

export default withRouter(EtapeLandingA);