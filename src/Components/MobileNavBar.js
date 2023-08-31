import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="mobile-nav">
      {open === true ? (
        <div className="mobile-nav-open">
          <div className="close-icon">
            <AiOutlineClose onClick={toggleOpen} />
          </div>
          <Link className="nav-section" to={"info"} onClick={toggleOpen}>
            Info
          </Link>
          <div>
            <Link className="nav-section" to={"/"} onClick={toggleOpen}>
              Projects
            </Link>
            <div className="nav-links">
            <Link className="nav-link" to={"urchinware"} onClick={toggleOpen}>
                Urchinware
              </Link>
              <Link className="nav-link" to={"trashkiln"} onClick={toggleOpen}>
                Trash Kiln
              </Link>
              <Link
                className="nav-link"
                to={"openroadpottery"}
                onClick={toggleOpen}
              >
                Open Road Pottery
              </Link>
              <Link
                className="nav-link"
                to={"materialslibrary"}
                onClick={toggleOpen}
              >
                Materials Library
              </Link>
              <Link className="nav-link" to={"UbiSMART"} onClick={toggleOpen}>
                UbiSMART
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-nav-closed">
          <Link className="left-side-nav" to={"/"}>
            <h4>Leila Al-Hemali</h4>
            <h5>Clay & Coding</h5>
          </Link>
          <div className="right-side-nav">
            <GiHamburgerMenu size={30} onClick={toggleOpen} />
          </div>
        </div>
      )}
    </div>
  );
}
