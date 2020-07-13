import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import Avatar from '@material-ui/core/Avatar'

import {connect} from 'react-redux'
import EditUserDetails from '../components/EditUserDetails'

const styles = (theme) => ({
    ...theme.spread,
    currMonth : {
      textAlign : 'center',
    },
    mainDiv : {
        width: theme.spacing(32),
        paddingLeft : '37px'
    },
    imgDiv : {
        objectFit: 'cover',
        height: theme.spacing(35),
        width: theme.spacing(35),
    },
    editProfileDiv : {
        "&:hover":{
            background: "#e0e0e0"
        },
        border : 'solid 1px #e0e0e0',
        height: theme.spacing(3.1),
        display : 'flex',
        flexDirection : 'row'
    },
    nameDiv : {
        marginTop : '15px',
        fontSize : '25px',
        height: theme.spacing(3.5),
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
        fontFamily: 'Bebas Neue',
        color : 'white',
        letterSpacing  : '0.4px'
    },
    usernameDiv : {
        marginTop : '6px',
        color : '#f5f9f9'
    },
    bioDiv : {
        marginTop : '18px',
        fontSize : '14px',
        color : '#f0f4f4',
        display : 'flex',
        flexDirection : 'row'
    },
    locationDiv : {
        marginTop : '4px',
        fontSize : '14px',
        color : '#f0f4f4',
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
    },
    emailDiv : {
        marginTop : '4px',
        fontSize : '14px',
        color : '#f0f4f4',
        display : 'flex',
        flexDirection : 'row'
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(32),
        height: theme.spacing(32),
        fontSize : '180px'
    },
})

class Profile extends Component {

    render() {
        const {classes} = this.props
        const {username, firstName, lastName , location, bio, email} = this.props.user.otherUser
        const fn = firstName ? firstName.toString().charAt(0) : firstName
        const ln = lastName ? lastName.toString().charAt(0) : lastName
        return (
            <div className={classes.mainDiv}>

                <div className={classes.imgDiv}>
                   <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                </div>

                <div className={classes.editProfileDiv}>
                    <EditUserDetails/>
                </div>

                <div className={classes.nameDiv}>
                    {firstName} {lastName}
                </div>

                <div className={classes.usernameDiv}>
                    @{username}
                </div>
                
                {bio    ?
                <div className={classes.bioDiv} >
                    <FormatQuoteIcon style={{fontSize : '18px', color : '#f0f4f4',  marginRight: '10px'}}/> {bio}
                </div>: ''}

                <div className={classes.emailDiv} >
                    <EmailIcon style={{fontSize : '18px', color : '#f0f4f4', marginRight: '10px'}} /> {email}
                </div> 

                {location !== '' ?
                <div className={classes.locationDiv} >
                    <LocationOnIcon style={{fontSize : '18px', color : '#f0f4f4',  marginRight: '10px'}}/> {location}
                </div> : ''
                }   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps )(withStyles(styles)(Profile))
