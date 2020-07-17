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
import InputBase from '@material-ui/core/InputBase'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'

import {connect} from 'react-redux'
import {likeQuestion , dislikeQuestion, updateQuestionTitle, updateQuestionBody} from '../redux/actions/dataActions'

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
    arrow : {
      fontSize : '40px',
      color : '#ff5436'
    },
    username : {
      fontSize : '16px',
      fontWeight : '500',
      color : 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    posted : {
      fontSize : '11px',
      fontWeight : '500',
      color : '#8d8c8c',
    },
    qtitle : {
      fontSize : '16px',
      color : '#ffbfb1',
      cursor : 'pointer',
      "&:hover": {
        textDecoration : 'none'
      },
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    qbody : {
      fontSize : '14px',
      color : 'white',
      cursor : 'pointer',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    answerCount : {
      color : '#8d8c8c',
      fontSize : '13px',
      "&:hover": {
        textDecoration : 'none'
      },
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    likes : {
      fontSize : '15px',
      color : '#ececec',
      fontFamily : 'Poppins',
    },
    chip : {
      fontFamily : 'Poppins ',
      backgroundColor : '#949494',
      fontSize : '10.5px',
    },
    resolved : {
      color : '#88dc7b'
    },
    postQ : {
      color : 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize : '15px',
      backgroundColor : '#424242'
    },
    check : {
    }
})

export class QuestionCard extends Component {

  state = {
    link : '',
    editTitle : false,
    editBody : false,
    questionTitle : this.props.question.questionTitle,
    questionBody : this.props.question.questionBody
  } 

  componentDidMount(){
    var main = window.location.origin.toString() + "/"
    var full = window.location.href.toString()
    var link = full.split(main)[1]
    this.setState({
        link : link
    })
  }    

  handleLikeQuestion = () => {
    this.props.likeQuestion(this.props.question._id)
  } 

  handleDislikeQuestion = () => {
    this.props.dislikeQuestion(this.props.question._id)
  } 

  handleEditBody = () => {
    this.setState({
      editBody : true
    })
  }

  handleEditTitle = () => {
    this.setState({
      editTitle : true
    })
  }

  handleNoEditBody = () => {
    this.setState({
      editBody : false
    })
  }

  handleNoEditTitle = () => {
    this.setState({
      editTitle : false
    })
  }

  handlePostTitle = (event) => {
    event.preventDefault()
    const newQuestion = {questionTitle : this.state.questionTitle}
    this.props.updateQuestionTitle(this.props.question._id, newQuestion)
    
    this.handleNoEditTitle()
  }

  handlePostBody = (event) => {
    event.preventDefault()
    const newQuestion = {questionBody : this.state.questionBody}
    this.props.updateQuestionBody(this.props.question._id, newQuestion )

    this.handleNoEditBody()
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  render() {
    dayjs.extend(relativeTime)
    const { classes, question : { _id, firstName, lastName,username,questionTitle, questionBody,solvedStatus, likeCount, dislikeCount,answerCount, updatedAt}} = this.props
    const fn = firstName ? firstName.toString().charAt(0) : firstName
    const ln = lastName ? lastName.toString().charAt(0) : lastName
    return (
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>   
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={1} container direction="column" spacing={2} alignItems="center">
              <Grid item sm>
                <ButtonBase >
                  <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                </ButtonBase>
              </Grid>
              <Grid item sm>
                <ButtonBase onClick={this.handleLikeQuestion} className={classes.arrow}>
                  <ArrowDropUpIcon className={classes.arrow}/>
                </ButtonBase>
              </Grid>
              <Grid item sm>
                  <Typography className={classes.likes}>
                    {likeCount - dislikeCount}
                  </Typography>
              </Grid>
              <Grid item sm>
                <ButtonBase onClick={this.handleDislikeQuestion} className={classes.arrow}>
                  <ArrowDropDownIcon className={classes.arrow}/>
                </ButtonBase>
              </Grid>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs={11} container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography  variant="subtitle1" >
                    <MuiLink component ={Link} to ={ `/users/${username}`} className={classes.username} >
                      {username} 
                    </MuiLink>
                  </Typography>
                  <Typography className={classes.posted} >
                    <ScheduleIcon style={{fontSize : '13px'}}/> {dayjs(updatedAt).fromNow()}
                  </Typography>

                  {this.state.editTitle & username === this.props.user.user.username ? 
                    <Fragment>
                      <InputBase
                        id="questionTitle"
                        name="questionTitle"
                        multiline
                        rows={2}
                        className={classes.postQ}
                        value={this.state.questionTitle}
                        inputProps={{ 'aria-label': 'Edit question' }}
                        onChange={this.handleChange}
                        fullWidth
                      /> 
                      <IconButton>
                        <CheckBoxIcon color="secondary" onClick={this.handlePostTitle} />
                      </IconButton>
                      <IconButton>
                        <ClearIcon color="secondary" onClick={this.handleNoEditTitle}/>
                      </IconButton>

                    </Fragment> :
                    <Typography variant="body2" gutterBottom className={classes.qtitle} onDoubleClick={this.handleEditTitle}>
                      <MuiLink component ={Link} to ={ `/questions/${_id}`} className={classes.qtitle}>
                        {questionTitle}
                      </MuiLink>
                    </Typography>
                  }

                  {this.state.editBody & username === this.props.user.user.username ? 
                    <Fragment>
                      <InputBase
                      id="questionBody"
                      name="questionBody"
                      multiline
                      rows={4}
                      className={classes.postQ}
                      value={this.state.questionBody}
                      inputProps={{ 'aria-label': 'Edit question' }}
                      onChange={this.handleChange}
                      fullWidth
                      /> 
                      <IconButton>
                        <CheckBoxIcon color="secondary" onClick={this.handlePostBody} />
                      </IconButton>
                      <IconButton>
                        <ClearIcon color="secondary" onClick={this.handleNoEditTitle}/>
                      </IconButton>
                    </Fragment> :
                    <Typography variant="body2" color="textSecondary" className={classes.qbody} onDoubleClick={this.handleEditBody}>
                      {questionBody}
                    </Typography>
                  } 

                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <MuiLink component ={Link} to ={ `/questions/${_id}`} className={classes.answerCount}> 
                      {answerCount === 0 ? 'No answers yet!': answerCount === 1 ? answerCount +' answer' : answerCount +' answers'} 
                    </MuiLink>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1} container direction="column" alignItems='flex-end' justify='space-between' spacing={2} style={{paddingRight: '60px'}}>
                <Grid item>
                  <Typography variant="subtitle1" >
                    {solvedStatus ? <CheckCircleIcon className={classes.resolved}/> : <Chip label="Unresolved" className={classes.chip}/>}
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonBase>
                    {this.props.user.user.username !== undefined ? this.props.user.user.username === username & this.state.link !== "home" ? <DeleteQuestion questionId = {_id}/> : <Fragment></Fragment> : ''}
                  </ButtonBase>
                </Grid>
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

export default connect(mapStateToProps , {likeQuestion, dislikeQuestion, updateQuestionTitle, updateQuestionBody})(withStyles(styles)(QuestionCard))
