import React from 'react'
import { append, reject, compose, equals } from 'ramda'
import { Link } from 'react-router-dom'
import InternalComponent from '@reactions/component'

export default ({ state, setState, history, match }) => (
  <InternalComponent
    initialState={{ color: '' }}
    didMount={props => {
      if (match.params.id) {
        props.setState({ color: match.params.id })
      }
    }}
  >
    {props => (
      <div>
        <h1>Create/Update Color</h1>
        <form
          onSubmit={e => {
            e.preventDefault()

            setState(state => ({
              colors: reject(equals(match.params.id), state.colors)
            }))
            setState(state => ({
              colors: append(props.state.color, state.colors)
            }))
            history.push('/')
          }}
        >
          <div>
            <input
              value={props.state.color}
              onChange={e => {
                props.setState({ color: e.target.value })
              }}
            />
          </div>
          <button type="submit">Create/Update Color</button>
          <button
            type="button"
            onClick={() => {
              history.push('/')
            }}
          >
            cancel
          </button>
        </form>
      </div>
    )}
  </InternalComponent>
)
