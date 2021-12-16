import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_STEPS:
            for(const step in action.steps) {
                nextState[step] = action.steps[step];
            }
            return nextState;
        case RECEIVE_STEP:
          const newState = {[action.step.id] : action.step};
          return Object.assign({}, state, newState);
        case REMOVE_STEP:
          nextState =Object.assign({}, state);
          delete nextState[action.step.id];
          return nextState;
        default:
            return state;
  }
};

export default stepsReducer;