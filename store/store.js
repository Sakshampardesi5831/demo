import {configureStore} from '@reduxjs/toolkit'
import AdminReducer from './Reducer/AdminReducer'
export const store=configureStore({
    reducer:{AdminReducer}
})