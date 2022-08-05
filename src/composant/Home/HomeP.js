import BannerP from "./BannerP";
import HomeContent from "./HomeContent";

function HomeP() {
  return (
    <>
      <BannerP></BannerP>
      <div
        class="save_banner_height"
        style={{ height: "455px", position: "relative", zIndex: "-1" }}
        id="js_banner_height"
      ></div>
      <HomeContent></HomeContent>
    </>
  );
}
export default HomeP;
