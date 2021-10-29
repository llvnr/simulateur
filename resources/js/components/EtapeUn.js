import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";


class EtapeUn extends Component {

constructor(props){
    super(props)

    this.state = {

        etude: '',
        msgEtude: ''

    }

}

handleEtude = (e) => {

    this.setState({

        etude: e.target.value

    })

}


handleReturn = (e) => {

    this.props.history.push('/');

}

handleSubmit = (e) => {

    e.preventDefault()


    var etape = this.state.etude

    console.log('Etude', this.state.etude);

    if(this.state.etude.length != 0)
    {

        if(etape === "Oui")
        {
    
            var data = [{
                'etape': '1',
                'etude': this.state.etude
            }]
        
            var etape = localStorage.setItem('etape', 'Etape-Un-Oui');
            var processus = localStorage.setItem('processus', JSON.stringify(data))
    
            this.props.history.push('/etape-un-oui');
    
        }
        else
        {
    
            var data = [];
    
            var dataUn = [{
                'etape': '1',
                'etude': this.state.etude
            }]
    
            data += JSON.stringify(dataUn)
    
            var dataDeux = [{
                'etape': '1-Non',
                'cahierDesCharges': 'Non',
                'maquette': 'Non',
                'mcd': 'Non'
            }]
    
            data += JSON.stringify(dataDeux)
        
            var etape = localStorage.setItem('etape', 'Etape-deux');
            var processus = localStorage.setItem('processus', data)
    
            this.props.history.push('/etape-deux');
    
        } 

    }
    else
    {

        this.setState({
            msgEtude: 'Veuillez cocher un choix.'
        })
        setTimeout(() => {
        this.setState({ msgEtude: "" });
        }, 2000);

    }

    // this.props.history.push('/');

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

                        Avez-vous besoin d'une étude de projet ? 

                    </h1>

                    <p className="text-justify text-dark">
                        <b>Attention : </b> Si vous choisissez "non", vous devez être en mesure de fournir la maquette, le mcd et/ou
                        le cahier des charges. Il est important de pouvoir travailler avec une idée précise et un maximum d'élément
                        pour facilité la compréhension du projet.
                    </p>

                    <div className="mt-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="Oui" name="choix" onClick={this.handleEtude} />
                                <label className="form-check-label">
                                    Oui
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="Non" name="choix" onClick={this.handleEtude} />
                                <label className="form-check-label text-dark">
                                    Non
                                </label>
                            </div>

                            <p className="text-danger">{this.state.msgEtude}</p>


                            <button className="btn float-start mt-5 btn-dark" onClick={this.handleReturn}>Retour à l'étape précédente</button>
                            <button type="submit" className="btn float-end mt-5 btn-dark">Suivant</button>
                        </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
 
                </div>

            </div>
        </Fragment>
        );
    }

}

export default withRouter(EtapeUn);