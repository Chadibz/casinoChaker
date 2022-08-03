function FooterP() {
  return (
    <div class="tl_footer_BG" id="js_footer">
      <div class="tl_footer_container">
        <div class="tl_line_between flex">
          <a class="tl_btn toMobile" href="/Mobile/IsMobile?IsMobile=true">
            <i class="tl_icon_mobile"></i>
            <span>Mobile version</span>
          </a>
          <div class="footer_change_language">
            <div class="tl_drop_down tl_acc_lang d-flex tl_btn ternBtn">
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
                      "url('https://cdn-plat.apidigi.com/plat/prd/Img/flags/mob_flags.png",
                  }}
                ></span>

                <i class="dynamic_icon dynamic_icon-arrow"></i>
              </a>
              <div
                class="links_container scrolled__content"
                id="LanguageBarSorting"
              >
                <a
                  class="tl_dropdown_style d-flex px-1 en"
                  href="/en/lobby/casino/main "
                >
                  <span class="flex-grow-1 text-truncate text-left">
                    English
                  </span>
                  <span
                    class="flex-shrink-0 lang en"
                    style={{
                      backgroundImage:
                        "url('https://cdn-plat.apidigi.com/plat/prd/Img/flags/mob_flags.png')",
                    }}
                  ></span>
                </a>
                <a
                  class="tl_dropdown_style d-flex px-1 aeb"
                  href="/aeb/lobby/casino/main "
                >
                  <span class="flex-grow-1 text-truncate text-left">تونسي</span>
                  <span
                    class="flex-shrink-0 lang aeb"
                    style={{
                      backgroundImage:
                        "url('https://cdn-plat.apidigi.com/plat/prd/Img/flags/mob_flags.png')",
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="tl_footer_links d-flex justify-content-between flex ">
          <div class="tl_footer_links_row">
            <h1>Bets</h1>
            <a href="/Sport">Sport</a>
            <a href="/Sport/Live">Live</a>
            <a href="/Sport/Esportview">E-Sports Bets</a>
          </div>
          <div class="tl_footer_links_row">
            <h1>Promotions</h1>
            <a href="/Promotions">Welcome Bonus</a>
            <a href="/Promotions">Cashout</a>
            <a href="/Promotions">Multi Bonus</a>
          </div>
          <div class="tl_footer_links_row">
            <h1>Support</h1>
            <a href="/Rules/fr/13871" target="_blank">
              Conditions générales
            </a>
            <a href="/Rules/fr/13874" target="_blank">
              Politique de confidentialité
            </a>
            <a href="/Rules/fr/13877" target="_blank">
              AML &amp; KYC Policies
            </a>
            <a href="/Rules/fr/13880" target="_blank">
              Jeu responsable
            </a>
            <a href="/Rules/fr/13883" target="_blank">
              FAQ
            </a>
          </div>
        </div>
        <div class="footer_download_btn_wrapper">
          <a
            href="https://mp.hevbnnb.org/android/pwapp/apk/pwapp-fcasino.apk"
            class="footer_download_btn"
            download=""
          >
            download now
          </a>
        </div>
        <div class="footer-text tl_line_between">
          Le jeu peut être addictif. Jouez avec prudence! Fertoonabet.tn est
          exploité par FAT EVENT sarl, une société qui fonctionne sous
          l'autorisation du gouvernement tunisien. Une société de droit tunisien
          inscrite au registre de commerce et de matricule fiscal numéro
          -16581125X
        </div>
        <div class="iconsFoot">
          <div class="copy">
            <div class="plus18Icon"></div>
            <span class="partner_color">FERTOONABET</span> © 2022 Tous droits
            réservés
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterP;
