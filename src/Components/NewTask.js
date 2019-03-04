import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import DoneIcon from '@material-ui/icons/Done';
import moment from "moment";
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',

    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }, container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "40vw",

    },
    menu: {
        width: 200,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});
const status = [
    {
        value: 'Ready',
        label: 'Ready',
    },
    {
        value: 'In progress',
        label: 'In progress',
    },
    {
        value: 'Done',
        label: 'Done',
    },
];
class NewTask extends React.Component {

    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state = {
            dueDate: moment(),
            description: "",
            status: "",
            responsible: "",
        };

    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h2">New Task</Typography>
                    </Grid>


                        <form className={classes.container} noValidate autoComplete="off">
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="Description"
                                label="Description"
                                onChange={this.handleDescriptionChange}
                                defaultValue=" "
                                className={classes.textField}
                                margin="normal"
                            />
                            </Grid>
                                <Grid item xs={12}>
                            <TextField
                                required
                                id="responsible"
                                label="Responsible"
                                defaultValue=" "
                                onChange={this.handleResponsibleChange}
                                className={classes.textField}
                                margin="normal"
                            />
                                </Grid>
                            <Grid item xs={12}>
                            <TextField
                                id="standard-select"
                                select
                                label="Select"
                                className={classes.textField}
                                value={this.state.status}
                                onChange={this.handleStatusChange}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select the status of the task"
                                margin="normal"
                            >
                                {status.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            </Grid>
                            <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    margin="normal"
                                    className={classes.textField}
                                    label="Date picker"
                                    id="due-date"
                                    value={this.state.dueDate}
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                            </MuiPickersUtilsProvider>

                            </Grid>
                        </form>

                </Grid>
                <Tooltip title="Add" aria-label="Add">
                    <Fab color="primary" onClick={this.handleAddButton} className={classes.absolute}>
                        <DoneIcon/>
                    </Fab>
                </Tooltip>
            </div>
        );
    }

    handleDescriptionChange(ev) {
        this.setState({description: ev.target.value});
    }

    handleResponsibleChange(ev) {
        this.setState({responsible: ev.target.value});
    }

    handleStatusChange(ev) {
        this.setState({status: ev.target.value});
    }

    handleAddButton() {
        const newTask = {
            description: this.state.description,
            responsible: {
                name: this.state.responsible,
                email: "sancarbar@gmail.com"
            },
            status: this.state.status,
            dueDate: this.state.dueDate
        };
        this.props.addTask(newTask);
        this.props.history.push('/mainView/');
    }

    handleDateChange(date) {
        this.setState({
            dueDate: moment(date)
        });
    }
}

NewTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NewTask));