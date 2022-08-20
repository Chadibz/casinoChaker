function Icon({ url, img, name }) {
  return (
    <a href={url} class="tl_landing_nav_big">
      <img src={img} />
      <p class="nav_title">{name}</p>
    </a>
  );
}
export default Icon;
