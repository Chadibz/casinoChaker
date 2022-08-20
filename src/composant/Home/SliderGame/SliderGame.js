function SliderGame({ size, img, url }) {
  return (
    <div
      class={
        "tl_games_slider_page_" +
        (size === "1" ? "rest" : size === "2" ? "banner" : "")
      }
    >
      <a class="tl_games_slider_game" href={url} target="_blank" tabindex="0">
        <div>
          <img src={img} style={{ opacity: "1" }} />
        </div>
      </a>
    </div>
  );
}
export default SliderGame;
