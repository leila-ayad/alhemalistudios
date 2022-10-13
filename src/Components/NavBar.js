import { useState } from "react";
import { Link } from "react-router-dom";
import {GrCaretDown } from "react-icons/gr"

export default function NavBar() {
  const [show, setShow] = useState(false);

  const showDropDown = () => {
    setShow(!show);
  };

  return (
    <div className="nav-container">
      <Link className="left-side-nav" to={"/"}>
        <h4>Leila Al-Hemali</h4>
        <h5>Clay & Coding</h5>
      </Link>
      <div className="right-side-nav">
        <Link className="nav-element" to={"info"}>
          Info
        </Link>
        <div className="drop-container">
          <button className="drop-button">
            {" "}
            <Link className="nav-element" to={"ceramics"}>
              Ceramics 
              <GrCaretDown className="nav-element"/>
            </Link>
          </button>
          <div className="drop-content">
            <Link className="nav-element" to={"trashkiln"}>
              Trash Kiln
            </Link>
            <Link className="nav-element" to={"openroadpottery"}>
              Open Road Pottery
            </Link>{" "}
          </div>
        </div>
        <div className="drop-container">
          <button className="drop-button">
            <Link className="nav-element" to={"programming"}>
              Programming
            </Link>
            <GrCaretDown className="nav-element"/>
          </button>
          <div className="drop-content">
            <Link className="nav-element" to={"materialslibrary"}>
              Materials Library
            </Link>
            <Link className="nav-element" to={"UbiSMART"}>
              UbiSMART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
