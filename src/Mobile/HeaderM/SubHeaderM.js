import { useDispatch } from "react-redux";
import { SET_NAV_USER_CHANGE } from "../../redux/actions/types";

function SubHeaderM() {
  const dispatch = useDispatch();
  return (
    <div id="header" class="flex alCen bgMain" style={{ position: "static" }}>
      <a class="LinkToLeftPanel ui-link" href="#left-panel" title=""></a>
      <a
        class="LogoMobilePlatform  ui-link"
        href="/"
        style={{
          backgroundImage:
            "url(https://cdn-plat.apidigi.com/plat/prd/Img/mobile/partners/1129/logo.svg)",
        }}
      ></a>

      <div id="menu-right" class="flex alCen ns jb">
        <a
          onClick={() => dispatch({ type: SET_NAV_USER_CHANGE })}
          class="platformMobLog btn_sec ns ui-link"
        >
          SE CONNECTER
        </a>
      </div>
    </div>
  );
}
export default SubHeaderM;
