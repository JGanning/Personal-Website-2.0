import axios from "axios";
import _ from "underscore";
import * as ActionTypes from "./Project-ActionTypes";

function updateComponentState(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export function getProjects() {
  const url = `http://localhost:8084/api/getProjects`;
  return (dispatch) => {
    return axios
      .get(url)
      .then((response) => {
        const getProjects = response && response.data && response.data.response;
        dispatch(
          updateComponentState(ActionTypes.GET_PROJECTS, {
            getProjects,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
