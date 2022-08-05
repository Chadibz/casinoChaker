function BetHistory(props) {
  return props.trigger ? (
    <div class="tl_my_acc_cont_content tl_popup_clr">
      <div class="tl_head_close dont-shrink tl_my_acc_close"></div>
      <div id="tl_scroll" class="profile_popup_content scrolled__content">
        <div id="tl_profile_content" style={{ display: "block" }}>
          <div id="content_hostory" class="d-flex flex-column h-100">
            <div class="tl_gh" id="js_history_content">
              <form
                action="/fr/Account/GameHistory"
                id="searchForm"
                method="post"
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
                  <div class="id">ID:</div>
                  <div class="dt">Date:</div>
                  <div class="gn">Jeu:</div>
                  <div class="wg">Pari:</div>
                  <div class="wg"></div>
                  <div class="win">Gagner:</div>
                </div>
                <div
                  id="tl_game_hist"
                  class="scrolled__content history_scrolled_content"
                ></div>
              </div>
              <div class="paginGFoot"></div>
            </div>
            <div class="tl_last_games_cont">
              <div class="tl_last_gmae_title popup_lbl_2">
                Recently Played Games
              </div>
              <div
                class="popup__slider_prev cas_nav_prev flex jc alCen slick-arrow slick-hidden"
                aria-disabled="true"
                tabindex="-1"
              ></div>
              <div
                class="flex wfull popup_slider slick-initialized slick-slider"
                id="popup_slider"
              >
                <div class="slick-list">
                  <div
                    class="slick-track"
                    style={{
                      opacity: "1",
                      width: "10000px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      class="tl_game_cont game__block flex alCen jc slick-slide slick-current slick-active"
                      style={{}}
                      data-slick-index="0"
                      aria-hidden="false"
                    >
                      <div class="game__main animate">
                        <img
                          class="game_img"
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                        />
                      </div>
                      <div class="game__link_block animate">
                        <span class="bg-primary_cont_from_game_history">
                          <a
                            class="bg-primary game__link_real play"
                            href="/play/real/Crazy-Time-Evolution-Shared-livecasino"
                            tabindex="0"
                          >
                            Jouer
                          </a>
                        </span>
                        <a
                          class="demo game__link_demo h-bg-secondary"
                          href="/play/fun/Crazy-Time-Evolution-Shared-livecasino"
                          target="_self"
                          tabindex="0"
                        >
                          Démo Play
                        </a>
                      </div>
                    </div>
                    <div
                      class="tl_game_cont game__block flex alCen jc slick-slide slick-active"
                      style={{}}
                      data-slick-index="1"
                      aria-hidden="false"
                    >
                      <div class="game__main animate">
                        <img
                          class="game_img"
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Betongames/28223_CashShow.png"
                        />
                      </div>
                      <div class="game__link_block animate">
                        <span class="bg-primary_cont_from_game_history">
                          <a
                            class="bg-primary game__link_real play"
                            href="/play/real/CashShow-"
                            tabindex="0"
                          >
                            Jouer
                          </a>
                        </span>
                        <a
                          class="demo game__link_demo h-bg-secondary"
                          href="/play/fun/CashShow-"
                          target="_self"
                          tabindex="0"
                        >
                          Démo Play
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="popup__slider_next cas_nav_next flex jc alCen slick-arrow slick-hidden"
                aria-disabled="true"
                tabindex="-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default BetHistory;
