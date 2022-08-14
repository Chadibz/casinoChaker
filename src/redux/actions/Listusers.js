import axios from "axios";
import { SET_LIST_USER_LIST } from "./types";
import { toastr } from "react-redux-toastr";
const REACT_APP_URL_API = "https://api.gagnant365.com/api/";
const REACT_APP_URL_API1 = "http://localhost:64424/api/";
export const GetListUsers = () => async (dispatch, getState) => {
  const paramfilter = getState();

  const username = "";
  const iduser = paramfilter.Listusers.iduser;
  try {
    const result = await axios.post(`${REACT_APP_URL_API}` + "listusersv2", {
      token: JSON.parse(localStorage.getItem("token")),
      UserName: username,
      iduser: iduser,
    });

    dispatch({
      type: SET_LIST_USER_LIST,
      payload: result.data.data,
    });
  } catch (error) {
    toastr.error("error Connection");
    dispatch({
      type: SET_LIST_USER_LIST,
      payload: [],
    });
  }
};
