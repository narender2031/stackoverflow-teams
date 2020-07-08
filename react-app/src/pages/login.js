import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    ...theme.spread,
})

class login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}

export default (withStyles(styles)(login))
