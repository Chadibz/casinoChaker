import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CASINO_ADD_MORE,
  UPDATE_LAST_PAGE,
} from "../../redux/actions/types";
import GameItemM from "./GameItemM";
function GameM() {
  const dispatch = useDispatch();
  const {
    games,
    filter_provider,
    searchtext,
    lastpageloading,
    isfavori,
    Filter_Categori,
  } = useSelector((state) => state.Games);
  useBottomScrollListener(() => loadMore(), {
    offset: 300,
  });
  const loadMore = () => {
    dispatch({ type: UPDATE_LAST_PAGE });
  };
  return (
    <div
      id="js_games_lobby"
      class="container lca-games-grid lca-games-lobby grid_2"
    >
      {games
        .filter((a) => a.cat != 5)
        .filter(
          (b) =>
            b.lib.toUpperCase().includes(searchtext.toUpperCase()) ||
            searchtext === ""
        )
        .filter(
          (b) =>
            filter_provider.includes(b.idprov) || filter_provider.length === 0
        )
        .filter(
          (c) => Filter_Categori.includes(c.cat) || Filter_Categori.length === 0
        )
        .sort((a, b) => (a.index < b.index ? 1 : -1))
        .slice(0, (lastpageloading + 1) * 40)
        .map((item) => (
          <GameItemM
            id={item.id}
            img={item.url}
            name={item.lib}
            cat={item.cat}
            like="123"
          ></GameItemM>
        ))}
      <div
        class="lca-card-wrapper lca-card-wrapper-50"
        style={{ opacity: "1" }}
      >
        <div
          data-href="Sugar-Rush-Pragmatic-Casino"
          class="js_dl_games js_game_info lca-card"
          data-name="Sugar Rush"
          data-preview-type="2"
          data-game-id="28462"
          data-hasdemo="true"
          data-hasjackpot="false"
          data-bimage="Img/Background/Pragmatic/28462_SugarRush.jpg"
          data-isliked="false"
          data-isfavorite="false"
          data-likescount="36"
          data-minmaxlimits="0-0-0"
          data-image="Img/partners/1129/Games/Pragmatic/SugarRush.png"
        >
          <div class="lca-card-body-wrapper">
            <img
              class="lca-card-body-img"
              src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/Games/Pragmatic/SugarRush.png"
              alt=""
            />
            <div class="lca-card-body">
              <div class="lca-card-header d-flex">
                <div class="lca-card-flag-wrapper"></div>
              </div>{" "}
              <div class="lca-card-badge-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameM;
