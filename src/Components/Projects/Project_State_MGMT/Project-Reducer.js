import * as ActionTypes from "./Project-ActionTypes";

const initialState = {};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        getProjects: action.payload.getProjects,
      };

    default:
      return state;
  }
}
