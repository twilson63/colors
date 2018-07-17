import React from 'react'
import ReactDOM from 'react-dom'
import Component from '@reactions/component'
import App from './app'

ReactDOM.render(
  <Component initialState={{ colors: ['red', 'green', 'blue'] }}>
    {App}
  </Component>,
  document.getElementById('app')
)
