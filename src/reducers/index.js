import {combineReducers} from "redux";
import userReducer from './user.reducer'
import secondaryReducer from './secondary.reducer'

export const reducers = combineReducers( {
    user: userReducer,
    secondary: secondaryReducer,
});