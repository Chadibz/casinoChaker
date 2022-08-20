import {
  CLEAR_CASINO_CAT_FILT,
  CLEAR_CASINO_PROV_FILT,
  CLEAR_GAMES_LIST,
  GET_GAMES,
  INIT_BOUTTON_CATEGORIE,
  INIT_BOUTTON_PROVIDER,
  INIT_GAMES,
  PUT_CASINO_CAT_FILT,
  PUT_CASINO_FAVORI_FILT,
  PUT_CASINO_OPEND_CATE,
  PUT_CASINO_OPEND_PROV,
  PUT_CASINO_OPEND_PROV_MOBILE,
  PUT_CASINO_PROV_FILT,
  PUT_CASINO_SEARCH_FILT,
  SET_CASINO_ADD_MORE,
  SET_CASINO_TYPEPLAY,
  SET_FAVORIS_GAMES,
  UPDATE_LAST_PAGE,
} from "../actions/types";
const initialState = {
  games: [],
  lastpageloading: 0,
  Filter_Categori: [],
  filter_provider: [],
  total: 0,
  ISfavorit: false,
  searchtext: "",
  isloading: true,
  rungameonsite: true,
  IsOpend_Categories: false,
  IsOpend_provider: false,
  IsOpend_provider_Mobile: false,
  boutton_provider: {},
  boutton_categorie: {},
};
const Games = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: [...state.games, ...payload.data],
        lastpageloading: state.lastpageloading + 1,
        total: payload.total,
        isloading: false,
      };
    case PUT_CASINO_CAT_FILT:
      const exist1 = state.Filter_Categori.some(
        (item) => item.id === payload.id
      );
      if (exist1) {
        return {
          ...state,
          Filter_Categori: state.Filter_Categori.filter(function (item) {
            return item !== payload;
          }),
        };
      } else {
        return {
          ...state,
          Filter_Categori: [...state.Filter_Categori, payload],
        };
      }
    case CLEAR_CASINO_CAT_FILT:
      return {
        ...state,
        Filter_Categori: [],
      };
    case PUT_CASINO_PROV_FILT:
      const exist = state.filter_provider.some((item) => item === payload);
      console.log(exist);
      if (exist) {
        return {
          ...state,
          filter_provider: state.filter_provider.filter(function (item) {
            return item !== payload;
          }),
        };
      } else {
        return {
          ...state,
          filter_provider: [...state.filter_provider, payload],
        };
      }
    case CLEAR_CASINO_PROV_FILT:
      return {
        ...state,
        filter_provider: [],
      };
    case SET_CASINO_ADD_MORE:
      if (state.lastpageloading * 30 >= state.total) {
        return {
          ...state,
          isloading: false,
        };
      } else {
        return {
          ...state,
          isloading: true,
        };
      }

    case PUT_CASINO_FAVORI_FILT:
      return {
        ...state,
        ISfavorit: !state.ISfavorit,
      };
    case SET_CASINO_TYPEPLAY:
      return {
        ...state,
        rungameonsite: !state.rungameonsite,
      };
    case PUT_CASINO_SEARCH_FILT:
      return {
        ...state,
        searchtext: payload,
        lastpageloading: 0,
      };
    case PUT_CASINO_OPEND_CATE:
      return {
        ...state,
        IsOpend_Categories: !state.IsOpend_Categories,
      };
    case PUT_CASINO_OPEND_PROV:
      return {
        ...state,
        IsOpend_provider: !state.IsOpend_provider,
      };
    case PUT_CASINO_OPEND_PROV_MOBILE:
      return {
        ...state,
        IsOpend_provider_Mobile: !state.IsOpend_provider_Mobile,
      };
    case INIT_GAMES:
      return {
        ...state,
        games: payload.games,
        lastpageloading: 0,
        Filter_Categori: [],
        filter_provider: [],
        total: 0,
        ISfavorit: false,
        searchtext: "",
        isloading: false,
        rungameonsite: true,
        IsOpend_Categories: false,
        IsOpend_provider: false,
      };
    case CLEAR_GAMES_LIST:
      return {
        ...state,
        games: [],
        lastpageloading: 0,
        total: 0,
        isloading: true,
        IsOpend_Categories: false,
        IsOpend_provider: false,
      };
    case INIT_BOUTTON_PROVIDER:
      return {
        ...state,
        boutton_provider: payload,
      };
    case INIT_BOUTTON_CATEGORIE:
      console.log("sfzefez");
      return {
        ...state,
        boutton_categorie: payload,
      };
    case SET_FAVORIS_GAMES:
      const listgame = [...state.games];
      const index_game = state.games.findIndex(
        (item) => item.id === payload.id
      );
      console.log(index_game, payload);
      listgame[index_game] = { ...listgame[index_game], idf: payload.idf };
      return {
        ...state,
        games: listgame,
      };
    case UPDATE_LAST_PAGE:
      return {
        ...state,
        lastpageloading: state.lastpageloading + 1,
      };
    default:
      return state;
  }
};
export default Games;
