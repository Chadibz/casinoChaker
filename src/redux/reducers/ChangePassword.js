import {
  INIT_CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_CONFIRME_P,
  SET_CHANGE_PASSWORD_NEW_P,
  SET_CHANGE_PASSWORD_OLD,
  START_CHANGE_PASSWORD,
} from "../actions/types";

const initialState = {
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
  insave: false,
};
const changePassword = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHANGE_PASSWORD_OLD:
      return {
        ...state,
        oldpassword: payload,
      };
    case SET_CHANGE_PASSWORD_NEW_P:
      return {
        ...state,
        newpassword: payload,
      };
    case SET_CHANGE_PASSWORD_CONFIRME_P:
      return {
        ...state,
        confirmpassword: payload,
      };
    case INIT_CHANGE_PASSWORD:
      return {
        ...state,
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
        insave: false,
      };
    case START_CHANGE_PASSWORD:
      return {
        ...state,
        insave: payload,
      };
    default:
      return state;
  }
};
export default changePassword;
