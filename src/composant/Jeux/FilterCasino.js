import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CASINO_PROV_FILT,
  PUT_CASINO_PROV_FILT,
  PUT_CASINO_SEARCH_FILT,
} from "../../redux/actions/types";

function FilterCasino() {
  const { searchtext, filter_provider } = useSelector((state) => state.Games);
  const { providers_Casino } = useSelector((state) => state.Providers);
  const [opendprovider, setopendpprovider] = useState(false);
  const dispatch = useDispatch();
  const searchchange = (e) => {
    dispatch({ type: PUT_CASINO_SEARCH_FILT, payload: e.target.value });
  };
  return (
    <div id="js_dl_filter_block">
      <div class="lca-navbar  d-flex align-items-center ">
        <div class="lca-filter-btn flex" id="js_show_filter">
          <span class="filter_icon__lines"></span>
          <span class="lca-filter-btn-text">Show Filter</span>
        </div>
        <div
          class="lca-nabvar-controller lca-nabvar-controller-prev lca-disabled"
          id="js_groups_nav_left_btn"
        ></div>
        <div
          class="lca-wrapper-shadow shadow-right flex-grow-1 d-flex"
          id="js_groups_nav_shadow"
        >
          <ul
            class="lca-navbar-nav d-flex flex-grow-1"
            id="js_lobby_groups_nav"
          >
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None default active"
                data-id="9956"
                data-url="all"
                data-type-id="15"
                data-take-count="12"
              >
                All
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_Hot  "
                data-id="18615"
                data-url="pragmatictournament"
                data-type-id="43"
                data-take-count="12"
              >
                Ton été festif
                <span class="lca-menu-badge">Hot</span>
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9982"
                data-url="dropsandwins"
                data-type-id="42"
                data-take-count="12"
              >
                Drops &amp; Wins
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9957"
                data-url="mostpopular"
                data-type-id="5"
                data-take-count="12"
              >
                Most Popular
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9959"
                data-url="new"
                data-type-id="1"
                data-take-count="12"
              >
                New
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9960"
                data-url="slots"
                data-type-id="9"
                data-take-count="12"
              >
                Slots
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9961"
                data-url="baccarat"
                data-type-id="14"
                data-take-count="12"
              >
                Baccarat
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9962"
                data-url="roulette"
                data-type-id="10"
                data-take-count="12"
              >
                Roulette
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9963"
                data-url="poker"
                data-type-id="12"
                data-take-count="12"
              >
                Poker
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9964"
                data-url="lotterygames"
                data-type-id="21"
                data-take-count="12"
              >
                Lottery Games
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9965"
                data-url="other"
                data-type-id="8"
                data-take-count="12"
              >
                Other
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9967"
                data-url="mostliked"
                data-type-id="3"
                data-take-count="12"
              >
                Most Liked
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="9968"
                data-url="trendinggames"
                data-type-id="6"
                data-take-count="12"
              >
                Trending Games
              </a>
            </li>
          </ul>
        </div>
        <div
          class="lca-nabvar-controller lca-nabvar-controller-next"
          id="js_groups_nav_right_btn"
        ></div>
        <div class="lca-search d-flex active">
          <div class="search__icon" id="js_lobby_search_btn"></div>
          <input
            class="lca-search-input"
            type="text"
            placeholder="Search"
            value={searchtext}
            id="js_dl_search_game"
            onChange={(e) => searchchange(e)}
          />
        </div>
      </div>
      <div class="lca-filter" id="js_stake_range_cont">
        <div class="lca-filter-wrapper lca-type-filter">
          <div class="lca-filter-title">Themes</div>
          <div class="flex align-items-center">
            <div
              class="lca-nabvar-controller lca-nabvar-controller-prev lca-disabled"
              id="js_filter_themes_left_btn"
            ></div>
            <div
              class="lca-wrapper-shadow flex-grow-1 d-flex"
              id="js_filter_themes_shadow"
            >
              <div
                class="lca-filter-item-list lca-wrapper-shadow flex-grow-1 d-flex"
                id="js_filter_themes_cont"
              >
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="0"
                  data-url="all"
                >
                  <span> All </span>
                </a>

                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="3"
                >
                  <span>Fruits / Vegetables</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="4"
                >
                  <span>Animals</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="5"
                >
                  <span>Egyptian</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="6"
                >
                  <span>Classic</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="7"
                >
                  <span>Underwater / Sea</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="8"
                >
                  <span>Jungles</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="9"
                >
                  <span>History and Books</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="10"
                >
                  <span>Branded</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="11"
                >
                  <span>Christmas</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="12"
                >
                  <span>Halloween</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="13"
                >
                  <span>Santa Claus</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="14"
                >
                  <span>Fairytale</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="15"
                >
                  <span>Jewels and Gems</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="16"
                >
                  <span>Sport</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="17"
                >
                  <span>Asian</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="18"
                >
                  <span>Luxury</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="19"
                >
                  <span>Joker</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="20"
                >
                  <span>Magic</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="21"
                >
                  <span>Fantasy</span>
                </a>
                <a
                  class="lca-filter-item js_dl_themes lca-submenu-link"
                  data-themeid="22"
                >
                  <span>Food</span>
                </a>
              </div>
            </div>
            <div
              class="lca-nabvar-controller lca-nabvar-controller-next lca-disabled"
              id="js_filter_themes_right_btn"
            ></div>
          </div>
        </div>
      </div>
      <div
        class={opendprovider ? "lca-submenu-row  " : "lca-submenu-row closed"}
        id="js_provs_nav_shadow"
      >
        <ul
          class="lca-submenu lca-submenu-dropdown"
          id="js_lobby_prov_nav_list_view"
        >
          <li
            class="lca-submenu-item list-inline-item"
            onClick={() => dispatch({ type: CLEAR_CASINO_PROV_FILT })}
          >
            <a
              class={
                filter_provider.length === 0
                  ? "js_dl_categories lca-submenu-link badge_None active"
                  : "js_dl_categories lca-submenu-link badge_None "
              }
              data-id="0"
              data-url="All"
            >
              <span> {"All"} </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span>
                {9}
              </span>
            </a>
          </li>
          {providers_Casino
            .filter((a) => a.iscasino === 1)
            .map((item) => (
              <li
                class="lca-submenu-item list-inline-item"
                onClick={() =>
                  dispatch({ type: PUT_CASINO_PROV_FILT, payload: item.id })
                }
              >
                <a
                  class={
                    filter_provider.includes(item.id)
                      ? "js_dl_categories lca-submenu-link badge_None active"
                      : "js_dl_categories lca-submenu-link badge_None "
                  }
                  data-id="14378"
                  data-url="amatic"
                >
                  <span> {item.lib} </span>
                  <span class="js_dl_cat_count">
                    {" "}
                    <span class="lca-line">|</span>
                    {item.count_game}
                  </span>
                </a>
              </li>
            ))}
        </ul>
        <div
          onClick={() => setopendpprovider((s) => !s)}
          class={
            opendprovider
              ? "lca-submenu-dropdown-toggler lca-nabvar-controller open"
              : "lca-submenu-dropdown-toggler lca-nabvar-controller"
          }
          id="js_open_prvs_btn"
        ></div>
      </div>
    </div>
  );
}
export default FilterCasino;
