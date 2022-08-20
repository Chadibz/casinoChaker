import TopWinnerItem from "./TopWinnerItem";
function TopWinner() {
  return (
    <div class="top_winners__slider_block">
      <div class="top_winners__slider_nav flex">
        <div
          class="top_winners__slider_prev cas_nav_prev flex jc alCen slick-arrow slick-disabled"
          aria-disabled="true"
          style={{ display: "flex" }}
        ></div>
        <div
          class="top_winners__slider_next cas_nav_next flex jc alCen slick-arrow"
          aria-disabled="false"
          style={{ display: "flex" }}
        ></div>
      </div>
      <div class="top_winners__slider slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track" style={{ opacity: "1", width: "770px" }}>
            <div
              class="item top_winners__page slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              style={{
                width: "385px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: "999",
                opacity: "1",
              }}
            >
              <div class="name_vidget">DailyTopWinners</div>
              <div data-simplebar="" class="top_winners__game_block">
                <div class="scrolled__content top_winners-scrolled__content">
                  <TopWinnerItem
                    id="ID 3****40"
                    date="03 août, 2022 03:17"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                    prix="8 375"
                  ></TopWinnerItem>
                  <TopWinnerItem
                    id="ID 3****40"
                    date="03 août, 2022 03:17"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                    prix="8 375"
                  ></TopWinnerItem>
                  <TopWinnerItem
                    id="ID 3****40"
                    date="03 août, 2022 03:17"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                    prix="8 375"
                  ></TopWinnerItem>
                  <TopWinnerItem
                    id="ID 3****40"
                    date="03 août, 2022 03:17"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                    prix="8 375"
                  ></TopWinnerItem>
                  <TopWinnerItem
                    id="ID 3****40"
                    date="03 août, 2022 03:17"
                    img="https://cdn-plat.apidigi.com/plat/prd/Img/Games/Evolution-Shared/CrazyTime.jpg"
                    prix="8 375"
                  ></TopWinnerItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopWinner;
