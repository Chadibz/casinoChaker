function SubHeaderM() {
  return (
    <div id="header" class="flex alCen bgMain" style={{ position: "static" }}>
      <a class="LinkToLeftPanel ui-link" href="#left-panel" title=""></a>
      <a
        class="LogoMobilePlatform  ui-link"
        href="/"
        style={{
          backgroundImage:
            "url(https://cdn-plat.apidigi.com/plat/prd/Img/mobile/partners/1129/logo.svg)",
        }}
      ></a>

      <div id="menu-right" class="flex alCen ns jb">
        <a href="#right-panel" class="platformMobLog btn_sec ns ui-link">
          SE CONNECTER
        </a>
      </div>
    </div>
  );
}
export default SubHeaderM;
