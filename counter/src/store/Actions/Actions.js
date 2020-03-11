import * as ACTIONTYPES from './ActionTypes';

export const increase = () => {
    return {
        type: ACTIONTYPES.INCREASE
    }
}

export const decrease = () => {
    return {
        type: ACTIONTYPES.DECREASE
    }
}

export const toggleTheme = () => {
    return {
        type: ACTIONTYPES.TOGGLETHEME
    }
}

