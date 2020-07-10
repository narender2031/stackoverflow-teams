import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import QuestionCard from '../components/QuestionCard'
import {connect} from 'react-redux'
import {getQuestions, getAnswers} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
})

class home extends Component {

    componentDidMount(){
        const {questions} = this.props.data
        //get the user data and todo items of authenticated user
        if(questions)
            this.props.getQuestions()
    }

    showQuestionCard(){ 
        const {questions} = this.props.data

        return questions.map( question => <QuestionCard key={question._id} question={question} />)
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item sm={1}/>
                <Grid item sm={3} style={{border : '1px solid black'}}>
                    filter
                </Grid>
                <Grid item sm={7} style={{border : '1px solid black'}}>
                    {this.showQuestionCard()}
                </Grid>
                <Grid item sm={1}/>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps, {getQuestions, getAnswers})(withStyles(styles)(home))
