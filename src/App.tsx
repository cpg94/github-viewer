import React, { FunctionComponent } from 'react';
import Home from './pages/Home'
import TopBar from './components/TopBar'
import User from './pages/User'
import { Container } from './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App: FunctionComponent = () => (
        <Container>
            <TopBar/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/user/:id">
                        <User />
                    </Route>
                </Switch>
            </Router>
        </Container>
);

export default App;
