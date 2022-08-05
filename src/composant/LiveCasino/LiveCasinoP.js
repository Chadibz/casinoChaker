import FilterBloc from "./FilterBloc";
import Game from "./Game";
import Slider from "./Slider";
import TopWinner from "./TopWinner";

function LiveCasinoP() {
  return (
    <>
      <Slider></Slider>
      <TopWinner></TopWinner>
      <div
        class="save_banner_height"
        style={{ height: "455px", position: "relative", zIindex: "-1" }}
        id="js_banner_height"
      ></div>
      <FilterBloc></FilterBloc>
      <Game></Game>
    </>
  );
}
export default LiveCasinoP;
