//holds all the State of our Application

import {combineReducers} from 'redux';

import userReducer from'./user/user.reducer'


export default combineReducers({
    user:userReducer
})