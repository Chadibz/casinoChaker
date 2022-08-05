import "./HomeContent.css";
import Icon from "./Icon";
import Landing from "./Landing";
import SliderGame from "./SliderGame/SliderGame";
import SliderGamerest from "./SliderGame/SliderGamerest";
function HomeContent() {
  return (
    <div class="tl_container">
      <div class="tl_landing_nav_big_wrapper flex_wrap_breakpoint" id="">
        <Icon
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/sport.svg"
          url="/sport"
          name="sport"
        ></Icon>
        <Icon
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/sport.svg"
          url="/sport"
          name="sport"
        ></Icon>
        <Icon
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/sport.svg"
          url="/sport"
          name="sport"
        ></Icon>
        <Icon
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banners/sport.svg"
          url="/sport"
          name="sport"
        ></Icon>
      </div>
      <div
        class="relative tl_landing_nav_big_wrapper flex_wrap_breakpoint"
        id="MiddleBanners"
      >
        <Landing
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/juex.png"
          url="/casino"
        ></Landing>
        <Landing
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/juex.png"
          url="/casino"
        ></Landing>{" "}
        <Landing
          img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/mid/juex.png"
          url="/casino"
        ></Landing>
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
                  <SliderGame
                    size="2"
                    url="/casino"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/endorphina/cupid.gif"
                  ></SliderGame>

                  <div class="tl_games_slider_page_rest">
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
                    <SliderGamerest
                      url="/casino"
                      img="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/games/pragmatic/bronco-spirit.jpg"
                    ></SliderGamerest>
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
