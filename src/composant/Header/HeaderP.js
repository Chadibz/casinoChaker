import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Account/Login";
import Langues from "./Langues";
import OutsideClickHandler from "react-outside-click-handler";
function HeaderP() {
  const [LangueV, setLangue] = useState(false);
  const [LoginV, setLogin] = useState(false);
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <div id="header_fix" class="tl_header_top_row">
      <div class="tl_header_top_row_fix flex">
        <div class="tl_logo ">
          <Link
            to="/"
            style={{
              backgroundImage:
                "url(https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/logo.svg)",
            }}
          ></Link>
        </div>
        <div class="tl_time flex">
          <span class="time">{Ctime}</span>
          <span class="zone">GMT+1</span>
        </div>
        <div class="tl_head_promos flex">
          <a
            href="/Promotions"
            class="tl_simple_link tl_simple_link-accent mr-2 d-flex align-items-center"
          >
            <i class="tl_ico-promotions tl_ico"></i>
            Promotions
          </a>
          <a
            href="http://www.fertoonacards.com/"
            class="main_titles"
            target="_blank"
            rel="noopener"
          >
            GRATAGE
          </a>
          <a
            href="http://fertoonanews.com/"
            class="main_titles"
            target="_blank"
            rel="noopener"
          >
            News
          </a>
          <a href="/Rules/fr" class="main_titles">
            Mentions Légales
          </a>
        </div>
        <div class="social_icons flex alCen jc">
          <a
            href="https://www.facebook.com/Fertoona-100553162132053"
            class="facebook"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/fertoonabet/?hl=tr"
            class="insta"
            target="_blank"
          ></a>
          <a
            href="https://www.youtube.com/channel/UC_mjClBD9Wwf-LPLx5NhTlQ"
            class="youtube"
            target="_blank"
          ></a>
        </div>
        <div class="tl_login_container flex">
          <div class="tl_logged_out flex">
            <a
              onClick={() => setLogin(true)}
              class="loginDialog tl_login_button ternBtn transBg"
              data-dialog-title="Login"
              data-href="/Login/Login"
              automation="home_login_button"
            >
              SE CONNECTER
            </a>
            <OutsideClickHandler
              onOutsideClick={() => {
                setLangue(false);
              }}
            >
              <div
                onClick={() => setLangue(!LangueV)}
                class="tl_drop_down tl_acc_lang d-flex tl_btn ternBtn"
              >
                <a
                  class="d-flex header__dropdown-menu align-items-center"
                  href="#"
                  data-toggle="dropdown"
                >
                  <span class="flex-shrink-0 langTxt langCode">fr</span>
                  <span class="flex-shrink-0 langTxt footerLangtxt">
                    Français
                  </span>
                  <span
                    class="flex-shrink-0 lang fr"
                    style={{
                      backgroundImage:
                        "url('https://cdn-plat.apidigi.com/plat/prd/Img/flags/mob_flags.png')",
                    }}
                  ></span>

                  <i class="dynamic_icon dynamic_icon-arrow"></i>
                </a>
                {LangueV && <Langues></Langues>}
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <Login Trigger={LoginV} setTrigger={setLogin}></Login>
    </div>
  );
}
export default HeaderP;
