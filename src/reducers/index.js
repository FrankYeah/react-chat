import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// 他只有兩個 state

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp