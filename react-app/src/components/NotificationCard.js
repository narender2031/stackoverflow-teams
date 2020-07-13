import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

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
    side : {
      textTransform : 'capitalize'
    }
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
    const { classes, notification : { username, questionTitle}} = this.props
    const { questions} = this.props.data

    let questionId = questions.map(question => {
      if(question.questionTitle === this.props.notification.questionTitle)
        return question._id
      else
        return null
      })
      
    return (
      <Grid >
        <Grid item xs={12} sm container>
          <Button className = {classes.side} component = {Link} to={`/users/${username}`} style={{color :  'white'}}>
              @{username} 
          </Button> 
          <span style={{color : '#b8b8b8', marginTop : '6px'}}>
          tagged you in a question
          </span>
          <Button className = {classes.side} component = {Link} to={`/questions/${questionId}`} style={{color :  'white'}}>
              {questionTitle} 
          </Button>
          <Divider color='secondary'/>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  ui : state.ui,
  user : state.user,
  data : state.data
})

export default connect(mapStateToProps,null)(withStyles(styles)(NotificationCard))
