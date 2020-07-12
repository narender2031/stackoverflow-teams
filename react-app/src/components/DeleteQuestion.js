import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import DeleteIcon from '@material-ui/icons/Delete'

import {connect} from 'react-redux'
import {deleteQuestion} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    delete : {
        color : '#757575',
        fontSize : '20px'
    }
})

class DeleteQuestion extends Component {

    deleteQuestion = () => {
        this.props.deleteQuestion(this.props.questionId)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <DeleteIcon className={classes.delete} onClick={this.deleteQuestion}/>
            </div>
        )
    }
}

export default connect(null, {deleteQuestion})(withStyles(styles)(DeleteQuestion))