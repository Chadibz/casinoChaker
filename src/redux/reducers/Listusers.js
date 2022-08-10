import {
  INIT_LIST_USER,
  SET_LIST_USER_ID_USER,
  SET_LIST_USER_LIST,
  SET_LIST_USER_USERNAME,
  UPDATE_LIST_USER_BYID,
} from "../actions/types";

const initialState = {
  listuser: [],
  username: "",
  iduser: "",
  isloading: true,
};
const Listusers = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_LIST_USER:
      return {
        ...state,
        listuser: [],
        username: "",
        iduser: "",
        isloading: true,
      };
    case SET_LIST_USER_USERNAME:
      return { ...state, username: payload };
    case SET_LIST_USER_ID_USER:
      return { ...state, iduser: payload };
    case SET_LIST_USER_LIST:
      return { ...state, listuser: payload, isloading: false };
    case UPDATE_LIST_USER_BYID:
      const newTodos = [...state.listuser];
      const indexitem = state.listuser.findIndex(
        (item) => item.id === payload.id
      );
      newTodos[indexitem] = payload;
      return { ...state, listuser: newTodos };
    default:
      return state;
  }
};
export default Listusers;
