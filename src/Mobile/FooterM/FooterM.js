function FooterM() {
  return (
    <div id="footer" class="bgMain">
      <div class="footer_cont ">
        <div class="phone_lang_cont flex alCen">
          <div class="drop_down_lang_arrow">
            <span class="drop_down_lang__front_el">Français</span>
            <select
              onchange="window.location.href = this.value"
              data-role="none"
              class="drop_down_lang"
              id="LanguageBarSortingMob"
            >
              <option value="/en/" class="en">
                English
              </option>
              <option value="/fr/" selected="" hidden="" class="fr">
                Français
              </option>
              <option value="/aeb/" class="aeb">
                تونسي
              </option>
            </select>
          </div>
        </div>
        <div class="social_icons flex alCen jc">
          <a
            href="https://www.youtube.com/channel/UC_mjClBD9Wwf-LPLx5NhTlQ"
            target="_blank"
            rel="noopener"
            class="youtube ui-link"
          ></a>
          <a
            href="https://www.facebook.com/fertoonabet.tn/"
            target="_blank"
            rel="noopener"
            class="facebook ui-link"
          ></a>
          <a
            href="https://www.instagram.com/fertoonabet/?hl=trl"
            target="_blank"
            rel="noopener"
            class="insta ui-link"
          ></a>
        </div>
        <a class="desktop ui-link" href="/Mobile/IsMobile?IsMobile=false">
          <div class="toWeb btn_sec">Web Version</div>
        </a>

        <div class="footer_download_btn_wrapper">
          <a
            href="https://mp.hevbnnb.org/android/pwapp/apk/pwapp-fcasino.apk"
            class="footer_download_btn ui-link"
            download=""
          >
            download now
          </a>
        </div>

        <div class="footer-text">
          Le jeu peut être addictif. Jouez avec prudence! Fertoonabet.tn est
          exploité par FAT EVENT sarl, une société qui fonctionne sous
          l'autorisation du gouvernement tunisien. Une société de droit tunisien
          inscrite au registre de commerce et de matricule fiscal numéro
          -16581125X
        </div>

        <div class="copy">
          <div class="plus18Icon"></div>
          <span class="partner_color">FERTOONABET</span> © 2022 Tous droits
          réservés
        </div>

        <div class="toTopBox to_top_icon"> </div>
      </div>
    </div>
  );
}
export default FooterM;
