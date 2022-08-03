function SportvirtuelBanner() {
  return (
    <div
      id="bannersCont"
      class=""
      style={{ backgroundcolor: "rgba(0, 0, 0, 0);" }}
    >
      <div class="banner_BG flex" id="main_slider">
        <div class="banner_container">
          <div
            id="carousel-example-generic"
            class="carousel fade"
            data-ride="carousel"
            data-interval="4500"
          >
            <div class="carousel-inner" role="listbox">
              <div class="item active" style={{ backgroundcolor: "" }}>
                <div class="banner-container-item ">
                  <a href="#" target="_blank">
                    <img
                      src="https://cdn-plat.apidigi.com/plat/prd/Img/Partners/1129/banner/virtual.jpg"
                      title=""
                    />
                  </a>
                  <div class="carousel-caption"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<script type="text/javascript">
        $(function () {
            $('#carousel-example-generic').on('slide.bs.carousel', function (e) {
                var x = $(e.relatedTarget).css('backgroundColor');
                $("#bannersCont").css("background-color", x);
            });
            $("#bannersCont").addClass("notransition");
            window.bannersCont.style.backgroundColor = $("#bannersCont .item:first-child").css('backgroundColor');
            setTimeout(function () { $("#bannersCont").removeClass("notransition"); }, 1000);
        });

    </script>*/}
    </div>
  );
}
export default SportvirtuelBanner;
