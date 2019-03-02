import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


const styles = theme => ({

    absolute: {
        margin: 0,
        top: 'auto',

        left: 'auto',
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    }, card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    render() {


        const {classes} = this.props;
        const taskList = this.props.getTasks.map((task) => {

            return (
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent className={classes.card}>
                                <Typography variant="h5" component="h2">
                                    {task.description}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {task.status} - {task.dueDate.format('DD-MM-YYYY')}
                                </Typography>
                                <Typography component="p">
                                    {task.responsible.name}
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>
            );
        });
        return (
            <>

                {taskList}
                <Tooltip title="Add" aria-label="Add">
                    <Fab color="secondary" component={Link} to={"/mainView/newTask"} className={classes.absolute}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
            </>
        );
    }

}


export default withStyles(styles)(Dashboard);