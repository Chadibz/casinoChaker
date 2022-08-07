function MonCompte() {
  return (
    <div class="tl_my_acc_cont_content tl_popup_clr">
      <div class="tl_head_close dont-shrink tl_my_acc_close"></div>
      <div id="tl_scroll" class="profile_popup_content scrolled__content">
        <div id="tl_profile_content" style={{ display: "block" }}>
          <div id="my_prof">
            <form
              action="/fr/Account/Profile1129"
              id="profileForm"
              method="post"
            >
              {" "}
              <div class="flex wfull jcSpaceBetween">
                <div class="col">
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="PLayerId">
                      Player ID
                    </label>
                    <input
                      class="tl_input"
                      disabled="disabled"
                      id="PLayerId"
                      name="PLayerId"
                      required="required"
                      type="text"
                      value="4651973"
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="FirstName">
                      prénom
                    </label>
                    <input
                      class="tl_input"
                      data-val="true"
                      data-val-length="First Name field can contain min. 2, max. 35 characters, 
spaces and special characters ( ‘ - _ )"
                      data-val-length-max="20"
                      data-val-length-min="2"
                      disabled="disabled"
                      id="FirstName"
                      name="FirstName"
                      required="required"
                      tabindex="9"
                      type="text"
                      value="CHADI"
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="LastName">
                      nom de famille
                    </label>
                    <input
                      class="tl_input"
                      data-val="true"
                      data-val-length="Last Name field can contain min. 2, max. 35 characters,
 spaces and special characters ( ‘ - _ )"
                      data-val-length-max="20"
                      data-val-length-min="2"
                      disabled="disabled"
                      id="LastName"
                      name="LastName"
                      required="required"
                      tabindex="9"
                      type="text"
                      value="BOUZAINE"
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl">Date de naissance</label>
                    <input
                      class="tl_input"
                      disabled="disabled"
                      id="Birthday"
                      name="Birthday"
                      type="text"
                      value="03/03/1990"
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="Username">
                      nom d'utilisateur
                    </label>
                    <input
                      class="tl_input"
                      disabled="disabled"
                      id="Username"
                      name="Username"
                      required="required"
                      type="text"
                      value="usertestb"
                    />
                  </div>
                  <div class="tl_my_prof_item_long">
                    <label class="lbl popup_lbl" for="Email">
                      email
                    </label>
                    <div class="flex spcbtw">
                      <div class="tl_input_box">
                        <input
                          class=" tl_input"
                          data-val="true"
                          data-val-length="E-mail field must not contain more than 100 characters"
                          data-val-length-max="100"
                          data-val-length-min="1"
                          data-val-regex="Format d'adresse email invalide"
                          data-val-regex-pattern="^[a-zA-Z0-9_\+-]+(\.[a-zA-Z0-9_\+-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.([a-zA-Z]{2,4})$"
                          disabled="disabled"
                          id="Email"
                          name="Email"
                          required="required"
                          tabindex="20"
                          type="text"
                          value="usertestb@Fertoonabet.com"
                        />
                        <span
                          class="unactivated_icon"
                          id="emailActivated"
                        ></span>
                        <span class="tooltip_msg1">
                          To verify your email address, please click the GET
                          CODE button, then enter the received code in the field
                          below.
                        </span>
                      </div>

                      <div class="profVerifyBtn">
                        <input
                          id="verificationEmail"
                          type="button"
                          class="my_prof_get_code  btnSec transBg noshr tl_btn h-bg-primary"
                          value="Obtenir le code d'activation"
                        />
                      </div>
                    </div>
                    <div id="EmailVerifie" class="popup_lbl_2"></div>
                  </div>
                  <div class="tl_my_prof_item_long">
                    <div class="flex spcbtw">
                      <div class="tl_input_box">
                        <input
                          class="tl_input"
                          id="EmailVerificationCode"
                          type="text"
                          placeholder="Enter the E-mail code"
                        />
                      </div>
                      <div class="profVerifyBtn">
                        <input
                          id="sendverificationEmail"
                          class="my_prof_verify btnSec transBg noshr tl_btn h-bg-primary"
                          type="button"
                          value="Activer"
                        />
                      </div>
                    </div>
                    <div id="EmailVerifieError"></div>
                  </div>
                </div>
                <div class="col">
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="PassportNumber">
                      Passport ID #
                    </label>
                    <input
                      class="tl_input"
                      data-val="true"
                      data-val-regex="Champ Numéro de passeport / ID ne peut contenir que des lettres latines et /
numéros de S dans ce format: AA0000000 / 123456789 "
                      data-val-regex-pattern="[a-zA-Z]{2}[0-9]{7}"
                      disabled="disabled"
                      id="PassportNumber"
                      name="PassportNumber"
                      required="required"
                      tabindex="19"
                      type="text"
                      value="06123"
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="Address">
                      adresse
                    </label>
                    <input
                      class="tl_input"
                      data-val="true"
                      data-val-length="Le champ de localisation doit contenir un minimum de 3 caractères. - Lettres latines, et tout symbole "
                      data-val-length-max="150"
                      disabled="disabled"
                      id="Address"
                      name="Address"
                      required="required"
                      tabindex="19"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="CountryCode">
                      pays
                    </label>
                    <input
                      class="tl_input"
                      disabled="disabled"
                      id="CountryCode"
                      name="CountryCode"
                      required="required"
                      tabindex="19"
                      type="text"
                      value=""
                    />
                  </div>

                  <div class="tl_my_prof_item">
                    <label class="lbl popup_lbl" for="Mobile">
                      mobile
                    </label>
                    <div class="flex spcbtw">
                      <div class="tl_input_box tl_input_box_width">
                        <input
                          class="tl_input"
                          data-val="true"
                          data-val-length="Mobile field must contain 8 digits"
                          data-val-length-max="16"
                          data-val-length-min="6"
                          data-val-regex='domaine mobile doit commencer par un signe "+" et le code du pays.'
                          data-val-regex-pattern="(^[+]{1}[0-9]+$)"
                          disabled="disabled"
                          id="Mobile"
                          name="Mobile"
                          required="required"
                          tabindex="20"
                          type="text"
                          value=""
                        />
                        <span
                          class="unactivated_icon"
                          id="mobileActivated"
                        ></span>
                        <span class="tooltip_msg1">
                          To verify your phone number, please click the GET CODE
                          button, then enter the received code in the field
                          below.
                        </span>
                      </div>
                    </div>
                    <div class="tl_my_prof_item_long"></div>

                    <div class="sucMsg popup_lbl_2" id="MobileVerifie"></div>
                  </div>
                  <div class="tl_my_prof_item"></div>
                </div>
              </div>
              <div class="col_footer">
                <div class="footer_title lbl popup_lbl_2 footer_title_marg">
                  Preferred Contact Method
                </div>
                <div class="flex wfull">
                  <div class="chb flex align-items-center">
                    <input
                      type="checkbox"
                      name="PreferEmail"
                      id="PreferEmail"
                      onclick="chkBoxFunc('#PreferEmail')"
                      value="false"
                    />
                    <label for="PreferEmail">
                      <span></span>
                    </label>
                    <label class="chb_lbl popup_lbl_2" for="PreferEmail">
                      <span>email</span>
                    </label>
                  </div>
                  <div class="chb flex align-items-center">
                    <input
                      type="checkbox"
                      name="PreferMobile"
                      id="PreferMobile"
                      onclick="chkBoxFunc('#PreferMobile')"
                      value="false"
                    />
                    <label for="PreferMobile">
                      <span></span>
                    </label>
                    <label class="chb_lbl popup_lbl_2" for="PreferMobile">
                      <span>mobile</span>
                    </label>
                  </div>
                  <input type="hidden" id="isLogged" value="4651973" />
                  <input
                    class="primBtn transBg tl_btn h-bg-primary"
                    id="update_my_prof"
                    type="button"
                    value="Update"
                  />
                </div>
                <div class="succes_color"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MonCompte;
