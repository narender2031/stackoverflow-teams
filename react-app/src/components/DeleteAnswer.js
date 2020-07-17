import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import DeleteIcon from '@material-ui/icons/Delete'

import {connect} from 'react-redux'
import {deleteAnswer} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    delete : {
        color : '#757575',
        fontSize : '20px'
    }
})

class DeleteAnswer extends Component {

    deleteAnswer = () => {
        this.props.deleteAnswer(this.props.answerId)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <DeleteIcon className={classes.delete} onClick={this.deleteAnswer}/>
            </div>
        )
    }
}

export default connect(null, {deleteAnswer})(withStyles(styles)(DeleteAnswer))