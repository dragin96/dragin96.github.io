import {getCurrency} from '../../api/index'

export const actions = {
    LOAD_CURRENCY_LOADING: 'LOAD_CURRENCY_LOADING',
    LOAD_CURRENCY_SUCCESS: 'LOAD_CURRENCY_SUCCESS',
    LOAD_CURRENCY_FAILURE: 'LOAD_CURRENCY_FAILURE',
};

export function loadCurrencyLoading() {
    return {
        type: actions.LOAD_CURRENCY_LOADING,
    };
}

export function loadCurrencySuccess(data) {
    return {
        type: actions.LOAD_CURRENCY_SUCCESS,
        data,
    };
}

export function loadCurrencyFailure(error) {
    return {
        type: actions.LOAD_CURRENCY_FAILURE,
        error
    };
}
export function updateRequest() {
    return dispatch => {
        dispatch(loadCurrency());
    };
}

export function loadCurrency() {
    return dispatch => {
        dispatch(loadCurrencyLoading());

        getCurrency()
            .then(json => dispatch(loadCurrencySuccess(json)))
            .catch(e => dispatch(loadCurrencyFailure(e.message)));
    };
}
