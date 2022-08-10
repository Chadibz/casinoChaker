import {
  GET_GEO_NAVIGATOR,
  GET_INIT_SLIDE,
  GET_MINIGAME,
  GET_USER_DETAILS,
  START_UPDATE_USER_DETAILS,
  UPDATE_USER_BALANCE_TIMER,
} from "./types";
import moment from "moment";

import axios from "axios";
const REACT_APP_URL_API1 = "https://api.gagnant365.com/api/";
const REACT_APP_URL_API = "http://localhost:64424/api/";

export const getUSerDetails = () => async (dispatch) => {
  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "getuser",
      {
        token: JSON.parse(localStorage.getItem("token")),
      }
    );

    dispatch({
      type: GET_USER_DETAILS,
      payload: result.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_USER_DETAILS,
      payload: { status: 400 },
    });
  }
};
export const getsildes = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${REACT_APP_URL_API}` + "Getsliders?lang=fr"
    );

    dispatch({
      type: GET_INIT_SLIDE,
      payload: result.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_INIT_SLIDE,
      payload: { status: 400 },
    });
  }
};
export const changedetails = (data,password) => async (dispatch, getState) => {

  const user = {...data,dn:moment(data.dn).format("MM-DD-YYYY")};

  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "changedetails",
      {
        token: JSON.parse(localStorage.getItem("token")),
        userdetails: user,
        password:password
       
      }
    );
   
  } catch (error) {
    console.error(error);
  }
};
export const GetUserBalance = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${REACT_APP_URL_API}` +
        `getbalance?token=` +
        JSON.parse(localStorage.getItem("token"))
    );
    if (result.data.status === 400) {
      dispatch({ type: GET_USER_DETAILS, payload: result.data });
    } else {
      dispatch({ type: UPDATE_USER_BALANCE_TIMER, payload: result.data });
    }
  } catch (error) {
    console.error(error);
    // dispatch({ type: START_UPDATE_USER_DETAILS, payload: false });
  }
};
export const GetGeolocalisation = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${REACT_APP_URL_API}` + "getuserip"
    );
    /* const script = document.createElement("script");
    if (result.data.country_code === "TN") {
      script.src =
        "https://sb2integration-altenar2.biahosted.com/api/Integration/netbet365";
    } else {
      script.src =
        "https://sb2integration-altenar2.biahosted.com/api/Integration/netbet365";
    }
    document.body.appendChild(script);*/
    dispatch({
      type: GET_GEO_NAVIGATOR,
      payload: result.data,
    });
  } catch (error) {}
};
export const getgammemini = () => async (dispatch, getState) => {
  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "getgamesmini"
    );

    dispatch({
      type: GET_MINIGAME,
      payload: result.data,
    });
  } catch (error) {
    console.error("GET_GAMES");
  }
};
