import { combineReducers } from "redux";
import general from "./general";
import Games from "./Games";
import Providers from "./Providers";
import Live_Game from "./Live_Game";
import Historiquetransaction from "./Historiquetransaction";
import NewAccount from "./NewAccount";
import changePassword from "./ChangePassword";
import Listusers from "./Listusers";
/*import { reducer as toastrReducer } from "react-redux-toastr";*/
import Revenu from "./Revenu";
export default combineReducers({
  general,
  Games,
  Providers,
  Live_Game,
  Historiquetransaction,
  NewAccount,
  changePassword,
  Listusers,
  /*toastr: toastrReducer,*/
  Revenu,
});
