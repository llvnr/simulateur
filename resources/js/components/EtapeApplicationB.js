import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeApplicationB extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        espaceMembre: '',
        msgEspaceMembre: '',
        champsSupplementaire: 'Nom, Prénom, Pseudo, Age, Email, Mot de passe',
        roleAutorisation: '',
        msgRoleAutorisation: '',
        apiExterne: '',
        apiSurMesure: '',
        msgApiMesure: ''

    }
    
}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-Application-A');

    this.props.history.push('/etape-application-a');

}

handleEspaceMembre = (e) => {

    this.setState({

        espaceMembre: e.target.value

    })

}

handleChampSupplementaire = (e) => {

    this.setState({

        champsSupplementaire: e.target.value

    })

}

handleRoleAutorisation = (e) => {

    this.setState({

        roleAutorisation: e.target.value

    })

}

handleAPIExterne = (e) => {

    this.setState({

        apiExterne: e.target.value

    })

}

handleAPIMesure = (e) => {

    this.setState({

        apiSurMesure: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.espaceMembre.length != 0 && this.state.roleAutorisation.length != 0 && this.state.apiSurMesure.length != 0 )
    {

        var restructuringData = []

        restructuringData += this.state.data

        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-Application-B')

        var nouvelleData = [{
            'etape': 'Application - 2',
            'espaceMembre': this.state.espaceMembre,
            'champsSupplementaire': this.state.champsSupplementaire,
            'roleAutorisation': this.state.roleAutorisation,
            'apiExterne': this.state.apiExterne,
            'apiSurMesure': this.state.apiSurMesure
        }]

        restructuringData += JSON.stringify(nouvelleData)

        localStorage.setItem('etape', 'Etape-Application-C');
        localStorage.setItem('processus', restructuringData)

        this.props.history.push('/etape-application-c');

    }
    else 
    {

        if(this.state.espaceMembre.length == 0)
        {

            this.setState({
                msgEspaceMembre: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgEspaceMembre: "" });
            }, 2000);

        }
        else if(this.state.roleAutorisation.length == 0)
        {

            this.setState({
                msgRoleAutorisation: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgRoleAutorisation: "" });
            }, 2000);

        }
        else if(this.state.apiSurMesure.length == 0)
        {

            this.setState({
                msgApiMesure: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgApiMesure: "" });
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

                        Application - Etape 2

                    </h1>

                    <div className="mt-5">
                            <form onSubmit={this.handleSubmit}>

                            <h2 className="text-justify mt-5 text-dark"> 

                                Avez-vous besoin d'un espace membre ? <br/>
                                <small>(Connexion / Inscription / Gestion de profil / Confirmation de compte / Suppression du compte)</small>

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="espaceMembre" onClick={this.handleEspaceMembre} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="espaceMembre" onClick={this.handleEspaceMembre} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgEspaceMembre}</p>

                            <p className="text-justify mt-2 mb-2 text-dark"> 

                            Si oui, précisez les champs supplémentaires en plus de ceux afficher par défaut :

                            </p>

                            <div>
                            <textarea className="form-control" onChange={this.handleChampSupplementaire} rows="3" defaultValue="Nom, Prénom, Pseudo, Age, Email, Mot de passe "></textarea>
                            </div>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin de gérer des rôles et des autorisations ?

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="role" onClick={this.handleRoleAutorisation} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="role" onClick={this.handleRoleAutorisation} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgRoleAutorisation}</p>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin de communiquer avec des API externes ?

                            </h2>
                            <p className="text-justify mt-2 mb-2 text-dark"> 

                                Si oui, précisez le nom de l'API si vous ne savez pas décrivez ce que doit faire l'API. Sinon, laissez le champ vide.

                            </p>

                            <div>
                                <textarea className="form-control" onChange={this.handleAPIExterne} rows="3"></textarea>
                            </div>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin de développer une API sur-mesure ?

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="apimesure" onClick={this.handleAPIMesure} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="apimesure" onClick={this.handleAPIMesure} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgApiMesure}</p>

                            <br/>
                            <br/>
                            <button type="submit" className="btn float-end mt-5 btn-dark">Suivant</button>
                            </form>

                            <button className="btn float-start mt-5 btn-dark" onClick={this.handleReturn}>Retour à l'étape précédente</button>


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

export default withRouter(EtapeApplicationB);