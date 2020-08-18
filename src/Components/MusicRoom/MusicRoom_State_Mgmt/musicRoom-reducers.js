import * as ActionTypes from "./musicRoom-actionTypes";

const initialState = {};

export default function musicRoomReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PLAY_MUSIC:
      return {
        ...state,
      };
    default:
      return state;
  }
}
