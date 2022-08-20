import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CASINO_CAT_FILT,
  CLEAR_CASINO_PROV_FILT,
  PUT_CASINO_CAT_FILT,
  PUT_CASINO_PROV_FILT,
  PUT_CASINO_SEARCH_FILT,
} from "../../redux/actions/types";
function FiltreM() {
  const { searchtext, filter_provider, Filter_Categori } = useSelector(
    (state) => state.Games
  );
  const { providers_Casino, categorie } = useSelector(
    (state) => state.Providers
  );
  const [opendprovider, setopendpprovider] = useState(false);
  const [opendCat, setopendCat] = useState(false);
  const dispatch = useDispatch();
  const searchchange = (e) => {
    dispatch({ type: PUT_CASINO_SEARCH_FILT, payload: e.target.value });
  };
  return (
    <div class="lc-cat-fixed" id="js_fixed_cont">
      <div class="d-flex">
        <div class="d-flex lca_search_cont" id="js_lobby_search_cont">
          <span class="lca_search__button" id="js_open_lobby_search">
            <i class="lca_search__icon"></i>
          </span>
          <input
            class="lca_search_input ui-shadow"
            data-role="none"
            type="text"
            id="js_search_lobby_game"
            placeholder="Find games"
            onkeyup="searchGamesFromLobby(this)"
          />
          <span class="lca_close_button" id="js_close_lobby_search">
            <i class="lca_close_icon"></i>
          </span>
        </div>
        <div class="lca-menu scroll-x" id="js_dl_groups_cont">
          <ul class="list-inline d-flex scrolled-container">
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None default active"
                data-id="9969"
                data-url="all"
                data-type-id="15"
                data-take-count="6"
              >
                All
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9983"
                data-url="dropsandwins"
                data-type-id="42"
                data-take-count="6"
              >
                Drops &amp; Wins
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9970"
                data-url="mostpopular"
                data-type-id="5"
                data-take-count="6"
              >
                Most Popular
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9972"
                data-url="new"
                data-type-id="1"
                data-take-count="6"
              >
                New
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9973"
                data-url="slots"
                data-type-id="9"
                data-take-count="6"
              >
                Slots
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9974"
                data-url="baccarat"
                data-type-id="14"
                data-take-count="6"
              >
                Baccarat
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9975"
                data-url="roulette"
                data-type-id="10"
                data-take-count="6"
              >
                Roulette
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9976"
                data-url="poker"
                data-type-id="12"
                data-take-count="6"
              >
                Poker
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9977"
                data-url="lotterygames"
                data-type-id="21"
                data-take-count="12"
              >
                Lottery Games
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9978"
                data-url="other"
                data-type-id="8"
                data-take-count="6"
              >
                Other
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9980"
                data-url="mostliked"
                data-type-id="3"
                data-take-count="6"
              >
                Most Liked
              </div>
            </li>
            <li class="lca-menu-item">
              <div
                class="js_dl_groups lca-menu-link badge_None"
                data-id="9981"
                data-url="trendinggames"
                data-type-id="6"
                data-take-count="6"
              >
                Trending Games
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="lca-submenu scroll-x " id="js_dl_cats_cont">
        <ul class="scrolled-container list-inline ">
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link active"
              data-id="0"
              data-url="all"
            >
              <span>All</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 3102
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14379"
              data-url="amatic"
            >
              <span>Amatic</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 59
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14357"
              data-url="pragmaticplay"
            >
              <span>Pragmatic Play</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 250
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14358"
              data-url="endorphina"
            >
              <span>Endorphina</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 102
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14339"
              data-url="playson"
            >
              <span>Playson</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 57
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14332"
              data-url="booongo"
            >
              <span>Booongo</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 53
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14359"
              data-url="wazdan"
            >
              <span>Wazdan</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 160
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14342"
              data-url="boominggames"
            >
              <span>Booming Games</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 92
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14336"
              data-url="belatra"
            >
              <span>Belatra</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 80
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14355"
              data-url="ortiz"
            >
              <span>Ortiz</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 16
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14338"
              data-url="evoplayentertainment"
            >
              <span>Evoplay Entertainment</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 156
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14348"
              data-url="fazi"
            >
              <span>Fazi</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 105
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14346"
              data-url="onetouch"
            >
              <span>OneTouch</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 50
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14360"
              data-url="mrslotty"
            >
              <span>MrSlotty</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 49
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14349"
              data-url="wearecasino"
            >
              <span>WeAreCasino</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 21
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="25650"
              data-url="gameart"
            >
              <span>GameArt</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 108
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14350"
              data-url="conceptgaming"
            >
              <span>Concept Gaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 51
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14330"
              data-url="fugaso"
            >
              <span>Fugaso</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 35
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14340"
              data-url="redrake"
            >
              <span>Red Rake</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 74
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14347"
              data-url="worldmatch"
            >
              <span>WorldMatch</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 167
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14343"
              data-url="superlotto"
            >
              <span>SuperLotto</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 52
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14351"
              data-url="gmw"
            >
              <span>GMW</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 40
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14337"
              data-url="inbet"
            >
              <span>Inbet</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 231
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14341"
              data-url="tomhorn"
            >
              <span>Tom Horn</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 48
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14345"
              data-url="spadegaming"
            >
              <span>SpadeGaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 102
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14377"
              data-url="betsolutions"
            >
              <span>Betsolutions</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 9
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14353"
              data-url="espressogames"
            >
              <span>Espresso Games</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 62
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14356"
              data-url="njoy"
            >
              <span>NJOY</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 10
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14352"
              data-url="gamefishglobal"
            >
              <span>GameFishGlobal</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 8
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14333"
              data-url="xgaming"
            >
              <span>1x2gaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 94
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14334"
              data-url="irondog"
            >
              <span>Iron Dog</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 42
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14335"
              data-url="oryx"
            >
              <span>ORYX</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 6
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14373"
              data-url="leapgaming"
            >
              <span>Leap Gaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 18
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14354"
              data-url="kagaming"
            >
              <span>Ka Gaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 405
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14331"
              data-url="habanero"
            >
              <span>Habanero</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 194
              </span>
            </div>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <div
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="14374"
              data-url="nucleusgaming"
            >
              <span>Nucleus Gaming</span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line js_lca_line">|</span> 96
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default FiltreM;
