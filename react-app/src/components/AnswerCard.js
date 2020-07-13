import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
import ButtonBase from '@material-ui/core/ButtonBase'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CircleCheckedFilled from '@material-ui/icons/CheckCircle'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import MuiLink from '@material-ui/core/Link'
import ScheduleIcon from '@material-ui/icons/Schedule'
import {connect} from 'react-redux'
import {toggleCorrectStatus} from '../redux/actions/dataActions'

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
    checkbox : {
      marginLeft : '0px'
    }
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

  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  handleStatusCorrect = () => {
    this.props.toggleCorrectStatus(this.props.answer._id)
  }

  render() {
    dayjs.extend(relativeTime)
    const { classes, answer : { firstName, lastName,username,answerBody, updatedAt, statusCorrect }} = this.props
    const { specificQuestion } = this.props.data
    const { user } = this.props.user

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
              <Grid item sm>
                { user.username === specificQuestion.username ? (
                  <FormControlLabel  className={classes.checkbox} onClick={this.handleStatusCorrect}
                  checked = {statusCorrect}
                  control={<Checkbox 
                      icon={<CircleUnchecked style={{ fontSize:'25px', color : '#b8b8b8'}}/>}
                      checkedIcon={<CircleCheckedFilled style={{color : '#88dc7b', fontSize:'25px'}}/>} name="checked"/>}  />
                ) : (
                  <div></div>
                )

              }
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
  user : state.user,
  data : state.data
})

export default connect(mapStateToProps , { toggleCorrectStatus})(withStyles(styles)(AnswerCard))
