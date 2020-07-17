import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import Sidebar from '../components/Sidebar'
import UserCard from '../components/UserCard'
import {connect} from 'react-redux'
import {getAllUsers} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    allQ : {
        fontSize : '25px',
        color : '#ececec',
        fontFamily : 'Poppins',
        textTransform : 'capitalize',
        paddingTop : '4px'
    },
    side : {
        fontSize : '18px',
        color : '#b8b8b8',
        fontFamily : 'Poppins',
        textTransform : 'capitalize', 
        borderRadius : '0px'
    },
    sideBar : {
        backgroundColor : '#242422'
    },
    sideIcon : {
        fontSize : '15px',
        color : '#b8b8b8',
    },  
})

class home extends Component {

    state = {
        link : ''
    }

    componentDidMount(){
        this.props.getAllUsers()

        var main = window.location.origin.toString() + "/"
        var full = window.location.href.toString()
        var link = full.split(main)[1]
        this.setState({
            link : link
        })

    }
    
    showUserCard = () =>{ 
        const {allUsers} = this.props.user

        return allUsers.map( user => <UserCard key={user._id} user={user} />)
    }
    
    render() {
        const { classes } = this.props

        return (
            <Grid container spacing={5}>
                <Grid item sm={2} className ={classes.sideBar}>
                    <Sidebar link ={this.state.link}/>
                </Grid>
                <Grid container item sm={10}>
                    <Grid item sm={10} className ={classes.allQ}>
                        Browse all users
                    </Grid>
                    <Grid item sm={10}>                        
                        {this.showUserCard}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default  connect(mapStateToProps, {getAllUsers})(withStyles(styles)(home))
