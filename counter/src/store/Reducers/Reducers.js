import * as ACTIONTYPES from '../Actions/ActionTypes';
import { combineReducers } from 'redux';

const initialCount = 0;

const ThemeInitialStatus = false;

const CountReducer = (count = initialCount, action) => {
    switch(action.type) {
        case ACTIONTYPES.INCREASE:
            return count + action.amount
        case ACTIONTYPES.DECREASE:
            return count - action.amount
        default:
            return count
    }
}

const ThemeReducer = (state = ThemeInitialStatus, action) => {
    switch(action.type) {
        case ACTIONTYPES.TOGGLETHEME:
            // Remember when toggle from false to true and true to false do not return an object, just return !state
            return !state
        default:
            return state
    }
}

export default combineReducers({
    Count: CountReducer,
    Theme: ThemeReducer
})