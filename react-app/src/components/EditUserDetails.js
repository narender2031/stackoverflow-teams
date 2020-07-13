import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

import {connect} from 'react-redux'
import {editUserDetails} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    button : {
        "&:hover":{
            background: "#111111",
            cursor : 'pointer'
        },
        fontSize : '15px',
        fontFamily: 'Poppins',
        color : '#757575',
        width: theme.spacing(32),
        textAlign : 'center',
        paddingTop : '3px'
    }
})

class EditUserDetails extends Component {
    state = {
        open : false,
        firstName : this.props.user.user.firstName,
        lastName : this.props.user.user.lastName,
        location : this.props.user.user.location,
        bio : this.props.user.user.bio,
        title : this.props.user.user.title,
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const userDetails = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            location : this.state.location,
            bio : this.state.bio,
            title : this.state.title,
        }
        this.props.editUserDetails(userDetails)
        this.handleClose()
    }
    
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div onClick={this.handleOpen} className={classes.button}>
                    Edit Profile
                </div>
                
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle><div style={{fontFamily: 'Poppins'}}>Edit user details</div></DialogTitle>
                    <form onSubmit={this.handleSubmit} style={{margin : 'auto 15px'}}>

                        <TextField name="firstName" id="firstName" label="First Name" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.firstName} variant="outlined" fullWidth />
                        
                        <TextField name="lastName" id="lastName" label="Last Name" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.lastName} variant="outlined" fullWidth />
                        
                        <TextField name="title" id="title" label="Title" type="text" onChange={this.handleChange} 
                            style={{marginBottom: '10px'}} value={this.state.title} variant="outlined" fullWidth />
                        
                        <TextField name="location" id="location" label="Location" type="text" onChange={this.handleChange} 
                            style={{marginBottom: '10px'}} value={this.state.location} variant="outlined" fullWidth />

                        <TextField name="bio" id="bio" label="Bio" type="text" onChange={this.handleChange} 
                            style={{marginBottom: '10px'}} value={this.state.bio} variant="outlined" fullWidth />


                        <Button type="submit" variant="contained" color="secondary" 
                            style={{fontFamily: 'Poppins', margin : '10px 5px', fontSize : '16px', color : 'white'}}>        
                            Submit
                        </Button>

                    </form>
                </Dialog>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps, {editUserDetails})(withStyles(styles)(EditUserDetails))
