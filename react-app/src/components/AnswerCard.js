import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
import ButtonBase from '@material-ui/core/ButtonBase'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import MuiLink from '@material-ui/core/Link'
import DeleteQuestion from './DeleteQuestion'
import ScheduleIcon from '@material-ui/icons/Schedule'
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
    posted : {
      fontSize : '11px',
      fontWeight : '500',
      color : '#8d8c8c',
      fontFamily : 'Hind'
    },
    abody : {
      fontSize : '15px',
      color : 'white',
      fontFamily : 'Hind',
      textTransform : 'capitalize',
    },
})

export class AnswerCard extends Component {

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
    dayjs.extend(relativeTime)
    const { classes, answer : { _id, firstName, lastName,username,answerBody,updatedAt }} = this.props
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
                  <Typography className={classes.posted} >
                    <ScheduleIcon style={{fontSize : '13px'}}/> {dayjs(updatedAt).fromNow()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.abody}>
                    {answerBody}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                {/* <Typography variant="subtitle1">
                  {solvedStatus ? <CheckCircleIcon className={classes.resolved}/> : <Chip label="Unresolved" className={classes.chip}/>}
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps , {likeQuestion, dislikeQuestion})(withStyles(styles)(AnswerCard))
