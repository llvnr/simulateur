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
        gestionContenu: '',
        msgGestionContenu: '',
        solutionPaiement: '',
        msgSolutionPaiement: '',
        qrcode: '',
        msgQrcode: '',
        upload: '',
        msgUpload: ''

    }
    
}

handleReturn = (e) => {

    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)
    localStorage.setItem('etape', 'Etape-Application-B');

    this.props.history.push('/etape-application-b');

}

handleGestionContenu = (e) => {

    this.setState({

        gestionContenu: e.target.value

    })

}

handlePaiement = (e) => {

    this.setState({

        solutionPaiement: e.target.value

    })

}

handleQRCode = (e) => {

    this.setState({

        qrcode: e.target.value

    })

}

handleUpload = (e) => {

    this.setState({

        upload: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.gestionContenu.length != 0 && this.state.solutionPaiement.length != 0 && this.state.qrcode.length != 0 && this.state.upload.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data

        localStorage.setItem('prevProcessus', restructuringData)
        localStorage.setItem('prevEtape', 'Etape-Application-C')

        var nouvelleData = [{
            'etape': 'Application - 3',
            'gestionContenu': this.state.gestionContenu,
            'paiement': this.state.solutionPaiement,
            'qrcode': this.state.qrcode,
            'upload': this.state.upload
        }]

        restructuringData += JSON.stringify(nouvelleData)

        localStorage.setItem('etape', 'Etape-Application-D');
        localStorage.setItem('processus', restructuringData)

        this.props.history.push('/etape-application-d');

    }
    else 
    {

        if(this.state.gestionContenu.length == 0)
        {

            this.setState({
                msgGestionContenu: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgGestionContenu: "" });
            }, 2000);

        }
        else if(this.state.solutionPaiement.length == 0)
        {

            this.setState({
                msgSolutionPaiement: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgSolutionPaiement: "" });
            }, 2000);

        }
        else if(this.state.qrcode.length == 0)
        {

            this.setState({
                msgQrcode: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgQrcode: "" });
            }, 2000);

        }
        else if(this.state.upload.length == 0)
        {

            this.setState({
                msgUpload: 'Veuillez faire un choix.'
            })
            setTimeout(() => {
            this.setState({ msgUpload: "" });
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

                        Application - Etape 3

                    </h1>

                    <div className="mt-5">
                            <form onSubmit={this.handleSubmit}>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin d'une fonctionnalité de gestion de contenu amélioré ? (WYSIWYG)

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="contenu" onClick={this.handleGestionContenu} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="contenu" onClick={this.handleGestionContenu} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgGestionContenu}</p>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin d'intégrer une solution de paiement ?

                            </h2>

                            <select className="form-select" onChange={this.handlePaiement}>
                                <option defaultValue="Non">Non</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Stripe">Stripe</option>
                                <option value="Payplug">Payplug</option>
                                <option value="Paypal/Stripe">Paypal/Stripe</option>
                                <option value="Paypal/Payplug">Paypal/Payplug</option>
                                <option value="Stripe/Payplug">Stripe/Payplug</option>
                                <option value="Paypal/Stripe/Payplug">Paypal/Stripe/Payplug</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <p className="text-danger">{this.state.msgSolutionPaiement}</p>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin d'utiliser des QRCodes dans votre application ?

                            </h2>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Oui" name="qrcode" onClick={this.handleQRCode} />
                                <label className="form-check-label text-dark">Oui</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="Non" name="qrcode" onClick={this.handleQRCode} />
                                <label className="form-check-label text-dark">Non</label>
                            </div>
                            <p className="text-danger">{this.state.msgQrcode}</p>

                            <h2 className="text-justify mt-5 mb-2 text-dark"> 

                                Avez-vous besoin de gérer l'upload de fichier ?

                            </h2>

                            <select className="form-select" onChange={this.handleUpload}>
                                <option defaultValue="Non">Non</option>
                                <option value="Image PNG / JPG">Image PNG / JPG</option>
                                <option value="PDF">PDF</option>
                                <option value="Image PNG / JPG et PDF">Image PNG / JPG et PDF</option>
                            </select>
                            <p className="text-danger">{this.state.msgUpload}</p>

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