import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
    <p>Does the site deploy when I push changes?</p>
      <div className="project-container">
        <img
          className="square-image"
          src="https://live.staticflickr.com/65535/52421803649_83010f032d_z.jpg"
          width="640"
          height="640"
          alt="Leila checking the flame on the Trash Kiln"
        ></img>
        <Link className="project-title" to={"/trashkiln"}>
          <p className="project-link">Trash Kiln</p>
        </Link>
      </div>

      <div className="project-container">
        <img
          className="square-image"
          src="https://live.staticflickr.com/65535/52438679868_476b190650_z.jpg"
          width="640"
          height="640"
          alt="UbiSMART Home Page"
        ></img>
        <Link className="project-title" to={"/ubismart"}>
          <p className="project-link">UbiSMART</p>
        </Link>
      </div>

      <div className="project-container">
        <img
          className="square-image"
          src="https://live.staticflickr.com/65535/52437651407_a709ca0175_z.jpg"
          width="640"
          height="640"
          alt="Welcome to the Picnic sign-up form"
        ></img>
        <Link className="project-title" to={"/materialslibrary"}>
          <p className="project-link">Abstract Picnic Material's Library</p>
        </Link>
      </div>

      <div className="project-container">
        <img
          className="square-image"
          src="https://live.staticflickr.com/65535/52438103046_28eef9c655_z.jpg"
          width="640"
          height="640"
          alt="winetumblers"
        ></img>
        <Link className="project-title" to={"openroadpottery"}>
          <p className="project-link">Open Road Pottery</p>
        </Link>
      </div>
    </div>
  );
}