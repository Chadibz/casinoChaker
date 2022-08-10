import {
  GET_HISTORIQUE_LIST,
  INIT_HISTORIQUE_LIST_TRANCATION,
  INIT_HISTORIQUE_TRANCATION,
  UPDATE_COUNT_HISTORIQUE,
  UPDATE_DATE_END,
  UPDATE_DATE_START,
  UPDATE_HISTORIQUE_SELECt_PAGE,
  UPDATE_HISTORIQUE_TYPE,
  UPDATE_HISTORIQUE_USERNAME,
} from "../actions/types";
import moment from "moment";

const initialState = {
  listh: [],
  date_start: new Date(moment().startOf("day")),
  date_end: new Date(moment().endOf("day")),
  type_transaction: -1,
  id_transaction: "",
  Page_Selected: 0,
  Count_Page: 10,
  username: "",
  isloading: true,
  totalwidhrow: null,
  totaldepot: null,
  totalrow: 0,
  pagination: false,
};
const Historiquetransaction = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DATE_START:
      return {
        ...state,
        date_start: payload,
      };
    case UPDATE_DATE_END:
      return {
        ...state,
        date_end: payload,
      };
    case UPDATE_HISTORIQUE_TYPE:
      return {
        ...state,
        type_transaction: parseInt(payload),
      };
    case UPDATE_HISTORIQUE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case UPDATE_COUNT_HISTORIQUE:
      return {
        ...state,
        Count_Page: parseInt(payload),
      };
    case UPDATE_HISTORIQUE_SELECt_PAGE:
      return { ...state, Page_Selected: payload };
    case GET_HISTORIQUE_LIST:
      return {
        ...state,
        listh: [...state.listh, ...payload.resultat],
        totaldepot: payload.deposit,
        totalwidhrow: payload.withdraw,
        totalrow: payload.totalrow,
        pagination: payload.totalrow/state.Count_Page >= state.Page_Selected ? true : false,
      };
    case INIT_HISTORIQUE_TRANCATION:
      return {
        ...state,
        listh: [],
        date_start: new Date(moment().startOf("day")),
        date_end: new Date(moment().endOf("day")),
        type_transaction: -1,
        id_transaction: "",
        Page_Selected: 0,
        Count_Page: 10,
        username: "",
        isloading: true,
        totalwidhrow: null,
        totaldepot: null,
        totalrow: 0,
        pagination: false,
      };
    case INIT_HISTORIQUE_LIST_TRANCATION:
      return {
        ...state,
        listh: [],
        Page_Selected: 0,
        isloading: true,
        totalwidhrow: null,
        totaldepot: null,
        totalrow: 0,
        pagination: false,
      };
    default:
      return state;
  }
};
export default Historiquetransaction;
