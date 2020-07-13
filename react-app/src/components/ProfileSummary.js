import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import {connect} from 'react-redux'
import { Grid } from '@material-ui/core'

const styles = (theme) => ({
    ...theme.spread,
    mainGrid : {
        marginLeft : '80px'
    },
    title : {
        fontSize : '20px',
        fontFamily: 'Poppins',
        color : '#111111',
    },
    root : {
        backgroundColor : '#666666'
    }
})

class Profile extends Component {

    render() {
        const {classes} = this.props
        const {questionCount, answerCount} = this.props.user.user

        return (
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Question Count
                                </Typography>
                                <Typography variant="h2" component="h2" style={{color : 'white'}}>
                                    {questionCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} >
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Answer Count
                                </Typography>
                                <Typography variant="h2" component="h2" style={{color : 'white'}}>
                                    {answerCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                 
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps )(withStyles(styles)(Profile))
