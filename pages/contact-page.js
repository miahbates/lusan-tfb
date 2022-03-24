import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

export default function Contact() {
  return (
    <div className="contact">
      {/* <Image src="/grow.jpg" alt="grow" width={200} height={200} /> */}
      <p>About Us</p>
      <a href="https://www.instagram.com/growlusan/">
        <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
      </a>
      <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
      <p>Contact</p>
      <a href="mailto:rachel@growlusan.com">
        <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
        <p>lusan@lusan.com</p>
      </a>
      <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
      <p>01903 765431</p>
    </div>
  );
}
