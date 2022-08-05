function FiltreItem({ name, num }) {
  return (
    <li class="lca-submenu-item list-inline-item">
      <a
        class="js_dl_categories lca-submenu-link badge_None"
        data-id="1077"
        data-url="vivogaming"
      >
        <span> {name} </span>
        <span class="js_dl_cat_count">
          {" "}
          <span class="lca-line">|</span> {num}
        </span>
      </a>
    </li>
  );
}
export default FiltreItem;
