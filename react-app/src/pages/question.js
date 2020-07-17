import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import Sidebar from '../components/Sidebar'
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
  qError : {
    fontSize : '25px',
    color : '#b8b8b8',
    fontFamily : 'Poppins',
    textTransform : 'capitalize',
    paddingTop : '20px'
  }
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
    const { classes } = this.props
    const { specificQuestion} = this.props.data
    if (specificQuestion) 
      return <QuestionCard key={specificQuestion._id} question={specificQuestion} />
    else
      return <div className={classes.qError}> This question doesn't exist</div>
  }

  showAnswersCard(){ 
    const {specificAnswers } = this.props.data
    if (specificAnswers.length === 0)
      return <div></div>
    else
      return specificAnswers.map( specificAnswer => <AnswerCard key={specificAnswer._id} answer={specificAnswer}/>)
  }

  render() {
    const {specificQuestion } = this.props.data
    const { classes } = this.props

    return (

        <Grid container spacing={5}>
          <Grid item sm={2} className ={classes.sideBar}>
            <Sidebar link ={this.state.link}/>
          </Grid>
          <Grid container item sm={10}>
              <Grid item sm={10}>                        
                  {this.showQuestionCard()}
              </Grid>
              <Grid item sm={10}>                        
                  {this.showAnswersCard()}
              </Grid>
              {this.props.user.user.username !== specificQuestion.username ? 
              <Grid item sm={10} >   
                    <PostAnswer questionId={specificQuestion ? specificQuestion._id : ''} />                
              </Grid>
              : ''}
          </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  data : state.data,
  user : state.user,
})

export default connect(mapStateToProps , { getSpecificQuestion, getSpecificAnswers})(withStyles(styles)(question))
