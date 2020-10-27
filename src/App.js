import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron';
import Home from './containers/Home';
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
                </Switch>
                

            </Router>
            
        </div>
    );
};

export default App;