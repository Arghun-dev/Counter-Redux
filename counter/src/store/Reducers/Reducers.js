import * as ACTIONTYPES from '../Actions/ActionTypes';
import { combineReducers } from 'redux';

const initialCount = 0;

const CountReducer = (count = initialCount, action) => {
    switch(action.type) {
        case ACTIONTYPES.INCREASE:
            return count + 1
        case ACTIONTYPES.DECREASE:
            return count - 1
        default:
            return count
    }
}

export default combineReducers({
    Count: CountReducer
})