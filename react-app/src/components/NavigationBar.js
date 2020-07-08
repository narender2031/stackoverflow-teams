import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import FilterBAndWIcon from '@material-ui/icons/FilterBAndW'

// import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
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
    icon : {
        fontSize : '45px',
        marginTop : '5px',
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
    render() {
        const {classes} = this.props
        return (
            <div className={classes.navBar}> 
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className = {classes.toolBar}>
                        <Grid container spacing={2} className={classes.gridMain} >
                            <Grid item xs={2}>
                                <FilterBAndWIcon color="secondary" className={classes.icon}/>
                            </Grid>
                            <Grid item xs={8}/>
                            <Grid item xs={2}>
                            <Button className={classes.button} color="secondary" component = {Link} to="/login" >Login</Button>
                            <Button className={classes.button} color="secondary" component = {Link} to="/signup" >Signup</Button>
                            </Grid>                      
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default (withStyles(styles)(NavigationBar))
                        