import axios from "axios";
import {
  INIT_NEW_ACCOUNT,
  SET_NEW_ERROR_PASSWORD,
  SET_NEW_ERROR_TYPE_USER,
  SET_NEW_ERROR_USERNAME,
  START_CREATE_NEW_USER,
} from "./types";

export const InsertNewAccount = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.NewAccount.isloading === true) {
    return;
  }
  if (
    paramfilter.NewAccount.username === "" ||
    paramfilter.NewAccount.password === "" ||
    paramfilter.NewAccount.typeid === -1
  ) {
    if (paramfilter.NewAccount.username === "") {
      dispatch({
        type: SET_NEW_ERROR_USERNAME,
        payload: "error1",
      });
    }
    if (paramfilter.NewAccount.password === "") {
      dispatch({
        type: SET_NEW_ERROR_PASSWORD,
        payload: "error1",
      });
    }
    if (paramfilter.NewAccount.typeid === -1) {
      dispatch({
        type: SET_NEW_ERROR_TYPE_USER,
        payload: "error1",
      });
    }
    return;
  }
  dispatch({
    type: START_CREATE_NEW_USER,
    payload: true,
  });
  const newuser = {
    token: JSON.parse(localStorage.getItem("token")),
    userName: paramfilter.NewAccount.username,
    password: paramfilter.NewAccount.password,
    usertype: paramfilter.NewAccount.typeid,
    shopref: paramfilter.NewAccount.Shop_ID_link,
    isrefshop: false,
  };
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_URL_API}` + "newuser",
      newuser
    );
    if (result.data.status === 400) {
      dispatch({
        type: SET_NEW_ERROR_USERNAME,
        payload: "error1",
      });
    } else {
      dispatch({
        type: INIT_NEW_ACCOUNT,
        payload: result.data,
      });
    }
  } catch (error) {
    console.error("GET_GAMES");
  }
};
