import { useState } from "react";
import Langues from "../Header/Langues";
import OutsideClickHandler from "react-outside-click-handler";
import AccountFix from "./AccountFix";
import Inbox from "./Inbox";

function Conecter() {
  const [LangueV, setLangue] = useState(false);
  const [Compte, setCompte] = useState(false);
  const [Inbox, setInbox] = useState(false);
  return (
    <div class="tl_login_container flex">
      <div class="tl_logged_in flex">
        <a
          onClick={() => setCompte(true)}
          class="transactionsDialog tl_deposit_button primBtn transBg"
          data-href="/Account/TransactionsHistory"
        >
          Transactions
        </a>

        <button
          onClick={() => setInbox(true)}
          data-href="/fr/Account/Inbox"
          class="tl_deposit_mail inboxDialog tern transBg transferDropdown"
        >
          <i class="tf_mail_icon dropdownColor"></i>
        </button>

        <div
          id="bonusBalanceCont"
          class="dropdown tl_acc_balance tern transBg transferDropdown hidden"
        >
          <a class="flex bonusesDialog" data-href="/Bonus/BonusHistory?scope=0">
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
          <a class="flex header__dropdown-menu" href="#" data-toggle="dropdown">
            <i class="tf_user_icon dropdownColor"></i>
            <div class="text dropdownColor">usertestb</div>
            <i class="tf_arrow_icon dropdownColor"></i>
          </a>
          <div class="links_container profile" style={{ display: "none" }}>
            <div>
              <a class="profileDialog flex" data-href="/Account/Profile1129">
                <span class="tal oe noshr width_part">Mon compte</span>
                <span class="tar oe noshr width_part">ID 4651973</span>
              </a>
            </div>

            <div>
              <a class="gamehystoryDialog oe" data-href="/Account/GameHistory">
                Games History
              </a>
            </div>
            <div>
              <a href="/Sport/SportAccount" class="oe">
                Histoire des paris sportifs
              </a>
            </div>
            <div>
              <a class="bonusesDialog oe" data-href="/Bonus/ClientBonusReport">
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
              <span class="flex-shrink-0 langTxt footerLangtxt">Français</span>
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

      <AccountFix Trigger={Compte} setTrigger={setCompte}></AccountFix>
      {Inbox && <Inbox></Inbox>}
    </div>
  );
}
export default Conecter;
