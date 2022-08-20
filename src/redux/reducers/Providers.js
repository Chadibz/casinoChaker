import {
  GET_GAMES,
  GET_INIT_CASINO,
  GET_INIT_LIVE_CASINO,
} from "../actions/types";

const initialState = {
  providers_Casino: [],
  categorie: [],
  isloading: true,
};
const Providers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INIT_CASINO:
      if (payload.status === 400 || payload === "") {
        return {
          ...state,
          isloading: false,
          providers_Casino: [],
          categorie: [],
        };
      } else {
        return {
          ...state,
          isloading: false,
          providers_Casino: payload.casino.providers,
          categorie: payload.casino.categories
        };
      }
    default:
      return state;
  }
};

export default Providers;
