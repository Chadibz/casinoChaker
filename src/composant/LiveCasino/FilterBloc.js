import FiltreItem from "../general/FiltreItem";
function FilterBloc() {
  return (
    <div id="js_dl_filter_block">
      <div class="lca-navbar  d-flex align-items-center ">
        <div class="lca-filter-btn flex" id="js_show_filter">
          <span class="filter_icon__lines"></span>
          <span class="lca-filter-btn-text">Show Filter</span>
        </div>
        <div
          class="lca-nabvar-controller lca-nabvar-controller-prev"
          id="js_groups_nav_left_btn"
        ></div>
        <div
          class="lca-wrapper-shadow flex-grow-1 d-flex shadow-left"
          id="js_groups_nav_shadow"
        >
          <ul
            class="lca-navbar-nav d-flex flex-grow-1"
            id="js_lobby_groups_nav"
          >
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None default active"
                data-id="2627"
                data-url="all"
                data-type-id="15"
                data-take-count="12"
              >
                All
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="2625"
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
                data-id="2626"
                data-url="trendinggames"
                data-type-id="6"
                data-take-count="12"
              >
                Trending Games
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="2619"
                data-url="blackjack"
                data-type-id="11"
                data-take-count="12"
              >
                BlackJack
              </a>
            </li>
            <li class="lca-navbar-item">
              <a
                class="js_dl_groups lca-navbar-link badge_None  "
                data-id="2620"
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
                data-id="2621"
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
                data-id="2622"
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
                data-id="2623"
                data-url="other"
                data-type-id="8"
                data-take-count="12"
              >
                Other
              </a>
            </li>
          </ul>
        </div>
        <div
          class="lca-nabvar-controller lca-nabvar-controller-next lca-disabled"
          id="js_groups_nav_right_btn"
        ></div>
        <div class="lca-search d-flex active">
          <div class="search__icon" id="js_lobby_search_btn"></div>
          <input
            class="lca-search-input"
            type="text"
            placeholder="Search"
            onkeyup="searchGames(this);"
            id="js_dl_search_game"
          />
        </div>
      </div>
      <div class="lca-filter" id="js_stake_range_cont">
        <div class="lca-filter-wrapper">
          <div class="lca-filter-title">Min Stake Range</div>
          <div class="d-flex align-items-center justify-content-between lca-filter-range-wrapper">
            <div class="lca-filter-price min d-flex align-items-center justify-content-center">
              <input
                id="js_st_rg_min"
                class="lca-filter-price-input js_st_rg_min_max"
              />
              <span class="text-normal">TND</span>
            </div>
            <div class="lca-filter-range-divider"></div>
            <div class="lca-filter-price max d-flex align-items-center justify-content-center">
              <input
                id="js_st_rg_max"
                class="lca-filter-price-input js_st_rg_min_max"
              />
              <span class="text-normal">TND</span>
            </div>
          </div>
          <div class="flex-grow-1 lca-filter-range">
            <div id="js_stake_range"></div>
          </div>
        </div>
      </div>
      <div class="lca-submenu-row  " id="js_provs_nav_shadow">
        <ul
          class="lca-submenu lca-submenu-dropdown"
          id="js_lobby_prov_nav_list_view"
        >
          <FiltreItem name="All" num="405"></FiltreItem>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link active"
              data-id="0"
              data-url="all"
            >
              <span> All </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 405
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="3360"
              data-url="evolution"
            >
              <span> Evolution </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 170
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="1084"
              data-url="pragmaticplay"
            >
              <span> Pragmatic Play </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 100
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="1077"
              data-url="vivogaming"
            >
              <span> Vivogaming </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 39
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="1081"
              data-url="ezugi"
            >
              <span> Ezugi </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 63
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="1080"
              data-url="tombala"
            >
              <span> Tombala </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 5
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="1076"
              data-url="luckystreak"
            >
              <span> Lucky Streak </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 15
              </span>
            </a>
          </li>
          <li class="lca-submenu-item list-inline-item">
            <a
              class="js_dl_categories lca-submenu-link badge_None"
              data-id="15392"
              data-url="xpg"
            >
              <span> XPG </span>
              <span class="js_dl_cat_count">
                {" "}
                <span class="lca-line">|</span> 13
              </span>
            </a>
          </li>
        </ul>
        <div
          class="lca-submenu-dropdown-toggler lca-nabvar-controller lca-disabled open"
          id="js_open_prvs_btn"
        ></div>
      </div>
    </div>
  );
}
export default FilterBloc;
