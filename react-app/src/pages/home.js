import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import QuestionCard from '../components/QuestionCard'
import Sidebar from '../components/Sidebar'
import {connect} from 'react-redux'
import {getQuestions, getAnswers} from '../redux/actions/dataActions'
import PostQuestion from '../components/PostQuestion'

const styles = (theme) => ({
    ...theme.spread,
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

class home extends Component {

    state = {
        link : ''
    }
    componentDidMount(){
        const {questions} = this.props.data
        //get the user data and todo items of authenticated user
        if(questions)
            this.props.getQuestions()

        var main = window.location.origin.toString() + "/"
        var full = window.location.href.toString()
        var link = full.split(main)[1]
        this.setState({
            link : link
        })

    }
    
    showQuestionCard(){ 
        const {questions} = this.props.data
        
        return questions.map( question => <QuestionCard key={question._id} question={question} />)
    }
    
    render() {
        const { classes } = this.props

        return (
            <Grid container spacing={5}>
                <Grid item sm={2} className ={classes.sideBar}>
                    <Sidebar link ={this.state.link}/>
                </Grid>
                <Grid container item sm={10}>
                    <Grid item sm={8} className ={classes.allQ}>
                        All Questions
                    </Grid>
                    <Grid item sm={2} >
                        <PostQuestion/>
                    </Grid>
                    <Grid item sm={10}>                        
                        {this.showQuestionCard()}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps, {getQuestions, getAnswers})(withStyles(styles)(home))
