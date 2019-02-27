import React, {Component} from 'react';
import Login from "./Components/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigationDrawer from "./Components/NavigationDrawer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <header className="App-header">
                            <Switch>
                            <Route path="/mainView" component={NavigationDrawer}/>
                            <Route exact path="/" component={Login}/>
                                <Route render={()=><h3>Page not found!</h3>}/>
                            </Switch>
                        </header>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;
