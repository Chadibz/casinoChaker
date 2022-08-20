import axios from "axios";
import moment from "moment";
import { GET_HISTORIQUE_LIST } from "./types";
import { toastr } from "react-redux-toastr";
const REACT_APP_URL_API1 = "http://localhost:64424/api/";
const REACT_APP_URL_API = "https://api.gagnant365.com/api/"
export const getHistorique = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Historiquetransaction.isloading === false) {
    return;
  }
  const username = paramfilter.Historiquetransaction.username;
  const datefrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "YYYY-MM-DD"
  );
  const dateto = moment(paramfilter.Historiquetransaction.date_end).format(
    "YYYY-MM-DD"
  );
  const hoursfrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "HH:mm"
  );
  const hoursto = moment(paramfilter.Historiquetransaction.date_end).format(
    "HH:mm"
  );
  const timezone = new Date().getTimezoneOffset();
  const coutrow = paramfilter.Historiquetransaction.Count_Page;
  const typehist = paramfilter.Historiquetransaction.type_transaction;
  var select_page = paramfilter.Historiquetransaction.Page_Selected;

  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "historiquetv1",
      {
        token: JSON.parse(localStorage.getItem("token")),
        UserName: username,
        datefrom: moment(datefrom).format("YYYY-MM-DD"),
        dateto: moment(dateto).format("YYYY-MM-DD"),
        time_from: hoursfrom,
        time_to: hoursto,
        time_region: timezone,
        page_num: select_page,
        pagecount: coutrow,
        type_hist: typehist,
      }
    );
    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: result.data,
    });
  } catch (error) {
    toastr.error("Error connection");

    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: [],
    });
  }
};
export const getHistoriquefinance = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Historiquetransaction.isloading === false) {
    return;
  }
  const username = paramfilter.Historiquetransaction.username;
  const datefrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "YYYY-MM-DD"
  );
  const dateto = moment(paramfilter.Historiquetransaction.date_end).format(
    "YYYY-MM-DD"
  );
  const hoursfrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "HH:mm"
  );
  const hoursto = moment(paramfilter.Historiquetransaction.date_end).format(
    "HH:mm"
  );
  const timezone = new Date().getTimezoneOffset();
  const coutrow = paramfilter.Historiquetransaction.Count_Page;
  const typehist = paramfilter.Historiquetransaction.type_transaction;
  var select_page = paramfilter.Historiquetransaction.Page_Selected;
  

  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "historiquetfinancev1",
      {
        token: JSON.parse(localStorage.getItem("token")),
        UserName: username,
        datefrom: moment(datefrom).format("YYYY-MM-DD"),
        dateto: moment(dateto).format("YYYY-MM-DD"),
        time_from: hoursfrom,
        time_to: hoursto,
        time_region: timezone,
        page_num: select_page,
        pagecount: coutrow,
        type_hist: typehist
            }
    );
    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: result.data,
    });
  } catch (error) {
    toastr.error("Error connection");

    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: [],
    });
  }
};
export const getHistoriqueentreuser = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Historiquetransaction.isloading === false) {
    return;
  }
  const username = paramfilter.Historiquetransaction.username;
  const username2 = paramfilter.Historiquetransaction.username2;
  const datefrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "YYYY-MM-DD"
  );
  const dateto = moment(paramfilter.Historiquetransaction.date_end).format(
    "YYYY-MM-DD"
  );
  const hoursfrom = moment(paramfilter.Historiquetransaction.date_start).format(
    "HH:mm"
  );
  const hoursto = moment(paramfilter.Historiquetransaction.date_end).format(
    "HH:mm"
  );
  const timezone = new Date().getTimezoneOffset();
  const coutrow = paramfilter.Historiquetransaction.Count_Page;
  const typehist = paramfilter.Historiquetransaction.type_transaction;
  var select_page = paramfilter.Historiquetransaction.Page_Selected;
  

  try {
    const result = await axios.post(
      `${REACT_APP_URL_API}` + "historiquetentreuser",
      {
        token: JSON.parse(localStorage.getItem("token")),
        UserName: username,
        UserName2: username2,
        datefrom: moment(datefrom).format("YYYY-MM-DD"),
        dateto: moment(dateto).format("YYYY-MM-DD"),
        time_from: hoursfrom,
        time_to: hoursto,
        time_region: timezone,
        page_num: select_page,
        pagecount: coutrow,
        type_hist: typehist
            }
    );
    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: result.data,
    });
  } catch (error) {
    toastr.error("Error connection");

    dispatch({
      type: GET_HISTORIQUE_LIST,
      payload: [],
    });
  }
};
