import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    pageTitle : {
        margin : '20px 0px 20px auto' ,
        fontFamily: 'Bebas Neue',
        fontSize : '27px',
        color : 'white'
    },
    form : {
        textAlign : 'center'
    },
    formMain : {
        backgroundColor : '#303030',
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '10px',
        marginBottom : '5px',
        color : 'white'
    },
    textField : {
        marginBottom : '10px',
        // border: '1px solid white',
        borderRadius: '4px',
        '&::focus' : {
            backgroundColor : '#a3a3a8',
            color: 'white',
        },
        '&::placeholder': {
                //   textOverflow: 'ellipsis !important',
            color: 'white'
         }
    },
    root: {
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },

})

class signup extends Component {

    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirmPassword : '',
            username : ''           
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password,
            // confirmPassword : this.state.confirmPassword,
            username : this.state.username
        }
        this.props.signupUser(newUser , this.props.history)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        const { classes } = this.props

        return (
            <Grid container spacing={2} className ={classes.form} >
                <Grid item={true} sm /> 
                <Grid item={true} sm className ={classes.formMain}>
                    <Typography variant="h4" className={classes.pageTitle}>
                        Register for a new account
                    </Typography>
                    <form noValidate onSubmit ={this.handleSubmit } style={{paddingBottom: '10px'}}>
                        <TextField 
                        id ="firstName" 
                        name="firstName" 
                        type="text" 
                        label="First Name" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.firstName} 
                        onChange= {this.handleChange} fullWidth
                        color ='secondary' 
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <TextField 
                        id ="lastName" 
                        name="lastName" 
                        type="text" 
                        label="Last Name" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.lastName} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />
                        
                        <TextField 
                        id ="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.email} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <TextField 
                        id ="username" 
                        name="username" 
                        type="text" 
                        label="Username" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.username} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <TextField 
                        id ="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.password} 
                        onChange= {this.handleChange} fullWidth
                        color ='secondary' 
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <TextField 
                        id ="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        label="Confirm Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.confirmPassword} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        InputLabelProps={{
                            style: {
                              color: 'white'
                            } }} />

                        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
                            Lets Go!
                        </Button>
                        <br />
                        <small style={{color : '#aeaeae', paddingBottom: '20px'}}>Already have an account ? Login <Link to="/login" style={{color : '#bf9fdd', textDecoration: 'none'}}>here</Link></small>
                    </form>
                </Grid> 
                <Grid item={true} sm /> 
            </Grid>
        )
    }
}


export default connect(null, {signupUser})(withStyles(styles)(signup))
