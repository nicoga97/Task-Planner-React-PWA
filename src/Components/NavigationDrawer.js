import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event';
import LaunchIcon from '@material-ui/icons/Launch';
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from '@material-ui/icons/Create';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Dashboard from "./Dashboard";
import {Link, Route} from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import NewTask from "./NewTask";
import moment from "moment";
import UserProfile from "./UserProfile";


const drawerWidth = 280;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    avatarBox: {
        width: '80%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,

    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    inline: {
        display: 'inline',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',

    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 8,
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    avatar: {
        margin: theme.spacing.unit - 10,
        width: 50,
        height: 50,
    },
});

class NavigationDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userFullName: "Nicolas Garcia",
            userEmail: "nicoga97@gmail.com",
            tasks: [{
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "ready",
                "dueDate": moment()
            }, {
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "In progress",
                "dueDate": moment(),
            }, {
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "Done",
                "dueDate": moment()
            }],

        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.addTask = this.addTask.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
    }



    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    addTask(task) {
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(task),
            open: prevState.open,
        }));

    }

    updateUserData(data) {
        console.log(data);
        this.setState(prevState => ({
            userFullName: data.fullName,
            userEmail: data.email,
        }));

    }

    render() {
        const {classes, theme} = this.props;

        return (
            <Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: this.state.open,
                        })}
                    >
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, {
                                    [classes.hide]: this.state.open,
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                                Task Planner
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={classNames(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })}
                        classes={{
                            paper: classNames({
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List className={classes.avatarBox}>

                            <ListItem>
                                <ListItemAvatar style={{
                                    left: -5,
                                }}>
                                    <Avatar>N</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={this.state.userFullName}
                                    secondary={this.state.userEmail}
                                />
                                <ListItemSecondaryAction style={{
                                    position: 'absolute',
                                    left: 220,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}>
                                    <IconButton component={Link} to="/mainView/updateUserInfo">
                                        <CreateIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </List>
                        <Divider/>
                        <MenuList>

                            <ListItem button key="tasks" component={Link} to="/mainView/">
                                <ListItemIcon><EventIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Tasks"/>
                            </ListItem>

                        </MenuList>
                        <Divider/>
                        <List>

                            <ListItem button key="Logout">
                                <ListItemIcon>
                                    <LaunchIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Logout"/>
                            </ListItem>

                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Route exact path={this.props.match.url + "/newTask"}
                               render={props => <NewTask addTask={this.addTask}/>}/>
                        <Route exact path={this.props.match.url + "/"}
                               render={props => <Dashboard getTasks={this.state.tasks}/>}/>
                        <Route exact path={this.props.match.url + "/updateUserInfo"}
                               render={props => <UserProfile updateData={this.updateUserData}/>}/>


                    </main>
                </div>
            </Fragment>
        );
    }


}

NavigationDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NavigationDrawer);