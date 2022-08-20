import "./App.css";

import "./Style7.css";

import "./style9.css";

import "./style12.css";
import "./style10.css";
import "./style13.css";
import "./style11.css";
import "./style8.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitGames } from "./redux/actions/Games";
import { getinitcasino } from "./redux/actions/Providers";
import HeaderM from "./Mobile/HeaderM/HeaderM";
import SubHeaderM from "./Mobile/HeaderM/SubHeaderM";
import Menu from "./Mobile/Menu/Menu";
import Banner from "./Mobile/Home/Banner";
import Wrap from "./Mobile/Home/Wrap";
import HomeMp from "./Mobile/Home/HomeMp";
import FooterM from "./Mobile/FooterM/FooterM";
import JeuxMP from "./Mobile/JeuxM/JeuxMP";
import IdentifierM from "./Mobile/AccountM/IdentifierM";
import LeftPanel from "./Mobile/Menu/LeftPanel";
import { SET_NAV_USER_CHANGE } from "./redux/actions/types";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitGames());
    dispatch(getinitcasino());
  }, []);

  const { opendnavlogin } = useSelector((state) => state.general);

  return (
    <>
      <div
        id="wrapper"
        data-role="page"
        data-theme="d"
        style={{ overflow: "hidden" }}
        class="wrapper ui-page ui-page-theme-d ui-page-active"
        data-url="wrapper"
        tabindex="0"
      >
        {" "}
        <div id="overlay" class="hidden"></div>
        <BrowserRouter>
          <div
            class={
              opendnavlogin
                ? "ui-panel-wrapper ui-panel-animate ui-panel-page-content-position-right ui-panel-page-content-display-push ui-panel-page-content-open"
                : "ui-panel-wrapper"
            }
          >
            <div data-role="content" class="ui-content" role="main">
              <HeaderM></HeaderM>
              <SubHeaderM></SubHeaderM>{" "}
              <Routes>
                <Route path="/" element={<HomeMp></HomeMp>}></Route>
                <Route path="/Casino" element={<JeuxMP></JeuxMP>}></Route>
              </Routes>
              <FooterM></FooterM>
            </div>
          </div>
          <IdentifierM></IdentifierM>
          <LeftPanel></LeftPanel>
        </BrowserRouter>
      </div>
      <div
        onClick={() => dispatch({ type: SET_NAV_USER_CHANGE })}
        class={
          opendnavlogin
            ? "ui-panel-dismiss ui-panel-dismiss-position-right ui-panel-dismiss-display-push ui-panel-dismiss-open"
            : "ui-panel-dismiss"
        }
      ></div>
    </>
  );
}

export default App;
