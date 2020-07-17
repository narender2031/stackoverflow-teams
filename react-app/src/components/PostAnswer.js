import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'

import {connect} from 'react-redux'
import {postAnswer} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    postAnswer : {
        backgroundColor : 'rgba(174, 174, 174, 0.063)',
        marginLeft : '8px', 
        borderRadius : '3px',
        width: theme.spacing(112),
        color : 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize : '14px',
        paddingLeft : '65px'
    },
    button : {
        fontFamily: 'Bebas Neue',
        fontSize : '20px',
        marginTop : '10px',
        marginBottom : '5px',
        color : 'white',
        marginLeft : '11px', 
    },
})

export class PostAnswer extends Component {

    state = {
        answerBody : ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit = () => {
        let answerDetails = {
            answerBody : this.state.answerBody,
            questionId : this.props.questionId
        }
        this.props.postAnswer(answerDetails)
    }

    render() {
        const {classes} = this.props
        return (
            <form className={classes.root} noValidate autoComplete="off" >
 
                <InputBase
                    id="answerBody"
                    name="answerBody"
                    multiline
                    rows={4}
                    className={classes.postAnswer}
                    placeholder="Post an answer"
                    inputProps={{ 'aria-label': 'Post an answer' }}
                    onChange={this.handleChange}
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
