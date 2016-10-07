import {
    PIZZA_REQUEST,
    PIZZA_DELETE,
    PIZZA_FAIL,
    PIZZA_UPDATE
} from '../actions/pizza';

const DEFAULT_STATE = {
    name: null,
    composition: [],
    isLoading: false,
    error: false
};

export default function pizza(state = DEFAULT_STATE, action) {
    switch (action.type) {
    case PIZZA_REQUEST: {
        return {
            ...state,
            isLoading: true
        };
    }
    case PIZZA_UPDATE: {
        return {
            ...state,
            ...action.data,
            error: false,
        };
    }
    case PIZZA_DELETE: {
        return {
            ...state,
            error: action.error,
            createdPoll: null,
            isLoading: false
        };
    }
    case PIZZA_FAIL: {
        return {
            ...state,
            error: true,
            isLoading: false
        };
    }
    default:
        return state;
    }
}
