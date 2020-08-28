import {actions} from '../action/currency.actions';

const initialState = {
    data: null,
    isLoading: false,
};

export function currency(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_CURRENCY_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actions.LOAD_CURRENCY_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            };
        case actions.LOAD_CURRENCY_FAILURE:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
