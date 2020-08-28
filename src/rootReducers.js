import { combineReducers } from "redux";
import playerReducer from "./Components/MusicLounge/MusicLounge_State_MGMT/playerReducer";
import projectReducer from "./Components/Projects/Project_State_MGMT/Project-Reducer";

const combineReducer = combineReducers({
  playerReducer,
  projectReducer,
});

export default combineReducer;
