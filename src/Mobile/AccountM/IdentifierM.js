import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_END_LOGIN_DATA } from "../../redux/actions/types";
import { getUSerDetails } from "../../redux/actions/general";
const REACT_APP_URL_API = "https://api.gagnant365.com/api/";
function IdentifierM() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [serror, seterror] = useState("");
  const dispatch = useDispatch();
  const loginUser = () => {
    fetch(REACT_APP_URL_API + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((token) => {
        if (token.status === 400) {
          //error message
          seterror("ErrorLogin");
          dispatch({ type: SET_END_LOGIN_DATA });
        } else {
          seterror("");
          localStorage.setItem("token", JSON.stringify(token.token));
          dispatch(getUSerDetails());
        }
      });
  };
  const { opendnavlogin } = useSelector((state) => state.general);
  return (
    <div
      id="right-panel"
      class={
        opendnavlogin
          ? "panel bgMain bg_right_panel   ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"
          : "panel bgMain bg_right_panel   ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-closed"
      }
      data-position="right"
      data-role="panel"
      data-display="push"
      data-theme="b"
      data-dismissible="true"
    >
      <div class="ui-panel-inner">
        <div class="platformRightLoginPanel" id="sidebar-login">
          <form class="login_container" method="post" novalidate="novalidate">
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="y9ewLWRwOi1I_zZaMZnVJkHCWU6sZD2z5Oi5LMeR3tD2joAruJzLHH8oNjYyhO6AZMfOVkLwHHy0TeF_IAAi0eshvGbbxYdXUse797bbNw41"
            />{" "}
            <div class="r_login__row">
              <div class="platformLoginRightLogo"></div>
            </div>
            <input name="GameName" id="GameName" value="" type="hidden" />
            <div class="r_login__row PlatformLoginPassContainer">
              <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input
                  class="login_input inp"
                  automation="email_input"
                  data-val="true"
                  data-val-required="Please enter your username"
                  id="email"
                  name="Email"
                  placeholder="Nom d’utilisateur"
                  required="required"
                  tabindex="1"
                  type="text"
                  value={username}
                  aria-required="true"
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>
            <div class="r_login__row PlatformLoginPassContainer eye_block">
              <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input
                  class="platformPassInput inp valid"
                  autocomplete="off"
                  automation="password_input"
                  data-val="true"
                  data-val-required="Password field is required"
                  id="password"
                  name="Password"
                  placeholder="Mot de passe"
                  required="required"
                  tabindex="2"
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  aria-required="true"
                  aria-describedby="password-error"
                  aria-invalid="false"
                  value={password}
                />
              </div>{" "}
            </div>
            <span
              class="field-validation-valid error warning warning-log dis_none"
              id="loginerrormessage"
            ></span>
            <div class="r_login__row warning dis_none">
              <span
                class="field-validation-valid"
                data-valmsg-for="Password"
                data-valmsg-replace="true"
              ></span>
              <span
                class="field-validation-valid"
                data-valmsg-for="Email"
                data-valmsg-replace="true"
              ></span>
            </div>
            <span class="dis_none loading_span" id="loadingSpan">
              Chargement...
            </span>
            <div class="r_login__row">
              <a
                onClick={(e) => loginUser()}
                class="platformLoginButton btn_prim tl_btn bg-primary ui-link"
                id="loginButton"
                automation="login_button"
              >
                SE CONNECTER
              </a>
            </div>
            <div class="r_login__row">
              <a class="platformForgPass ui-link" href="/Home/ForgotPass">
                Mot de passe oublié?
              </a>
            </div>
          </form>{" "}
          <input type="hidden" id="gameUrl" value="" />
          <input type="hidden" id="loginHref" value="" />
        </div>
      </div>
    </div>
  );
}
export default IdentifierM;
