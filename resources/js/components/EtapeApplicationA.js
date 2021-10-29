import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeApplicationA extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        activite: '',
        msgActivite: '',
        typeApplication: '',
        msgTypeApplication: '',
        description: '',
        msgDescription: ''

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

handleTypeApplication = (e) => {

    this.setState({

        typeApplication: e.target.value

    })

}

handleDescription = (e) => {

    this.setState({

        description: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.activite.length != 0 && this.state.typeApplication.length != 0 && this.state.description.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data

        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-Application-A')

        var nouvelleData = [{
            'etape': 'Application - 1',
            'activite': this.state.activite,
            'typeApplication': this.state.typeApplication,
            'description': this.state.description
        }]

        restructuringData += JSON.stringify(nouvelleData)

        localStorage.setItem('etape', 'Etape-Application-B');
        localStorage.setItem('processus', restructuringData)

        this.props.history.push('/etape-application-b');

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
        else if(this.state.typeApplication.length == 0)
        {

            this.setState({
                msgTypeApplication: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgTypeApplication: "" });
            }, 2000);

        }
        else if(this.state.description.length == 0)
        {

            this.setState({
                msgDescription: 'La description est obligatoire.'
            })
            setTimeout(() => {
            this.setState({ msgDescription: "" });
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

                <div style={{ marginTop: '15%', marginBottom: '15%' }}>
                    <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                        Application - Etape 1

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

                                Type d'application

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Extranet" name="typeApp" onClick={this.handleTypeApplication} />
                                <label className="form-check-label text-dark">Extranet</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Intranet" name="typeApp" onClick={this.handleTypeApplication} />
                                <label className="form-check-label text-dark">Intranet</label>
                            </div>
                            <p className="text-danger">{this.state.msgTypeApplication}</p>


                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                            Description du projet

                            </h2>
                            <p className="text-justify mt-2 mb-2 text-dark"> 

                                Décrivez un maximum votre projet en apportant un maximum de détails pour 
                                compléter le questionnaire. <br/> Les grandes lignes, vos attentent, vos objectifs, 
                                les subtilités, les complexités, etc.

                            </p>

                            <div>
                            <textarea className="form-control" onChange={this.handleDescription} rows="3"></textarea>
                            </div>
                            <p className="text-danger">{this.state.msgDescription}</p>

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

export default withRouter(EtapeApplicationA);