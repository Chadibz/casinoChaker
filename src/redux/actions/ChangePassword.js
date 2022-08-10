import axios from "axios";
import {
  INIT_CHANGE_PASSWORD,
  START_CHANGE_PASSWORD,
  UPDATE_USER_CHANGE_PASSWORD,
} from "./types";
import md5 from "react-native-md5";

export const Updatepassword = () => async (dispatch, getState) => {
  const paramfilter = getState();

  const password = paramfilter.changePassword.oldpassword;
  const repassword = paramfilter.changePassword.newpassword;
  const repass = paramfilter.changePassword.confirmpassword;
  if (password === "" || repassword === "" || repass === "") {
    return;
  }
  dispatch({ type: START_CHANGE_PASSWORD, payload: true });
  const key = process.env.REACT_APP_MD_CR_A;
  const crypt = md5.hex_md5(
    JSON.parse(localStorage.getItem("token")) + password + repassword + key
  );
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_URL_API}` + "updatepassword",
      {
        token: JSON.parse(localStorage.getItem("token")),
        Password: password,
        repassword: repassword,
        sig: crypt,
      }
    );
    if (result.data.status === 400) {
    } else {
      dispatch({ type: UPDATE_USER_CHANGE_PASSWORD, payload: false });
      dispatch({ type: INIT_CHANGE_PASSWORD, payload: false });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: START_CHANGE_PASSWORD, payload: false });
  }
};
