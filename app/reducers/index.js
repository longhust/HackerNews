import { combineReducers } from 'redux'

import * as postsReducer from './postReducer'

// export reducer 
export const reducers = combineReducers({
  posts: postsReducer.reducer
})