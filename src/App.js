import React, {Component} from 'react';
import './App.css';
import Login from "./Components/Login"
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavigationDrawer from "./Components/NavigationDrawer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <header className="App-header">

                            <Route path="/mainView" component={NavigationDrawer}/>
                            <Route exact path="/" component={Login}/>
                        </header>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;
