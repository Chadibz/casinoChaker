function SubHeader() {
  return (
    <div class="tl_header_bot_row">
      <div class="tl_header_bot_row_fix d-flex align-items-center">
        <div class="tl_header_navigation tl_responsive_header_navigation">
          <a href="/Sport" class="tl_main_nav_item  ">
            Sport
          </a>
          <a href="/Sport/Live" class="tl_main_nav_item ">
            Paris Direct
          </a>
          <a href="/Sport/esportview" class="tl_main_nav_item ">
            E-Sport
          </a>
          <a href="/fr/Lobby/Casino/Main" class="tl_main_nav_item ">
            JEUX
          </a>
          <a href="/Betongames?url=Cashshow" class="tl_main_nav_item promoted ">
            Cashow
          </a>
          <a href="/fr/Lobby/Livecasino/Main" class="tl_main_nav_item  ">
            Live Casino
          </a>
          <div class="header_nav__dropdown_button">
            <a class="tl_main_nav_item cp" title="">
              TV Games
            </a>
            <div class="header_nav__dropdown">
              <a class="tl_main_nav_item " href="/GetSpecificGames?url=Lucky7">
                Bet Games TV
              </a>
              <a
                class="tl_main_nav_item "
                href="/TvBet"
                automation="open_tvbet"
              >
                TV Bet
              </a>
              <a
                class="tl_main_nav_item "
                href="/Tombala"
                automation="open_tvbet"
              >
                Tombala
              </a>
            </div>
          </div>
          <a href="/Virtualsports" class="tl_main_nav_item ">
            SPORTS VIRTUELS
          </a>
        </div>
        <div
          class="header_nav__more"
          id="js_dy_hdr_more"
          style={{ visibility: "visible" }}
        >
          <span class="header_more_btn"> More</span>
          <div class="header_nav__more_content" id="js_dy_hdr_more_content">
            <a href="/SkillGames" class="tl_main_nav_item bg-tert">
              Fertoona Games
            </a>
            <a href="/Betongames?url=Crash" class="tl_main_nav_item bg-tert">
              Crash
            </a>
            <a
              href="/Betongames?url=Blackjack"
              class="tl_main_nav_item promoted bg-tert"
            >
              BlackJack
            </a>
            <a
              href="/Betongames?url=Rocketon"
              class="tl_main_nav_item bg-tert"
              title=""
            >
              {" "}
              <span class="">Rocketon</span>
            </a>
            <a
              href="/Betongames?url=Hilo"
              class="tl_main_nav_item promoted bg-tert"
              title=""
            >
              <span class="">Hi Lo</span>
            </a>
            <a
              href="/Betongames?url=Penalty"
              class="tl_main_nav_item promoted bg-tert"
            >
              <span class="">Penalty</span>
            </a>
            <a
              href="/Betongames?url=Sicbo"
              class="tl_main_nav_item bg-tert"
              title=""
            >
              Sic Bo
            </a>
            <a href="/Betongames" class="tl_main_nav_item bg-tert" title="">
              Keno
            </a>
            <a
              href="/Betongames?url=KenoExpress"
              class="tl_main_nav_item bg-tert"
            >
              Keno Express
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubHeader;
