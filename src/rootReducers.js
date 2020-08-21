import { combineReducers } from "redux";
import playerReducer from "./Components/MusicLounge/MusicLounge_State_MGMT/playerReducer";

const combineReducer = combineReducers({
    playerReducer
});

export default combineReducer;
