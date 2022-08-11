import GameItem from "./GameItem";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CASINO_ADD_MORE,
  UPDATE_LAST_PAGE,
} from "../../redux/actions/types";
function Game() {
  const dispatch = useDispatch();
  const { games, filter_provider, searchtext, lastpageloading } = useSelector(
    (state) => state.Games
  );
  useBottomScrollListener(() => loadMore(), {
    offset: 300,
  });
  const loadMore = () => {
    dispatch({ type: UPDATE_LAST_PAGE });
  };
  return (
    <div class="lca-main-wrapper lca-wrapper  has_card_footer">
      <div class="lca-games-grid grid_2" id="js_games_lobby">
        {games
          .filter((a) => a.cat === 5)
          .filter(
            (b) =>
              b.lib.toUpperCase().includes(searchtext.toUpperCase()) ||
              searchtext === ""
          )
          .filter(
            (b) =>
              filter_provider.includes(b.idprov) || filter_provider.length === 0
          )
          .sort((a, b) => (a.index < b.index ? 1 : -1))
          .slice(0, (lastpageloading + 1) * 40)
          .map((item) => (
            <GameItem
              size={item.size}
              id={item.id}
              img={item.url}
              name={item.lib}
              extra=""
              cat={item.cat}
              like="123"
            ></GameItem>
          ))}
      </div>
    </div>
  );
}
export default Game;
