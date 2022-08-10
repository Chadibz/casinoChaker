import { GET_INIT_CASINO, GET_INIT_LIVE_CASINO } from "./types";
import axios from "axios";
const REACT_APP_URL_API1 = "http://localhost:64424/api/";
const REACT_APP_URL_API = "https://api.gagnant365.com/api/";

export const getinitcasino = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${REACT_APP_URL_API}` + "int_Casino?islive=0"
    );
    dispatch({
      type: GET_INIT_CASINO,
      payload: { status: 200, casino: result.data },
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_INIT_CASINO,
      payload: { status: 400 },
    });
  }
};
