import React from "react";
function Login(props) {
  return props.Trigger ? (
    <div
      tabindex="-1"
      role="dialog"
      class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front tl_popup_dialog js_popup_dialog flex_popup_content"
      aria-describedby="loginContent"
      aria-labelledby="ui-id-1"
      style={{}}
    >
      <div
        class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"
        style={{
          height: "100px",
          padding: "0px",
          background: "none",
          border: "0px",
        }}
      >
        <span id="ui-id-1" class="ui-dialog-title" style={{ display: "none" }}>
          &nbsp;
        </span>
        <button
          type="button"
          class="ui-dialog-titlebar-close"
          style={{ display: "none" }}
        ></button>
      </div>
      <div id="loginContent" class="dialog ui-dialog-content ui-widget-content">
        <div class="tl_popup_container tl_login_content">
          <form
            action="/fr/Login/Login"
            automation="login_form"
            id="loginForm"
            method="post"
            novalidate="novalidate"
          >
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="wwZCo2toRWc9wefMh3EogEfF9hRkVAnXJY79Zb1xWDh85vHBe5YYYQbqq720e-Un_rK-Jsu352412GfDKHsNR-cuRJS-Lc-ITom5zm2vymA1"
            />{" "}
            <div class="tl_popup_header" style={{}}>
              <span class="tl_head_text">S'identifier</span>

              <i
                onClick={() => props.setTrigger(false)}
                class="tl_head_close dont-shrink"
              ></i>
              {props.children}
            </div>
            <div id="login_container">
              <div class="tl_popup_content">
                <div class="form-group login_form_group register_input_new">
                  <div class="form-group-label">
                    <label for="Email">Username/ E-mail/ Mobile</label>{" "}
                    <span>*</span>
                  </div>

                  <input
                    automation="email_input"
                    class="tl_input_popup_reg"
                    data-val="true"
                    data-val-required="Please enter your username"
                    id="email"
                    name="Email"
                    placeholder="Nom d’utilisateur"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="Email"
                    data-valmsg-replace="true"
                  ></span>
                </div>

                <div class="form-group login_form_group register_input_new relative">
                  <div class="form-group-label">
                    <label for="Password">Mot de passe</label> <span>*</span>
                  </div>
                  <div class="tl_input_with_suffix eye_block">
                    <input
                      autocomplete="off"
                      automation="password_input"
                      class="tl_input_popup_reg"
                      data-val="true"
                      data-val-required="Password field is required"
                      id="password"
                      name="Password"
                      placeholder="Mot de passe"
                      type="password"
                    />

                    <span
                      class="field-validation-valid reg_err_mess"
                      data-valmsg-for="Password"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  <div class="reg_error_message">
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="errorContainer"
                      data-valmsg-replace="true"
                      id="loginError"
                    ></span>
                  </div>
                </div>
                <div class="mb-4"></div>

                <div class="mb-1 login_form_group text-center ">
                  <button
                    type="button"
                    class="tl_btn login_btn btnSec h-bg-primary"
                    automation="login_button"
                  >
                    S'identifier
                  </button>
                </div>

                <a data-href="#" class="tl_popup_link recover_btn popup_lbl_2">
                  Mot de passe oublié?
                </a>

                <a
                  class="tl_sup_link"
                  onclick="parent.LC_API.open_chat_window()"
                >
                  <i class=""></i>Chatter maintenant
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Login;
