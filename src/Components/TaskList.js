import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

const styles = {
    card: {
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
};

class TaskList extends React.Component {



    render() {
        const {classes} = this.props;
        const taskList = this.props.taskList.map((task) => {
            return (
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Card >
                            <CardContent className={classes.card}>
                                <Typography variant="h5" component="h2">
                                    {task.description}
                                </Typography>
                                <Typography  className={classes.pos} color="textSecondary">
                                    {task.status} - {task.dueDate}
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
            <div>
                {taskList}
            </div>
        );


    }

}
TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);;