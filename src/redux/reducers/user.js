// src/redux/reducers/user.js
import * as Actions from '../actions/actions_type';

const initialState = {
    user_name: '',
    email: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.SELECT_USER :
            return Object.assign(
                {},
                state,
                action.user
            );

        default:
            return state;
    }
}