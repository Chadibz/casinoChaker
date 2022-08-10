import {
  GET_REVENU,
  INIT_REVENU,
  UPDATE_REVENU_DATE_END,
  UPDATE_REVENU_DATE_START,
  UPDATE_REVENU_TYPE,
} from "../actions/types";

const initialState = {
  listh: [],
  date_start: new Date(),
  date_end: new Date(),
  type_report: 1,
};
const Revenu = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_REVENU_DATE_START:
      return {
        ...state,
        date_start: payload,
      };
    case UPDATE_REVENU_DATE_END:
      return {
        ...state,
        date_end: payload,
      };
    case UPDATE_REVENU_TYPE:
      return {
        ...state,
        type_report: parseInt(payload),
        listh: [],
      };

    case GET_REVENU:
      return {
        ...state,
        listh: payload.data,
      };
    case INIT_REVENU:
      return {
        ...state,
        listh: [],
        date_start: new Date(),
        date_end: new Date(),
        type_report: 1,
      };
    default:
      return state;
  }
};
export default Revenu;
