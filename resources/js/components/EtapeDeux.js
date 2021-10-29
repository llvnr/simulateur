import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeDeux extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        projet: '',
        msgProjet: ''
    }

}

handleProjet= (e) => {

    this.setState({

        projet: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.projet.length != 0)
    {

        const projet = this.state.projet;

        var restructuringData = []
    
        restructuringData += this.state.data
    
        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-deux')
    
        var nouvelleData = [{
            'etape': '2',
            'projet': this.state.projet
    
        }]
    
        restructuringData += JSON.stringify(nouvelleData)
    
        localStorage.setItem('processus', restructuringData)
    
        switch (projet) {
            case 'landingpage':
                localStorage.setItem('etape', 'Etape-landingpage-A');
    
                this.props.history.push('/etape-landingpage-a');
                break;
            case 'vitrine':
    
                localStorage.setItem('etape', 'Etape-vitrine-A');
    
                this.props.history.push('/etape-vitrine-a');
                break;    
            case 'application-web':
    
                localStorage.setItem('etape', 'Etape-Application-A');
    
                this.props.history.push('/etape-application-a');
                break;  
            default:
                break;
        }

    }
    else
    {

        this.setState({
            msgProjet: 'Veuillez cocher un choix.'
        })
        setTimeout(() => {
        this.setState({ msgProjet: "" });
        }, 2000);

    }

}

handleReturn = (e) => {

    this.props.history.push('/');

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

                <div style={{ marginTop: '7%', marginBottom: '15%' }}>
                    <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                        Quels types de projets avez-vous besoin ?

                    </h1>

                    <div className="mt-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="landingpage" name="choix" onClick={this.handleProjet} />
                                <label className="form-check-label mb-4 text-dark">
                                    Landingpage
                                </label>
                                <p className="text-justify mt-2 mb-4 text-dark"> 

                                Une landing page est une page d’atterrissage qui répond précisément à un besoin ou une recherche particulière et ciblée qui sert à la conversion. 
                                Cela peut servir à présenter une application mobile par exemple avec des arguments impactant et convainquant pour donner envie à l’utilisateur de télécharger et d’utiliser votre application. Ce n’est pas seulement la seule fonction de la landing page, sachez qu’elle peut être temporaire dans le cadre du lancement d’une campagne publicitaire ou autre. 
                                C’est une arme redoutable pour votre stratégie marketing !

                                </p>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="vitrine" name="choix" onClick={this.handleProjet} />
                                <label className="form-check-label mb-4 text-dark">
                                    Site vitrine
                                </label>
                                <p className="text-justify mt-2 mb-4 text-dark"> 

                                Un site vitrine est un ensemble de pages qui permet à son propriétaire de présenter son activité, son entreprise et/ou ses services. Le but est de maintenir l’information au maximum vis-à-vis de la personne qui visite votre site internet. 
                                L’utilisateur peut considérer votre site comme un point d’ancrage important pour venir trouver les informations dont il a besoin pour vous joindre, faire appel à votre entreprise et/ou utiliser vos services.

                                </p>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="application-web" name="choix" onClick={this.handleProjet} />
                                <label className="form-check-label mb-4 text-dark">
                                    Application web et web mobile
                                </label>
                                <p className="text-justify mt-2 mb-2 text-dark"> 

                                Une application web est une application utilisable par votre navigateur internet et qui répond à des besoins spécifiques sur le marché. 
                                Une application web a pour but d’adoptée une logique métier afin de faciliter vos processus internes & externe. 
                                La partie web mobile permet de rendre votre application responsive donc utilisable sur d’autres périphériques comme les tablettes et les téléphones portables. 
                                Cela peut-être une application de gestion de matériel, de stock, d’inventaires, de location de voiture, un site d’annonce, de rencontre ou autres…

                                </p>
                            </div>
                            <p className="text-danger">{this.state.msgProjet}</p>

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

export default withRouter(EtapeDeux);