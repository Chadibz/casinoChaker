function Transaction() {
  return (
    <div class="tl_my_acc_cont_content tl_popup_clr">
      <div id="tl_scroll" class="profile_popup_content scrolled__content">
        <div id="tl_profile_content">
          <div class="tl_gh">
            <form
              action="/fr/Account/TransactionsHistory"
              id="deposithistForm"
              method="post"
              typetransac="1"
            >
              <input
                data-val="true"
                data-val-number="The field Page must be a number."
                data-val-required="The Page field is required."
                id="pageNumber"
                name="Paging.Page"
                type="hidden"
                value="1"
              />

              <div class="tl_row px-2 align-items-end popup_filter_content">
                <div class="tl_col-auto">
                  <div class="form-group">
                    <label for="period" class="form-group-label">
                      Sélectionnez une période:
                    </label>

                    <div class="tl_sel_custom_popup_reg">
                      <select
                        class="tl_sel_popup_reg tl_sel_custom_popup_reg_hidden"
                        customclass="tl_dropdown_color"
                        data-val="false"
                        data-val-number="The field PeriodId must be a number."
                        data-val-required="The PeriodId field is required."
                        id="period"
                        name="PeriodId"
                      >
                        <option value="1">Les 7 derniers jours</option>
                        <option value="2">Derniers 14 jours</option>
                        <option value="3">Les 30 derniers jours</option>
                        <option value="4">Période</option>
                      </select>
                      <div
                        class="tl_sel_custom_popup_reg_selected "
                        id="custom_period"
                      >
                        Les 7 derniers jours
                      </div>
                      <ul
                        data-id="period"
                        class="tl_sel_custom_popup_reg_options tl_dropdown_color  period"
                      >
                        <li rel="1" class="active">
                          Les 7 derniers jours
                        </li>
                        <li rel="2" class="">
                          Derniers 14 jours
                        </li>
                        <li rel="3" class="">
                          Les 30 derniers jours
                        </li>
                        <li rel="4" class="">
                          Période
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="tl_col-auto">
                  <div class="form-group relative ">
                    <label for="start-date" class="form-group-label">
                      Date de début:
                    </label>
                    <input
                      class="tl_date_picker tl_input_popup_reg w160px hasDatepicker disabled"
                      data-val="true"
                      data-val-regex="Incorect date"
                      data-val-regex-pattern="^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$"
                      data-val-required="Le champ est obligatoire"
                      id="start-date"
                      name="TimeRange.StartDate"
                      required="required"
                      type="text"
                      value="29/07/2022"
                      readonly="readonly"
                    />
                    <button type="button" class="ui-datepicker-trigger">
                      <i class="tf_calendar_icon"></i>
                    </button>
                  </div>
                </div>

                <div class="tl_col-auto">
                  <div class="form-group relative ">
                    <label for="end-date" class="form-group-label">
                      Date de fin:
                    </label>
                    <input
                      class="tl_date_picker tl_input_popup_reg w160px hasDatepicker disabled"
                      data-val="true"
                      data-val-greaterdate="La date de fin doit être supérieure à la date de début."
                      data-val-greaterdate-other="StartDate"
                      data-val-regex="Incorect date"
                      data-val-regex-pattern="^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$"
                      data-val-required="Le champ est obligatoire"
                      id="end-date"
                      name="TimeRange.EndDate"
                      required="required"
                      type="text"
                      value="05/08/2022"
                      readonly="readonly"
                    />
                    <button type="button" class="ui-datepicker-trigger">
                      <i class="tf_calendar_icon"></i>
                    </button>
                  </div>
                </div>

                <div class="tl_col-auto">
                  <div class="form-group">
                    <label for="end-date" class="form-group-label">
                      Transaction Type
                    </label>
                    <div class="tl_sel_custom_popup_reg">
                      <select
                        id="historyItem"
                        customclass="tl_dropdown_color"
                        name="historyItem"
                        class="tl_sel_popup_reg tl_sel_custom_popup_reg_hidden"
                      >
                        <option value="2">Dépôt</option>
                        <option value="1">Retrait</option>

                        <option value="4">Balance Adjustments</option>

                        <option value="6">Tournament Rebuy</option>
                      </select>
                      <div
                        class="tl_sel_custom_popup_reg_selected "
                        id="custom_historyItem"
                      >
                        Dépôt
                      </div>
                      <ul
                        data-id="historyItem"
                        class="tl_sel_custom_popup_reg_options tl_dropdown_color  historyItem"
                      >
                        <li rel="2" class="active">
                          Dépôt
                        </li>
                        <li rel="1" class="">
                          Retrait
                        </li>
                        <li rel="4" class="">
                          Balance Adjustments
                        </li>
                        <li rel="6" class="">
                          Tournament Rebuy
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="tl_col-auto order_1">
                  <div class="form-group">
                    <label for="end-date" class="form-group-label"></label>
                    <a
                      id="js_search_btn"
                      href="#"
                      class="tl_search_button histsearch_btn tl_btn h-bg-primary d-flex align-items-center justify-content-center"
                    >
                      <div class="tl_loader tl_loader-inside-button"></div>
                      <span id="js_loading_replace">Voir les détails</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="wfull wfull_his">
                <span class="reg_error_message">
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="TimeRange.StartDate"
                    data-valmsg-replace="true"
                  ></span>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="TimeRange.EndDate"
                    data-valmsg-replace="true"
                  ></span>
                </span>
              </div>
            </form>{" "}
            <input type="hidden" id="isLogged" value="4651973" />
            <div class="tl_gh_result">
              <div class="tl_gh_result_heading flex wfull">
                <div class="pwh_row_place"></div>
                <div class="id">Code:</div>
                <div class="dt">Date:</div>
                <div class="gn" title="Montant">
                  Montant
                </div>
                <div class="id"></div>
                <div class="wg" title="Commission Amount">
                  Commission Amount
                </div>
                <div class="wg">Méthode:</div>

                <div class="win">Statut:</div>
                <div class="win">Continue</div>

                <div class="win">Voucher:</div>
              </div>

              <div class="scrolled__content history_scrolled_content">
                <div class="tl_gh_result_item flex wfull">
                  <div class="details_btn" id="62956283"></div>
                  <div class="id">62956283</div>
                  <div class="dt">05.08.2022 14:28:02</div>
                  <div class="gn" title="10.00 TND">
                    10.00 TND
                  </div>
                  <div class="id"></div>
                  <div class="wg" title="0.00 TND">
                    0.00 TND
                  </div>
                  <div class="wg" title="AgentBank">
                    AgentBank
                  </div>
                  <div class="win" title="A approuvé">
                    A approuvé
                  </div>
                  <div class="win"></div>
                  <div class="win"></div>

                  <div
                    class="pwh_used_unused_info commistionblock_62956283"
                    style={{ display: "none" }}
                  >
                    <div class="pwh_used_unused_line flex wfull">
                      <div class="pwh_row_place"></div>
                      <div class="pwh_id_place"></div>
                      <div class="pwh_dt_place "></div>
                      <div class="used" id="used_62956283"></div>
                      <div class="usedfee" id="usedfee_62956283"></div>
                      <div class="commamount" id="commamount_62956283"></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                    </div>
                    <div class="pwh_used_unused_line flex wfull">
                      <div class="pwh_row_place"></div>
                      <div class="pwh_id_place"></div>
                      <div class="pwh_dt_place"></div>
                      <div class="unused" id="unused_62956283"></div>
                      <div class="unusedfee" id="unusedfee_62956283"></div>
                      <div
                        class="uncommamount"
                        id="uncommamount_62956283"
                      ></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                      <div class="pwh_wg_place"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="popup-QRCode-withdrawal-history"
            class="deposit-popup popup_flex_boxBIM fullscreen-content"
            style={{ display: "none" }}
          >
            <div class="tl_popup_clr deposit-popup-container">
              <div class="deposit-popup-header">
                <div
                  class="dont-shrink close-popup-QRCode"
                  id="close-popup-QRCode-withdrawal-history"
                  style={{ float: "right" }}
                >
                  ✖
                </div>
              </div>
              <div class="deposit-popup-text">
                <img id="QRImg-withdrawal-history" class="QRCode-img" src="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Transaction;
