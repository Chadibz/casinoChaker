import FiltreItem from "./FiltreItem";

function Filtre() {
  return (
    <div class="lca-submenu-row  " id="js_provs_nav_shadow">
      <ul
        class="lca-submenu lca-submenu-dropdown"
        id="js_lobby_prov_nav_list_view"
      >
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
        <FiltreItem name="All" num="405"></FiltreItem>
      </ul>
      <div
        class="lca-submenu-dropdown-toggler lca-nabvar-controller lca-disabled open"
        id="js_open_prvs_btn"
      ></div>
    </div>
  );
}
export default Filtre;
