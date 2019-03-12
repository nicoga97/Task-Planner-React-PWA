import React, {Component} from "react";
import Login from "./Components/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigationDrawer from "./Components/NavigationDrawer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
            users: [],
        };
    }

    componentDidMount() {
        fetch('https://task-panner-api.herokuapp.com/tasks')
            .then(response => response.json())
            .then(data => {
                let tasksList = [];
                data.forEach(function (task) {
                    tasksList.push(
                        task
                    )
                });
                this.setState({tasksList: tasksList});
            });
        fetch('https://task-panner-api.herokuapp.com/users')
            .then(response => response.json())
            .then(data => {
                let users = [];
                data.forEach(function (user) {
                    users.push(
                        user.name
                    )
                });
                users.push("Select");
                this.setState({users: users});
            });
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <header className="App-header">
                            <Switch>
                                <Route path={"/mainView"}
                                       render={props => <NavigationDrawer tasks={this.state.tasksList}
                                                                          users={this.state.users}/>}/>
                                <Route exact path="/" component={Login}/>
                                <Route render={() => <h3>Page not found!</h3>}/>
                            </Switch>
                        </header>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;
