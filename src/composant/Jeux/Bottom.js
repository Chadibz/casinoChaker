import FilterCasino from "./FilterCasino";
import GameItem from "./GameItem";
import GameItem2 from "./GameItem2";

function Bottom() {
  return (
    <div class="lca-main-wrapper lca-wrapper  no_card_footer">
      <div class="js_lobby_groups_cont">
        <div class="d-flex justify-content-between">
          <h2 class="name_vidget mx-half">Most Liked</h2>
          <div class="d-flex rtl-row-reverce">
            <div
              id=""
              class="cas_nav_prev d-flex justify-content-center align-items-center js_slider_prev slick-arrow slick-disabled"
              aria-disabled="true"
              style={{ display: "flex" }}
            ></div>
            <div
              id=""
              class="cas_nav_next  d-flex justify-content-center align-items-center js_slider_next slick-arrow"
              aria-disabled="false"
              style={{ display: "flex" }}
            ></div>
          </div>
        </div>

        <div
          class="js_dl_mLkd_games js_lobby_groups lca-games-grid slick-initialized slick-slider"
          id="js_lobby_group_9967"
          data-take-count="4"
          data-type-id="3"
          data-id="9967"
          data-lobbyurl="Casino"
          data-page="1"
          data-has-next="true"
        >
          <div class="slick-list draggable">
            <div
              class="slick-track"
              style={{
                opacity: "1",
                width: "2416px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              {" "}
              <GameItem2
                id="14839"
                img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
                name="Sugar Rush"
                extra=""
                cat="Top"
                like="123"
              ></GameItem2>
              <GameItem2
                id="14839"
                img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
                name="Sugar Rush"
                extra=""
                cat="Top"
                like="123"
              ></GameItem2>
              <GameItem2
                id="14839"
                img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
                name="Sugar Rush"
                extra=""
                cat="Top"
                like="123"
              ></GameItem2>
              <GameItem2
                id="14839"
                img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
                name="Sugar Rush"
                extra=""
                cat="Top"
                like="123"
              ></GameItem2>
              <GameItem2
                id="14839"
                img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
                name="Sugar Rush"
                extra=""
                cat="Top"
                like="123"
              ></GameItem2>
            </div>
          </div>
        </div>
      </div>
      <FilterCasino />
      <div class="lca-games-grid grid_2" id="js_games_lobby">
        <GameItem
          size="0"
          id="28462"
          img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
          name="Sugar Rush"
          extra=""
          cat="Top"
          like="123"
        ></GameItem>
        <GameItem
          size="1"
          id="28462"
          img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
          name="Sugar Rush"
          extra=""
          cat="Top"
          like="123"
        ></GameItem>
        <GameItem
          size="2"
          id="28462"
          img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
          name="Sugar Rush"
          extra=""
          cat="Top"
          like="123"
        ></GameItem>
        <GameItem
          size="1"
          id="28462"
          img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
          name="Sugar Rush"
          extra=""
          cat="Top"
          like="123"
        ></GameItem>
        <GameItem
          size="1"
          id="28462"
          img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Pragmatic/Vertical/28462_SugarRush.jpg"
          name="Sugar Rush"
          extra=""
          cat="Top"
          like="123"
        ></GameItem>
      </div>
    </div>
  );
}
export default Bottom;
