import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Zoom from '@material-ui/core/Zoom'
import Paper from '@material-ui/core/Paper'

const styles = (theme) => ({
    ...theme.spread,
    gridMain : {
        fontFamily: 'Bebas Neue',
        color : '#fff3e0'
    },
    paper : {
        backgroundColor : '#d4d4d9'
    }
})

class welcome extends Component {

    state = {
        curTime : 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime : this.state.curTime >= 20 ? 0 : this.state.curTime + 1
            })
        }, 100)
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={2} className={classes.gridMain} >
                <Grid item xs={2}/>
                <Grid item xs={8} style={{textAlign:"center"}} >
                    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                        <Paper elevation={4} className={classes.paper} > 
                            <div style={{fontSize:"50px", lineHeight : '20px', paddingTop : '100px'}}>
                                Unleash the power of collaboration with<br/>
                            </div>
                            <div style={{fontSize:"100px" ,marginLeft : this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '5px' :'0px', textShadow: this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '2px 2px #62727b' : '' , color: this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '#e3e3e3' : '' }}>
                                team stack
                            </div>
                            <div  style={{fontSize:"40px"}}></div><br />
                            <Button  variant="contained" color ="secondary" style={{ marginBottom : '50px'}} component = {Link} to="/signup">
                                <b style={{fontSize:"25px",color:"#fff3e0", fontFamily: 'Bebas Neue', letterSpacing : '3px'}}>Get Started</b>
                            </Button>
                        </Paper>
                    </Zoom>

                </Grid>
                <Grid item xs={2}/>
            </Grid>          
        )
    }
}

export default withStyles(styles)(welcome)
