import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import EtapeUn from './EtapeUn';
import EtapeUnOui from './EtapeUnOui';
import EtapeDeux from './EtapeDeux';
import EtapeLandingA from './EtapeLandingA';
import EtapeLandingB from './EtapeLandingB';
import EtapeLandingC from './EtapeLandingC';
import EtapeLandingD from './EtapeLandingD';
import EtapeVitrineA from './EtapeVitrineA';
import EtapeVitrineB from './EtapeVitrineB';
import EtapeVitrineC from './EtapeVitrineC';
import EtapeVitrineD from './EtapeVitrineD';
import EtapeApplicationA from './EtapeApplicationA';
import EtapeApplicationB from './EtapeApplicationB';
import EtapeApplicationC from './EtapeApplicationC';
import EtapeApplicationD from './EtapeApplicationD';
import Final from './Final';
import Debut from './Debut';

class Principale extends Component {

render() {

        return (
        <Router>

            <Switch>
                <Route path="/etape-landingpage-a">
                    <EtapeLandingA />
                </Route>
                <Route path="/etape-landingpage-b">
                    <EtapeLandingB />
                </Route>
                <Route path="/etape-landingpage-c">
                    <EtapeLandingC />
                </Route>
                <Route path="/etape-landingpage-d">
                    <EtapeLandingD />
                </Route>
                <Route path="/derniere-etape">
                    <Final />
                </Route>
                <Route path="/etape-vitrine-a">
                    <EtapeVitrineA />
                </Route>
                <Route path="/etape-vitrine-b">
                    <EtapeVitrineB />
                </Route>
                <Route path="/etape-vitrine-c">
                    <EtapeVitrineC />
                </Route>
                <Route path="/etape-vitrine-d">
                    <EtapeVitrineD />
                </Route>
                <Route path="/etape-application-a">
                    <EtapeApplicationA />
                </Route>
                <Route path="/etape-application-b">
                    <EtapeApplicationB />
                </Route>
                <Route path="/etape-application-c">
                    <EtapeApplicationC />
                </Route>
                <Route path="/etape-application-d">
                    <EtapeApplicationD />
                </Route>
                <Route path="/etape-deux">
                    <EtapeDeux />
                </Route>
                <Route path="/etape-un-oui">
                    <EtapeUnOui />
                </Route>
                <Route path="/etape-un">
                    <EtapeUn />
                </Route>
                <Route path="/">
                    <Debut />
                </Route>
            </Switch>

        </Router>
        );
    }

}

export default Principale;

if (document.getElementById('principale')) {
    ReactDOM.render(<Principale />, document.getElementById('principale'));
}
