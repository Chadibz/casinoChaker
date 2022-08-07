import "./App.css";
import HeaderP from "./composant/Header/HeaderP";

import "./style3.css";
import "./style2.css";
import "./style4.css";
import "./style1.css";
import "./style5.css";
import "./style6.css";
import "./Style7.css";

import SubHeader from "./composant/Header/SubHeader";
import HomeP from "./composant/Home/HomeP";
import FooterP from "./composant/Footer/FooterP";
import SportvirtuelBanner from "./composant/Sportvirtuel/SportvirtuelBanner";
import SportVirtuelContent from "./composant/Sportvirtuel/SportVirtuelContent";
import SportvirtuelP from "./composant/Sportvirtuel/SportvirtuelP";
import FentonaBanner from "./composant/Fentona/FentonaBanner";
import FentonaP from "./composant/Fentona/FentonaP";
import LiveCasinoP from "./composant/LiveCasino/LiveCasinoP";
import JeuxP from "./composant/Jeux/JeuxP";
import Login from "./composant/Account/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registre from "./composant/Account/Registre";
import Transaction from "./composant/Account/Transaction";
import Inbox from "./composant/Account/Inbox";
import MonCompte from "./composant/Account/MonCompte";
import BetHistory from "./composant/Account/BetHistory";
import Bonus from "./composant/Account/Bonus";
import AccountFix from "./composant/Account/AccountFix";
function App() {
  return (
    <BrowserRouter>
      <HeaderP></HeaderP>
      <SubHeader></SubHeader>

      <Routes>
        <Route path="/" element={<HomeP></HomeP>}></Route>
        <Route path="/Casino" element={<JeuxP></JeuxP>}></Route>
        <Route path="/LiveCasino" element={<LiveCasinoP></LiveCasinoP>}></Route>
        <Route
          path="/Virtualsports"
          element={<SportvirtuelP></SportvirtuelP>}
        ></Route>
        <Route path="/Sport"></Route>
        <Route path="/"></Route>
      </Routes>
      <FooterP></FooterP>
    </BrowserRouter>
  );
}

export default App;
