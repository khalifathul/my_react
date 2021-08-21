import { FETCH_LIST } from '../actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case FETCH_LIST:
        return action.stores;
    default:
        return state;
    }
};
