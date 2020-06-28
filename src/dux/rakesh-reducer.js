const DEFAULT_STATE = {
    rakeshCounter: 0,
    showRakeshCounter: false
};

const INCREMENT_RAKESH_COUNTER = 'INCREMENT_RAKESH_COUNTER';
const TOGGLE_RAKESH_COUNTER = 'TOGGLE_RAKESH_COUNTER';
const RESET_RAKESH_COUNTER = 'RESET_RAKESH_COUNTER';

export const actions = {
    incrementRakeshCounter: {
        type: INCREMENT_RAKESH_COUNTER
    },
    toggleRakeshCounter: {
        type: TOGGLE_RAKESH_COUNTER
    },
    resetRakeshCounter: {
        type: RESET_RAKESH_COUNTER
    }
};

export const selectors = {
    getRakeshCounter({rakeshState}) {
        return rakeshState.rakeshCounter;
    },
    showRakeshCounter({rakeshState}) {
        return rakeshState.showRakeshCounter;
    }
};

function rakeshReducer(state = DEFAULT_STATE, action) {
    if (action.type === INCREMENT_RAKESH_COUNTER) {
        return {
            ...state,
            rakeshCounter: state.rakeshCounter + 1
        }
    }

    if (action.type === TOGGLE_RAKESH_COUNTER) {
        return {
            ...state,
            showRakeshCounter: !state.showRakeshCounter
        }
    }

    if (action.type === RESET_RAKESH_COUNTER) {
        return {
            ...state,
            rakeshCounter: 0
        }
    }

    return state;
}

export default rakeshReducer;
