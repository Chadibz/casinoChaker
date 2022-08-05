function Landing({ img, url }) {
  return (
    <a class="tl_landing_banner" href={url} target="_blank">
      <div>
        <img src={img} />
      </div>
    </a>
  );
}
export default Landing;
