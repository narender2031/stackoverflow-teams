import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//setting themes
import themeObject from './util/theme'

//MUI stuff
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

//redux
import {Provider} from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types';
import {getAuthenticatedUserData} from './redux/actions/userActions'
import {logoutUser} from './redux/actions/userActions'

// pages
import signup from './pages/signup'
import login from './pages/login'
import home from './pages/home'
import welcome from './pages/welcome'
import question from './pages/question'
import user from './pages/user'
import leaderboard from './pages/leaderboard'

//component
import NavigationBar from './components/NavigationBar'

import axios from 'axios'
import jwtDecode from 'jwt-decode'

const theme = createMuiTheme(themeObject)

//verify token, if token has not expired get the userdata
const token = localStorage.userToken
if(token){
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href = './login'
  }else {
    store.dispatch({type : SET_AUTHENTICATED})
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(getAuthenticatedUserData())
  }
}

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <NavigationBar />
            <div style={{overflow:'hidden'}}>
              <Switch>
                <Route exact path="/" component={welcome} />
                <Route exact path="/home" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/questions/:questionId" component={question} />
                <Route exact path="/users/:username" component={user} />
                <Route exact path="/leaderboard" component={leaderboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
