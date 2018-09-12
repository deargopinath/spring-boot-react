import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import GenericForm from './components/GenericForm'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import AboutUs from './components/AboutUs'
import Hello from './components/Hello'
import Error from './components/Error'

const HomePage = () => {
  return(
    <div>
      <PageHeader/>
      <GenericForm name="myForm"/>
      <PageFooter/>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Redirect from="/home" to="/"/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/hello/:name" component={Hello}/>
          <Route path="/:invalidPath" component={Error}/>
        </Switch>
    </BrowserRouter>
    )
  }
}
