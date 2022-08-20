function LeftPanel() {
  return (
    <div
      id="left-panel"
      class="panel bgMain  ui-panel ui-panel-position-left ui-panel-display-push ui-panel-closed ui-body-b ui-panel-animate"
      data-position="left"
      data-role="panel"
      data-display="push"
      data-theme="b"
      data-dismissible="true"
    >
      <div class="ui-panel-inner">
        <div class="lm__container flex flexCol">
          <div class="lm__blocks flex jb">
            <a
              class="lm__block lm_support flex flexCol jc alCen ui-link"
              href="#"
              onclick="parent.LC_API.open_chat_window()"
            >
              24/7 Support
            </a>
            <a
              class="lm__block lm_promo flex flexCol jc alCen ui-link"
              href="/promotions"
            >
              Promotions
            </a>
          </div>

          <div class="lm__links">
            <ul class="lm__links_block">
              <li class="lm_link">
                <a class="lm_home ui-link" href="/">
                  Home
                </a>
              </li>
              <li class="lm_link">
                <a class="lm_rules ui-link" href="/Rules/fr">
                  Mentions Légales
                </a>
              </li>
              <li class="lm_link">
                <a class="lm_promo ui-link" href="http://fertoonanews.com/">
                  News
                </a>
              </li>
              <li class="lm_link">
                <a class="ui-link" href="http://www.fertoonacards.com/">
                  GRATAGE
                </a>
              </li>
            </ul>

            <h3 class="lm__title">Sport</h3>

            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="lm_sports sportversion ui-link"
                  href="/Sport/ReactIndex"
                  automation="open_sport"
                >
                  Sport
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_live Livesportversion ui-link"
                  href="/fr/Sport/ReactIndex#Live/page"
                  automation="open_sport_live"
                >
                  Paris Direct
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_esports ui-link"
                  href="/Sport/esportview"
                  automation="open_esports"
                >
                  E-Sport
                </a>
              </li>
            </ul>
            <h3 class="lm__title">Casino</h3>
            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="lm_slots ui-link"
                  href="/fr/Lobby/Casino/Main"
                  automation="open_casino"
                >
                  JEUX
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_liveCs ui-link"
                  href="/fr/Lobby/Livecasino/Main"
                  automation="open_casino"
                >
                  Live Casino
                </a>
              </li>
            </ul>

            <h3 class="lm__title">Bet on Games</h3>
            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="lm_cashShow promoted ui-link"
                  href="/Betongames?url=Cashshow"
                  automation="open_keno"
                >
                  Cashow
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_keno ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl');"
                  automation="open_keno"
                >
                  Keno
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_blackjack promoted ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl', 'Blackjack');"
                  automation="open_keno"
                >
                  BlackJack
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_keno ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','KenoExpress');"
                  automation="open_keno"
                >
                  Keno Express
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_crash ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','Crash');"
                  automation="open_crash"
                >
                  Crash
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_hilo promoted ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','HiLo');"
                  automation="open_hilo"
                >
                  Hi Lo
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_sicbo ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','SicBo');"
                  automation="open_sicbo"
                >
                  Sic Bo
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_rocketon ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','RocketOn');"
                  automation="open_rocketon"
                >
                  Rocketon
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_penalty promoted ui-link"
                  href="#"
                  onclick="getGameUrl('Betongames','GetBetOnGamesUrl','Penalty');"
                  automation="open_penalty"
                >
                  Penalty
                </a>
              </li>
            </ul>

            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="fast_games_ic ui-link"
                  href="/fr/Lobby/Virtualsport/Main"
                  automation="open_tvgames"
                >
                  SPORTS VIRTUELS
                </a>
              </li>
            </ul>

            <h3 class="lm__title">TV Games</h3>
            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="lm_tvgames ui-link"
                  href="/GetSpecificGames?url=Lucky7"
                  automation="open_tvgames"
                >
                  Bet Games TV{" "}
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_tvgames ui-link"
                  href="/TvBet"
                  automation="open_tvgames"
                >
                  TVBet
                </a>
              </li>
              <li class="lm_link">
                <a
                  class="lm_liveCs ui-link"
                  href="#"
                  onclick="getGameUrl('GetSpecificGames','GetSpGameUrl','tombalalobby');"
                  automation="open_tombala"
                >
                  Tombala
                </a>
              </li>
            </ul>

            <ul class="lm__links_block">
              <li class="lm_link">
                <a
                  class="lm_skillgames ui-link"
                  href="#"
                  onclick="getGameUrl('SkillGames','GetSkillGamesUrl');"
                >
                  Fertoona Games
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftPanel;
