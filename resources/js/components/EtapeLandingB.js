import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeLandingB extends Component {

constructor(props){
    super(props)

    this.state = {
        data: [],
        carteGoogle: '',
        msgCarteGoogle: '',
        diaporama: '',
        msgDiaporama: '',
        reseauxSociaux: '',
        msgReseauxSociaux: '',
        integrationVideos: '',
        msgVideos: ''
    }
    
}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-landingpage-A');

    this.props.history.push('/etape-landingpage-a');

}

handleGoogle = (e) => {

    this.setState({

        carteGoogle: e.target.value

    })

}

handleDiaporama = (e) => {

    this.setState({

        diaporama: e.target.value

    })

}

handleReseaux = (e) => {

    this.setState({

        reseauxSociaux: e.target.value

    })

}

handleVideo = (e) => {

    this.setState({

        integrationVideos: e.target.value

    })

}


handleSubmit = (e) => {

    e.preventDefault();

    if(this.state.carteGoogle.length != 0 && this.state.diaporama.length != 0 && this.state.reseauxSociaux.length != 0 && this.state.integrationVideos.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data
    
        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-landingpage-B')
    
    
        var nouvelleData = [{
            'etape': 'Landingpage - 2',
            'carteGoogle': this.state.carteGoogle,
            'diaporama': this.state.diaporama,
            'reseauxSociaux': this.state.reseauxSociaux,
            'integrationVideos': this.state.integrationVideos
        }]
    
        restructuringData += JSON.stringify(nouvelleData)
    
        localStorage.setItem('etape', 'Etape-landingpage-C');
        localStorage.setItem('processus', restructuringData)
    
        this.props.history.push('/etape-landingpage-c');

    }
    else
    {

        if(this.state.carteGoogle.length == 0)
        {

            this.setState({
                msgCarteGoogle: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgCarteGoogle: "" });
            }, 2000);

        }
        else if(this.state.diaporama.length == 0)
        {

            this.setState({
                msgDiaporama: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgDiaporama: "" });
            }, 2000);

        }
        else if(this.state.reseauxSociaux.length == 0)
        {

            this.setState({
                msgReseauxSociaux: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgReseauxSociaux: "" });
            }, 2000);

        }
        else if(this.state.integrationVideos.length == 0)
        {

            this.setState({
                msgVideos: 'Veuillez faire une sélection.'
            })
            setTimeout(() => {
            this.setState({ msgVideos: "" });
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

                        LandingPage - Etape 2

                    </h1>

                    <div className="mt-5">

                        <form onSubmit={this.handleSubmit}>

                        <h2 className="text-justify text-center mt-5 mb-2 text-dark"> 

                            Besoins supplémentaires ?

                        </h2>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'une carte Google ? 

                        </h3>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Oui" name="carte" onClick={this.handleGoogle} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Non" name="carte" onClick={this.handleGoogle} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgCarteGoogle}</p>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'un diaporama ?

                        </h3>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Oui" name="diapo" onClick={this.handleDiaporama} />
                        <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Non" name="diapo" onClick={this.handleDiaporama} />
                        <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgDiaporama}</p>

                        <h3 className="text-justify mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'intégrer des réseaux sociaux ?

                        </h3>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Oui" name="reseaux" onClick={this.handleReseaux} />
                        <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="Non" name="reseaux" onClick={this.handleReseaux} />
                        <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgReseauxSociaux}</p>

                        <h3 className="text-justify mt-5 mb-2 text-dark" style={{ color: '#E3A948' }}> 

                            Avez-vous besoin d'intégrer des vidéos ?

                        </h3>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Oui" name="videos" onClick={this.handleVideo} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="Non" name="videos" onClick={this.handleVideo} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgVideos}</p>

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

export default withRouter(EtapeLandingB);