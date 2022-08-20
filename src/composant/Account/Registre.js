function Registre() {
  return (
    <div class="agent_container">
      <div class="tl_popup_container width_part" id="reg_popup">
        <form
          action="/fr/Account/Agent"
          id="agentForm"
          method="post"
          onsubmit="return beforeSubmit()"
          novalidate="novalidate"
        >
          {" "}
          <div class="tl_popup_header flex agent_header"></div>
          <div class="tl_popup_content agent_body agent_body_sty">
            <div id="register_container">
              <div>
                <div class="form-group">
                  <span class="form-group-label">
                    <label>Passport ID #</label>
                    <span class="tl_input_popup_required">*</span>
                  </span>
                  <input
                    class="tl_input_popup_reg"
                    data-val="true"
                    data-val-required="Field is required"
                    id="PassportNumber"
                    name="PassportNumber"
                    placeholder="Enter the document number"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="PassportNumber"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <div class="form-group-label">
                    Date de naissance
                    <span class="tl_input_popup_required">*</span>
                  </div>
                  <div class="flex justify">
                    <div class="tl_sel_custom_popup_reg sel_short">
                      <select
                        class="tl_dd_select dropdSelect calcday tl_sel_custom_popup_reg_hidden"
                        data-val="true"
                        data-val-number="The field DateOfBirthDay must be a number."
                        data-val-range="Choisissez votre jour de naissance"
                        data-val-range-max="31"
                        data-val-range-min="1"
                        data-val-required="Choisissez votre jour de naissance"
                        data-wrapper-class="tl_sel_custom_popup_reg sel_short"
                        id="DateOfBirthDay"
                        name="DateOfBirthDay"
                        tabindex="5"
                      >
                        <option value="0">Jour</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <div
                        class="tl_sel_custom_popup_reg_selected "
                        id="custom_DateOfBirthDay"
                      >
                        Jour
                      </div>
                      <ul
                        data-id="DateOfBirthDay"
                        class="tl_sel_custom_popup_reg_options   DateOfBirthDay"
                      >
                        <li rel="0" class="active">
                          Jour
                        </li>
                        <li rel="1" class="">
                          1
                        </li>
                        <li rel="2" class="">
                          2
                        </li>
                        <li rel="3" class="">
                          3
                        </li>
                        <li rel="4" class="">
                          4
                        </li>
                        <li rel="5" class="">
                          5
                        </li>
                        <li rel="6" class="">
                          6
                        </li>
                        <li rel="7" class="">
                          7
                        </li>
                        <li rel="8" class="">
                          8
                        </li>
                        <li rel="9" class="">
                          9
                        </li>
                        <li rel="10" class="">
                          10
                        </li>
                        <li rel="11" class="">
                          11
                        </li>
                        <li rel="12" class="">
                          12
                        </li>
                        <li rel="13" class="">
                          13
                        </li>
                        <li rel="14" class="">
                          14
                        </li>
                        <li rel="15" class="">
                          15
                        </li>
                        <li rel="16" class="">
                          16
                        </li>
                        <li rel="17" class="">
                          17
                        </li>
                        <li rel="18" class="">
                          18
                        </li>
                        <li rel="19" class="">
                          19
                        </li>
                        <li rel="20" class="">
                          20
                        </li>
                        <li rel="21" class="">
                          21
                        </li>
                        <li rel="22" class="">
                          22
                        </li>
                        <li rel="23" class="">
                          23
                        </li>
                        <li rel="24" class="">
                          24
                        </li>
                        <li rel="25" class="">
                          25
                        </li>
                        <li rel="26" class="">
                          26
                        </li>
                        <li rel="27" class="">
                          27
                        </li>
                        <li rel="28" class="">
                          28
                        </li>
                        <li rel="29" class="">
                          29
                        </li>
                        <li rel="30" class="">
                          30
                        </li>
                        <li rel="31" class="">
                          31
                        </li>
                      </ul>
                    </div>
                    <div class="tl_sel_custom_popup_reg sel_short">
                      <select
                        class="tl_dd_select dropdSelect calcmonth tl_sel_custom_popup_reg_hidden"
                        data-val="true"
                        data-val-number="The field DateOfBirthMonth must be a number."
                        data-val-range="Choisissez votre mois de naissance"
                        data-val-range-max="12"
                        data-val-range-min="1"
                        data-val-required="Choisissez votre mois de naissance"
                        data-wrapper-class="tl_sel_custom_popup_reg sel_short"
                        id="DateOfBirthMonth"
                        name="DateOfBirthMonth"
                        tabindex="6"
                      >
                        <option value="0">Mois</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <div
                        class="tl_sel_custom_popup_reg_selected "
                        id="custom_DateOfBirthMonth"
                      >
                        Mois
                      </div>
                      <ul
                        data-id="DateOfBirthMonth"
                        class="tl_sel_custom_popup_reg_options   DateOfBirthMonth"
                      >
                        <li rel="0" class="active">
                          Mois
                        </li>
                        <li rel="1" class="">
                          1
                        </li>
                        <li rel="2" class="">
                          2
                        </li>
                        <li rel="3" class="">
                          3
                        </li>
                        <li rel="4" class="">
                          4
                        </li>
                        <li rel="5" class="">
                          5
                        </li>
                        <li rel="6" class="">
                          6
                        </li>
                        <li rel="7" class="">
                          7
                        </li>
                        <li rel="8" class="">
                          8
                        </li>
                        <li rel="9" class="">
                          9
                        </li>
                        <li rel="10" class="">
                          10
                        </li>
                        <li rel="11" class="">
                          11
                        </li>
                        <li rel="12" class="">
                          12
                        </li>
                      </ul>
                    </div>
                    <div class="tl_sel_custom_popup_reg sel_short">
                      <select
                        class="tl_dd_select dropdSelect calcyear tl_sel_custom_popup_reg_hidden"
                        data-val="true"
                        data-val-number="The field Date de naissance must be a number."
                        data-val-range="S'il vous plaît indiquer le jour de naissance"
                        data-val-range-max="2020"
                        data-val-range-min="1950"
                        data-val-required="S'il vous plaît indiquer le jour de naissance"
                        data-wrapper-class="tl_sel_custom_popup_reg sel_short"
                        id="DateOfBirthYear"
                        name="DateOfBirthYear"
                        tabindex="7"
                      >
                        <option value="0">année</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                      </select>
                      <div
                        class="tl_sel_custom_popup_reg_selected "
                        id="custom_DateOfBirthYear"
                      >
                        année
                      </div>
                      <ul
                        data-id="DateOfBirthYear"
                        class="tl_sel_custom_popup_reg_options   DateOfBirthYear"
                      >
                        <li rel="0" class="active">
                          année
                        </li>
                        <li rel="2004" class="">
                          2004
                        </li>
                        <li rel="2003" class="">
                          2003
                        </li>
                        <li rel="2002" class="">
                          2002
                        </li>
                        <li rel="2001" class="">
                          2001
                        </li>
                        <li rel="2000" class="">
                          2000
                        </li>
                        <li rel="1999" class="">
                          1999
                        </li>
                        <li rel="1998" class="">
                          1998
                        </li>
                        <li rel="1997" class="">
                          1997
                        </li>
                        <li rel="1996" class="">
                          1996
                        </li>
                        <li rel="1995" class="">
                          1995
                        </li>
                        <li rel="1994" class="">
                          1994
                        </li>
                        <li rel="1993" class="">
                          1993
                        </li>
                        <li rel="1992" class="">
                          1992
                        </li>
                        <li rel="1991" class="">
                          1991
                        </li>
                        <li rel="1990" class="">
                          1990
                        </li>
                        <li rel="1989" class="">
                          1989
                        </li>
                        <li rel="1988" class="">
                          1988
                        </li>
                        <li rel="1987" class="">
                          1987
                        </li>
                        <li rel="1986" class="">
                          1986
                        </li>
                        <li rel="1985" class="">
                          1985
                        </li>
                        <li rel="1984" class="">
                          1984
                        </li>
                        <li rel="1983" class="">
                          1983
                        </li>
                        <li rel="1982" class="">
                          1982
                        </li>
                        <li rel="1981" class="">
                          1981
                        </li>
                        <li rel="1980" class="">
                          1980
                        </li>
                        <li rel="1979" class="">
                          1979
                        </li>
                        <li rel="1978" class="">
                          1978
                        </li>
                        <li rel="1977" class="">
                          1977
                        </li>
                        <li rel="1976" class="">
                          1976
                        </li>
                        <li rel="1975" class="">
                          1975
                        </li>
                        <li rel="1974" class="">
                          1974
                        </li>
                        <li rel="1973" class="">
                          1973
                        </li>
                        <li rel="1972" class="">
                          1972
                        </li>
                        <li rel="1971" class="">
                          1971
                        </li>
                        <li rel="1970" class="">
                          1970
                        </li>
                        <li rel="1969" class="">
                          1969
                        </li>
                        <li rel="1968" class="">
                          1968
                        </li>
                        <li rel="1967" class="">
                          1967
                        </li>
                        <li rel="1966" class="">
                          1966
                        </li>
                        <li rel="1965" class="">
                          1965
                        </li>
                        <li rel="1964" class="">
                          1964
                        </li>
                        <li rel="1963" class="">
                          1963
                        </li>
                        <li rel="1962" class="">
                          1962
                        </li>
                        <li rel="1961" class="">
                          1961
                        </li>
                        <li rel="1960" class="">
                          1960
                        </li>
                        <li rel="1959" class="">
                          1959
                        </li>
                        <li rel="1958" class="">
                          1958
                        </li>
                        <li rel="1957" class="">
                          1957
                        </li>
                        <li rel="1956" class="">
                          1956
                        </li>
                        <li rel="1955" class="">
                          1955
                        </li>
                        <li rel="1954" class="">
                          1954
                        </li>
                        <li rel="1953" class="">
                          1953
                        </li>
                        <li rel="1952" class="">
                          1952
                        </li>
                        <li rel="1951" class="">
                          1951
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="DateOfBirthYear"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <span class="form-group-label">
                    <label>Language option</label>
                    <span class="tl_input_popup_required">*</span>
                  </span>

                  <div class="tl_sel_custom_popup_reg">
                    <select
                      class="tl_sel_popup_reg dropdSelect calclanguage tl_sel_custom_popup_reg_hidden"
                      data-val="true"
                      data-val-required="Sélectionnez la langue"
                      id="LanguageCode"
                      name="LanguageCode"
                    >
                      <option value="">Langue -Choississez -</option>
                      <option value="EN">English</option>
                      <option selected="selected" value="FR">
                        Français
                      </option>
                      <option value="AEB">تونسي</option>
                    </select>
                    <div
                      class="tl_sel_custom_popup_reg_selected "
                      id="custom_LanguageCode"
                    >
                      Français
                    </div>
                    <ul
                      data-id="LanguageCode"
                      class="tl_sel_custom_popup_reg_options   LanguageCode"
                    >
                      <li rel="" class="">
                        Langue -Choississez -
                      </li>
                      <li rel="EN" class="">
                        English
                      </li>
                      <li rel="FR" class="active">
                        Français
                      </li>
                      <li rel="AEB" class="">
                        تونسي
                      </li>
                    </ul>
                  </div>
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="LanguageCode"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="form-group">
                  <span class="form-group-label">
                    <label>Name</label>
                    <span class="tl_input_popup_required">*</span>
                  </span>

                  <input
                    class="tl_input_popup_reg"
                    data-val="true"
                    data-val-length="Le champ Nom peut contenir un minimum de 2 à un maximum de 50 caractères,
Les espaces et les caractères spéciaux ( - _) "
                    data-val-length-max="55"
                    data-val-length-min="2"
                    data-val-regex="Le champ Nom peut contenir un minimum de 2 à un maximum de 50 caractères,
Les espaces et les caractères spéciaux ( - _) "
                    data-val-regex-pattern="^[^<>.'!,():;@$&amp;^#%`|/?*+{}=~0-9\[\]\\&quot;]+$"
                    data-val-required="Le nom est requis"
                    id="FirstName"
                    name="FirstName"
                    placeholder="Enter your First Name"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="FirstName"
                    data-valmsg-replace="true"
                  ></span>
                </div>

                <div class="form-group">
                  <span class="form-group-label">
                    <label>Surname</label>
                    <span class="tl_input_popup_required">*</span>
                  </span>

                  <input
                    class="tl_input_popup_reg"
                    data-val="true"
                    data-val-length="Le champ Nom peut contenir un minimum de 2 à un maximum de 50 caractères,
Les espaces et les caractères spéciaux ( '- _) "
                    data-val-length-max="50"
                    data-val-length-min="2"
                    data-val-regex="Le champ Nom peut contenir un minimum de 2 à un maximum de 50 caractères,
Les espaces et les caractères spéciaux ( '- _) "
                    data-val-regex-pattern='^[^<>.!,():;@$&amp;^#%`|/?*+{}=~0-9\[\]\\"]+$'
                    data-val-required="le champ Nom est requis"
                    id="LastName"
                    name="LastName"
                    placeholder="Enter your Last Name"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid reg_err_mess"
                    data-valmsg-for="LastName"
                    data-valmsg-replace="true"
                  ></span>
                </div>

                <div class="reg_footer flex">
                  <div class="reg_error_message agent_error">
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="errorContainer"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <button
                  class="reg_btn  btnSec transBg reg_btn_sty"
                  type="submit"
                  id="agentuaserreg"
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}
export default Registre;
