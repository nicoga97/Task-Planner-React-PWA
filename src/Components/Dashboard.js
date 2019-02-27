import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TaskList from "./TaskList";
import {Link} from "react-router-dom";


const styles = theme => ({

    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "ready",
                "dueDate": 156464645646
            }, {
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "In progress",
                "dueDate": 156464645646
            }, {
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "Done",
                "dueDate": 156464645646
            }]
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <TaskList taskList={this.state.items}/>
                <Tooltip title="Add" aria-label="Add">
                    <Fab color="secondary" component={Link} to="/mainView/newTask" className={classes.absolute}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
            </div>
        );
    }

}


export default withStyles(styles)(Dashboard);