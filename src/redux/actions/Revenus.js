import axios from "axios";
import md5 from "react-native-md5";
import moment from "moment";
import { GET_HISTORIQUE_LIST, GET_REVENU } from "./types";
import { toastr } from "react-redux-toastr";
export const getrevenu = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Revenu.isloading === false) {
    return;
  }
  const typerevenu = paramfilter.Revenu.type_report;
  const datefrom = moment(paramfilter.Revenu.date_start).format("YYYY-MM-DD");
  const dateto = moment(paramfilter.Revenu.date_end).format("YYYY-MM-DD");

  const timezone = new Date().getTimezoneOffset();

  const key = process.env.REACT_APP_MD_CR_A;
  const crypt = md5.hex_md5(
    JSON.parse(localStorage.getItem("token")) +
      moment(datefrom).format("YYYY-MM-DD") +
      moment(dateto).format("YYYY-MM-DD") +
      key
  );
  if (typerevenu === 1) {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_URL_API}` + "getrevenu",
        {
          token: JSON.parse(localStorage.getItem("token")),
          datefrom: moment(datefrom).format("YYYY-MM-DD"),
          dateto: moment(dateto).format("YYYY-MM-DD"),
          sig: crypt,
        }
      );
      dispatch({
        type: GET_REVENU,
        payload: result.data,
      });
    } catch (error) {
      toastr.error("Error connection");

      dispatch({
        type: GET_REVENU,
        payload: [],
      });
    }
  } else {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_URL_API}` + "getrevenu2",
        {
          token: JSON.parse(localStorage.getItem("token")),
          datefrom: moment(datefrom).format("YYYY-MM-DD"),
          dateto: moment(dateto).format("YYYY-MM-DD"),
          sig: crypt,
        }
      );
      dispatch({
        type: GET_REVENU,
        payload: result.data,
      });
    } catch (error) {
      toastr.error("Error connection");

      dispatch({
        type: GET_REVENU,
        payload: [],
      });
    }
  }
};
