import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";

class EtapeUnOui extends Component {

constructor(props){
    super(props)

    this.state = {

        data: [],
        cdc: '',
        msgCdc: '',
        mqte: '',
        msgMqte: '',
        mcd: '',
        msgMcd: ''
    
    }

}


handleCDC = (e) => {

    this.setState({
        cdc: e.target.value
    })

    console.log(e.target.value)

}

handleMQTE = (e) => {

    this.setState({
        mqte: e.target.value
    })

    console.log(e.target.value)

}

handleMCD = (e) => {

    this.setState({
        mcd: e.target.value
    })

    console.log(e.target.value)

}

handleReturn = (e) => {

    this.props.history.push('/');

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.cdc.length != 0 && this.state.mqte.length != 0 && this.state.mcd.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data
    
        var nouvelleData = [{
            'etape': '1-Oui',
            'cahier-des-charges': this.state.cdc,
            'maquette': this.state.mqte,
            'mcd': this.state.mcd
        }]
    
        restructuringData += JSON.stringify(nouvelleData)
    
        localStorage.setItem('etape', 'Etape-deux');
        localStorage.setItem('processus', restructuringData)
    
        console.log('CDC', this.state.cdc)
        console.log('MQTE', this.state.mqte);
        console.log('MCD', this.state.mcd);
    
        this.props.history.push('/etape-deux');

    }
    else
    {

        if(this.state.cdc.length == 0)
        {

            this.setState({
                msgCdc: 'Veuillez cocher un choix.'
            })
            setTimeout(() => {
            this.setState({ msgCdc: "" });
            }, 2000);

        }
        else if(this.state.mqte.length == 0)
        {

            this.setState({
                msgMqte: 'Veuillez cocher un choix.'
            })
            setTimeout(() => {
            this.setState({ msgMqte: "" });
            }, 2000);

        }
        else if(this.state.mcd.length == 0)
        {

            this.setState({
                msgMcd: 'Veuillez cocher un choix.'
            })
            setTimeout(() => {
            this.setState({ msgMcd: "" });
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
                    <form onSubmit={this.handleSubmit}>

                        <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'un cahier des charges ? 

                        </h1>
                        <p className="text-justify text-dark">
                            Étape importante qui va permettre de matérialiser vos idées de manière clair et précise. À l’intérieur, vous retrouverez un résumé du projet, la charte graphique, les exigences technologiques nécessaires, les fonctionnalités principales du projet, user story, etc…
                        </p>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cdc" value="Oui" onClick={this.handleCDC} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cdc" value="Non" onClick={this.handleCDC} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgCdc}</p>

                        <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                            Avez-vous besoin d'une maquette du projet ? 

                        </h1>
                        <p className="text-justify text-dark">
                            Une représentation graphique est importante pour pouvoir se faire une première impression et représentation du projet.
                        </p>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="maquette" value="Oui" onClick={this.handleMQTE} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="maquette" value="Non" onClick={this.handleMQTE} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgMqte}</p>

                        <h1 className="text-justify text-center mt-5 mb-2 text-dark"> 

                            Avez-vous besoin du modèle conceptuel de données (MCD) ? 

                        </h1>
                        <p className="text-justify text-dark" style={{ color: '#E3A948' }}>
                            Si votre projet est une application web, il sera nécessaire de modéliser le fonctionnement technique de celui-ci et avoir une représentation et une visualisation du fonctionnement de la base de données est importante.
                        </p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="mcd" value="Oui" onClick={this.handleMCD} />
                            <label className="form-check-label text-dark">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="mcd" value="Non" onClick={this.handleMCD} />
                            <label className="form-check-label text-dark">Non</label>
                        </div>
                        <p className="text-danger">{this.state.msgMcd}</p>

                        <br/>
                        <br/>
                        <button className="btn float-start mt-5 btn-dark" onClick={this.handleReturn}>Retour à l'étape précédente</button>
                        <button type="submit" className="btn float-end mt-5 btn-dark">Suivant</button>

                    </form>
 
                </div>

                
                <br/>
                <br/>
                <br/>

            </div>
        </Fragment>
        );
    }

}

export default withRouter(EtapeUnOui);