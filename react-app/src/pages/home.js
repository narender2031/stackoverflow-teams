import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import PublicIcon from '@material-ui/icons/Public'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'

import QuestionCard from '../components/QuestionCard'
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
                            style={{color : this.state.link === "tags" ? 'white' : '',
                            borderLeft: this.state.link === "tags" ? '5px solid #ff5436' : '',
                            backgroundColor : this.state.link === "tags" ? '#1c1c1c' : '',}}>
                                <LocalOfferIcon className ={classes.sideIcon} style={{color : this.state.link === "tags" ? 'white' : ''}}/>
                                &nbsp;Tags
                            </Button>
                        </ListItem>
                        <ListItem button>
                            <Button className ={classes.side} component = {Link} to="/allUsers" 
                            style={{color : this.state.link === "allUsers" ? 'white' : '',
                            borderLeft: this.state.link === "allUsers" ? '5px solid #ff5436' : '',
                            backgroundColor : this.state.link === "allUsers" ? '#1c1c1c' : '',}}>
                                <PeopleIcon className ={classes.sideIcon} style={{color : this.state.link === "allUsers" ? 'white' : ''}}/>
                                &nbsp;Users
                            </Button>
                        </ListItem>
                        <Divider  />
                    </List>
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
