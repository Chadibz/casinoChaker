import Bottom from "./Bottom";
import FilterBloc from "./FilterBloc";

import Slick from "./Slick";
import Slider from "./Slick";
import TopWinner from "./TopWinner";

function JeuxP() {
  return (
    <>
      <Slick></Slick>
      <TopWinner></TopWinner>
      <div
        class="save_banner_height"
        style={{ height: "455px", position: "relative", zIndex: "-1" }}
        id="js_banner_height"
      ></div>
      <Bottom></Bottom>
    </>
  );
}
export default JeuxP;
