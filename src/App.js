import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './containers/Home';
import Drips from './containers/Drips';
import Contacts from './containers/Contacts'
import './style.css'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/contacts">
                        <Contacts />
                    </Route>
                    <Route exact path="/contacts">
                        <Drips />
                    </Route>
                </Switch>
                

            </Router>
            
        </div>
    );
};

export default App;