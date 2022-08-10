import {
  INIT_NEW_ACCOUNT,
  SET_NEW_ERROR_PASSWORD,
  SET_NEW_ERROR_TYPE_USER,
  SET_NEW_ERROR_USERNAME,
  SET_NEW_IS_OPEND_TYPE,
  SET_NEW_PASSWORD,
  SET_NEW_TYPE_USER,
  SET_NEW_USER_NAME,
  START_CREATE_NEW_USER,
} from "../actions/types";

const initialState = {
  username: "",
  password: "",
  typeid: -1,
  error_username: "",
  error_password: "",
  error_type_id: "",
  Shop_ID_link: -1,
  isopend: false,
  isloading: false,
};
const NewAccount = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_PASSWORD:
      return {
        ...state,
        password: payload,
        error_password: "",
      };
    case SET_NEW_TYPE_USER:
      return {
        ...state,
        typeid: payload,
        isopend: false,
        error_type_id: "",
      };
    case SET_NEW_USER_NAME:
      return {
        ...state,
        username: payload,
        error_username: "",
      };
    case SET_NEW_IS_OPEND_TYPE:
      return { ...state, isopend: payload };
    case START_CREATE_NEW_USER:
      return { ...state, isloading: true };
    case SET_NEW_ERROR_USERNAME:
      return { ...state, error_username: payload, isloading: false };
    case SET_NEW_ERROR_PASSWORD:
      return { ...state, error_password: payload, isloading: false };
    case SET_NEW_ERROR_TYPE_USER:
      return { ...state, error_type_id: payload, isloading: false };
    case INIT_NEW_ACCOUNT:
      return {
        ...state,
        username: "",
        password: "",
        typeid: -1,
        error_username: "",
        error_password: "",
        error_type_id: "",
        isopend: false,
        isloading: false,
      };
    default:
      return state;
  }
};
export default NewAccount;
