import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//setting themes
import themeObject from './util/theme'

//MUI stuff
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

// pages
import signup from './pages/signup'
import login from './pages/login'
import home from './pages/home'
import welcome from './pages/welcome'

//component
import NavigationBar from './components/NavigationBar'

const theme = createMuiTheme(themeObject)

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
          <Router>
            <NavigationBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={welcome} />
                <Route exact path="/home" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
