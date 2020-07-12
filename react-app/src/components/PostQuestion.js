import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

import {connect} from 'react-redux'
import {postQuestion} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    postQ : {
        fontSize : '18px',
        color : '#ececec',
        fontFamily : 'Poppins',
        textTransform : 'capitalize'
    }
})

class PostQuestion extends Component {
    state = {
        open : false,
        questionTitle : '',
        questionBody : ''
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newQuestion = {
            questionTitle : this.state.questionTitle,
            questionBody : this.state.questionBody
        }
        this.props.postQuestion(newQuestion)
        this.handleClose()
    }
    
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Button className={classes.postQ} onClick={this.handleOpen} variant="contained" color="secondary">
                    Post Question
                </Button>
                
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle >
                        <div style={{fontFamily: 'Poppins'}}>Add a question ?</div>
                    </DialogTitle>

                    <form onSubmit={this.handleSubmit} style={{margin : 'auto 15px'}}>
                        
                        <TextField name="questionTitle" id="questionTitle" label="Question Title" type="text" 
                            onChange={this.handleChange} variant="outlined" style={{marginBottom: '10px'}} fullWidth />
                        
                        <TextField name="questionBody" id="questionBody" label="Question Body" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} variant="outlined" fullWidth multiline
                            rows={5} />
                        
                        <Button type="submit" variant="contained" color="primary" 
                            style={{fontFamily: 'Poppins', margin : '10px 5px', fontSize : '16px'}}>
                            Post
                        </Button>
                    </form>
                </Dialog>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps, {postQuestion})(withStyles(styles)(PostQuestion))
