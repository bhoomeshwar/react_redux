const DEFAULT_STATE = {
    reddyCounter: 0,
    showReddyCounter: false
};

const INCREMENT_REDDY_COUNTER = 'INCREMENT_REDDY_COUNTER';
const TOGGLE_REDDY_COUNTER = 'TOGGLE_REDDY_COUNTER';
const RESET_REDDY_COUNTER = 'RESET_REDDY_COUNTER';

export const actions = {
    incrementReddyCounter: {
        type: INCREMENT_REDDY_COUNTER
    },
    toggleReddyCounter: {
        type: TOGGLE_REDDY_COUNTER
    },
    resetReddyCounter: {
        type: RESET_REDDY_COUNTER
    }
};

export const selectors = {
    getReddyCounter({reddyState}) {
        return reddyState.reddyCounter;
    },
    showReddyCounter({reddyState}) {
        return reddyState.showReddyCounter;
    }
};

function reddyReducer(state = DEFAULT_STATE, action) {
    if (action.type === INCREMENT_REDDY_COUNTER) {
        return {
            ...state,
            reddyCounter: state.reddyCounter + 1
        }
    }

    if (action.type === TOGGLE_REDDY_COUNTER) {
        return {
            ...state,
            showReddyCounter: !state.showReddyCounter
        }
    }

    if (action.type === RESET_REDDY_COUNTER) {
        return {
            ...state,
            reddyCounter: 0
        }
    }

    return state;
}

export default reddyReducer;
