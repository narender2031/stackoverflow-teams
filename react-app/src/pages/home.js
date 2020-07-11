import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

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
        const { classes } = this.props
        return (
            <Grid container spacing={5}>
                <Grid item sm={3} style={{border : '1px solid black'}}>
                <List component="nav" className={classes.root} aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="All Questions" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="Tags" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <Divider light />
                </List>
                </Grid>
                <Grid item sm={9} style={{border : '1px solid black'}}>
                    {this.showQuestionCard()}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps, {getQuestions, getAnswers})(withStyles(styles)(home))
