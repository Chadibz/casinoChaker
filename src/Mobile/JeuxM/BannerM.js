function BannerM() {
  return (
    <div class="banners-relative">
      <div class="casino_backgr_slider_nav one-slid flex">
        <div class="top_winners__slider_number flex jc alCen">1 / 1</div>
      </div>

      <div class="nc__slider_block w100" id="mobileSlider">
        <ul class="slides slick-initialized slick-slider">
          <div class="slick-list draggable">
            <div
              class="slick-track"
              style={{
                opacity: "1",
                width: "360px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <li
                class="slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style={{ width: "360px" }}
              >
                <a href="#" target="_self" tabindex="0">
                  <img
                    class=""
                    style={{ opacity: "1" }}
                    src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2022/750_656_Slot.png"
                  />
                </a>
                <div class="carousel-caption"></div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default BannerM;
