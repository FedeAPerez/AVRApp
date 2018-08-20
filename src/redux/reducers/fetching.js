// src/redux/reducers/fetching.js
import * as Actions from '../actions/actions_type';

const initialState = {
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.START_FETCHING :
            return Object.assign(
                {},
                state,
                {
                    isFetching : true
                }
            );

        case Actions.FINISHED_FETCHING:
            return Object.assign(
                {},
                state,
                {
                    isFetching : false
                }
            );

        default:
            return state;
    }
}