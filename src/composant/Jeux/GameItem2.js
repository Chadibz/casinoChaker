function GameItem2({ size, id, img, name, extra, cat, like }) {
  return (
    <div
      class={
        "lca-card js_dl_games_cont" +
        (size === "3" ? "slick-slide slick-current slick-active" : "")
      }
      data-game-id={id}
      data-slick-index="0"
      style={{ opacity: "1 ", width: "302px" }}
      aria-hidden="true"
    >
      <div class="lca-card-body">
        <img class="w-100 lca-card-img animated" src={img} alt="" />
        <div class="lca-card-flag-wrapper animate"></div>
        <div class="lca-card-badge-wrapper animate"></div>
      </div>
      <div class="lca-card-hover animate">
        <div class="lca-card-hover-header">
          <div class="lca-card-name">{name}</div>
          <span class="star_icon js_game_fav "></span>
        </div>
        <div class="lca-card-btn-wrapper d-flex align-items-center justify-content-center flexCol">
          <a
            class="h-bg-primary game__link_real js_dl_play"
            data-href="/fr/Play/Real/Chilli-Heat-PragmaticPlay-Casino"
          >
            {" "}
            Jouer
          </a>{" "}
          <a
            class="h-bg-secondary game__link_demo js_dl_play_demo"
            href="/fr/play/fun/Chilli-Heat-PragmaticPlay-Casino"
          >
            Démo Play
          </a>
          <div class="lca-card-price text-right">
            <span></span>
            <span class="currency_icon"></span>
          </div>
        </div>
        <div class="lca-card-hover-footer preview-footer-2 d-flex">
          <div class="jackpot__value flex alCen text-primary"></div>
          <div class="lca-card-likes preview-likes-2 d-flex align-items-center js_game_like">
            <span class="like_icon js_game_like_icon "></span>
            <span class="js_game_likes_count">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameItem2;
