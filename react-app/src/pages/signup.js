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
        fontSize : '30px'
    },
    form : {
        textAlign : 'center'
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '15px',
        marginBottom : '5px'
    },
    textField : {
        marginBottom : '10px',
    }
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
        console.log(newUser)
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
                <Grid item={true} sm >
                    <Typography variant="h4" className={classes.pageTitle}>
                        Sign Up
                    </Typography>
                    <form noValidate onSubmit ={this.handleSubmit } >
                        <TextField 
                        id ="firstName" 
                        name="firstName" 
                        type="text" 
                        label="First Name" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.firstName} 
                        onChange= {this.handleChange} fullWidth />

                        <TextField 
                        id ="lastName" 
                        name="lastName" 
                        type="text" 
                        label="Last Name" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.lastName} 
                        onChange= {this.handleChange} fullWidth />
                        
                        <TextField 
                        id ="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.email} 
                        onChange= {this.handleChange} fullWidth />

                        <TextField 
                        id ="username" 
                        name="username" 
                        type="text" 
                        label="Username" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.username} 
                        onChange= {this.handleChange} fullWidth />

                        <TextField 
                        id ="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.password} 
                        onChange= {this.handleChange} fullWidth />

                        <TextField 
                        id ="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        label="Confirm Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.confirmPassword} 
                        onChange= {this.handleChange} fullWidth />

                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Confirm
                        </Button>
                        <br />
                        <small>Already have an account ? Login <Link to="/login" >here</Link></small>
                    </form>
                </Grid> 
                <Grid item={true} sm /> 
            </Grid>
        )
    }
}


export default connect(null, {signupUser})(withStyles(styles)(signup))
