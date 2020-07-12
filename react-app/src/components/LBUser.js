import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
    ...theme.spread,
})

export class LBUser extends Component {
    render() {
        const {classes} = this.props
        const {firstName, lastName, leaderboardPosition, answerCount, questionCount} = this.props.user
        return (
            <Paper elevation={3} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item sm={1}>
                        {firstName} {lastName}
                    </Grid>
                    <Grid item sm={1}>
                        {leaderboardPosition}
                    </Grid>
                    <Grid item sm={1}>
                        {answerCount}
                    </Grid>
                    <Grid item sm={1}>
                        {questionCount}
                    </Grid>
                </Grid> 
            </Paper>
        )
    }
}

// const mapStateToProps = (state) => ({
//     user : state.user
// })
  

export default (withStyles(styles)(LBUser))
