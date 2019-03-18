import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import {withRouter} from "react-router-dom";


const styles = theme => ({
    main: {
        width: "auto",
        display: "block", // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    bigAvatar: {
        margin: theme.spacing.unit,
        width: 100,
        height: 100,
    },
});


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Task Planner
                        </Typography>
                        <Avatar src={window.location.origin + "/images/task.png"} className={classes.bigAvatar}/>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="userName">User Name</InputLabel>
                                <Input id="userName" name="userName" autoComplete="userName"
                                       onChange={this.handleUserNameChange} autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password"
                                       autoComplete="current-password" onChange={this.handlePasswordChange}/>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleLogin}
                                className={classes.submit}
                            >
                                Login
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Create Account
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );

    }

    handleUserNameChange(ev) {
        this.setState({userName: ev.target.value});
    }

    handlePasswordChange(ev) {
        this.setState({password: ev.target.value});
    }

    handleLogin(e) {
        e.preventDefault();
        axios.post('https://task-panner-api.herokuapp.com/user/login', {
            username: this.state.userName,
            password: this.state.password
        }).then((response) => {
            localStorage.setItem("accessToken", response.data.accessToken);
            this.props.changeLoggedStatus();
            this.props.history.push("/mainView")
        }).catch(function (error) {
            alert("Invalid Credentials!")
        });


    }

}

export default withRouter(withStyles(styles)(SignIn));