import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <div class="tl_header_bot_row">
      <div class="tl_header_bot_row_fix d-flex align-items-center">
        <div class="tl_header_navigation tl_responsive_header_navigation">
          <Link to="/Sport" class="tl_main_nav_item  ">
            Sport
          </Link>
          <Link to="/Sport/Live" class="tl_main_nav_item ">
            Paris Direct
          </Link>
          <Link to="/Sport/esportview" class="tl_main_nav_item ">
            E-Sport
          </Link>
          <Link to="/Casino" class="tl_main_nav_item ">
            JEUX
          </Link>
          <Link
            to="/Betongames?url=Cashshow"
            class="tl_main_nav_item promoted "
          >
            Cashow
          </Link>
          <Link to="/Livecasino" class="tl_main_nav_item  ">
            Live Casino
          </Link>
          <div class="header_nav__dropdown_button">
            <a class="tl_main_nav_item cp" title="">
              TV Games
            </a>
            <div class="header_nav__dropdown">
              <Link class="tl_main_nav_item " to="/GetSpecificGames?url=Lucky7">
                Bet Games TV
              </Link>
              <Link
                class="tl_main_nav_item "
                to="/TvBet"
                automation="open_tvbet"
              >
                TV Bet
              </Link>
              <Link
                class="tl_main_nav_item "
                to="/Tombala"
                automation="open_tvbet"
              >
                Tombala
              </Link>
            </div>
          </div>
          <Link to="/Virtualsports" class="tl_main_nav_item ">
            SPORTS VIRTUELS
          </Link>
        </div>
        <div
          class="header_nav__more"
          id="js_dy_hdr_more"
          style={{ visibility: "visible" }}
        >
          <span class="header_more_btn"> More</span>
          <div class="header_nav__more_content" id="js_dy_hdr_more_content">
            <Link to="/SkillGames" class="tl_main_nav_item bg-tert">
              Fertoona Games
            </Link>
            <Link to="/Betongames?url=Crash" class="tl_main_nav_item bg-tert">
              Crash
            </Link>
            <Link
              to="/Betongames?url=Blackjack"
              class="tl_main_nav_item promoted bg-tert"
            >
              BlackJack
            </Link>
            <Link
              to="/Betongames?url=Rocketon"
              class="tl_main_nav_item bg-tert"
              title=""
            >
              {" "}
              <span class="">Rocketon</span>
            </Link>
            <Link
              to="/Betongames?url=Hilo"
              class="tl_main_nav_item promoted bg-tert"
              title=""
            >
              <span class="">Hi Lo</span>
            </Link>
            <Link
              to="/Betongames?url=Penalty"
              class="tl_main_nav_item promoted bg-tert"
            >
              <span class="">Penalty</span>
            </Link>
            <Link
              to="/Betongames?url=Sicbo"
              class="tl_main_nav_item bg-tert"
              title=""
            >
              Sic Bo
            </Link>
            <Link to="/Betongames" class="tl_main_nav_item bg-tert" title="">
              Keno
            </Link>
            <Link
              to="/Betongames?url=KenoExpress"
              class="tl_main_nav_item bg-tert"
            >
              Keno Express
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubHeader;
