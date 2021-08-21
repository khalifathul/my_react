import { FETCH_LIST } from './types';
import api from './api';

export const storeState = stores => ({
    type: FETCH_LIST,
    stores,
});

export const storeAction = () => dispatch =>
    api.storeAction.getStoreAction().then(data => dispatch(storeState(data)));