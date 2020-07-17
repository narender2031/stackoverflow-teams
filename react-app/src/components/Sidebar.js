import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import PublicIcon from '@material-ui/icons/Public'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'

const styles = (theme) => ({
    ...theme.spread,
    allQ : {
        fontSize : '25px',
        color : '#ececec',
        fontFamily : 'Poppins',
        textTransform : 'capitalize',
        paddingTop : '4px'
    },
    side : {
        fontSize : '18px',
        color : '#b8b8b8',
        fontFamily : 'Poppins',
        textTransform : 'capitalize', 
        borderRadius : '0px'
    },
    sideBar : {
        backgroundColor : '#242422'
    },
    sideIcon : {
        fontSize : '15px',
        color : '#b8b8b8',
    },  
})

class home extends Component {
    
    render() {
        const {classes , link} = this.props

        return (

        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
                <Button className ={classes.side} component = {Link} to="/home" 
                style={{color : link === "home" ? 'white' : '',
                        borderLeft: link === "home" ? '5px solid #ff5436' : '',
                        backgroundColor : link === "home" ? '#1c1c1c' : '',}}>
                    <PublicIcon className ={classes.sideIcon} style={{color : link === "home" ? 'white' : ''}}/>
                    &nbsp;Team Stack
                </Button>
            </ListItem>
            <Divider />
            <ListItem button divider>
                <Button className ={classes.side} component = {Link} to="/tags" 
                style={{color : link === "tags" ? 'white' : '',
                borderLeft: link === "tags" ? '5px solid #ff5436' : '',
                backgroundColor : link === "tags" ? '#1c1c1c' : '',}}>
                    <LocalOfferIcon className ={classes.sideIcon} style={{color : link === "tags" ? 'white' : ''}}/>
                    &nbsp;Tags
                </Button>
            </ListItem>
            <ListItem button>
                <Button className ={classes.side} component = {Link} to="/allUsers" 
                style={{color : link === "allUsers" ? 'white' : '',
                borderLeft: link === "allUsers" ? '5px solid #ff5436' : '',
                backgroundColor : link === "allUsers" ? '#1c1c1c' : '',}}>
                    <PeopleIcon className ={classes.sideIcon} style={{color : link === "allUsers" ? 'white' : ''}}/>
                    &nbsp;Users
                </Button>
            </ListItem>
            <Divider  />
        </List>

        )
    }
}

export default (withStyles(styles)(home))
