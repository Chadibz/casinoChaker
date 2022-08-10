import axios from "axios";
import { GET_GAMES_LIVE } from "./types";
import md5 from "react-native-md5";

export const getLivegames = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Live_Game.isloading === false) {
    return;
  }
  const _providers = paramfilter.Live_Game.filter_provider
    .map((x) => x)
    .join(",");
  const _cate = paramfilter.Live_Game.Filter_Categori.map((x) => x.id).join(
    ","
  );
  const testsearch = paramfilter.Live_Game.searchtext;
  const page = paramfilter.Live_Game.lastpageloading;
  const key = process.env.REACT_APP_MD_CR_A;
  const islive = 1;
  const isfavori = paramfilter.Live_Game.ISfavorit === true ? 1 : 0;
  const token =
    JSON.parse(localStorage.getItem("token")) === null
      ? ""
      : JSON.parse(localStorage.getItem("token"));
  const crypt = md5.hex_md5(
    token + _providers + _cate + testsearch + page + islive + isfavori + key
  );

  try {
    const result = await axios.post(
      `${process.env.REACT_APP_URL_API}` + "getgamesf2",
      {
        token: JSON.parse(localStorage.getItem("token")),
        prov: paramfilter.Live_Game.filter_provider.map((item) => item),
        cat: paramfilter.Live_Game.Filter_Categori.map((item) => item.id),
        search: testsearch,
        page: page,
        islive: islive,
        isfavori: isfavori,
        sig: crypt,
      }
    );

    dispatch({
      type: GET_GAMES_LIVE,
      payload: result.data,
    });
  } catch (error) {
    console.error("GET_GAMES");
  }
};
