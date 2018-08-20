import * as Actions from './actions_type';

const startFetching = function() {
    return {
      type: Actions.START_FETCHING
    };
  }
  
  const finishedFetching = function() {
    return {
      type: Actions.FINISHED_FETCHING
    };
  }

  
    const selectUser = function(json) {
        return {
        type: Actions.SELECT_USER,
        user: json
        };
    }

  export 
  {
    startFetching,
    finishedFetching,
    selectUser
 };