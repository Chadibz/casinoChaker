import SlickItem from "../general/SlickItem";

function Slider() {
  return (
    <div id="js_dl_lobby_banner" class="lca-lobby-banner lca-wrapper">
      <div class="with_shadow_slider">
        <div class="casino_backgr_slider_nav flex">
          <div
            class="casino_backgr_slider_prev cas_nav_prev flex jc alCen slick-arrow"
            style={{ display: "flex" }}
          ></div>
          <div class="top_winners__slider_number flex jc alCen">3 / 3</div>
          <div
            class="casino_backgr_slider_next cas_nav_next flex jc alCen slick-arrow"
            style={{ display: "flex" }}
          ></div>
        </div>

        <div class="casino_backgr_slider js_dy_lobby_banners slick-initialized slick-slider">
          <div class="slick-list">
            <div
              class="slick-track"
              style={{
                opacity: "1",
                width: "8841px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <SlickItem
                img={
                  "https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2022/Live_Casino_TOP.png"
                }
                url="/Livecasino"
              ></SlickItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
