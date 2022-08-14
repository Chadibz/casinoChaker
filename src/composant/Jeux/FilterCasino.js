import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CASINO_CAT_FILT,
  CLEAR_CASINO_PROV_FILT,
  PUT_CASINO_CAT_FILT,
  PUT_CASINO_PROV_FILT,
  PUT_CASINO_SEARCH_FILT,
} from "../../redux/actions/types";

function FilterCasino() {
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
            <li
              class="lca-navbar-item"
              onClick={() => dispatch({ type: CLEAR_CASINO_CAT_FILT })}
            >
              <a
                class={
                  Filter_Categori.length === 0
                    ? "js_dl_groups lca-navbar-link badge_None default active"
                    : "js_dl_groups lca-navbar-link badge_None default "
                }
                data-id="18615"
                data-url="pragmatictournament"
                data-type-id="43"
                data-take-count="12"
              >
                {"ALL"}
              </a>
            </li>
            {categorie.map((item) => (
              <li
                class="lca-navbar-item"
                onClick={() =>
                  dispatch({ type: PUT_CASINO_CAT_FILT, payload: item.id })
                }
              >
                <a
                  class={
                    Filter_Categori.includes(item.id)
                      ? "js_dl_groups lca-navbar-link badge_None default active"
                      : "js_dl_groups lca-navbar-link badge_None default "
                  }
                  data-id="18615"
                  data-url="pragmatictournament"
                  data-type-id="43"
                  data-take-count="12"
                >
                  {item.lib}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setopendCat((s) => !s)}
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
              onClick={() => setopendCat((s) => !s)}
              class={
                opendCat
                  ? "lca-nabvar-controller lca-nabvar-controller-next lca-disabled"
                  : "lca-nabvar-controller lca-nabvar-controller-next"
              }
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
