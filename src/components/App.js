import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'

export default function App() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    )
  }
