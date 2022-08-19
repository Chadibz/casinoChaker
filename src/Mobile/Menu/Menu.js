function Menu() {
  return (
    <div id="js_dl_bottom_nav" class="casino__fixed_menu fixed w100">
      <div
        class="more_menu_btns_content more-cont-item-2"
        id="js_more_menu_btns"
      >
        <div class="more_menu_links_content" id="js_more_menu_links_cont">
          <a href="/fr/Lobby/Livecasino/Main" class="ui-link">
            <span class="fixed_menu__icon ic_livecasino"></span>Jeux Vidéo
          </a>
          <a href="/fr/Lobby/Virtualsport/Main" class="ui-link">
            <span class="fixed_menu__icon ic_virtualsport"></span>Virtual Sport
          </a>
        </div>
      </div>
      <div class="fixed_menu__ul d-flex">
        <div class="menu_circle"></div>
        <a
          class="fixed_menu__li d-flex flexcol align-items-center justify-content-center js_dl_bottom_menu_items ui-link active"
          data-tabid="Main"
          id="js_dl_current"
        >
          <span class="fixed_menu__icon ic_casino"></span>
          <span class="fixed_menu__text">Jeux d’adresse</span>
        </a>
        <a
          class="fixed_menu__li d-flex flex-column align-items-center justify-content-center ui-link"
          id="js_more_lobbies"
        >
          <span class="fixed_menu__icon ic_more"></span>
          <span class="fixed_menu__text">More</span>
        </a>
        <a
          class="fixed_menu__li fixed_menu__li_play d-flex flex-column align-items-center justify-content-center js_dl_bottom_menu_items ui-link"
          data-tabid="MyGames"
          id="js_dl_my_games"
        >
          <span class="fixed_menu__icon fixed_menu__play_button"></span>
          <span class="fixed_menu__text">Mon Jeux</span>
        </a>
        <a
          class="fixed_menu__li d-flex flex-column align-items-center justify-content-center js_dl_bottom_menu_items ui-link"
          data-tabid="Promotions"
          id="js_dl_promotions"
        >
          <span class="fixed_menu__icon ic_promotion"></span>
          <span class="fixed_menu__text">Promotions</span>
        </a>
        <a
          class="fixed_menu__li d-flex flex-column align-items-center justify-content-center filter_icon__block js_dl_bottom_menu_items ui-link"
          data-tabid="Filter"
          id="js_dl_filter"
        >
          <span class="fixed_menu__icon ic_filter"></span>
          <span class="fixed_menu__text">Filter</span>
        </a>
      </div>
    </div>
  );
}
export default Menu;
