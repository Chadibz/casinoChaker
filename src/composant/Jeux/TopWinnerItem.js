function TopWinnerItem({ id, img, name, prix, date, like }) {
  return (
    <div class="top_winners__game flex alCen">
      <div class="top_winners__img">
        <a
          class="top_winners__img_link 222 js_dl_play"
          data-href="/fr/play/real/Crazy-Time-Evolution-Shared-Livecasino"
          tabindex="0"
        >
          <img src={img} alt="Crazy Time" class="js_top_winners_img" />
        </a>
      </div>
      <div class="top_winners__text">
        <div class="top_winners__date ">{id}</div>
        <div class="top_winners__value text-primary">
          <span class="top_winners__value_split">{prix}</span>{" "}
          <span class="">TND</span>
        </div>
        <div class="top_winners__bet">{date}</div>
      </div>
    </div>
  );
}

export default TopWinnerItem;
