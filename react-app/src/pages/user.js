import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

// import axios from 'axios'

import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getUserData} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    
})

export class user extends Component {

    componentDidMount(){
        const username = this.props.match.params.username
        
        //get that question and all its answers
        this.props.getUserData(username)
    }

    render() {

        return (
            <Grid container spacing={5}>
                <Grid item sm={3} style={{border : '1px solid white'}}>
                    <Profile/>
                </Grid>
                <Grid item sm={9} style={{border : '1px solid white'}}>
                    timekine
                </Grid>
            </Grid>
        )
  }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps , {getUserData})(withStyles(styles)(user))
