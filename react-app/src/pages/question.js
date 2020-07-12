import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

// import axios from 'axios'

import QuestionCard from '../components/QuestionCard'
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
    }
})

export class question extends Component {

  //once this page is loaded get the userhandle from the URL for which user profile is to be displayed  
  componentDidMount(){
    const questionId = this.props.match.params.questionId
    
    //get that question and all its answers
    this.props.getSpecificQuestion(questionId)
    this.props.getSpecificAnswers(questionId)
  }

  showQuestionCard(){ 
    const {specificQuestion} = this.props.data

    return <QuestionCard key={specificQuestion._id} question={specificQuestion} />
  }

  showAnswersCard(){ 
    // const {specificQuestion : {_id} , specificAnswers} = this.props.data

    // return specificAnswers.map( specificAnswers => <QuestionCard key={specificAnswers._id} question={specificAnswers} />)
  }

  render() {
    const {specificQuestion : {_id} } = this.props.data

    return (
        <Grid container spacing={5}>
            <Grid item sm={3} style={{border : '1px solid black'}}>
                filter
            </Grid>
            <Grid item sm={9} style={{border : '1px solid black'}}>
                {this.showQuestionCard()}
                {this.showAnswersCard()}
                <PostAnswer questionId={_id} />
            </Grid>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  data : state.data
})

export default connect(mapStateToProps , { getSpecificQuestion, getSpecificAnswers})(withStyles(styles)(question))
