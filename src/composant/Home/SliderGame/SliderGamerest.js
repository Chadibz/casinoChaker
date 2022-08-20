function SliderGamerest({ img, url }) {
  return (
    <a class="tl_games_slider_game" href={url} target="_blank" tabindex="0">
      <div>
        <img src={img} style={{ opacity: "1" }} />
      </div>
    </a>
  );
}
export default SliderGamerest;
