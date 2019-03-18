import React, {Component} from "react";
import Login from "./Components/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigationDrawer from "./Components/NavigationDrawer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.changeLoggedStatus = this.changeLoggedStatus.bind(this);
    }

    changeLoggedStatus() {
        if (this.state.loggedIn === true) {
            this.setState({loggedIn: false});
        } else {
            this.setState({loggedIn: true});
        }
    }

    render() {


        return (
            <Router>
                <div>
                    <div className="App">
                        <header className="App-header">
                            <Switch>
                                {this.state.loggedIn === true ?
                                    <>
                                        <Route path={"/mainView"}
                                               component={NavigationDrawer}/>
                                        <Route render={() => <h3>Page not found!</h3>}/>
                                    </>
                                    :
                                    <>
                                        <Route path="/"
                                               render={() => <Login changeLoggedStatus={this.changeLoggedStatus}/>}/>
                                        <Route render={() => <h3>Page not found!</h3>}/>
                                    </>}
                            </Switch>
                        </header>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;
