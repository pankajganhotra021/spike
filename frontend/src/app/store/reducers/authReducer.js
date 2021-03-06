import { produce } from 'immer';
import { CHECK_SESSION, SET_AUTH } from '../actionTypes/authActionTypes';

const initialState = {
    auth: false,
    loading: true,
    user: null,
    error: null
}

const authReducer = produce((state, { type, payload }) => {
    switch (type) {
        case CHECK_SESSION:
            return {
                ...state,
                loading: true
            }
        case SET_AUTH:
            return {
                ...state,
                loading: false,
                auth: payload.auth,
                user: payload.user,
            }
        default:
            return state;
    }

}, initialState);

export default authReducer;