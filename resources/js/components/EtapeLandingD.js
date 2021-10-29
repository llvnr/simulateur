import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeLandingD extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        googleAnalytics: '',
        msgGoogleAnalytics: '',
        hebergement: '',
        msgHebergement: '',
        maintenance: '',
        msgMaintenance: ''

    }

}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-landingpage-C');

    this.props.history.push('/etape-landingpage-c');

}

handleAnalytics = (e) => {

    this.setState({

        googleAnalytics: e.target.value

    })

}

handleHebergement = (e) => {

    this.setState({

        hebergement: e.target.value

    })

}

handleMaintenance = (e) => {

    this.setState({

        maintenance: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault();

    if(this.state.googleAnalytics.length != 0 && this.state.hebergement.length != 0 && this.state.maintenance.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data
    
        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-landingpage-D')
    
        var nouvelleData = [{
            'etape': 'Landingpage - 4',
            'googleAnalytics': this.state.googleAnalytics,
            'hebergement': this.state.hebergement,
            'maintenance': this.state.maintenance
        }]
    
        restructuringData += JSON.stringify(nouvelleData)
    
        localStorage.setItem('etape', 'Derniere-Etape');
        localStorage.setItem('processus', restructuringData)
    
        this.props.history.push('/derniere-etape');

    }
    else
    {

        if(this.state.googleAnalytics.length == 0)
        {

            this.setState({
                msgGoogleAnalytics: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgGoogleAnalytics: "" });
            }, 2000);

        }
        else if(this.state.hebergement.length == 0)
        {

            this.setState({
                msgHebergement: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgHebergement: "" });
            }, 2000);

        }
        else if(this.state.maintenance.length == 0)
        {

            this.setState({
                msgMaintenance: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgMaintenance: "" });
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
                
                <p className="text-justify mt-2 mb-2 text-dark" style={{ color: '#E3A948' }}> 

                    Bienvenue, vous êtes sur le questionnaire qui va nous aider 
                    à mieux connaître votre projet afin de pouvoir établir une 
                    tarification raisonnable avec le maximum d'informations.

                </p>

                <div style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className="text-justify text-center mt-5 mb-2 text-dark" style={{ color: '#E3A948' }}> 

                        LandingPage - Etape 4

                    </h1>

                    <div className="mt-5">

                        <form onSubmit={this.handleSubmit}>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                        Voulez-vous intégrer Google analytics ?

                        </h3>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Oui" name="analytics" onClick={this.handleAnalytics} />
                        <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Non" name="analytics" onClick={this.handleAnalytics} />
                        <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgGoogleAnalytics}</p>


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

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Voulez-vous un contrat de maintenance ?

                        </h3>

                        <p className="text-justify mt-2 mb-2 text-dark"> 

                        Le contrat de maintenance nous permet d'intervenir en cas de besoin ou de dysfonctionnement. 
                        Il nous permet également de faire les mises à jour de wordpress + des plugins si cela apparaît. 
                        Ce contrat ne prend pas en compte les modifications majeures, toute nouvelles modifications sera re facturer.

                        </p>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Oui" name="maintenance" onClick={this.handleMaintenance} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Non" name="maintenance" onClick={this.handleMaintenance} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgMaintenance}</p>

                        <p className="text-justify mt-5 mb-2 text-dark"> 

                            <b>Note importante : </b> N'oubliez pas vous devez nous fournir tous les textes et les images 
                            à mettre dans votre site.

                        </p>

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

export default withRouter(EtapeLandingD);