import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="social-media-container">
      <a
        href={"https://www.linkedin.com/in/leila-ayad/"}
        className="social-media-logo"
      >
        {" "}
        <BsLinkedin size={30}></BsLinkedin>
      </a>
      <a
        href={"https://www.instagram.com/alhemalistudios/"}
        className="social-media-logo"
      >
        <BsInstagram size={30}></BsInstagram>
      </a>
    </div>
  );
}
