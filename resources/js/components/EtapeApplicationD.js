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
        automatisations: '',
        statistiques: '',
        msgStatistiques: '',
        googleAnalytics: '',
        msgGoogleAnalytics: '',
        nombreUtilisateur: '',
        msgNombreUtilisateur: '',
        hebergement: '',
        msgHebergement: ''

    }
    
}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-Application-C');

    this.props.history.push('/etape-application-c');

}

handleAutomatisations = (e) => {

    this.setState({

        automatisations: e.target.value

    })

}

handleStatistiques = (e) => {

    this.setState({

        statistiques: e.target.value

    })

    
}

handleAnalytics = (e) => {

    this.setState({

        googleAnalytics: e.target.value

    })
    
}

handleHebergement= (e) => {

    this.setState({

        hebergement: e.target.value

    })
    
}

handleNombreUtilisateur = (e) => {

    this.setState({

        nombreUtilisateur: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.statistiques.length != 0 && this.state.googleAnalytics.length != 0 && this.state.nombreUtilisateur.length != 0 && this.state.hebergement.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data

        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-Application-D')

        var nouvelleData = [{
            'etape': 'Application - 4',
            'automatisations': this.state.automatisations,
            'statistiques': this.state.statistiques,
            'analytics': this.state.googleAnalytics,
            'nombreUtilisateur': this.state.nombreUtilisateur,
            'hebergement': this.state.hebergement
        }]

        restructuringData += JSON.stringify(nouvelleData)

        localStorage.setItem('etape', 'Derniere-Etape');
        localStorage.setItem('processus', restructuringData)

        this.props.history.push('/derniere-etape');
    
    }
    else 
    {

        if(this.state.statistiques.length == 0)
        {

            this.setState({
                msgStatistiques: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgStatistiques: "" });
            }, 2000);

        }
        else if(this.state.googleAnalytics.length == 0)
        {

            this.setState({
                msgGoogleAnalytics: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgGoogleAnalytics: "" });
            }, 2000);

        }
        else if(this.state.nombreUtilisateur.length == 0)
        {

            this.setState({
                msgNombreUtilisateur: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgNombreUtilisateur: "" });
            }, 2000);

        }
        else if(this.state.hebergement.length == 0)
        {

            this.setState({
                msgHebergement: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgHebergement: "" });
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

                        Application - Etape 4

                    </h1>

                    <div className="mt-5">
                            <form onSubmit={this.handleSubmit}>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin d'automatisations supplémentaires ?

                            </h2>
                            <p className="text-justify mt-2 mb-2 text-dark"> 

                                Si oui, décrivez au maximum sinon laisser vide.

                            </p>

                            <div>
                                <textarea className="form-control" onChange={this.handleAutomatisations} rows="3"></textarea>
                            </div>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin de faire des statistiques simples ? (Uniquement sans graphique)

                            </h2>
                            <p className="text-justify mt-2 mb-2 text-dark"> 

                                Pour des statistiques plus poussées, il faudra en discuter.

                            </p>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="stats" onChange={this.handleStatistiques} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="stats" onChange={this.handleStatistiques} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgStatistiques}</p>

                            <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Voulez-vous intégrer Google analytics ?

                            </h3>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Oui" name="analytics" onClick={this.handleAnalytics} />
                            <label className="form-check-label text-dark" style={{ color: '#DADADA' }}>Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Non" name="analytics" onClick={this.handleAnalytics} />
                            <label className="form-check-label text-dark" style={{ color: '#DADADA' }}>Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgGoogleAnalytics}</p>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Combien d'utilisateurs sur votre futur l'application ? (Estimation)

                            </h2>

                            <select className="form-select" onChange={this.handleNombreUtilisateur}>
                                <option defaultValue="10-50">10-50</option>
                                <option value="50-100">50-100</option>
                                <option value="100-200">100-200</option>
                                <option value="200-300">200-300</option>
                                <option value="400-500">400-500</option>
                                <option value="500+">500+</option>
                                <option value="1000+">1000+</option>
                            </select>
                            <p className="text-danger">{this.state.msgNombreUtilisateur}</p>

                            <h3 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous déjà un hébergement ?

                            </h3>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="hebergement" onClick={this.handleHebergement} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="hebergement" onClick={this.handleHebergement} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgHebergement}</p>

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

export default withRouter(EtapeApplicationB);