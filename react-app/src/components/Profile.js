import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import Avatar from '@material-ui/core/Avatar'

import {connect} from 'react-redux'
// import {uploadProfilePicture}  from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spread,
    currMonth : {
      textAlign : 'center',
    },
    mainDiv : {
        width: theme.spacing(32),
    },
    imgDiv : {
        objectFit: 'cover',
        height: theme.spacing(32),
        width: theme.spacing(32),
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
        color : '#212121',
        letterSpacing  : '0.4px'
    },
    usernameDiv : {
        marginTop : '6px',
    },
    bioDiv : {
        marginTop : '18px',
        fontSize : '14px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row'
    },
    locationDiv : {
        marginTop : '4px',
        fontSize : '14px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
    },
    emailDiv : {
        marginTop : '4px',
        fontSize : '14px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row'
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(35),
        height: theme.spacing(35),
    },
})

class Profile extends Component {

    handlePictureChange = () => {
        const picture = document.getElementById('profilePicture')
        picture.click()
    }

    handleUploadProfilePicture = (event) => {
        const picture = event.target.files[0]
        
        //send to server
        const formData = new FormData()
        formData.append('image', picture, picture.name)

        this.props.uploadProfilePicture(formData)
    }

    render() {
        const {classes} = this.props
        const {username, firstName, lastName , location, bio, email} = this.props.user.otherUser

        return (
            <div className={classes.mainDiv}>

                <div className={classes.imgDiv}>
                    {/* <input type='file' id='profilePicture' onChange={this.handleUploadProfilePicture} hidden='hidden' />
                    <img src={profileImage} alt="profilePicture" className={classes.imgDiv} onClick={this.handlePictureChange} /> */}
                    <Avatar className={classes.avatar}>{firstName}{lastName}</Avatar>
                
                </div>

                <div className={classes.editProfileDiv}>
                    {/* <EditUserDetails/> */}
                </div>

                <div className={classes.nameDiv}>
                    {firstName ? firstName : ''} {lastName ? lastName : ''}
                </div>

                <div className={classes.usernameDiv}>
                    @{username}
                </div>
                
                <div className={classes.bioDiv} >
                    <FormatQuoteIcon style={{fontSize : '18px', color : '#616161',  marginRight: '10px'}}/> {bio}
                </div>

                <div className={classes.emailDiv} >
                    <EmailIcon style={{fontSize : '18px', color : '#616161', marginRight: '10px'}} /> {email}
                </div>

                <div className={classes.locationDiv} >
                    <LocationOnIcon style={{fontSize : '18px', color : '#616161',  marginRight: '10px'}}/> {location}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps )(withStyles(styles)(Profile))
