import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import FilterBAndWIcon from '@material-ui/icons/FilterBAndW'
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import HouseIcon from '@material-ui/icons/House'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import {connect} from 'react-redux'
import {getNotifications} from '../redux/actions/uiActions'
import {logoutUser} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    navBar : {
        marginBottom : '20px'
    },
    appBar : {
        height: theme.spacing(6),
    },
    toolBar : {
        paddingBottom : '50px'
    },  
    button : {
        marginBottom : '16px',
        marginLeft : ' 0px',
        fontFamily: 'Bebas Neue',
        fontSize : '25px'
    },
    buttonAuth : {
        marginBottom : '16px',
        marginLeft : ' 0px',
        fontFamily: 'Bebas Neue'
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(4.2),
        height: theme.spacing(4.2),
    },
    frag :{
        display : 'flex',
        flexDirection : 'row',
        justifyItems : 'center'
    },
    icon : {
        fontSize : '42px',
        // marginTop : '5px',
    }
})

class NavigationBar extends Component {
    state = {
        open : false
    }
    handleClose = () => {
        this.setState({
            open : false
        })
    }
    handleClick = () => {
        this.setState({
            open : !this.state.open
        })
    }
    handleLogout = () => {
        this.props.logoutUser()
    } 
    componentDidMount(){
        this.props.getNotifications()
    }

    render() {
        const {classes} = this.props
        const {authenticated , user } = this.props.user
        const {notifications} = this.props.ui

        let unreadNotifications =  0
        const fn = user !== null ? user.firstName !== undefined ? user.firstName.toString().charAt(0) : '' : ''
        const ln = user !== null ? user.firstName !== undefined ? user.lastName.toString().charAt(0) : '' : ''
        return (
            <div className={classes.navBar}> 
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className = {classes.toolBar}>
                        <Grid container spacing={2} className={classes.gridMain} >
                            <Grid item xs={2}  className={classes.frag}>
                                <Button className={classes.buttonAuth} color="secondary" component = {Link} to="/" >
                                    <FilterBAndWIcon color="secondary" className={classes.icon}/>
                                </Button>
                            </Grid>
                            <Grid item xs={7}/>
                            <Grid item xs={3}  className={classes.frag}>

                            {authenticated ? (
                            <Fragment>
                                <Button className={classes.buttonAuth} color="secondary" component = {Link} to="/home" >
                                    <HouseIcon/>
                                </Button>
                                <Button className={classes.buttonAuth} color="secondary" component = {Link} to="/leaderboard" >
                                    <RecentActorsIcon />
                                </Button>
                                <Button className={classes.buttonAuth} color="secondary" component = {Link} to="/notifications">
                                    <Badge badgeContent={notifications.length} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </Button>
                                <Button className={classes.buttonAuth} color="secondary" component = {Link} to={`/users/${this.props.user.user.username}`}>
                                    <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                                </Button>
                                <Button className={classes.buttonAuth} color="secondary" onClick={this.handleLogout}>
                                    <ExitToAppIcon/>
                                </Button>
                            </Fragment>
                            ) : (
                            <Fragment>
                                <Button className={classes.button} color="secondary" component = {Link} to="/login" >Login</Button>
                                <Button className={classes.button} color="secondary" component = {Link} to="/signup" >Signup</Button>
                            </Fragment>
                            )}
                           </Grid>                      
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    ui : state.ui,
})

export default  connect(mapStateToProps, {getNotifications, logoutUser})(withStyles(styles)(NavigationBar))
                        