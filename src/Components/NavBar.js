import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="nav-container">
      <Link className="left-side-nav" to={"/"}>
        <h4>Leila Al-Hemali</h4>
        <h5>Clay & Coding</h5>
      </Link>
      <div className="right-side-nav">
        <div className="drop-container">
          <button className="drop-button">
            <Link className="nav-link" to={"info"}>
              Info
            </Link>
          </button>
          <div className="drop-content">
            <div className="nav-link">
            </div>
            <div className="nav-link">
            </div>{" "}
          </div>
        </div>

        <div className="drop-container">
          <button className="drop-button">
            {" "}
            <p className="nav-link">
              Ceramics
            </p>
          </button>
          <div className="drop-content">
            <Link className="nav-link" to={"trashkiln"}>
              Trash Kiln
            </Link>
            <Link className="nav-link" to={"openroadpottery"}>
              Open Road Pottery
            </Link>{" "}
          </div>
        </div>
        <div className="drop-container">
          <button className="drop-button">
            <p className="nav-link">
              Programming
            </p>
            {/* <GrCaretDown className="nav-link" /> */}
          </button>
          <div className="drop-content">
            <Link className="nav-link" to={"materialslibrary"}>
              Materials Library
            </Link>
            <Link className="nav-link" to={"UbiSMART"}>
              UbiSMART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
