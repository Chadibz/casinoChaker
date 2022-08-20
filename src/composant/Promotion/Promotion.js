function Promotion() {
  return (
    <div class="promo_bg_image">
      <div class="dynamic_promo_container">
        <div class="flex alCen jb dynamic_promo_head_content">
          <div class="dynamic_promo_head_title">PROMOTIONS</div>
          <div class="flex alCen justify-content-end">
            <a
              class="js_promo_categories dynamic_promo_category_item active"
              data-url="all"
              data-cat-id="0"
            >
              <i class="dynamic_icon"></i>
              All
            </a>
            <a
              class="js_promo_categories dynamic_promo_category_item"
              data-url="sport"
              data-cat-id="353"
            >
              <i class="dynamic_icon"></i>
              Sport
            </a>
            <a
              class="js_promo_categories dynamic_promo_category_item"
              data-url="casino"
              data-cat-id="354"
            >
              <i class="dynamic_icon"></i>
              Casino
            </a>
            <a
              class="js_promo_categories dynamic_promo_category_item"
              data-url="games"
              data-cat-id="355"
            >
              <i class="dynamic_icon"></i>
              Games
            </a>
            <a
              class="js_promo_categories dynamic_promo_category_item"
              data-url="other"
              data-cat-id="356"
            >
              <i class="dynamic_icon"></i>
              Other
            </a>
            <a
              class="js_promo_categories dynamic_promo_category_item"
              data-url="livecasino"
              data-cat-id="357"
            >
              <i class="dynamic_icon"></i>
              Live Casino
            </a>
          </div>
        </div>
        <div id="js_promo_content" class="tl_row">
          <div class="dynamic_promo_item" style={{ opacity: "1" }}>
            <img
              alt="Express bonus"
              class=""
              src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Promotion/express bonus fertoonabet 1000.jpg"
            />
            <div class="dynamic_promo_inner">
              <span class="dynamic_promo_item_category">
                <span>All</span>
              </span>
              <span class="dynamic_promo_item_title">EXPRESS BONUS</span>
              <span class="dynamic_promo_item_descr">
                <p>
                  <span style={{ fontSize: "36px" }}>
                    <span
                      backgroundColor=""
                      fontSize=""
                      segoe=""
                      ui=""
                      whiteSpace=""
                    >
                      <span style={{ fontSize: "24px" }}>EXPESS BONUS:</span>
                      <span style={{ fontSize: "22px" }}>
                        Triplez vos gains grâce à vos paris combinés !
                      </span>
                    </span>
                  </span>
                </p>
              </span>
              <button
                class="js_news_promo_btn dynamic_promo_item_btn h-bg-primary"
                type="button"
                data-href="https://fertoonapromo.com/express-bonus/"
                data-target="3"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Promotion;
