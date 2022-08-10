import { useState } from "react";
import { Link } from "react-router-dom";
import Langues from "../Header/Langues";
import Inbox from "./Inbox";
import OutsideClickHandler from "react-outside-click-handler";
import AccountFix from "./AccountFix";

function Conecter() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCime(time);
  };
  setInterval(UpdateTime, 1000);

  const [LangueV, setLangue] = useState(false);
  const [Compte, setCompte] = useState(false);
  const [Inbox, setInbox] = useState(false);
  return (
    <div id="header_fix" class="tl_header_top_row">
      <div class="tl_header_top_row_fix flex">
        <div class="tl_login_container flex">
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
          <div class="tl_logged_in flex">
            <button
              onClick={() => setCompte(true)}
              class="transactionsDialog tl_deposit_button primBtn transBg"
              data-href="/Account/TransactionsHistory"
            >
              Transactions
            </button>

            <a
              onClick={() => setInbox(true)}
              data-href="/fr/Account/Inbox"
              class="tl_deposit_mail inboxDialog tern transBg transferDropdown"
            >
              <i class="tf_mail_icon dropdownColor"></i>
            </a>

            <div
              id="bonusBalanceCont"
              class="dropdown tl_acc_balance tern transBg transferDropdown hidden"
            >
              <a
                class="flex bonusesDialog"
                data-href="/Bonus/BonusHistory?scope=0"
              >
                <i class="bonus_balance_icon dropdownColor"></i>
                <div class="text dropdownColor" id="lblBonusBalance">
                  0.00
                </div>
                <div class="bonus_balance_currency dropdownColor">TND</div>
              </a>
            </div>
            <div class="dropdown tl_acc_balance tern transBg transferDropdown">
              <a
                class="flex transactionsDialog"
                data-href="/fr/Account/TransactionsHistory"
              >
                <i class="tf_wallet_icon dropdownColor"></i>
                <div class="text dropdownColor" id="lblBalance">
                  10.00 TND
                </div>
              </a>
            </div>
            <div class="dropdown tl_acc_userid flex tern transBg transferDropdown">
              <a
                class="flex header__dropdown-menu"
                href="#"
                data-toggle="dropdown"
              >
                <i class="tf_user_icon dropdownColor"></i>
                <div class="text dropdownColor">usertestb</div>
                <i class="tf_arrow_icon dropdownColor"></i>
              </a>
              <div class="links_container profile" style={{ display: "none" }}>
                <div>
                  <a
                    class="profileDialog flex"
                    data-href="/Account/Profile1129"
                  >
                    <span class="tal oe noshr width_part">Mon compte</span>
                    <span class="tar oe noshr width_part">ID 4651973</span>
                  </a>
                </div>

                <div>
                  <a
                    class="gamehystoryDialog oe"
                    data-href="/Account/GameHistory"
                  >
                    Games History
                  </a>
                </div>
                <div>
                  <a href="/Sport/SportAccount" class="oe">
                    Histoire des paris sportifs
                  </a>
                </div>
                <div>
                  <a
                    class="bonusesDialog oe"
                    data-href="/Bonus/ClientBonusReport"
                  >
                    Bonus
                  </a>
                </div>
                <div>
                  <a
                    class="transactionsDialog oe"
                    data-href="/Account/TransactionsHistory"
                  >
                    Transactions
                  </a>
                </div>
                <div>
                  <a
                    class="passwchangeDialog oe"
                    data-href="/Account/ResetPassword"
                  >
                    Changer le mot de passe
                  </a>
                </div>
                <div>
                  <a class="oe" href="/Account/LogOut">
                    Se déconnecter
                  </a>
                </div>
              </div>
            </div>

            <OutsideClickHandler
              onOutsideClick={() => {
                setLangue(false);
              }}
            >
              <div
                onClick={() => setLangue(!LangueV)}
                class="tl_drop_down tl_acc_lang d-flex tl_btn ternBtn"
              >
                <i
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
                </i>
                {LangueV && <Langues></Langues>}
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <AccountFix Trigger={Compte} setTrigger={setCompte}></AccountFix>
    </div>
  );
}
export default Conecter;
