import { useEffect, useRef, useState } from "react";
import BetHistory from "./BetHistory";
import Bonus from "./Bonus";
import OutsideClickHandler from "react-outside-click-handler";

import Transaction from "./Transaction";
import { render } from "@testing-library/react";
import MonCompte from "./MonCompte";

function AccountFix() {
  const [buttonP, setButton] = useState("MonCompte");

  const ConditionalView = (buttonP) => {
    if (buttonP === "Transaction") {
      return <Transaction></Transaction>;
    }
    if (buttonP === "Bonus") {
      return <Bonus></Bonus>;
    }
    if (buttonP === "BetHistory") {
      return <BetHistory></BetHistory>;
    }
    if (buttonP === "MonCompte") {
      return <MonCompte></MonCompte>;
    }
  };

  return (
    <div
      tabindex="-1"
      role="dialog"
      style={{
        height: "auto",
        width: "1280px",
        top: "3px",
        left: "0px",
        display: "block",
        zIndex: "101",
        maxHeight: "603px",
        maxWidth: "1280px",
      }}
      class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front tl_popup_dialog"
      aria-describedby="accountDialog"
      aria-labelledby="ui-id-2"
    >
      <div
        class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"
        style={{
          height: "0px",
          padding: "0px",
          background: "none",
          border: "0px",
        }}
      >
        <span id="ui-id-2" class="ui-dialog-title" style={{ display: "none" }}>
          &nbsp;
        </span>

        <button
          type="button"
          class="ui-dialog-titlebar-close"
          style={{ display: "none" }}
        ></button>
      </div>
      <div
        class="tl_my_acc_cont flex ui-dialog-content ui-widget-content resizedH resizedW"
        id="accountDialog"
        style={{
          width: "auto",
          minHeight: "0px",
          maxHeight: "none",
          height: "89px",
          overflow: "auto",
        }}
      >
        <div class="tl_my_acc_cont_nav">
          <a
            onClick={() => setButton("MonCompte")}
            class="tl_my_acc_nav_item active"
            data-href="/fr/Account/Profile1129"
            id="profile_tab"
          >
            Mon compte
          </a>
          <a
            onClick={() => setButton("BetHistory")}
            class="tl_my_acc_nav_item"
            data-href="/fr/Account/GameHistory"
            id="history_tab"
          >
            Bet History
          </a>
          <a class="tl_my_acc_nav_itemsp" href="/Sport/SportAccount">
            Histoire des paris sportifs
          </a>
          <a
            onClick={() => setButton("Bonus")}
            class="tl_my_acc_nav_item"
            data-href="/fr/Bonus/ClientBonusReport"
            id="bonuses_tab"
          >
            Bonus
          </a>
          <a
            onClick={() => setButton("Transaction")}
            class="tl_my_acc_nav_item"
            data-href="/fr/Account/TransactionsHistory?typeTransac=2"
            id="transactions_tab"
          >
            Transactions
          </a>
        </div>

        {ConditionalView(buttonP)}
      </div>
    </div>
  );
}
export default AccountFix;
