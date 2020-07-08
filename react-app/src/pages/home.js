import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    ...theme.spread,
})

class home extends Component {
    render() {
        return (
            <div>
               hi
            </div>
        )
    }
}

export default (withStyles(styles)(home))
