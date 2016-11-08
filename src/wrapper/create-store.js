import {reducer as preview} from '../preview'
import {reducer as builder} from '../builder'
import {createStore} from 'redux'

export default function () {
  return createStore(
    combineReducers(
      preview,
      builder
    )
  )
}
