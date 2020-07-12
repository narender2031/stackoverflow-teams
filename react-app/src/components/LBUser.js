import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link'
import {Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
import ButtonBase from '@material-ui/core/ButtonBase'
import Avatar from '@material-ui/core/Avatar'

const styles = (theme) => ({
    ...theme.spread,
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      maxWidth: 880,
      backgroundColor : 'rgba(174, 174, 174, 0.063)'
    },
    avatar: {
      fontFamily: 'Bebas Neue',
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    username : {
      fontSize : '16px',
      fontWeight : '500',
      color : 'white',
      fontFamily : 'Hind'
    },
})

export class LBUser extends Component {
    render() {
        const { classes, user : { _id, firstName, lastName,username,bio, title}} = this.props
        const fn = firstName ? firstName.toString().charAt(0) : firstName
        const ln = lastName ? lastName.toString().charAt(0) : lastName
        return (
        <Zoom in={true} style={{ transitionDelay: '500ms' }}>   
            <Paper elevation={3} className={classes.paper}>
            <Grid container xs={12} spacing={2}>
                <Grid item sm={1} container direction="column" spacing={2} alignItems="center">
                <Grid item sm>
                    <ButtonBase >
                    <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                    </ButtonBase>
                </Grid>
                </Grid>

                <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography  variant="subtitle1" >
                        <MuiLink component ={Link} to ={ `/users/${username}`} className={classes.username} >
                        {username} 
                        </MuiLink>
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.qtitle}>
                        <MuiLink component ={Link} to ={ `/questions/${_id}`} className={classes.qtitle}>
                        {bio}
                        </MuiLink>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.qbody}>
                        {title}
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Paper>
        </Zoom>
        )
    }
}

// const mapStateToProps = (state) => ({
//     user : state.user
// })
  

export default (withStyles(styles)(LBUser))
