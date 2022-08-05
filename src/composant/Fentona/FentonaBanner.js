function FentonaBanner() {
  return (
    <header class="header">
      <div class="header-inner container">
        <nav class="navbar">
          <ul class="nav">
            <li class="nav-item">
              <a
                aria-current="page"
                class="nav-link active"
                href="/games?PartnerId=8821EB13130C700842172EF0FD872C08&amp;lang=fr&amp;IsMobileLogin=False&amp;currency=TND&amp;gameKindId=skillgames_desktop"
              >
                Games
              </a>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-rules"
            aria-label=""
            data-tooltip=""
          >
            <span class="text-truncate-flex">Rules</span>
          </button>
        </nav>
        <div class="d-flex align-items-center"></div>
      </div>
    </header>
  );
}
export default FentonaBanner;
