import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Colors from './components/index'
import ColorForm from './components/form'
import ColorShow from './components/show'

const App = ({ state, setState }) => {
  const StateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        <Component {...props} state={state} setState={setState} />
      )}
    />
  )

  return (
    <BrowserRouter>
      <Switch>
        <StateRoute exact path="/" component={Colors} />
        <StateRoute path="/new" component={ColorForm} />
        <StateRoute path="/:id/edit" component={ColorForm} />
        <StateRoute path="/:id" component={ColorShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
