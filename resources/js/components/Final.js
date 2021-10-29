import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import axios from 'axios';

class Final extends Component {

constructor(props){
    super(props)

    this.state = {

        data : [],
        nom: '',
        msgNom: '',
        prenom: '',
        msgPrenom: '',
        telephone: '',
        msgTelephone: '',
        email: '',
        msgEmail: '',
        msg: '',
        statusMsg: '',
        isLoading: false

    }

}

handleReturn = (e) => {

    const prevEtape = localStorage.getItem('prevEtape');
    const prevProcessus = localStorage.getItem('prevProcessus');
    localStorage.setItem('processus', prevProcessus)

    switch (prevEtape) {
        case 'Etape-landingpage-D':
            localStorage.setItem('etape', 'Etape-landingpage-D');
            this.props.history.push('/etape-landingpage-d');
            break;
        case 'Etape-Vitrine-D':
            localStorage.setItem('etape', 'Etape-Vitrine-D');
            this.props.history.push('/etape-vitrine-d');
            break;    
        case 'Etape-Application-D':
            localStorage.setItem('etape', 'Etape-Application-D');
            this.props.history.push('/etape-application-d');
            break;
        default:
            break;
    }


}

handleNom = (e) => {

    this.setState({

        nom: e.target.value

    })

}

handlePrenom = (e) => {

    this.setState({

        prenom: e.target.value

    })

}

handleTelephone = (e) => {

    this.setState({

        telephone: e.target.value

    })

}

handleEmail = (e) => {

    this.setState({

        email: e.target.value

    })

}

handleSubmit = (e) => {

    e.preventDefault()

    if(this.state.nom.length != 0 && this.state.prenom.length != 0 && this.state.telephone.length != 0 && this.state.email.length != 0)
    {

        var restructuringData = []

        restructuringData += this.state.data

        var nouvelleData = [{
            'etape': 'Derniere Etape',
            'nom': this.state.nom,
            'prenom': this.state.prenom,
            'telephone': this.state.telephone,
            'email': this.state.email
        }]

        restructuringData += JSON.stringify(nouvelleData)

        localStorage.setItem('etape', 'Final');
        localStorage.setItem('processus', restructuringData)

        var dataResult = JSON.parse(restructuringData.split(']['))
        var dataSend = ''

        dataResult.forEach(element => {
            console.log(element)

            let etape = element.etape

            switch (etape) {
                case "1":
                    dataSend += `<b>Etape : ${element.etape}</b> <br/> Etude de projet : ${element.etude} <br/><hr/>`
                    break;
                case "1-Non":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Cahier des charges : ${element.cahierDesCharges} <br/> Maquette : ${element.maquette} <br/> Modèle conceptuel de données : ${element.mcd} <br/><hr/>`
                    break;
                case "2":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Projet : ${element.projet} <br/><hr/>`  
                    break;
                case "Landingpage - 1":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Activité : ${element.activite} <br/> Nombre de section : ${element.section} <br/> Formulaire de contact : ${element.formContact} <br/><hr/>`
                    break;
                case "Landingpage - 2":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Carte google : ${element.carteGoogle} <br/> Diaporama : ${element.diaporama} <br/> Videos : ${element.integrationVideos} <br/> Réseaux sociaux : ${element.reseauxSociaux} <br/><hr/>`
                    break;
                case "Landingpage - 3":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Design : ${element.design} <br/> Plugins gratuits : ${element.pluginsGratuit} <br/> Plugins payants : ${element.pluginsPayant} <br/><hr/>`
                    break;
                case "Landingpage - 4":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Google analytics : ${element.googleAnalytics} <br/> Hébergement : ${element.hebergement} <br/> Maintenance : ${element.maintenance} <br/><hr/>`
                    break;
                case "Vitrine - 1":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Activité : ${element.activite} <br/> Nombre de pages : ${element.page} <br/> Formulaire de contact : ${element.formContact} <br/><hr/>`
                    break;
                case "Vitrine - 2":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Carte google : ${element.carteGoogle} <br/> Diaporama : ${element.diaporama} <br/> Videos : ${element.integrationVideos} <br/> Réseaux sociaux : ${element.reseauxSociaux} <br/><hr/>`
                    break;
                case "Vitrine - 3":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Design : ${element.design} <br/> Plugins gratuits : ${element.pluginsGratuit} <br/> Plugins payants : ${element.pluginsPayant} <br/><hr/>`
                    break;
                case "Vitrine - 4":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Google analytics : ${element.googleAnalytics} <br/> Hébergement : ${element.hebergement} <br/> Maintenance : ${element.maintenance} <br/><hr/>`
                    break;
                case "Application - 1":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Activité : ${element.activite} <br/> Type application : ${element.typeApplication} <br/> Description : ${element.description} <br/><hr/>`
                    break;
                case "Application - 2":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Espace membre : ${element.espaceMembre} <br/> Champs supplémentaire : ${element.champsSupplementaire} <br/> Roles et autorisations : ${element.roleAutorisation} <br/> Api Externe : ${element.apiExterne} <br/> Api sur mesure : ${element.apiSurMesure} <br/><hr/>`
                    break;
                case "Application - 3":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Gestion contenu : ${element.gestionContenu} <br/> Moyen de paiement : ${element.paiement} <br/> QrCode : ${element.qrcode} <br/> Upload : ${element.upload} <br/><hr/>`
                    break;
                case "Application - 4":
                    dataSend += `<b>Etape : ${element.etape}</b>  <br/> Automatisations : ${element.automatisations} <br/> Nombre d'utilisateurs : ${element.nombreUtilisateur} <br/> Statistiques : ${element.statistiques} <br/> Google analytics : ${element.analytics} <br/> Hébergement : ${element.hebergement} <br/><hr/>`
                    break;
                case "Derniere Etape":
                    dataSend += `<b>Etape : ${element.etape}</b> <br/> Nom : ${element.nom} <br/> Prénom : ${element.prenom} <br/> Téléphone : ${element.telephone} <br/> Email : ${element.email} <br/><hr/>`
                    break;
            }

        });

        this.setState({ isLoading: true });
        axios.post(`/api/demande-devis`, { recap: dataSend })
        .then(res => {
            console.log(res);
            console.log(res.data);

            this.setState({ isLoading: false });
            this.setState({

                statusMsg: 'Success',
                msg: res.data.message
    
            })
            setTimeout(() => {
                this.setState({ msg: "", statusMsg: "" });
                this.props.history.push('/');
            }, 3500);

        })

        console.log(dataSend)

    }
    else 
    {

        if(this.state.nom.length == 0)
        {

            this.setState({
                msgNom: 'Le champ nom est obligatoire.'
            })
            setTimeout(() => {
            this.setState({ msgNom: "" });
            }, 2000);

        }
        else if(this.state.prenom.length == 0)
        {

            this.setState({
                msgPrenom: 'Le champ prenom est obligatoire.'
            })
            setTimeout(() => {
            this.setState({ msgPrenom: "" });
            }, 2000);

        }
        else if(this.state.telephone.length == 0)
        {

            this.setState({
                msgTelephone: 'Le champ téléphone est obligatoire.'
            })
            setTimeout(() => {
            this.setState({ msgTelephone: "" });
            }, 2000);

        }
        else if(this.state.email.length == 0)
        {

            this.setState({
                msgEmail: 'Le champ email est obligatoire.'
            })
            setTimeout(() => {
            this.setState({ msgEmail: "" });
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

                        Dernière etape !

                    </h1>
                    
                    {this.state.isLoading ? (
                    <div className="d-flex justify-content-center"><span
                        className="spinner-border text-warning spinner-border-sm ml-5"
                        role="status"
                        aria-hidden="true"
                        style={{ width: '5rem', height: '5rem'}}
                    ></span>
                    </div>
                    ) : (
                        <div>
                            {this.state.statusMsg === "Success" &&
                                <div className="alert alert-success text-center mt-2 mb-2">{this.state.msg}</div>
                            }
                        </div>
                    )}



                    <p className="text-justify mt-3 mb-2 text-dark"> 

                        Nous vous enverrons une proposition et un devis le plus rapidement possible. N'oubliez pas de mettre les bonnes informations !

                    </p>

                    <div className="mt-5">

                        <form onSubmit={this.handleSubmit}>

                        <div className="row">

                            <div className="col-md-6">

                                <div className="mb-3">
                                    <label className="form-label text-dark">Nom</label>
                                    <input type="text" className="form-control" onChange={this.handleNom} />
                                </div>
                                <p className="text-danger">{this.state.msgNom}</p>

                            </div>
                            <div className="col-md-6">

                                <div className="mb-3">
                                    <label className="form-label text-dark">Prénom</label>
                                    <input type="text" className="form-control" onChange={this.handlePrenom} />
                                </div>
                                <p className="text-danger">{this.state.msgPrenom}</p>

                            </div>

                            <div className="mb-3">
                                <label className="form-label text-dark">Téléphone</label>
                                <input type="text" className="form-control" onChange={this.handleTelephone} />
                            </div>
                            <p className="text-danger">{this.state.msgTelephone}</p>

                            <div className="mb-3">
                                <label className="form-label text-dark">Email</label>
                                <input type="email" className="form-control" onChange={this.handleEmail} />
                            </div>
                            <p className="text-danger">{this.state.msgEmail}</p>

                        </div>
                        <button className="btn float-start mt-5 btn-dark" onClick={this.handleReturn}>Retour à l'étape précédente</button>
                        {this.state.isLoading ? (
                            <div>
                                <button type="button" className="btn float-end mt-5" disabled>
                                <span
                                    className="spinner-border text-warning spinner-border-sm ml-5"
                                    role="status"
                                    aria-hidden="true"
                                    style={{ width: '1rem', height: '1rem'}}
                                ></span>
                                </button>
                            </div>
                        ) : (
                            <button type="submit" className="btn float-end mt-5 btn-dark">Terminer</button>
                        )}
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

export default withRouter(Final);