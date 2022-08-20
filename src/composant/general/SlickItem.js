import { Link } from "react-router-dom";

function SlickItem({ url, img }) {
  return (
    <div
      class="casino_backgr__slider_item slick-slide slick-current slick-active"
      data-slidenumber="0"
      data-slick-index="0"
      aria-hidden="false"
      style={{ width: "1263px" }}
    >
      <Link class="casino_backgr__image_block" to={url} tabindex="0">
        <img title="" class="" style={{ opacity: "1" }} src={img} />
        <div class="carousel_caption"></div>
      </Link>
    </div>
  );
}
export default SlickItem;
