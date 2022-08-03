import "./HomeContent.css";
function HomeContent() {
  return (
    <div class="tl_container">
      <div class="tl_landing_nav_big_wrapper flex_wrap_breakpoint" id="">
        <a href="/sport" class="tl_landing_nav_big">
          <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/sport.svg" />
          <p class="nav_title">Sport</p>
        </a>
        <a href="/Sport/Live" class="tl_landing_nav_big">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/live.svg"
            alt="Pari Direct"
          />
          <p class="nav_title">Pari Direct</p>
        </a>
        <a href="/fr/Lobby/Casino/Main" class="tl_landing_nav_big">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/cs_image.svg"
            alt="Jeux"
          />
          <p class="nav_title">Jeux</p>
        </a>
        <a href="/fr/Lobby/Livecasino/Main" class="tl_landing_nav_big">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/cs_live_image.svg"
            alt="Live Casino"
          />
          <p class="nav_title">Live Casino</p>
        </a>
        <a href="/fr/GetSpecificGames?url=Lucky7" class="tl_landing_nav_big">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/tv_games.svg"
            alt="TV Games"
          />
          <p class="nav_title">TV Games</p>
        </a>
        <a
          href="/fr/GetSpecificGames?url=zeppelin-betsolutions"
          class="tl_landing_nav_big"
        >
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/zepellin.svg"
            alt="Zepellin"
          />
          <p class="nav_title">Zepellin</p>
        </a>
        <a href="/Login/Login" class=" tl_landing_nav_big openLogin">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/monopoly.svg"
            alt="Monopoly"
          />
          <p class="nav_title">Monopoly</p>
        </a>
        <a href="/Login/Login" class=" tl_landing_nav_big openLogin">
          <img
            src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/crazy_time.svg"
            alt="Crazy Time"
          />
          <p class="nav_title">Crazy Time</p>
        </a>
      </div>
      <div
        class="relative tl_landing_nav_big_wrapper flex_wrap_breakpoint"
        id="MiddleBanners"
      >
        <a class="tl_landing_banner" href="/casino" target="_blank">
          <div>
            <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/juex.png" />
          </div>
        </a>
        <a class="tl_landing_banner" href="/sport" target="_blank">
          <div>
            <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/middle sport.png" />
          </div>
        </a>
        <a class="tl_landing_banner" href="/sport" target="_blank">
          <div>
            <img src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/516_302_cashout.png" />
          </div>
        </a>
      </div>

      <div class="top_cas_games__slider_block">
        <div class="top_cas_games__slider_nav d-flex justify-content-between align-items-center my-1">
          <p class="tl_widget_heading">TOP CASINO GAMES</p>
          <div class="top_cas_games__slider_nav_box flex">
            <div
              class="top_cas_games__slider_prev cas_nav_prev flex jc alCen slick-arrow slick-hidden"
              aria-disabled="true"
              tabindex="-1"
            ></div>
            <div
              class="top_cas_games__slider_next cas_nav_next flex jc alCen slick-arrow slick-hidden"
              aria-disabled="true"
              tabindex="-1"
            ></div>
          </div>
        </div>
        <div
          class="top_cas_games__slider slick-initialized slick-slider"
          style={{ width: "100%" }}
        >
          <div class="slick-list">
            <div
              class="slick-track"
              style={{
                opacity: "1",
                width: "1206px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                class="tl_games_slider_page_wrapper slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style={{ width: "1206px" }}
              >
                <div class="tl_games_slider_page">
                  <div class="tl_games_slider_page_banner">
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/endorphina/cupid.gif"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                  </div>
                  <div class="tl_games_slider_page_rest">
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/john-hunter-and-the-mayan-gods.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/madame-destiny-megaways.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/sweet-bonanza.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/buffalo-king.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/endorphina/sushi.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/booongo/great-panda.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                    <a
                      class="tl_games_slider_game"
                      href="/casino"
                      target="_blank"
                      tabindex="0"
                    >
                      <div>
                        <img
                          src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/booongo/sun-of-egypt.jpg"
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center my-2">
        <button class="toTop tl_btn">
          <i class="tl_ico tl_ico-arrow-top"></i>
        </button>
      </div>
    </div>
  );
}
export default HomeContent;
