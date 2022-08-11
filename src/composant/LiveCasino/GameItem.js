function GameItem({ size, id, img, name, extra, cat, like }) {
  return (
    <div
      class={
        "lca-card js_dl_games_cont " +
        (size === "1" ? "lca-card-h2" : size === "2" ? "lca-card-w2" : "")
      }
      data-game-id={id}
      style={{ opacity: "1" }}
    >
      <div class="lca-card-body">
        <img class="w-100 lca-card-img animated" src={img} alt="" />
        <div class="lca-card-flag-wrapper animate"></div>
        <div class="lca-card-badge-wrapper animate"></div>
      </div>
      <div class="lca-card-footer d-flex">
        <div class="lca-card-name flex-grow-1">{name}</div>
        <div class="lca-card-price text-right">
          <span>{extra}</span>
          <span class="currency_icon tnd"></span>
        </div>
      </div>
      <div class="lca-card-hover animate">
        <div class="lca-card-hover-header">
          <div class="lca-card-name">{name}</div>
          <span class="star_icon js_game_fav "></span>
        </div>
        <div class="lca-card-btn-wrapper d-flex align-items-center justify-content-center flexCol">
          <a
            class="h-bg-primary game__link_real js_dl_play"
            data-href="/fr/Play/Real/Sweet-Bonanza-Candyland-Pragmatic-Livecasino"
          >
            {" "}
            Jouer
          </a>{" "}
        </div>
        <div class="lca-card-hover-footer d-flex">
          <div class="jackpot__value flex alCen text-primary"></div>
          <div class="lca-card-likes preview-likes-1 d-flex align-items-center js_game_like">
            <span class="like_icon js_game_like_icon "></span>
            <span class="js_game_likes_count">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameItem;
