function GameItemM({ name, cat, img, id, idprov, like }) {
  return (
    <div class="lca-card-wrapper lca-card-wrapper-50" style={{ opacity: "1" }}>
      <div
        data-href="Sugar-Rush-Pragmatic-Casino"
        class="js_dl_games js_game_info lca-card"
        data-name={name}
        data-preview-type="2"
        data-game-id={id}
        data-hasdemo="true"
        data-hasjackpot="false"
        data-bimage={img}
        data-isliked="false"
        data-isfavorite="false"
        data-likescount={like}
        data-minmaxlimits="0-0-0"
        data-image={img}
      >
        <div class="lca-card-body-wrapper">
          <img class="lca-card-body-img" src={img} alt="" />
          <div class="lca-card-body">
            <div class="lca-card-header d-flex">
              <div class="lca-card-flag-wrapper"></div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameItemM;
