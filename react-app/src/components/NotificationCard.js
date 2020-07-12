import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Avatar from '@material-ui/core/Avatar'
import MuiLink from '@material-ui/core/Link'
import {connect} from 'react-redux'
import {likeQuestion , dislikeQuestion} from '../redux/actions/dataActions'

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

export class NotificationCard extends Component {

  state = {
    link : ''
  } 

  componentDidMount(){
    var main = window.location.origin.toString() + "/"
    var full = window.location.href.toString()
    var link = full.split(main)[1]
    this.setState({
        link : link
    })
  }    

  render() {
    const { classes, notification : { _id, username, usernameTagged, questionTitle}} = this.props

    return (
          <Grid >
            <Grid item xs={12} sm container>
              <Button className ={classes.side} component = {Link} to={`/users/${username}`} style={{color :  'white'}}>
                  {username} tagged you in a question "{questionTitle} "
              </Button> 
            </Grid>
          </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  ui : state.ui,
  user : state.user
})

export default connect(mapStateToProps, {likeQuestion, dislikeQuestion})(withStyles(styles)(NotificationCard))
