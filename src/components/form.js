import React from 'react'
import { append, reject, compose, equals } from 'ramda'
import { Link } from 'react-router-dom'
import InternalComponent from '@reactions/component'

export default ({ state, setState, history, match }) => (
  <InternalComponent initialState={{ color: '' }}>
    {({ state: iState, setState: iSetState }) => <div>TODO: Create Color</div>}
  </InternalComponent>
)
