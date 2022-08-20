function Langues() {
  return (
    <div
      class="links_container scrolled__content"
      id="LanguageBarSorting"
      style={{ display: "block" }}
    >
      <a class="tl_dropdown_style d-flex px-1 en" href="/en/ ">
        <span class="flex-grow-1 text-truncate text-left">English</span>
        <span
          class="flex-shrink-0 lang en"
          style={{
            backgroundImage:
              "url('https://cdn-plat.apidigi.com/plat/prd/Img/flags/mob_flags.png')",
          }}
        ></span>
      </a>
      <a class="tl_dropdown_style d-flex px-1 aeb" href="/aeb/ ">
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
  );
}
export default Langues;
