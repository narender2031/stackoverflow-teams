import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    ...theme.spread,
})

class signup extends Component {
    render() {
        return (
            <div>
                Signup
            </div>
        )
    }
}

export default (withStyles(styles)(signup))
