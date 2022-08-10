import {
  CLEAR_GAMES_LIVE_LIST,
  GET_GAMES_LIVE,
  INIT_GAMES_LIVE,
  PUT_CASINO_LIVE_SEARCH_FILT,
  SET_FOURNISEUR_LIVE_CASINO,
  SET_LIVE_CASINO_ADD_MORE,
  UPDATE_LAST_PAGE_LIVE,
} from "../actions/types";

const initialState = {
  Filter_Categori: [],
  filter_provider: [],
  searchtext: "",
  ISfavorit: false,
  games: [],
  lastpageloading: 0,
  total: 0,
  isloading: true,
};
const Live_Game = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES_LIVE:
      return {
        ...state,
        games: [...state.games, ...payload.data],
        lastpageloading: state.lastpageloading + 1,
        total: payload.total,
        isloading: false,
      };
    case SET_LIVE_CASINO_ADD_MORE:
      return { ...state, isloading: true };
    case SET_FOURNISEUR_LIVE_CASINO:
      const exist = state.filter_provider.some((item) => item === payload);
      console.log(exist);
      if (exist) {
        return {
          ...state,
          filter_provider: state.filter_provider.filter(function (item) {
            return item !== payload;
          }),
          lastpageloading: 0,
        };
      } else {
        return {
          ...state,
          filter_provider: [...state.filter_provider, payload],
          lastpageloading: 0,
        };
      }

    case INIT_GAMES_LIVE:
      return {
        ...state,
        Filter_Categori: [],
        filter_provider: [],
        searchtext: "",
        ISfavorit: false,
        games: [],
        lastpageloading: 0,
        total: 0,
        isloading: true,
      };
    case PUT_CASINO_LIVE_SEARCH_FILT:
      return {
        ...state,
        searchtext: payload,
      };
    case CLEAR_GAMES_LIVE_LIST:
      return {
        ...state,
        games: [],
        lastpageloading: 0,
        total: 0,
        isloading: true,
      };
    case UPDATE_LAST_PAGE_LIVE:
      return {
        ...state,
        lastpageloading: state.lastpageloading + 1,
      };
    default:
      return state;
  }
};
export default Live_Game;
