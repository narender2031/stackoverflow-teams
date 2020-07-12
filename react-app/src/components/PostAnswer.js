import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {connect} from 'react-redux'
import {postAnswer} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    postAnswer : {
        backgroundColor : '#c2c2c7',
        borderRadius : '3px',
        width: theme.spacing(113),
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '10px',
        marginBottom : '5px',
        color : 'white'
    },
})

export class PostAnswer extends Component {

    state = {
        answerBody : 'Post an answer'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleClearText = () => {
        this.setState({
            answerBody : ''
        })
    }
    
    handleSubmit = () => {
        let answerDetails = {
            answerBody : this.state.answerBody,
            questionId : this.props.questionId
        }
        this.props.postAnswer(answerDetails)

        console.log(this.state.answerBody)
    }

    render() {
        const {classes} = this.props
        return (
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField
                id="answerBody"
                name="answerBody"
                multiline
                rows={4}
                defaultValue="Add an answer"
                variant="outlined"
                value={this.state.answerBody}
                onChange={this.handleChange}
                onClick={this.handleClearText}
                className={classes.postAnswer}
                />
                <br/>
                <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={this.handleSubmit}>
                    Submit
                </Button>
            </form>
        )
  }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps , {postAnswer})(withStyles(styles)(PostAnswer))
