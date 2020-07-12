import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import LBUser from '../components/LBUser'
import {connect} from 'react-redux'
import {getAllUsers} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
})

export class leaderboard extends Component {

    componentDidMount(){
        //get all users
        this.props.getAllUsers()
    }

    showLBUsers(){ 
        const {allUsers} = this.props.user
        
        return allUsers.map( user => <LBUser key={user._id} user={user} />)
    }

    render() {
        return (
            <div>
                {this.showLBUsers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps, {getAllUsers})(withStyles(styles)(leaderboard))
