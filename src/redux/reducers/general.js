import {
  GET_GEO_NAVIGATOR,
  GET_INIT_SLIDE,
  GET_MINIGAME,
  GET_USER_DETAILS,
  PUT_WINDROW_WIDTH,
  SET_END_LOGIN_DATA,
  SET_NAV_BAR_CHANGE,
  SET_NAV_REGISTER_CHANGE,
  SET_NAV_USER_CHANGE,
  SET_OPEN_MY_BETS,
  SET_PROFILE_STATE_CHANGE,
  SET_PROFILE_STATE_CHANGE_ONLY,
  SET_START_LOGIN_DATA,
  START_UPDATE_USER_DETAILS,
  UPDATE_USER_BALANCE_TIMER,
  UPDATE_USER_CHANGE_PASSWORD,
  UPTATE_EMAIL_USER,
  UPTATE_LAST_USER,
  UPTATE_NAME_USER,
} from "../actions/types";

const initialState = {
  opendnavbar: false,
  opendnavlogin: false,
  openregister: false,
  islogin: false,
  userDetails: {},
  silde: [],
  width_form: 1000,
  InsaveUpdate: false,
  mingames: [],
  geolocation: {},
  isloadinggeolocalisation: true,
  isloadingLogin: false,
  isloading: true,
  OpenProfile: false,
  OpendMyBet: false,
  PageProfile: 0,
};

const general = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DETAILS:
      if (payload.status === 400 || payload === "") {
        localStorage.removeItem("token");
        return {
          ...state,
          islogin: false,
          isloadingLogin: false,
          userDetails: {},
        };
      } else {
        return {
          ...state,
          islogin: true,
          isloadingLogin: false,
          opendnavlogin: false,
          userDetails: payload,
        };
      }

    case SET_NAV_BAR_CHANGE:
      return {
        ...state,
        opendnavbar: !state.opendnavbar,
      };
    case SET_NAV_USER_CHANGE:
      if (state.opendnavlogin) {
        document.body.className = "ui-mobile-viewport ui-overlay-d";
        document.getElementById("idfalr").className = "ui-panel-dismiss";
      } else {
        document.body.className =
          "ui-mobile-viewport ui-overlay-d ui-panel-page-container-themed ui-panel-page-container-b ui-panel-page-container";
        document.getElementById("idfalr").className =
          "ui-panel-dismiss ui-panel-dismiss-position-right ui-panel-dismiss-display-push ui-panel-dismiss-open";
      }
      return {
        ...state,
        opendnavlogin: !state.opendnavlogin,
      };
    case SET_OPEN_MY_BETS:
      return {
        ...state,
        OpendMyBet: !state.OpendMyBet,
      };
    case SET_PROFILE_STATE_CHANGE:
      return {
        ...state,
        OpenProfile: !state.OpenProfile,
        PageProfile: payload,
      };
    case SET_PROFILE_STATE_CHANGE_ONLY:
      return {
        ...state,
        PageProfile: payload,
      };
    case SET_NAV_REGISTER_CHANGE:
      return {
        ...state,
        openregister: !state.openregister,
      };
    case SET_START_LOGIN_DATA:
      return { ...state, isloadingLogin: true };
    case SET_END_LOGIN_DATA:
      return { ...state, isloadingLogin: false };
    case GET_INIT_SLIDE:
      if (payload.status === 400) {
        return {
          ...state,
          silde: [],
        };
      } else {
        return {
          ...state,
          silde: payload,
        };
      }
    case UPTATE_EMAIL_USER:
      return {
        ...state,
        userDetails: { ...state.userDetails, Email: payload },
      };
    case UPTATE_NAME_USER:
      return {
        ...state,
        userDetails: { ...state.userDetails, Name: payload },
      };
    case UPTATE_LAST_USER:
      return {
        ...state,
        userDetails: { ...state.userDetails, LastName: payload },
      };
    case PUT_WINDROW_WIDTH:
      return {
        ...state,
        width_form: payload,
      };
    case START_UPDATE_USER_DETAILS:
      return {
        ...state,
        InsaveUpdate: payload,
      };
    case UPDATE_USER_BALANCE_TIMER:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          Balance: payload.balance,
          bonus_balance: payload.bonus_balance,
        },
      };
    case UPDATE_USER_CHANGE_PASSWORD:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          IS_first_login: 0,
        },
      };
    case GET_GEO_NAVIGATOR:
      return {
        ...state,
        geolocation: payload,
        isloadinggeolocalisation: false,
      };
    case GET_MINIGAME:
      return {
        ...state,
        mingames: payload.data,
      };
    default:
      return state;
  }
};

export default general;
