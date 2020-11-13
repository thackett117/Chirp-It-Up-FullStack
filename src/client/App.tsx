import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home";
import SingleChirp from "./Components/SingleChirp";
import AddChirp from "./Components/AddChirp";
import Navbar from "./Components/NavBar";

const App: React.FC<IAppProps> = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/chirp/:id/admin" component={SingleChirp} />
                <Route exact path="/chirp/add" component={AddChirp} />
            </Switch>
        </Router>
    )
}

interface IAppProps { }

export default App