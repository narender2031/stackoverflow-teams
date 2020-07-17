import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'

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
        backgroundColor : '#424242',
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '10px',
        marginBottom : '5px',
        color : 'white'
    },
    textField : {
        border: '1px solid white',
        borderRadius: '4px',
        color : 'white',
        marginTop : '20px',
        padding : '5px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize : '15px',
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
                        <InputBase 
                        id ="firstName" 
                        name="firstName" 
                        type="text" 
                        variant="outlined"
                        placeholder = "First Name"
                        className={classes.textField}
                        value={this.state.firstName} 
                        onChange= {this.handleChange} fullWidth
                        color ='secondary' 
                        />

                        <InputBase 
                        id ="lastName" 
                        name="lastName" 
                        type="text" 
                        variant="outlined"
                        placeholder = "Last Name"
                        className={classes.textField}
                        value={this.state.lastName} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        />
                        
                        <InputBase 
                        id ="email" 
                        name="email" 
                        type="email" 
                        className={classes.textField}
                        variant="outlined"
                        placeholder = "Email"
                        value={this.state.email} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        />

                        <InputBase 
                        id ="username" 
                        name="username" 
                        type="text" 
                        placeholder="Username" 
                        variant="outlined"
                        className={classes.textField}
                        value={this.state.username} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        />

                        <InputBase 
                        id ="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.password} 
                        onChange= {this.handleChange} fullWidth
                        color ='secondary' 
                        />

                        <InputBase 
                        id ="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password" 
                        className={classes.textField}
                        variant="outlined"
                        value={this.state.confirmPassword} 
                        onChange= {this.handleChange} fullWidth 
                        color ='secondary'
                        />

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
