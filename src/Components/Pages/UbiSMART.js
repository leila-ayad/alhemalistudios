export default function UbiSMART() {
  return (
    <div className="project-container">
      <h1>UbiSMART</h1>
      <div className="project-text-container">
        <p className="project-text">
          This app is a Python/React sales tool for UbiQD Inc. The app models
          the sun's light spectra then displays the projected benefit the user
          will experience in their greenhouse after being passed through a light
          filter.
          <br></br>
          <br></br>
          View the tool on the{" "}
          <a href="https://ubismart.vercel.app/">UbiQD website.</a>
        </p>
      </div>
      <img
        className="square-image"
        src="https://live.staticflickr.com/65535/52438679868_476b190650_z.jpg"
        width="640"
        height="640"
        alt="Home page for UbiSMART"
      ></img>
      <img
        className="square-image"
        src="https://live.staticflickr.com/65535/52438613690_f1d244202e_z.jpg"
        width="640"
        height="640"
        alt="Screenshot of results page showing Seasonal Spectral Change Graph"
      ></img>
      <img
        className="square-image"
        src="https://live.staticflickr.com/65535/52438157171_cba95f1370_z.jpg"
        width="640"
        height="640"
        alt="Screenshot of greenhouse comparison chart"
      ></img>
    </div>
  );
}
