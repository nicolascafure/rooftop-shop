import { createStore , applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import Reducers from "../reducers/index"


export const store= createStore(Reducers, applyMiddleware(thunk))




