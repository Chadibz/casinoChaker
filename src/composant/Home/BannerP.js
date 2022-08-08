import SlickItem from "../general/SlickItem";

function BannerP() {
  return (
    <div id="bannersCont" class="casino__top_banner">
      <div class="casino_backgr_slider_nav flex">
        <div
          class="casino_backgr_slider_prev cas_nav_prev flex jc alCen slick-arrow"
          style={{ display: "flex;" }}
        ></div>
        <div class="top_winners__slider_number flex jc alCen">1 / 4</div>
        <div
          class="casino_backgr_slider_next cas_nav_next flex jc alCen slick-arrow"
          style={{ display: "flex;" }}
        ></div>
      </div>
      <div class="casino_backgr_slider slick-initialized slick-slider">
        <div class="slick-list">
          <div
            class="slick-track"
            style={{
              opacity: "1",
              width: "11367px",
              transform: "translate3d(-1263px, 0px, 0px)",
            }}
          >
            <SlickItem
              img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021%20new%20skin/top/1920_1008_crash.png"
              url="/scasino"
            ></SlickItem>
            <SlickItem
              img="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021%20new%20skin/top/1920_1008_crash.png"
              url="/scasino"
            ></SlickItem>
            <div
              class="casino_backgr__slider_item slick-slide slick-current slick-active"
              data-slidenumber="0"
              data-slick-index="0"
              aria-hidden="false"
              style={{ width: "1263px" }}
            >
              <a
                class="casino_backgr__image_block"
                href="https://www.fertoonabet.tn/fr/Lobby/Casino/Main/Pragmatictournament/All"
                target="_self"
                tabindex="0"
              >
                <img
                  src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2022/Fertoona bet TOP Web.png"
                  title=""
                  style={{ opacity: "1" }}
                />
                <div class="carousel_caption"></div>
              </a>
            </div>
            <div
              class="casino_backgr__slider_item slick-slide"
              data-slidenumber="1"
              data-slick-index="1"
              aria-hidden="true"
              style={{ width: "1263px" }}
              tabindex="-1"
            >
              <a
                class="casino_backgr__image_block"
                href="/casino"
                target="_blank"
                tabindex="-1"
              >
                <img
                  src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/top/sans-titre---4.gif"
                  title=""
                  style={{ opacity: "1" }}
                />
                <div class="carousel_caption"></div>
              </a>
            </div>
            <div
              class="casino_backgr__slider_item slick-slide"
              data-slidenumber="2"
              data-slick-index="2"
              aria-hidden="true"
              style={{ width: "1263px" }}
              tabindex="-1"
            >
              <a
                class="casino_backgr__image_block"
                href="/Betongames?url=Crash"
                target="_blank"
                tabindex="-1"
              >
                <img
                  src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/top/1920_1008_crash.png"
                  title=""
                  style={{ opacity: "1" }}
                />
                <div class="carousel_caption"></div>
              </a>
            </div>
            <div
              class="casino_backgr__slider_item slick-slide"
              data-slidenumber="3"
              data-slick-index="3"
              aria-hidden="true"
              style={{ width: "1263px" }}
              tabindex="-1"
            >
              <a
                class="casino_backgr__image_block"
                href="/casino"
                target="_blank"
                tabindex="-1"
              >
                <img
                  src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/banner/2021 new skin/top/amatic web.png"
                  title=""
                  style={{ opacity: "1" }}
                />
                <div class="carousel_caption"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<script>
        $('.casino_backgr__slider_item img').css('opacity', '1');
        $('.casino_backgr_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            focusOnSelect: false,
            infinite: true,
            arrows: true,
            prevArrow: $('.casino_backgr_slider_prev'),
            nextArrow: $('.casino_backgr_slider_next'),
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            dots: false,
        });
        var bannersCount = $('.casino_backgr__slider_item').not(".slick-cloned").length;

        if (bannersCount != 0) {
            $(".top_winners__slider_number").text('1 / ' + bannersCount);
        } else {
            $('.casino_backgr_slider_nav').remove();
        }

        $(".casino_backgr_slider").on("afterChange", function (event, slick, currentSlide) {
            $(".top_winners__slider_number").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
        });

    </script>*/}
    </div>
  );
}
export default BannerP;
