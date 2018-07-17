import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'ramda'

const li = color => (
  <li key={`${color}-${new Date().toISOString()}`}>
    <Link to={`/${color}`}>{color}</Link>
  </li>
)

export default ({ state, setState }) => (
  <div>
    <h1>Colors</h1>
    <Link to="/new">New Color</Link>
    <ul>{map(li, state.colors)}</ul>
  </div>
)
