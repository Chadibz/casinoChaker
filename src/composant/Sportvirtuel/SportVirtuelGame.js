function SportVirtuelGame({ url, img }) {
  return (
    <div class="col_game_tabs">
      <a href={url} class="tl_game_tab_item openLogin">
        <img src={img} />
      </a>
    </div>
  );
}
export default SportVirtuelGame;
