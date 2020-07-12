import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import PublicIcon from '@material-ui/icons/Public'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'

import QuestionCard from '../components/QuestionCard'
import AnswerCard from '../components/AnswerCard'
import PostAnswer from '../components/PostAnswer'
import {connect} from 'react-redux'
import { getSpecificQuestion ,getSpecificAnswers} from '../redux/actions/dataActions'

const styles = (theme) => ({
  ...theme.spread,
  root: {
      flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      maxWidth: 700,
  },
  avatar: {
      fontFamily: 'Bebas Neue',
      width: theme.spacing(4.2),
      height: theme.spacing(4.2),
  },
  arrow : {
      width: theme.spacing(4.2),
  },
  allQ : {
    fontSize : '25px',
    color : '#ececec',
    fontFamily : 'Poppins',
    textTransform : 'capitalize',
    paddingTop : '4px'
  },
  side : {
      fontSize : '18px',
      color : '#b8b8b8',
      fontFamily : 'Poppins',
      textTransform : 'capitalize', 
      borderRadius : '0px'
  },
  sideBar : {
      backgroundColor : '#242422'
  },
  sideIcon : {
      fontSize : '15px',
      color : '#b8b8b8',
  },  
})

export class question extends Component {
  state = {
    link : ''
  }
  //once this page is loaded get the userhandle from the URL for which user profile is to be displayed  
  componentDidMount(){
    const questionId = this.props.match.params.questionId
    
    //get that question and all its answers
    this.props.getSpecificQuestion(questionId)
    this.props.getSpecificAnswers(questionId)

    var main = window.location.origin.toString() + "/"
    var full = window.location.href.toString()
    var link = full.split(main)[1]
    this.setState({
        link : link
    })
  }

  showQuestionCard(){ 
    const {specificQuestion} = this.props.data

    return <QuestionCard key={specificQuestion._id} question={specificQuestion} />
  }

  showAnswersCard(){ 
    const {specificAnswers } = this.props.data

    return specificAnswers.map( specificAnswer => <AnswerCard key={specificAnswer._id} answer={specificAnswer}/>)
  }

  render() {
    const {specificQuestion : {_id} } = this.props.data
    const { classes } = this.props

    return (

        <Grid container spacing={5}>
          <Grid item sm={2} className ={classes.sideBar}>
              <List component="nav" className={classes.root} aria-label="mailbox folders">
                  <ListItem button>
                      <Button className ={classes.side} component = {Link} to="/home" 
                      style={{color : this.state.link === "home" ? 'white' : '',
                              borderLeft: this.state.link === "home" ? '5px solid #ff5436' : '',
                              backgroundColor : this.state.link === "home" ? '#1c1c1c' : '',}}>
                          <PublicIcon className ={classes.sideIcon} style={{color : this.state.link === "home" ? 'white' : ''}}/>
                          &nbsp;Team Stack
                      </Button>
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                      <Button className ={classes.side} component = {Link} to="/tags" 
                      style={{color : this.state.link === "tags" ? 'white' : ''}}>
                          <LocalOfferIcon className ={classes.sideIcon} style={{color : this.state.link === "tags" ? 'white' : ''}}/>
                          &nbsp;Tags
                      </Button>
                  </ListItem>
                  <ListItem button>
                      <Button className ={classes.side} component = {Link} to="/allUsers" style={{color : this.state.link === "users" ? 'white' : ''}}>
                          <PeopleIcon className ={classes.sideIcon} style={{color : this.state.link === "users" ? 'white' : ''}}/>
                          &nbsp;Users
                      </Button>
                  </ListItem>
                  <Divider  />
              </List>
          </Grid>
          <Grid container item sm={10}>
              <Grid item sm={10}>                        
                  {this.showQuestionCard()}
              </Grid>
              <Grid item sm={10}>                        
                  {this.showAnswersCard()}
              </Grid>
              <Grid item sm={10} >         
                <PostAnswer questionId={_id} />
              </Grid>
          </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  data : state.data
})

export default connect(mapStateToProps , { getSpecificQuestion, getSpecificAnswers})(withStyles(styles)(question))
