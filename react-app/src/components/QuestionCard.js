import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import Avatar from '@material-ui/core/Avatar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        maxWidth: 700,
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(4.2),
        height: theme.spacing(4.2),
    },
    arrow : {
        width: theme.spacing(4.2),
    }
})

export class QuestionCard extends Component {
    render() {
        const { classes, question : { firstName, lastName,username,questionTitle, questionBody,solvedStatus, likeCount}} = this.props
        return (

        <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={1} container direction="column" spacing={2} alignItems="center">
            <Grid item sm>
            <ButtonBase >
            <Avatar className={classes.avatar}>{firstName.charAt(0)}{lastName.charAt(0)}</Avatar>
            </ButtonBase>
            </Grid>
            <Grid item sm>
            <ButtonBase >
            <ArrowDropUpIcon className={classes.arrow}/>
            </ButtonBase>
            </Grid>
            <Grid item sm>
                <Typography>{ likeCount}
                </Typography>
            </Grid>
            <Grid item sm>
            <ButtonBase >
            <ArrowDropDownIcon className={classes.arrow}/>
            </ButtonBase>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {username}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {questionTitle ? questionTitle : ''}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {questionBody}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{solvedStatus ? <CheckCircleIcon/> : <NotInterestedIcon/>}</Typography>
            </Grid>
          </Grid>
        </Grid>
        </Paper>

        )
    }
}

export default (withStyles(styles)(QuestionCard))
