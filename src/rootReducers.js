import { combineReducers } from "redux";
import musicRoomReducer from "./Components/MusicRoom/MusicRoom_State_Mgmt/musicRoom-reducers";

const combineReducer = combineReducers({
    musicRoomReducer
});

export default combineReducer;
