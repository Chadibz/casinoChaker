import { Link } from "react-router-dom";

function HeaderM() {
  return (
    <div class="casino_h_link_cont">
      <div class="tabs-box clr_sec">
        <ul class="casino_links_tabs">
          <li>
            <Link class="ui-link" to="/">
              <i class="home_icon"></i>
            </Link>
          </li>
          <li>
            <a class="sportversion ui-link" href="/Sport/ReactIndex">
              Sport
            </a>
          </li>
          <li>
            <a
              class="Livesportversion ui-link"
              href="/fr/Sport/ReactIndex#Live/page"
            >
              Paris Direct
            </a>
          </li>
          <li>
            <a class="ui-link" href="/Sport/Esportview">
              E-Sport
            </a>
          </li>
          <li>
            <a class="promoted ui-link" href="/Betongames?url=Cashshow">
              <span class="promoted">Cashow</span>
            </a>
          </li>
          <li>
            <Link class="ui-link" to="/Casino">
              JEUX
            </Link>
          </li>
          <li>
            <a class="ui-link" href="/fr/Lobby/Livecasino/Main">
              Live Casino
            </a>
          </li>
          <li>
            <a class="ui-link" href="/Virtualsports" automation="open_tvgames">
              SPORTS VIRTUELS
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('SkillGames','GetSkillGamesUrl');"
            >
              Fertoona Games
            </a>
          </li>
          <li>
            <a
              class="promoted ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','Blackjack');"
              automation="open_crash"
            >
              <span class="promoted">BlackJack</span>
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','Crash');"
              automation="open_crash"
            >
              Crash
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','RocketOn');"
              automation="open_rocketon"
            >
              Rocketon
            </a>
          </li>
          <li>
            <a
              class="promoted ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','HiLo');"
              automation="open_hilo"
            >
              <span class="promoted">Hi Lo</span>
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','Penalty');"
              automation="open_penalty"
            >
              Penalty
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','SicBo');"
              automation="open_sicbo"
            >
              Sic Bo
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl');"
              automation="open_keno"
            >
              Keno
            </a>
          </li>
          <li>
            <a
              class="ui-link"
              href="#"
              onclick="getGameUrl('Betongames','GetBetOnGamesUrl','KenoExpress');"
              automation="open_keno"
            >
              Keno Express
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HeaderM;
