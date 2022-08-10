import axios from "axios";
import { GET_GAMES, INIT_GAMES, SET_FAVORIS_GAMES } from "./types";
const REACT_APP_URL_API = "https://api.gagnant365.com/api/";
const REACT_APP_URL_API1 = "http://localhost:64424/api/";
export const getgamme = () => async (dispatch, getState) => {
  const paramfilter = getState();
  if (paramfilter.Games.isloading === false) {
    return;
  }
  const _providers = paramfilter.Games.filter_provider
    .map((x) => x.id)
    .join(",");
  const _cate = paramfilter.Games.Filter_Categori.map((x) => x.id).join(",");
  const testsearch = paramfilter.Games.searchtext;
  const page = paramfilter.Games.lastpageloading;
  const key = process.env.REACT_APP_MD_CR_A;
  const islive = 0;
  const isfavori = paramfilter.Games.ISfavorit === true ? 1 : 0;
  const token =
    JSON.parse(localStorage.getItem("token")) === null
      ? ""
      : JSON.parse(localStorage.getItem("token"));

  try {
    const result = await axios.post(
      `${process.env.REACT_APP_URL_API}` + "getgamesf2",
      {
        token: JSON.parse(localStorage.getItem("token")),
        prov: paramfilter.Games.filter_provider.map((item) => item.id),
        cat: paramfilter.Games.Filter_Categori.map((item) => item.id),
        search: testsearch,
        page: page,
        islive: islive,
        isfavori: isfavori,
        sig: "",
      }
    );

    dispatch({
      type: GET_GAMES,
      payload: result.data,
    });
  } catch (error) {
    console.error("GET_GAMES");
  }
};
export const Favorigame = (idgame) => async (dispatch) => {
  const key = process.env.REACT_APP_MD_CR_A;

  try {
    const result = await axios.post(
      `${process.env.REACT_APP_URL_API}` + "GameFavori",
      {
        token: JSON.parse(localStorage.getItem("token")),
        idgame: parseInt(idgame),
        sig: "",
      }
    );
    dispatch({
      type: SET_FAVORIS_GAMES,
      payload: { id: idgame, idf: result.data.isfavorit },
    });
  } catch (error) {}
};
export const InitGames = () => async (dispatch, getState) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const games = JSON.parse(localStorage.getItem("games"));
  const LastUpdate = JSON.parse(localStorage.getItem("GameUpdate"));

  if (games) {
    dispatch({ type: INIT_GAMES, payload: { games: games } });
  } else {
    try {
      const result = await axios.get(`${REACT_APP_URL_API}` + "getgames", {
        token: JSON.parse(localStorage.getItem("token")),
      });
      localStorage.setItem("games", JSON.stringify(result.data));
      dispatch({
        type: INIT_GAMES,
        payload: { games: result.data },
      });
    } catch (error) {}
  }
};
