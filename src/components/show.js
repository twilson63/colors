import React from 'react'
import { Link } from 'react-router-dom'
import { contains, reject, equals } from 'ramda'

export default ({ state, setState, match, history }) => (
  <div>
    The Color is{' '}
    <h1 style={{ color: match.params.id }}>
      {contains(match.params.id, state.colors)
        ? match.params.id
        : 'No Color Found'}
    </h1>
    <div>
      <Link to="/">Color List</Link>
    </div>
    <div>
      <Link to={`/${match.params.id}/edit`}>Edit</Link>
    </div>
    <button
      type="button"
      onClick={() => {
        if (confirm('Are you sure?')) {
          setState({ colors: reject(equals(match.params.id), state.colors) })
          history.push('/')
        }
      }}
    >
      remove
    </button>
  </div>
)
