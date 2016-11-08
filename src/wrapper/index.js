import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './create-store'
import {Provider} from 'react-redux'
import Wrapper from './wrapper'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>,
  document.getElementById('root')
)
