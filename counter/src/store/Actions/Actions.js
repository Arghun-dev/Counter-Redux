import * as ACTIONTYPES from './ActionTypes';

export const increase = (amount) => {
    return {
        type: ACTIONTYPES.INCREASE,
        amount
    }
}

export const decrease = (amount) => {
    return {
        type: ACTIONTYPES.DECREASE,
        amount
    }
}

export const toggleTheme = () => {
    return {
        type: ACTIONTYPES.TOGGLETHEME
    }
}

